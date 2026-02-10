# DreamTeam Backend API

Node.js/Express backend API for DreamTeam fantasy sports platform.

## Prerequisites

- Node.js (v16 or higher)
- PostgreSQL (v13 or higher)
- npm or yarn

## Installation

1. Install dependencies:
```bash
npm install
# or
yarn install
```

2. Set up environment variables:
Copy `.env.example` to `.env` and fill in your values:
```bash
cp .env.example .env
```

3. Set up the database:
```bash
# Generate Prisma client
npm run prisma:generate

# Run migrations
npm run prisma:migrate

# (Optional) Open Prisma Studio to view/edit data
npm run prisma:studio
```

## Running the Server

### Development Mode
```bash
npm run dev
```

### Production Mode
```bash
# Build
npm run build

# Start
npm start
```

The server will start on `http://localhost:3000`

## API Endpoints

### Health Check
- `GET /health` - Server health check

### Authentication
- `POST /api/auth/google` - Login with Google
- `GET /api/auth/me` - Get current user (protected)

### Matches
- `GET /api/matches` - Get all matches
- `GET /api/matches/:id` - Get match details
- `GET /api/matches/:id/players` - Get match players

### Users
- `GET /api/users/profile` - Get user profile (protected)

## Project Structure

```
backend/
├── src/
│   ├── controllers/     # Request handlers
│   ├── routes/          # API routes
│   ├── middleware/      # Custom middleware
│   ├── services/        # Business logic
│   ├── config/          # Configuration files
│   ├── utils/           # Utility functions
│   └── types/           # TypeScript types
├── prisma/
│   └── schema.prisma    # Database schema
├── server.ts            # Entry point
├── package.json         # Dependencies
└── tsconfig.json        # TypeScript config
```

## Tech Stack

- Node.js
- Express.js
- TypeScript
- Prisma ORM
- PostgreSQL
- Firebase Admin SDK
- JWT Authentication

## Database Schema

The application uses Prisma ORM with PostgreSQL. Key models:
- User
- Match
- Player
- Contest
- Team
- TeamPlayer
- ContestEntry
- Transaction
- Prize

See `prisma/schema.prisma` for full schema details.

## Authentication

The API uses Firebase Authentication with JWT tokens. Protected routes require a Bearer token in the Authorization header:

```
Authorization: Bearer <firebase-id-token>
```

## Development

### Linting
```bash
npm run lint
```

### Testing
```bash
npm test
```

## License

Proprietary - All rights reserved
