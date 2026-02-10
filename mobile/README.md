# DreamTeam Mobile App

React Native mobile application for DreamTeam fantasy sports platform.

## Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- Expo CLI
- For iOS: Xcode (Mac only)
- For Android: Android Studio
- Firebase account
- Google Cloud Console access

## Firebase & Google OAuth Setup

### Quick Setup Guide

1. **Create Firebase Project**
   - Visit [Firebase Console](https://console.firebase.google.com/)
   - Create a new project or select existing
   - Enable Google Authentication in Authentication → Sign-in method

2. **Configure Mobile Apps**

   **For Android:**
   - Add Android app in Firebase Project Settings
   - Package name: `com.dreamteammobile`
   - Get debug SHA-1: `cd android && ./gradlew signingReport`
   - Download `google-services.json` → place in `android/app/`

   **For iOS:**
   - Add iOS app in Firebase Project Settings
   - Bundle ID: `com.dreamteammobile`
   - Download `GoogleService-Info.plist` → place in `ios/DreamTeamMobile/`

3. **Get OAuth Credentials**
   - Go to [Google Cloud Console](https://console.cloud.google.com/)
   - Select your Firebase project
   - Navigate to APIs & Services → Credentials
   - Copy the **Web client ID** (Type: Web application)

## Installation

1. Install dependencies:
```bash
npm install
# or
yarn install
```

2. Set up environment variables:

Create a `.env` file in the mobile directory (copy from `.env.example`):
```bash
cp .env.example .env
```

3. Configure your `.env` file:
```bash
# API Configuration
API_BASE_URL=http://localhost:3000

# Google OAuth - Get from Google Cloud Console
GOOGLE_WEB_CLIENT_ID=your-web-client-id.apps.googleusercontent.com

# Firebase Configuration - Get from Firebase Project Settings
FIREBASE_API_KEY=your-firebase-api-key
FIREBASE_AUTH_DOMAIN=your-project-id.firebaseapp.com
FIREBASE_PROJECT_ID=your-project-id
FIREBASE_STORAGE_BUCKET=your-project-id.appspot.com
FIREBASE_MESSAGING_SENDER_ID=your-sender-id
FIREBASE_APP_ID=your-app-id
```

## Running the App

### Development Mode

Start the Expo development server:
```bash
npm start
# or
yarn start
```

### iOS
```bash
npm run ios
# or
yarn ios
```

### Android
```bash
npm run android
# or
yarn android
```

### Web
```bash
npm run web
# or
yarn web
```

## Authentication Flow

### User Journey

1. **Splash Screen** (2 seconds)
   - Shows app branding
   - Checks authentication state
   - Navigates to appropriate screen

2. **Onboarding** (First-time users)
   - Screen 1: Choose Your Match - Match selection intro
   - Screen 2: Build Your Dream Team - Team building features
   - Screen 3: Join Contests & Win - Contest types and prizes
   - Can be skipped
   - Shown only once (stored in AsyncStorage)

3. **Login Screen**
   - "Continue with Google" button
   - Initiates Google Sign-In flow
   - Handles authentication errors

4. **Main App** (Authenticated users)
   - Direct access to dashboard
   - Full app functionality

### Testing Authentication

#### Using Test Accounts

1. Create a test Google account for development
2. Sign in through the app
3. Backend should receive Google ID token
4. User data stored in Redux and AsyncStorage

#### Manual Testing Checklist

- [ ] Splash screen displays for 2 seconds
- [ ] First-time users see onboarding screens
- [ ] Onboarding can be skipped
- [ ] "Continue with Google" initiates sign-in
- [ ] Successful login navigates to dashboard
- [ ] Failed login shows error message
- [ ] Returning users skip onboarding
- [ ] Authenticated users remain logged in after app restart
- [ ] Logout clears authentication state

### Troubleshooting

**Android Issues:**
- **"Developer Error"**: SHA-1 certificate not added to Firebase
  ```bash
  cd android && ./gradlew signingReport
  # Add SHA-1 from 'debug' variant to Firebase Console
  ```
- **"Sign-in cancelled"**: Google Play Services not available
  - Use physical device or emulator with Google Play
  
**iOS Issues:**
- **"Sign-in failed"**: Bundle ID mismatch
  - Check `ios/DreamTeamMobile/Info.plist`
  - Verify bundle ID matches Firebase configuration
- **URL scheme error**: Ensure `GoogleService-Info.plist` is properly added

**General Issues:**
- **Network error**: Backend not running
  - Start backend: `cd backend && npm run dev`
  - Check API_BASE_URL in `.env`
- **"GOOGLE_WEB_CLIENT_ID not configured"**: 
  - Update `.env` with correct Web client ID
  - Restart Expo dev server
  - Clear cache: `expo start -c`

## Project Structure

```
mobile/
├── src/
│   ├── components/      # Reusable UI components
│   ├── screens/         # Screen components
│   │   ├── auth/        # Authentication screens
│   │   │   ├── SplashScreen.tsx
│   │   │   ├── OnboardingScreen.tsx
│   │   │   └── LoginScreen.tsx
│   │   ├── home/        # Home screens
│   │   └── match/       # Match screens
│   ├── navigation/      # Navigation configuration
│   │   ├── RootNavigator.tsx
│   │   ├── AuthNavigator.tsx
│   │   └── MainNavigator.tsx
│   ├── redux/           # State management
│   │   ├── store.ts
│   │   └── slices/
│   │       ├── authSlice.ts
│   │       ├── matchSlice.ts
│   │       └── userSlice.ts
│   ├── services/        # API services
│   │   ├── api.ts
│   │   ├── auth.service.ts
│   │   └── googleAuth.service.ts
│   ├── utils/           # Utility functions
│   ├── hooks/           # Custom React hooks
│   │   └── useAuth.ts
│   ├── theme/           # Theme configuration
│   └── types/           # TypeScript type definitions
├── App.tsx              # Root component
├── package.json         # Dependencies
├── .env                 # Environment variables (create from .env.example)
├── .env.example         # Environment template
└── tsconfig.json        # TypeScript configuration
```

## Features

- 🔐 Google OAuth authentication
- 🏏 Browse cricket matches
- 👥 Create fantasy teams
- 🏆 Join contests
- 💰 Manage wallet
- 📊 Live scoring
- 🎯 User statistics

## Tech Stack

- React Native
- TypeScript
- Redux Toolkit
- React Navigation
- Axios
- Firebase Auth
- Expo

## Code Style

This project uses ESLint and Prettier for code formatting. Run:
```bash
npm run lint
```

## Testing

Run tests:
```bash
npm test
```

## Building for Production

### iOS
```bash
expo build:ios
```

### Android
```bash
expo build:android
```

## Environment

- Development: Uses mock data and localhost API
- Production: Connects to production API

## License

Proprietary - All rights reserved
