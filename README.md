# DreamTeam - Fantasy Sports Platform

A comprehensive fantasy sports mobile application targeting the New Zealand market, starting with cricket. Built with React Native, Node.js, and PostgreSQL.

## 🎯 Project Overview

DreamTeam is a Dream11-style fantasy sports platform designed specifically for New Zealand sports enthusiasts. Users can create fantasy cricket teams, join contests, and compete for real cash prizes.

### Key Features

- 🔐 **Google OAuth Authentication** - Secure, seamless login
- 🏏 **Cricket Matches** - Upcoming, live, and completed matches
- 👥 **Team Builder** - Create fantasy teams with credit system
- 🏆 **Multiple Contest Types** - Mega, small league, head-to-head, and practice contests
- 💰 **Real Money Prizes** - Secure wallet and transactions
- 📊 **Live Scoring** - Real-time match updates and leaderboards
- 📱 **Mobile First** - Optimized React Native experience

## 🏗️ Project Structure

```
DreamTeam/
├── mobile/              # React Native mobile app
│   ├── src/
│   │   ├── components/  # Reusable UI components
│   │   ├── screens/     # Screen components
│   │   ├── navigation/  # Navigation setup
│   │   ├── redux/       # State management
│   │   ├── services/    # API services
│   │   ├── utils/       # Utilities and helpers
│   │   ├── hooks/       # Custom React hooks
│   │   ├── theme/       # Design system
│   │   └── types/       # TypeScript definitions
│   └── App.tsx          # Root component
│
├── backend/             # Node.js/Express API
│   ├── src/
│   │   ├── controllers/ # Request handlers
│   │   ├── routes/      # API routes
│   │   ├── middleware/  # Custom middleware
│   │   ├── services/    # Business logic
│   │   ├── config/      # Configuration
│   │   └── types/       # TypeScript definitions
│   ├── prisma/          # Database schema
│   └── server.ts        # Entry point
│
├── mock-data/           # Mock/seed data
│   ├── matches.json
│   ├── players.json
│   ├── contests.json
│   └── users.json
│
└── docs/                # Documentation
    ├── DESIGN_SYSTEM.md
    ├── API.md
    ├── WIREFRAMES.md
    └── DATABASE_SCHEMA.md
```

## 🚀 Getting Started

### Prerequisites

- Node.js 16+
- PostgreSQL 13+
- npm or yarn
- Expo CLI (for mobile)
- Firebase account (for authentication)

### Mobile App Setup

1. Navigate to the mobile directory:
```bash
cd mobile
```

2. Install dependencies:
```bash
npm install
```

3. Create `.env` file:
```bash
API_BASE_URL=http://localhost:3000
GOOGLE_WEB_CLIENT_ID=your-google-web-client-id
```

4. Start the development server:
```bash
npm start
```

5. Run on iOS or Android:
```bash
npm run ios
# or
npm run android
```

See [mobile/README.md](mobile/README.md) for detailed instructions.

### Backend Setup

1. Navigate to the backend directory:
```bash
cd backend
```

2. Install dependencies:
```bash
npm install
```

3. Create `.env` file (copy from `.env.example`):
```bash
cp .env.example .env
```

4. Configure environment variables in `.env`:
```
PORT=3000
DATABASE_URL="postgresql://user:password@localhost:5432/dreamteam"
FIREBASE_PROJECT_ID=your-project-id
FIREBASE_CLIENT_EMAIL=your-client-email
FIREBASE_PRIVATE_KEY="your-private-key"
```

5. Set up database:
```bash
# Generate Prisma client
npm run prisma:generate

# Run migrations
npm run prisma:migrate
```

6. Start the development server:
```bash
npm run dev
```

See [backend/README.md](backend/README.md) for detailed instructions.

## 📚 Documentation

- **[Design System](docs/DESIGN_SYSTEM.md)** - Complete design specifications, colors, typography, components
- **[API Documentation](docs/API.md)** - REST API endpoints and examples
- **[Wireframes](docs/WIREFRAMES.md)** - Text-based wireframes for all screens
- **[Database Schema](docs/DATABASE_SCHEMA.md)** - Database structure and relationships

## 🎨 Design System

### Color Palette

- **Primary (DreamTeam Green)**: `#00C853`
- **Secondary (Night Blue)**: `#0D1B2A`
- **Accent (Gold)**: `#FFC107`

### Tech Stack

**Mobile:**
- React Native
- TypeScript
- Redux Toolkit
- React Navigation
- Expo
- Axios

**Backend:**
- Node.js
- Express
- TypeScript
- Prisma ORM
- PostgreSQL
- Firebase Admin

**Authentication:**
- Firebase Auth
- Google OAuth

## 🧪 Testing

### Mobile
```bash
cd mobile
npm test
```

### Backend
```bash
cd backend
npm test
```

## 🔧 Development Workflow

1. **Create Feature Branch**
```bash
git checkout -b feature/your-feature-name
```

2. **Make Changes**
- Follow TypeScript best practices
- Use existing components and utilities
- Add comments for complex logic

3. **Test Locally**
- Run linters
- Test on iOS/Android simulators
- Verify API endpoints

4. **Commit Changes**
```bash
git add .
git commit -m "feat: add feature description"
```

5. **Push and Create PR**
```bash
git push origin feature/your-feature-name
```

## 📦 Building for Production

### Mobile

**iOS:**
```bash
cd mobile
expo build:ios
```

**Android:**
```bash
cd mobile
expo build:android
```

### Backend

```bash
cd backend
npm run build
npm start
```

## 🌍 Deployment

### Mobile Apps
- **iOS**: Submit to Apple App Store
- **Android**: Submit to Google Play Store

### Backend API
- **Recommended**: Deploy to cloud platforms (AWS, Google Cloud, Heroku)
- **Database**: Managed PostgreSQL instance
- **Environment**: Set production environment variables

## 🔐 Security

- OAuth 2.0 authentication via Firebase
- JWT tokens for API authorization
- HTTPS only in production
- Input validation and sanitization
- Rate limiting on API endpoints
- Regular security audits

## 📊 Mock Data

The `mock-data/` directory contains sample data for development and testing:

- **matches.json** - 10 cricket matches with NZ teams
- **players.json** - 30+ players with realistic stats
- **contests.json** - Various contest types and prize structures
- **users.json** - Test user accounts

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

### Code Style

- Use TypeScript for type safety
- Follow ESLint configuration
- Use Prettier for formatting
- Write meaningful commit messages
- Add comments for complex logic

## 📝 License

Proprietary - All rights reserved

## 👥 Team

- **Product**: DreamTeam Product Team
- **Design**: DreamTeam Design Team
- **Backend**: DreamTeam Backend Team
- **Mobile**: DreamTeam Mobile Team

## 📧 Contact

For questions or support:
- Email: support@dreamteam.co.nz
- Website: https://dreamteam.co.nz

## 🗺️ Roadmap

### Phase 1 (Current)
- ✅ Mobile app foundation
- ✅ Backend API structure
- ✅ Authentication system
- ✅ Basic team building
- ✅ Contest system

### Phase 2 (Q2 2026)
- [ ] Live scoring integration
- [ ] Payment gateway integration
- [ ] Push notifications
- [ ] Social features

### Phase 3 (Q3 2026)
- [ ] Multiple sports (Rugby, Football)
- [ ] Private leagues
- [ ] Advanced statistics
- [ ] Achievements system

### Phase 4 (Q4 2026)
- [ ] Web application
- [ ] Desktop apps
- [ ] API for third parties
- [ ] International expansion

## 🙏 Acknowledgments

- Firebase for authentication services
- Prisma for database ORM
- React Native community
- All open-source contributors

---

**Version**: 1.0.0  
**Last Updated**: February 2026  
**Status**: Initial Development  

Made with ❤️ in New Zealand 🇳🇿