# Input

The application receives user input primarily through an interactive TextInput component where the user enters their preferred course identifier. Touch inputs are captured when the student taps the "Access CityU Catalog" button, as well as vertical swipe gestures that control viewport scrolling across degree requirement categories within the ScrollView container.

# Process

The component processes user keystrokes using React's useState hook. Each keystroke triggers an onChangeText callback that updates the favoriteCourse state variable in memory. Conditional logic tests whether the state is non-empty to mount the confirmation banner. When the catalog button is pressed, the openCatalog event handler executes and calls React Native's Linking.openURL method to initiate external browser navigation.

# Output

The visual output displays the official application branding icon, structured lists of core requirements, depth of study, and capstone credits with highlighted headers, and a real-time message displaying the selected favorite course. Additionally, the external browser displays CityU's official degree catalog website.
