# CS624 - Practice Exercises: Mobile App Development

Repository containing Practice Exercises (PE) for **City University of Seattle's CS624 (Full-Stack Development - Mobile App)**.

---

## Directory Structure

```text
PE-CS624-RyanCasalino/
├── flake.nix                       # Nix flake devShell configuration
├── flake.lock                      # Nix flake dependency lock
├── Dockerfile.mongodb              # MongoDB container definition
├── PE01/                           # Practice Exercise 01: Hello World
│   ├── README.md                   # PE01 Documentation
│   └── HelloWorld/                 # Expo React Native mobile app
├── PE02/                           # Practice Exercise 02: Degree Requirements Explorer
│   ├── README.md                   # PE02 150-word Input-Process-Output Analysis Report
│   └── HelloWorld/                 # Expo React Native mobile app with full asset resolution
├── PE03 -> PE03-todos              # Symlink for PE03 navigation
└── PE03-todos/                     # Practice Exercise 03: todos Application
    ├── README.md                   # PE03 150-word Input-Process-Output Analysis Report
    ├── screenshots/                # Verification screenshots for PE03 Part 1
    ├── App.js                      # Root re-export of App container
    ├── Heading.js                  # Root re-export of Heading component
    ├── Input.js                    # Root re-export of Input component
    ├── Button.js                   # Root re-export of Button component
    └── src/app/                    # Core React Native / Expo application components
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

### [PE03: todos - Part 1](PE03-todos/README.md)
- Foundation of the multi-step "todos" application (Dabit, *React Native in Action*, Chapter 3).
- Modular architecture with stateless presentational components (`Heading.js`, `Input.js`, `Button.js`).
- Controlled `TextInput` with drop-shadow styling synchronized with container state.
- `submitTodo` function validating user input, incrementing `todoIndex`, creating new todo objects, updating the `todos` array, and resetting the input field.
- Comprehensive 150-word Input-Process-Output (IPO) model analysis report and verification screenshots.

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

# Run PE03
cd PE03-todos && npx expo start
```
