# DreamTeam API Documentation

## Base URL

**Development**: `http://localhost:3000`  
**Production**: `https://api.dreamteam.co.nz`

## Authentication

The API uses Firebase Authentication with JWT tokens. Protected endpoints require an `Authorization` header with a Bearer token.

### Header Format
```
Authorization: Bearer <firebase-id-token>
```

### Getting a Token
1. User authenticates via Google OAuth in the mobile app
2. Firebase returns an ID token
3. Include this token in all protected API requests

## Response Format

### Success Response
```json
{
  "success": true,
  "data": { ... }
}
```

### Error Response
```json
{
  "success": false,
  "error": "Error message"
}
```

## Endpoints

### Health Check

#### GET /health
Check if the server is running.

**Authentication**: None required

**Response**:
```json
{
  "success": true,
  "message": "Server is running",
  "timestamp": "2026-02-10T12:00:00.000Z"
}
```

---

## Authentication Endpoints

### POST /api/auth/google
Login or register user with Google OAuth.

**Authentication**: None required

**Request Body**:
```json
{
  "idToken": "firebase-id-token"
}
```

**Response** (200 OK):
```json
{
  "success": true,
  "data": {
    "user": {
      "id": "uuid",
      "googleId": "google-user-id",
      "email": "user@example.com",
      "name": "John Doe",
      "avatar": "https://...",
      "cashBalance": 100.00,
      "bonusBalance": 50.00,
      "level": 1,
      "xp": 0,
      "createdAt": "2026-02-10T12:00:00.000Z",
      "updatedAt": "2026-02-10T12:00:00.000Z"
    },
    "token": "firebase-id-token"
  }
}
```

**Errors**:
- 400: Missing or invalid ID token
- 500: Authentication failed

---

### GET /api/auth/me
Get current authenticated user information.

**Authentication**: Required

**Response** (200 OK):
```json
{
  "success": true,
  "data": {
    "id": "uuid",
    "googleId": "google-user-id",
    "email": "user@example.com",
    "name": "John Doe",
    "avatar": "https://...",
    "cashBalance": 250.50,
    "bonusBalance": 75.00,
    "level": 5,
    "xp": 1250,
    "createdAt": "2026-02-10T12:00:00.000Z",
    "updatedAt": "2026-02-10T12:00:00.000Z"
  }
}
```

**Errors**:
- 401: Unauthorized
- 500: Failed to get user

---

## Match Endpoints

### GET /api/matches
Get all matches with optional filters.

**Authentication**: None required

**Query Parameters**:
- `status` (optional): Filter by match status (`UPCOMING`, `LIVE`, `COMPLETED`)
- `format` (optional): Filter by match format (`T20`, `ODI`, `TEST`)

**Example**: `/api/matches?status=UPCOMING&format=T20`

**Response** (200 OK):
```json
{
  "success": true,
  "data": [
    {
      "id": "match-1",
      "homeTeam": "New Zealand",
      "awayTeam": "Australia",
      "homeTeamFlag": "🇳🇿",
      "awayTeamFlag": "🇦🇺",
      "venue": "Eden Park, Auckland",
      "startTime": "2026-02-15T14:00:00.000Z",
      "format": "T20",
      "series": "Trans-Tasman T20 Series",
      "status": "UPCOMING",
      "pitchReport": "Flat batting surface...",
      "weather": "Clear skies, 22°C",
      "contestCount": 125,
      "createdAt": "2026-02-10T12:00:00.000Z",
      "updatedAt": "2026-02-10T12:00:00.000Z"
    }
  ]
}
```

**Errors**:
- 500: Failed to fetch matches

---

### GET /api/matches/:id
Get details of a specific match.

**Authentication**: None required

**Path Parameters**:
- `id`: Match ID

**Response** (200 OK):
```json
{
  "success": true,
  "data": {
    "id": "match-1",
    "homeTeam": "New Zealand",
    "awayTeam": "Australia",
    "homeTeamFlag": "🇳🇿",
    "awayTeamFlag": "🇦🇺",
    "venue": "Eden Park, Auckland",
    "startTime": "2026-02-15T14:00:00.000Z",
    "format": "T20",
    "series": "Trans-Tasman T20 Series",
    "status": "UPCOMING",
    "pitchReport": "Flat batting surface expected...",
    "weather": "Clear skies, 22°C",
    "contestCount": 125,
    "createdAt": "2026-02-10T12:00:00.000Z",
    "updatedAt": "2026-02-10T12:00:00.000Z"
  }
}
```

**Errors**:
- 404: Match not found
- 500: Failed to fetch match

---

### GET /api/matches/:id/players
Get all players for a specific match.

**Authentication**: None required

**Path Parameters**:
- `id`: Match ID

**Response** (200 OK):
```json
{
  "success": true,
  "data": [
    {
      "id": "player-1",
      "name": "Kane Williamson",
      "team": "New Zealand",
      "role": "BATSMAN",
      "credits": 10.5,
      "points": 85,
      "image": null,
      "selectedBy": 78.5,
      "matchId": "match-1",
      "stats": {
        "recentScores": [65, 42, 88, 34, 71],
        "battingAverage": 52.3,
        "strikeRate": 138.5
      }
    }
  ]
}
```

**Errors**:
- 500: Failed to fetch players

---

## User Endpoints

### GET /api/users/profile
Get current user profile with statistics.

**Authentication**: Required

**Response** (200 OK):
```json
{
  "success": true,
  "data": {
    "id": "uuid",
    "googleId": "google-user-id",
    "email": "user@example.com",
    "name": "John Doe",
    "avatar": "https://...",
    "cashBalance": 250.50,
    "bonusBalance": 75.00,
    "level": 5,
    "xp": 1250,
    "createdAt": "2026-02-10T12:00:00.000Z",
    "updatedAt": "2026-02-10T12:00:00.000Z",
    "stats": {
      "activeTeams": 5,
      "liveContests": 3,
      "winRate": 68,
      "totalMatches": 45,
      "totalWinnings": 1850.00
    }
  }
}
```

**Errors**:
- 401: Unauthorized
- 404: User not found
- 500: Failed to fetch profile

---

## Error Codes

| Status Code | Description |
|------------|-------------|
| 200 | Success |
| 400 | Bad Request - Invalid input |
| 401 | Unauthorized - Authentication required |
| 403 | Forbidden - Insufficient permissions |
| 404 | Not Found - Resource doesn't exist |
| 500 | Internal Server Error |

## Rate Limiting

- **Development**: No rate limiting
- **Production**: 
  - Anonymous requests: 100 requests per 15 minutes
  - Authenticated requests: 500 requests per 15 minutes

## Pagination

Endpoints that return lists will support pagination in future versions:

```
?page=1&limit=20
```

Response will include:
```json
{
  "success": true,
  "data": [...],
  "pagination": {
    "page": 1,
    "limit": 20,
    "total": 100,
    "totalPages": 5
  }
}
```

## Webhooks (Future Feature)

Webhooks for real-time updates will be available in future versions:
- Match status changes
- Contest results
- Player performance updates

## SDK & Client Libraries

**Coming Soon**:
- JavaScript/TypeScript SDK
- Swift SDK (iOS)
- Kotlin SDK (Android)

## Development

### Running Locally

1. Clone the repository
2. Install dependencies: `npm install`
3. Set up environment variables in `.env`
4. Run migrations: `npm run prisma:migrate`
5. Start server: `npm run dev`

### Testing API

Use tools like:
- Postman
- Insomnia
- cURL

### Example cURL Request

```bash
# Get all matches
curl -X GET http://localhost:3000/api/matches

# Login with Google
curl -X POST http://localhost:3000/api/auth/google \
  -H "Content-Type: application/json" \
  -d '{"idToken": "your-firebase-token"}'

# Get profile (authenticated)
curl -X GET http://localhost:3000/api/users/profile \
  -H "Authorization: Bearer your-firebase-token"
```

## Support

For API support or questions:
- Email: api-support@dreamteam.co.nz
- Documentation: https://docs.dreamteam.co.nz
- Status Page: https://status.dreamteam.co.nz

---

**API Version**: 1.0  
**Last Updated**: February 2026  
**Maintained By**: DreamTeam Backend Team
