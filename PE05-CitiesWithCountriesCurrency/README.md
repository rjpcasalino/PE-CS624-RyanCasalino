# Input

The Cities with Countries and Currency application accepts user input through two controlled form screens integrated into a four-tab React Navigation bottom tab bar. On the `AddCity` tab, users enter a city name and country name into `TextInput` fields. On the `AddCountry` tab, users enter a country name and its corresponding currency. Users also provide navigation input by tapping tabs (`CitiesNav`, `AddCity`, `Countries`, `AddCountry`) and pressing the submission buttons.

# Process

The root `App` component manages `cities` and `countries` arrays with React's `useState` hook and passes state and updater callbacks (`addCity`, `addCountry`) as props to each screen. When a user submits `AddCountry`, the component validates that both fields are non-empty, generates a unique identifier using `react-native-uuid`, appends the new country-currency object to application state, clears the form fields, and programmatically navigates to the `Countries` tab.

# Output

The `Cities` and `Countries` tabs render scrollable lists of saved entries styled with the shared primary theme color. When a list is empty, the reusable `CenterMessage` component displays a placeholder prompt. After submitting a country, the `Countries` screen immediately displays each country alongside its currency.
