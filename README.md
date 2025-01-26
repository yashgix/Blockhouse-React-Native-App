# Blockhouse React Native Authentication App

## Project Overview
This React Native application provides a secure authentication system with login, signup, and home screens. The app utilizes Redux for state management and includes a comprehensive CI/CD pipeline.

## Key Features
- **Authentication**: Users can sign up with email and password, and log in to the app.
- **State Management**: App state, including authentication status and user data, is managed using Redux Toolkit.
- **Navigation**: Navigation implemented with React Navigation, with screens for Login, Signup, and Home.
- **CI/CD Pipeline**: GitHub Actions workflow for linting, testing, and building Android/iOS versions.

## Prerequisites
- Node.js (v18+)
- React Native CLI
- Xcode (for iOS) 
- Android Studio (for Android)

## Setup Instructions
1. Clone the repository:
   
   - git clone https://github.com/your-username/BlockhouseAuth.git
   - cd BlockhouseAuth
   
2. Install dependencies:
   
   - npm install
   
3. iOS setup (macOS):
   
   - cd ios
   - pod install
   - cd ..
   
4. Run the app:
   - iOS: `npx react-native run-ios`
   - Android: `npx react-native run-android`

## Project Structure
- `src/`
  - `screens/`: Contains the authentication (Login, Signup) and Home screens
  - `navigation/`: Handles the app navigation setup using React Navigation
  - `redux/`: Includes the Redux state management slices and store configuration
  - `theme/`: Defines the app-wide theme and global styles

- `.github/workflows/`: Contains the GitHub Actions CI/CD configuration

The key files and their responsibilities are:

- `src/screens/LoginScreen.js`: Implements the login functionality, including form handling and navigation.
- `src/screens/SignupScreen.js`: Handles the user signup process, with form validation and state management.
- `src/screens/HomeScreen.js`: Displays the main app interface after successful authentication, including the user email and logout functionality.

- `src/navigation/AppNavigator.js`: Sets up the navigation structure of the app, including the header customization.

- `src/redux/authSlice.js`: Defines the Redux slice for handling authentication-related state and actions.
- `src/redux/store.js`: Configures the Redux store with the authentication reducer.

- `src/theme/index.js`: Centralizes the app's theme and color palette.
- `src/theme/globalStyles.js`: Provides the reusable styles used across the app.

- `.github/workflows/react-native-ci.yml`: Contains the GitHub Actions workflow for linting, testing, and building the Android and iOS versions of the app.

## Available Scripts
- `npm run lint`: Run ESLint
- `npm test`: Run Jest tests
- `npm start`: Start Metro bundler

## CI/CD Pipeline
GitHub Actions workflow:
- Linting checks
- Running tests
- Building Android APK
- Building iOS IPA
- Uploading build artifacts

## Test Credentials
- Email: `test@example.com` 
- Password: `password123`

## Technologies Used
- React Native
- Redux Toolkit
- React Navigation
- Formik
- Yup
- GitHub Actions
- Android Studio (for Android development)
- Xcode (for iOS development)

## Limitations & Future Improvements
- Currently uses a mock authentication system (no real backend)
- Improvements that can be made:
  - Implement secure server-side authentication
  - Add password reset functionality
  - Enhance error handling and user feedback
  - Improve testing coverage
