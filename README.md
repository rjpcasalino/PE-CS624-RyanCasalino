# CS624 - Practice Exercises: Mobile App Development

Repository containing Practice Exercises (PE) for **City University of Seattle's CS624 (Full-Stack Development - Mobile App)**.

---

## Directory Structure

```text
PE-CS624/
├── flake.nix                       # Nix flake devShell configuration
├── flake.lock                      # Nix flake dependency lock
├── Dockerfile.mongodb              # MongoDB container definition
├── PE01/                           # Practice Exercise 01: Hello World
│   ├── README.md                   # PE01 Documentation
│   └── HelloWorld/                 # Expo React Native mobile app
└── PE02/                           # Practice Exercise 02: Degree Requirements Explorer
    ├── README.md                   # PE02 150-word Input-Process-Output Analysis Report
    └── HelloWorld/                 # Expo React Native mobile app with full asset resolution
```

---

## Exercises Included

### [PE01: Hello World](PE01/README.md)
- Displays student details (Name, MSCS, STC) centered on a yellow background using React Native core components (`<Text>`, `<View>`).

### [PE02: Course Explorer & Degree Requirements](PE02/README.md)
- Displays MSCS Degree Requirements (Core Requirements, Depth of Study, Capstone).
- Interactive `TextInput` to record and display favorite course with dynamic state feedback.
- Application branding icon resolved cleanly via `@/assets/images/icon.png`.
- Interactive button navigating to the official CityU academic catalog via React Native's `Linking` API.
- Comprehensive 150-word Input-Process-Output (IPO) model analysis report.

---

## Getting Started

### Using Nix Flake (Recommended)

From the root directory:

```bash
# Enter the isolated devShell
nix develop .

# Run PE01
cd PE01/HelloWorld && npx expo start

# Run PE02
cd PE02/HelloWorld && npx expo start
```
