# HOS05A: React Native Styling – Part I (`Styling`)

This Expo / React Native application implements **HOS05A: React Native Styling – Part I** (based on Nader Dabit's *React Native in Action*, Chapter 4). It explores component styling fundamentals in React Native, covering inline styles, `StyleSheet` objects, external stylesheet modularization, dynamic runtime styling (light and dark theme toggles), and building an actual presentational UI component: the **Profile Card**.

---

## Submission Verification Screenshots

| Screenshot | Description | Preview |
| :--- | :--- | :--- |
| [**`section04-OrganizingStyles.png`**](section04-OrganizingStyles.png) | **Section 4**: Externalizing component stylesheets (`styles.js`) with an interactive button (`TouchableHighlight`) and incrementing counter. | [![Section 04 Organizing Styles](section04-OrganizingStyles.png)](section04-OrganizingStyles.png) |
| [**`section05-LightTheme.png`**](section05-LightTheme.png) | **Section 5 (Light Theme)**: Dynamic stylesheet generation switching theme to light (`WHITE` background, black borders). | [![Section 05 Light Theme](section05-LightTheme.png)](section05-LightTheme.png) |
| [**`section05-DarkTheme.png`**](section05-DarkTheme.png) | **Section 5 (Dark Theme)**: Dynamic stylesheet generation switching theme to dark (`BLACK` background, white borders). | [![Section 05 Dark Theme](section05-DarkTheme.png)](section05-DarkTheme.png) |
| [**`section06-ProfileCardBorder.png`**](section06-ProfileCardBorder.png) | **Section 6**: Profile Card with border framing (`borderWidth`, `borderRadius: 20`, circular container `borderRadius: 60`) before layout adjustments. | [![Section 06 Profile Card Border](section06-ProfileCardBorder.png)](section06-ProfileCardBorder.png) |
| [**`section07-ProfileCardFinal.png`**](section07-ProfileCardFinal.png) | **Section 7**: Final Profile Card layout after applying `alignItems: 'center'`, `marginTop: 30`, and `paddingTop: 15`. | [![Section 07 Profile Card Final](section07-ProfileCardFinal.png)](section07-ProfileCardFinal.png) |

---

## Component & Section Breakdown

- **`App.js` / `src/app/App.js`**: The final deliverable for Section 7: a centered Profile Card (`dodgerblue` container with rounded corners) housing a circular avatar container and the user profile icon (`assets/images/user.png`), properly spaced via `alignItems: 'center'`, `marginTop: 30`, and `paddingTop: 15`.
- **`styles.js` / `src/app/styles.js`**: Demonstrates externalized and dynamic styling from Section 5 via `getStyleSheet(useDarkTheme)` returning computed style objects with light and dark color schemes.
- **`src/app/sections/Section04.js`**: Externalized stylesheet implementation featuring a primary action button and counter display.
- **`src/app/sections/Section05.js`**: Interactive theme toggle component responding to button taps by toggling `darkTheme` state and reapplying computed styles.
- **`src/app/sections/Section06.js`**: Framework and border properties exploration for the Profile Card prior to margin/padding adjustments.
- **`src/app/sections/Section07.js`**: Full implementation of the properly aligned Profile Card.
