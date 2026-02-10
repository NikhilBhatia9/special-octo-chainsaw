# DreamTeam Database Schema

## Overview

The DreamTeam application uses PostgreSQL as the primary database with Prisma ORM for type-safe database access. This document describes the complete database schema, relationships, and design decisions.

## Database Technology

- **Database**: PostgreSQL 13+
- **ORM**: Prisma 5.x
- **Migration Tool**: Prisma Migrate

## Entity Relationship Diagram (Text-Based)

```
┌──────────┐         ┌─────────┐         ┌──────────┐
│   User   │────────>│  Team   │<────────│  Match   │
└──────────┘         └─────────┘         └──────────┘
     │                    │                    │
     │                    │                    │
     v                    v                    v
┌──────────────┐    ┌────────────┐       ┌─────────┐
│ Transaction  │    │ TeamPlayer │<──────│ Player  │
└──────────────┘    └────────────┘       └─────────┘
     │                                         │
     │                                         │
     v                                         │
┌──────────────┐         ┌──────────┐        │
│ContestEntry  │────────>│ Contest  │<───────┘
└──────────────┘         └──────────┘
                              │
                              v
                         ┌────────┐
                         │ Prize  │
                         └────────┘
```

## Tables

### 1. User

Stores user account information and authentication details.

**Columns:**

| Column | Type | Constraints | Description |
|--------|------|-------------|-------------|
| id | UUID | PRIMARY KEY | Unique user identifier |
| googleId | String | UNIQUE, NOT NULL | Google OAuth ID |
| email | String | UNIQUE, NOT NULL | User email address |
| name | String | NOT NULL | User display name |
| avatar | String | NULLABLE | Profile picture URL |
| cashBalance | Float | DEFAULT 0 | Real money balance (NZD) |
| bonusBalance | Float | DEFAULT 0 | Promotional bonus balance |
| level | Integer | DEFAULT 1 | User experience level |
| xp | Integer | DEFAULT 0 | Experience points |
| createdAt | DateTime | DEFAULT now() | Account creation timestamp |
| updatedAt | DateTime | AUTO UPDATE | Last update timestamp |

**Relationships:**
- Has many Teams
- Has many ContestEntries
- Has many Transactions

**Indexes:**
- Primary key on `id`
- Unique index on `googleId`
- Unique index on `email`

**Business Rules:**
- cashBalance cannot be negative
- bonusBalance can be used for contest entry but not withdrawal
- level increases with XP milestones
- New users receive welcome bonus

---

### 2. Match

Stores cricket match information and status.

**Columns:**

| Column | Type | Constraints | Description |
|--------|------|-------------|-------------|
| id | UUID | PRIMARY KEY | Unique match identifier |
| homeTeam | String | NOT NULL | Home team name |
| awayTeam | String | NOT NULL | Away team name |
| homeTeamFlag | String | NOT NULL | Home team flag emoji |
| awayTeamFlag | String | NOT NULL | Away team flag emoji |
| venue | String | NOT NULL | Match venue |
| startTime | DateTime | NOT NULL | Match start time |
| format | String | NOT NULL | Match format (T20/ODI/TEST) |
| series | String | NOT NULL | Series name |
| status | String | DEFAULT 'UPCOMING' | Match status |
| pitchReport | String | NULLABLE | Pitch conditions |
| weather | String | NULLABLE | Weather forecast |
| createdAt | DateTime | DEFAULT now() | Record creation timestamp |
| updatedAt | DateTime | AUTO UPDATE | Last update timestamp |

**Relationships:**
- Has many Players
- Has many Contests
- Has many Teams

**Indexes:**
- Primary key on `id`
- Index on `status`
- Index on `startTime`

**Valid Values:**
- format: 'T20', 'ODI', 'TEST'
- status: 'UPCOMING', 'LIVE', 'COMPLETED'

---

### 3. Player

Stores player information for each match.

**Columns:**

| Column | Type | Constraints | Description |
|--------|------|-------------|-------------|
| id | UUID | PRIMARY KEY | Unique player identifier |
| name | String | NOT NULL | Player name |
| team | String | NOT NULL | Team name |
| role | String | NOT NULL | Player role |
| credits | Float | NOT NULL | Fantasy credit cost |
| points | Float | DEFAULT 0 | Points scored |
| image | String | NULLABLE | Player image URL |
| selectedBy | Float | DEFAULT 0 | Selection percentage |
| matchId | UUID | FOREIGN KEY | Related match |
| stats | JSON | NULLABLE | Player statistics |

**Relationships:**
- Belongs to Match
- Has many TeamPlayers

**Indexes:**
- Primary key on `id`
- Foreign key on `matchId`
- Index on `role`
- Index on `credits`

**Valid Values:**
- role: 'BATSMAN', 'BOWLER', 'ALL_ROUNDER', 'WICKET_KEEPER'
- credits: 7.0 to 11.0

**Stats JSON Structure:**
```json
{
  "recentScores": [45, 67, 23],
  "recentWickets": [2, 1, 3],
  "battingAverage": 42.5,
  "bowlingAverage": 24.8,
  "strikeRate": 145.3,
  "economy": 7.8
}
```

---

### 4. Contest

Stores contest information for matches.

**Columns:**

| Column | Type | Constraints | Description |
|--------|------|-------------|-------------|
| id | UUID | PRIMARY KEY | Unique contest identifier |
| name | String | NOT NULL | Contest name |
| matchId | UUID | FOREIGN KEY | Related match |
| entryFee | Float | NOT NULL | Entry fee (NZD) |
| prizePool | Float | NOT NULL | Total prize pool |
| totalSpots | Integer | NOT NULL | Maximum entries |
| spotsLeft | Integer | NOT NULL | Available spots |
| type | String | NOT NULL | Contest type |
| createdAt | DateTime | DEFAULT now() | Record creation timestamp |
| updatedAt | DateTime | AUTO UPDATE | Last update timestamp |

**Relationships:**
- Belongs to Match
- Has many ContestEntries
- Has many Prizes

**Indexes:**
- Primary key on `id`
- Foreign key on `matchId`
- Index on `type`

**Valid Values:**
- type: 'MEGA', 'SMALL', 'HEAD_TO_HEAD', 'PRACTICE'

---

### 5. Team

Stores user-created fantasy teams.

**Columns:**

| Column | Type | Constraints | Description |
|--------|------|-------------|-------------|
| id | UUID | PRIMARY KEY | Unique team identifier |
| userId | UUID | FOREIGN KEY | Team owner |
| matchId | UUID | FOREIGN KEY | Related match |
| name | String | NULLABLE | Team name |
| captainId | String | NULLABLE | Captain player ID |
| viceCaptainId | String | NULLABLE | Vice-captain player ID |
| totalCredits | Float | DEFAULT 0 | Credits used |
| totalPoints | Float | DEFAULT 0 | Points scored |
| createdAt | DateTime | DEFAULT now() | Record creation timestamp |
| updatedAt | DateTime | AUTO UPDATE | Last update timestamp |

**Relationships:**
- Belongs to User
- Belongs to Match
- Has many TeamPlayers
- Has many ContestEntries

**Indexes:**
- Primary key on `id`
- Foreign key on `userId`
- Foreign key on `matchId`
- Composite index on `(userId, matchId)`

**Business Rules:**
- Must have exactly 11 players
- totalCredits cannot exceed 100
- Must have 1 captain and 1 vice-captain
- Captain points multiplied by 2x
- Vice-captain points multiplied by 1.5x

---

### 6. TeamPlayer

Junction table linking teams and players.

**Columns:**

| Column | Type | Constraints | Description |
|--------|------|-------------|-------------|
| id | UUID | PRIMARY KEY | Unique identifier |
| teamId | UUID | FOREIGN KEY | Related team |
| playerId | UUID | FOREIGN KEY | Related player |
| isCaptain | Boolean | DEFAULT false | Is team captain |
| isViceCaptain | Boolean | DEFAULT false | Is vice-captain |
| points | Float | DEFAULT 0 | Points earned |

**Relationships:**
- Belongs to Team
- Belongs to Player

**Indexes:**
- Primary key on `id`
- Foreign key on `teamId`
- Foreign key on `playerId`
- Unique composite index on `(teamId, playerId)`

**Business Rules:**
- One player per team can be captain
- One player per team can be vice-captain
- A player cannot be both captain and vice-captain

---

### 7. ContestEntry

Records of team entries in contests.

**Columns:**

| Column | Type | Constraints | Description |
|--------|------|-------------|-------------|
| id | UUID | PRIMARY KEY | Unique entry identifier |
| userId | UUID | FOREIGN KEY | User who entered |
| contestId | UUID | FOREIGN KEY | Related contest |
| teamId | UUID | FOREIGN KEY | Team entered |
| rank | Integer | NULLABLE | Final rank |
| points | Float | DEFAULT 0 | Points scored |
| winnings | Float | DEFAULT 0 | Prize won (NZD) |
| createdAt | DateTime | DEFAULT now() | Entry timestamp |

**Relationships:**
- Belongs to User
- Belongs to Contest
- Belongs to Team

**Indexes:**
- Primary key on `id`
- Foreign key on `userId`
- Foreign key on `contestId`
- Foreign key on `teamId`
- Unique composite index on `(userId, contestId, teamId)`
- Index on `rank`

---

### 8. Transaction

Records all financial transactions.

**Columns:**

| Column | Type | Constraints | Description |
|--------|------|-------------|-------------|
| id | UUID | PRIMARY KEY | Unique transaction identifier |
| userId | UUID | FOREIGN KEY | Related user |
| type | String | NOT NULL | Transaction type |
| amount | Float | NOT NULL | Transaction amount (NZD) |
| status | String | DEFAULT 'PENDING' | Transaction status |
| reference | String | NULLABLE | External reference |
| createdAt | DateTime | DEFAULT now() | Transaction timestamp |
| updatedAt | DateTime | AUTO UPDATE | Last update timestamp |

**Relationships:**
- Belongs to User

**Indexes:**
- Primary key on `id`
- Foreign key on `userId`
- Index on `type`
- Index on `status`
- Index on `createdAt`

**Valid Values:**
- type: 'DEPOSIT', 'WITHDRAWAL', 'CONTEST_ENTRY', 'PRIZE_WINNING', 'BONUS_CREDIT'
- status: 'PENDING', 'COMPLETED', 'FAILED'

---

### 9. Prize

Defines prize distribution for contests.

**Columns:**

| Column | Type | Constraints | Description |
|--------|------|-------------|-------------|
| id | UUID | PRIMARY KEY | Unique prize identifier |
| contestId | UUID | FOREIGN KEY | Related contest |
| rankFrom | Integer | NOT NULL | Starting rank |
| rankTo | Integer | NOT NULL | Ending rank |
| amount | Float | NOT NULL | Prize amount (NZD) |

**Relationships:**
- Belongs to Contest

**Indexes:**
- Primary key on `id`
- Foreign key on `contestId`
- Index on `rankFrom`

**Business Rules:**
- Ranks must be sequential
- Total prize amounts should match contest prizePool

---

## Relationships Summary

### One-to-Many Relationships
1. User → Teams
2. User → ContestEntries
3. User → Transactions
4. Match → Players
5. Match → Contests
6. Match → Teams
7. Contest → ContestEntries
8. Contest → Prizes
9. Team → TeamPlayers
10. Player → TeamPlayers

### Many-to-Many Relationships
1. User ↔ Contest (through ContestEntry)
2. Team ↔ Player (through TeamPlayer)

---

## Database Constraints

### Foreign Keys
All foreign key relationships enforce `ON DELETE CASCADE` to maintain referential integrity.

### Unique Constraints
- User: googleId, email
- TeamPlayer: (teamId, playerId)
- ContestEntry: (userId, contestId, teamId)

### Check Constraints (Application Level)
- User.cashBalance >= 0
- Team.totalCredits <= 100
- Contest.spotsLeft >= 0
- Contest.spotsLeft <= totalSpots

---

## Indexes Strategy

### Primary Indexes
- All tables have UUID primary keys

### Performance Indexes
- Match.status, Match.startTime (filtering live/upcoming matches)
- Player.role, Player.credits (team building queries)
- Contest.type (contest filtering)
- ContestEntry.rank (leaderboard queries)
- Transaction.createdAt (transaction history)

### Composite Indexes
- Team(userId, matchId) - User's teams for specific match
- TeamPlayer(teamId, playerId) - Prevent duplicate players

---

## Migration Strategy

### Development
```bash
npx prisma migrate dev --name description
```

### Production
```bash
npx prisma migrate deploy
```

### Rollback
Prisma doesn't support automatic rollback. Keep backup before production migrations.

---

## Seeding Data

For development and testing, use Prisma seed scripts:

```typescript
// prisma/seed.ts
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  // Create test users, matches, players, contests
}

main();
```

---

## Performance Considerations

### Query Optimization
1. Use `select` to fetch only needed fields
2. Use `include` judiciously for relations
3. Implement pagination for large datasets
4. Use database indexes for frequently queried fields

### Caching Strategy
- Cache match and player data (updates infrequently)
- Invalidate cache on match start/end
- Real-time updates for live scoring

### Scaling
- Connection pooling (Prisma handles this)
- Read replicas for read-heavy operations
- Partition large tables (future consideration)

---

## Backup and Recovery

### Backup Schedule
- **Daily**: Full database backup
- **Hourly**: Incremental backups during live matches
- **Retention**: 30 days

### Recovery Plan
1. Restore from latest backup
2. Apply transaction logs
3. Verify data integrity
4. Resume operations

---

## Security

### Data Protection
- Passwords not stored (OAuth only)
- Financial data encrypted at rest
- Sensitive fields (balance) access logged

### Access Control
- Application-level authorization
- Database user with limited privileges
- No direct database access from public internet

---

## Future Enhancements

### Planned Additions
1. **UserPreferences** table - Store app settings
2. **Notifications** table - Push notification tracking
3. **Referrals** table - Referral system
4. **Achievements** table - Gamification
5. **LeagueInvites** table - Private leagues

### Schema Versioning
- Document version: 1.0
- Last updated: February 2026
- Next review: Q3 2026

---

**Schema Version**: 1.0  
**Database**: PostgreSQL 13+  
**ORM**: Prisma 5.x  
**Maintained By**: DreamTeam Backend Team
