# DreamTeam Mobile App

React Native mobile application for DreamTeam fantasy sports platform.

## Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- Expo CLI
- For iOS: Xcode (Mac only)
- For Android: Android Studio

## Installation

1. Install dependencies:
```bash
npm install
# or
yarn install
```

2. Set up environment variables:
Create a `.env` file in the mobile directory:
```
API_BASE_URL=http://localhost:3000
GOOGLE_WEB_CLIENT_ID=your-google-web-client-id
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

## Project Structure

```
mobile/
├── src/
│   ├── components/      # Reusable UI components
│   ├── screens/         # Screen components
│   ├── navigation/      # Navigation configuration
│   ├── redux/           # State management
│   ├── services/        # API services
│   ├── utils/           # Utility functions
│   ├── hooks/           # Custom React hooks
│   ├── theme/           # Theme configuration
│   └── types/           # TypeScript type definitions
├── App.tsx              # Root component
├── package.json         # Dependencies
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
