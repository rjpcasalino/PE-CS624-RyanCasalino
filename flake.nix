{
  description = "MERN + Expo Fast Dev Environment";

  inputs = {
    nixpkgs.url = "github:nixos/nixpkgs/nixos-unstable";
    flake-utils.url = "github:numtide/flake-utils";
  };

  outputs = { self, nixpkgs, flake-utils, }: flake-utils.lib.eachDefaultSystem (system:
    let
      pkgs = nixpkgs.legacyPackages.${system};
    in {
      formatter = pkgs.nixfmt;

      devShells.default = pkgs.mkShellNoCC {
        packages = with pkgs; [ nodejs yarn docker-client ];

        shellHook = ''
          export npm_config_cache="$PWD/.npm-cache"
          export PATH="$PWD/node_modules/.bin:$PATH"

          echo "⚡ MERN + Expo Dev Environment"

          if ! docker info >/dev/null 2>&1; then
            echo "Error: Docker is not running or is inaccessible."
            echo "Start Docker Desktop or your system Docker daemon."
            exit 1
          fi

          IMAGE="merndev-mongodb:8"
          CONTAINER="merndev-mongodb"

          if ! docker image inspect "$IMAGE" >/dev/null 2>&1; then
            echo "Building MongoDB image..."
            docker build \
              --file "$PWD/Dockerfile.mongodb" \
              --tag "$IMAGE" \
              "$PWD" || exit 1
          fi

          if docker container inspect "$CONTAINER" >/dev/null 2>&1; then
            if [ "$(docker inspect --format '{{.State.Running}}' "$CONTAINER")" != "true" ]; then
              docker start "$CONTAINER" >/dev/null || exit 1
            fi
            echo "Reusing MongoDB container."
          else
            docker run --detach \
              --name "$CONTAINER" \
              --restart unless-stopped \
              --publish 127.0.0.1:27017:27017 \
              --volume merndev-mongodb-data:/data/db \
              "$IMAGE" >/dev/null || exit 1
            echo "Started MongoDB container."
          fi

          echo "MongoDB: mongodb://127.0.0.1:27017"
          echo "Node: $(node --version)"
          echo "Yarn: $(yarn --version)"
        '';
      };
    });
}
