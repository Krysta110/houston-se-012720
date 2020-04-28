# React Native

### What is React Native?
* to build mobile applications 
* same fundamental UI building blocks as regular iOS and Android apps
* JavaScript and React 
* Good thing for developers is that they can use almost the same concepts that are being used for building web applications
* React Native uses **RCTBridgeModule** to make a connection between native code and JavaScript code

### Pre-requisites: Setting Up Development Environment
* Nodejs
* Watchman: You will need the `homebrew` macOS package to install watchman: `brew install watchman`
* `npm install -g react-native-cli`
* check: `react-native --version`
* iphone/android simulator

### Create a react native app
* Boilerplates available:
    - create-react-native-app
    - react-native-starter-app
    - react-native-webpack-starter-kit
    - react-native-redux-starter-kit
    - ignite cli
    - expo cli
* `react-native init ToDoList`
* Checkout files
* Running the Application
    * Terminal-1: npm start
    * Terminal-2: `react-native run-ios` (`react-native run-ios --simulator="iPhone 8 Plus"`) / `react-native run-android`
* AppRegistry is the entry point to run a React Native application. App component or any other root component in the app should register by using `AppRegistry.registerComponent` such that the native system can load the bundle of the app and run the app by starting `AppRegistry.runApplication.

### Components
* View: Primarily used for styling and layout of children elements.
* Text: display text
* TextInput: for text input
* FlatList: to display list
* many more...

### Extra Reading:
https://reactnative.dev/docs/getting-started



