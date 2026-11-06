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
├── PE03-todos/                     # Practice Exercise 03: todos Application
│   ├── README.md                   # PE03 150-word Input-Process-Output Analysis Report
│   ├── screenshots/                # Verification screenshots for PE03 Part 1
│   ├── App.js                      # Root re-export of App container
│   ├── Heading.js                  # Root re-export of Heading component
│   ├── Input.js                    # Root re-export of Input component
│   ├── Button.js                   # Root re-export of Button component
│   └── src/app/                    # Core React Native / Expo application components
└── PE04/                           # Practice Exercise 04: Profile Cards
    ├── README.md                   # PE04 150-word Input-Process-Output Analysis Report
    ├── screenshots/                # Verification screenshots (Part 1 & Part 2)
    ├── Part1/                      # Part 1: Single Profile Card with Styled Text
    │   ├── App.js                  # Root re-export of App container
    │   ├── assets/                 # App icons and user avatar
    │   └── src/app/App.js          # Section 4.3 styled text component
    └── Part2/                      # Part 2: 6-Card Expandable Flexbox Gallery
        ├── App.js                  # Root re-export of App container
        ├── assets/                 # App icons and user avatar
        └── src/app/App.js          # Section 5.3 flexbox gallery with thumbnail toggles
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

### [PE04: Profile Cards - Parts 1 & 2](PE04/README.md)
- Built upon HOS05 styling foundation (Dabit, *React Native in Action*, Chapters 4 & 5).
- **Part 1**: Enriched Profile Card with styled text components (`cardName`, `cardOccupationContainer` with bottom underline, and `cardDescription` in italic) alongside cross-platform drop shadows and avatar framing.
- **Part 2**: Reorganized multi-card flexbox gallery displaying 6 profile cards in a responsive 3×2 grid layout (`flexDirection: 'row'`, `flexWrap: 'wrap'`).
- Interactive thumbnail-expansion mechanism toggling between miniature card thumbnail (`transform: [{ scale: 0.2 }]`) and full-sized detailed view (`300x400`) upon touch interaction.
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

# Run PE04 - Part 1 (Single Profile Card)
cd PE04/Part1 && npx expo start

# Run PE04 - Part 2 (6-Card Flexbox Gallery)
cd PE04/Part2 && npx expo start
```
