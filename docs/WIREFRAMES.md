# DreamTeam App Wireframes

This document contains text-based wireframes for all major screens in the DreamTeam mobile application.

---

## 1. Splash Screen

```
┌─────────────────────────┐
│                         │
│                         │
│         🏆              │
│                         │
│      DreamTeam          │
│                         │
│ Fantasy Sports for NZ   │
│                         │
│                         │
│         (...)           │
│      Loading...         │
│                         │
│                         │
└─────────────────────────┘
```

**Elements:**
- DreamTeam logo (trophy emoji)
- App name in large text
- Tagline
- Loading spinner
- Dark background (#0D1B2A)

---

## 2. Onboarding Screen (3 steps)

```
┌─────────────────────────┐
│                Skip  →  │
│                         │
│         🏏              │
│                         │
│  Choose Your Match      │
│                         │
│  Select from upcoming   │
│  cricket matches        │
│  featuring NZ teams     │
│                         │
│       ● ○ ○             │
│                         │
│   [    Next    ]        │
└─────────────────────────┘
```

**Step 1: Choose Your Match**
- Cricket emoji
- Title and description
- Pagination dots (3 dots)
- Next button

**Step 2: Build Your Dream Team**
- Star emoji ⭐
- Instructions for team building
- Same layout

**Step 3: Join Contests & Win**
- Trophy emoji 🏆
- Contest information
- "Get Started" button

---

## 3. Login Screen

```
┌─────────────────────────┐
│                         │
│         🏆              │
│                         │
│      DreamTeam          │
│                         │
│ Fantasy Sports for      │
│    New Zealand          │
│                         │
│   ⚡ Create unlimited    │
│      teams              │
│                         │
│   💰 Win real cash       │
│      prizes             │
│                         │
│   🔒 100% safe &         │
│      secure             │
│                         │
│ [Continue with Google]  │
│                         │
│ By continuing, you      │
│ agree to our T&C        │
└─────────────────────────┘
```

**Elements:**
- Logo and branding
- Feature highlights
- Google sign-in button
- Terms disclaimer

---

## 4. Home Dashboard

```
┌─────────────────────────┐
│ Welcome back,           │
│ John Doe           [👤] │
│                         │
│ ┌─────────────────────┐ │
│ │ Available Balance   │ │
│ │     $325.50         │ │
│ │ Cash: $250 Bonus:$75│ │
│ └─────────────────────┘ │
│                         │
│ ┌───┐ ┌───┐ ┌───┐      │
│ │ 5 │ │ 3 │ │68%│      │
│ │Act│ │Liv│ │Win│      │
│ └───┘ └───┘ └───┘      │
│                         │
│ Featured Match          │
│ ┌─────────────────────┐ │
│ │ NZ 🇳🇿 vs 🇦🇺 AUS   │ │
│ │ Eden Park • T20     │ │
│ │ Tomorrow 2:00 PM    │ │
│ │ 125 Contests   [→]  │ │
│ └─────────────────────┘ │
│                         │
│ Upcoming Matches        │
│ ┌─────────────────────┐ │
│ │ Match 2...          │ │
│ └─────────────────────┘ │
│                         │
│ [🏠] [🏏] [🏆] [👤]     │
└─────────────────────────┘
```

**Sections:**
1. Header with user name and avatar
2. Balance card (green background)
3. Quick stats (3 cards)
4. Featured match card
5. Upcoming matches list
6. Bottom navigation

---

## 5. Match List Screen

```
┌─────────────────────────┐
│ ← Matches               │
│                         │
│ Live Matches            │
│ ┌─────────────────────┐ │
│ │ 🔴 LIVE             │ │
│ │ NZ 🇳🇿 VS 🇦🇺 AUS   │ │
│ │ Sky Stadium • T20   │ │
│ │ 134 Contests   [→]  │ │
│ └─────────────────────┘ │
│                         │
│ Upcoming Matches        │
│ ┌─────────────────────┐ │
│ │ Trans-Tasman T20    │ │
│ │ NZ 🇳🇿 VS 🇦🇺 AUS   │ │
│ │ Eden Park           │ │
│ │ Feb 15, 2:00 PM     │ │
│ │ 2h 30m | 125 Contests│ │
│ └─────────────────────┘ │
│ ┌─────────────────────┐ │
│ │ Match 2...          │ │
│ └─────────────────────┘ │
│                         │
│ Completed Matches       │
│ ┌─────────────────────┐ │
│ │ IND vs AUS          │ │
│ └─────────────────────┘ │
│                         │
│ [🏠] [🏏] [🏆] [👤]     │
└─────────────────────────┘
```

**Sections:**
- Live matches (with LIVE badge)
- Upcoming matches
- Completed matches
- Each match card shows teams, venue, time, contests

---

## 6. Match Detail Screen

```
┌─────────────────────────┐
│ ← Match Details         │
│                         │
│  NZ 🇳🇿 VS 🇦🇺 AUS      │
│  Eden Park, Auckland    │
│  Feb 15, 2026 2:00 PM   │
│       2h 30m left       │
│                         │
│ ┌─────────────────────┐ │
│ │ Pitch Report        │ │
│ │ Flat batting surface│ │
│ │ good for stroke play│ │
│ └─────────────────────┘ │
│                         │
│ ┌─────────────────────┐ │
│ │ Weather             │ │
│ │ Clear skies, 22°C   │ │
│ └─────────────────────┘ │
│                         │
│ Wicket Keepers (4)      │
│ ┌─────────────────────┐ │
│ │ [👤] Devon Conway   │ │
│ │ NZ • WK             │ │
│ │ 72pts  Sel:65%  9.5CR│ │
│ └─────────────────────┘ │
│                         │
│ Batsmen (12)            │
│ ┌─────────────────────┐ │
│ │ [👤] Kane Williamson│ │
│ │ NZ • BAT            │ │
│ │ 85pts  Sel:78% 10.5CR│ │
│ └─────────────────────┘ │
│                         │
│   [  Create Team  ]     │
└─────────────────────────┘
```

**Elements:**
- Match header with teams and details
- Time remaining
- Pitch report card
- Weather card
- Players grouped by role
- Player cards with stats
- Create Team button (fixed at bottom)

---

## 7. Team Builder Screen

```
┌─────────────────────────┐
│ ← Build Team            │
│                         │
│ [WK] [BAT] [AR] [BOW]   │
│                         │
│ ┌─────────────────────┐ │
│ │ Credits: 85.5/100   │ │
│ │ Players: 8/11       │ │
│ │ ████████░░░         │ │
│ └─────────────────────┘ │
│                         │
│ Selected Players        │
│                         │
│ ┌─────────────────────┐ │
│ │ ⭐ Captain          │ │
│ │ K. Williamson  10.5 │ │
│ └─────────────────────┘ │
│ ┌─────────────────────┐ │
│ │ ⭐ Vice-Captain     │ │
│ │ T. Boult       10.0 │ │
│ └─────────────────────┘ │
│                         │
│ Available Players       │
│ ┌─────────────────────┐ │
│ │ [+] M. Santner  9.0 │ │
│ └─────────────────────┘ │
│ ┌─────────────────────┐ │
│ │ [+] G. Maxwell  9.0 │ │
│ └─────────────────────┘ │
│                         │
│   [  Next: Contests ]   │
└─────────────────────────┘
```

**Elements:**
- Role filter tabs
- Credit and player count tracker
- Progress bar
- Selected players (with captain/vice-captain)
- Available players list
- Add/remove buttons
- Next button

---

## 8. Contest List Screen

```
┌─────────────────────────┐
│ ← Join Contests         │
│                         │
│ NZ vs AUS • Eden Park   │
│                         │
│ ┌─────────────────────┐ │
│ │ Mega Contest        │ │
│ │ MEGA                │ │
│ │ Prize: $150,000     │ │
│ │ ████████░░ 3245 left│ │
│ │ Entry: $20     [→]  │ │
│ └─────────────────────┘ │
│                         │
│ ┌─────────────────────┐ │
│ │ Small League        │ │
│ │ SMALL               │ │
│ │ Prize: $4,500       │ │
│ │ ████████░░ 24 left  │ │
│ │ Entry: $50     [→]  │ │
│ └─────────────────────┘ │
│                         │
│ ┌─────────────────────┐ │
│ │ Head to Head        │ │
│ │ H2H                 │ │
│ │ Prize: $180         │ │
│ │ █████░░░░░ 1 left   │ │
│ │ Entry: $100    [→]  │ │
│ └─────────────────────┘ │
│                         │
│ ┌─────────────────────┐ │
│ │ Practice Contest    │ │
│ │ FREE           [→]  │ │
│ └─────────────────────┘ │
└─────────────────────────┘
```

**Elements:**
- Match info at top
- Contest cards with:
  - Name and type
  - Prize pool
  - Spots progress bar
  - Entry fee
  - Arrow to join

---

## 9. Contest Detail Screen

```
┌─────────────────────────┐
│ ← Mega Contest          │
│                         │
│ ┌─────────────────────┐ │
│ │  Prize Pool         │ │
│ │   $150,000          │ │
│ │                     │ │
│ │ Entry: $20          │ │
│ │ Spots: 10000        │ │
│ │ Winners: 1500       │ │
│ └─────────────────────┘ │
│                         │
│ Prize Breakdown         │
│ ┌─────────────────────┐ │
│ │ #1      $25,000     │ │
│ │ #2      $15,000     │ │
│ │ #3      $10,000     │ │
│ │ #4-5    $5,000      │ │
│ │ #6-10   $2,000      │ │
│ │ #11-50  $500        │ │
│ │ #51-100 $200        │ │
│ │ ...more             │ │
│ └─────────────────────┘ │
│                         │
│   [   Join Contest  ]   │
└─────────────────────────┘
```

**Elements:**
- Contest summary card
- Prize breakdown list
- Join button (fixed at bottom)

---

## 10. Live Match Screen

```
┌─────────────────────────┐
│ ← NZ vs AUS • LIVE 🔴   │
│                         │
│ ┌─────────────────────┐ │
│ │ NZ: 185/4 (18.3 ov) │ │
│ │ AUS: Yet to bat     │ │
│ │                     │ │
│ │ Run Rate: 10.05     │ │
│ └─────────────────────┘ │
│                         │
│ Your Teams              │
│ ┌─────────────────────┐ │
│ │ Team 1              │ │
│ │ 245 pts • Rank: 156 │ │
│ │                     │ │
│ │ ⭐ K.Williamson: 68 │ │
│ │ ⭐ T.Boult: 42      │ │
│ │ ...8 more players   │ │
│ └─────────────────────┘ │
│                         │
│ ┌─────────────────────┐ │
│ │ Team 2              │ │
│ │ 198 pts • Rank: 342 │ │
│ └─────────────────────┘ │
│                         │
│ [Leaderboard] [Stats]   │
│                         │
│ [🏠] [🏏] [🏆] [👤]     │
└─────────────────────────┘
```

**Elements:**
- Match score card
- Your teams list with points and rank
- Captain/Vice-captain scores
- Leaderboard and stats buttons

---

## 11. Leaderboard Screen

```
┌─────────────────────────┐
│ ← Leaderboard           │
│                         │
│ Mega Contest            │
│ 6,755 Entries           │
│                         │
│ [All] [Friends] [Me]    │
│                         │
│ ┌─────────────────────┐ │
│ │ 1 🥇 John Smith     │ │
│ │      482 pts        │ │
│ │      $25,000        │ │
│ └─────────────────────┘ │
│                         │
│ ┌─────────────────────┐ │
│ │ 2 🥈 Sarah Jones    │ │
│ │      478 pts        │ │
│ │      $15,000        │ │
│ └─────────────────────┘ │
│                         │
│ ┌─────────────────────┐ │
│ │ 3 🥉 Mike Brown     │ │
│ │      475 pts        │ │
│ │      $10,000        │ │
│ └─────────────────────┘ │
│                         │
│ ...                     │
│                         │
│ ┌─────────────────────┐ │
│ │ 156 👤 You          │ │
│ │      245 pts        │ │
│ │      $200           │ │
│ └─────────────────────┘ │
└─────────────────────────┘
```

**Elements:**
- Contest name and entry count
- Filter tabs (All/Friends/Me)
- Top 3 with medals
- Scrollable list
- Your position highlighted

---

## 12. Wallet Screen

```
┌─────────────────────────┐
│ ← Wallet                │
│                         │
│ ┌─────────────────────┐ │
│ │ Total Balance       │ │
│ │   $325.50           │ │
│ │                     │ │
│ │ Cash: $250.50       │ │
│ │ Bonus: $75.00       │ │
│ └─────────────────────┘ │
│                         │
│ [ Add Cash ] [Withdraw] │
│                         │
│ Recent Transactions     │
│ ┌─────────────────────┐ │
│ │ ✓ Prize Won         │ │
│ │   +$200.00          │ │
│ │   Feb 10, 2:30 PM   │ │
│ └─────────────────────┘ │
│                         │
│ ┌─────────────────────┐ │
│ │ ↓ Contest Entry     │ │
│ │   -$20.00           │ │
│ │   Feb 10, 1:00 PM   │ │
│ └─────────────────────┘ │
│                         │
│ ┌─────────────────────┐ │
│ │ ↑ Deposit           │ │
│ │   +$100.00          │ │
│ │   Feb 9, 5:45 PM    │ │
│ └─────────────────────┘ │
│                         │
│ [🏠] [🏏] [🏆] [👤]     │
└─────────────────────────┘
```

**Elements:**
- Balance summary card
- Add Cash and Withdraw buttons
- Transaction history list
- Icons and timestamps for each transaction

---

## 13. User Profile Screen

```
┌─────────────────────────┐
│ ← Profile               │
│                         │
│      [👤]               │
│   John Doe              │
│ john@example.com        │
│                         │
│ Level 5 • 1,250 XP      │
│ ████████░░              │
│                         │
│ Statistics              │
│ ┌─────────────────────┐ │
│ │ Matches: 45         │ │
│ │ Win Rate: 68%       │ │
│ │ Total Winnings:     │ │
│ │ $1,850.00           │ │
│ └─────────────────────┘ │
│                         │
│ Settings                │
│ ┌─────────────────────┐ │
│ │ Edit Profile   [→]  │ │
│ │ Notifications  [→]  │ │
│ │ Privacy        [→]  │ │
│ │ Help & Support [→]  │ │
│ │ About          [→]  │ │
│ └─────────────────────┘ │
│                         │
│ [   Logout   ]          │
│                         │
│ [🏠] [🏏] [🏆] [👤]     │
└─────────────────────────┘
```

**Elements:**
- Avatar and user info
- Level and XP progress bar
- Statistics summary
- Settings menu items
- Logout button

---

## Navigation Patterns

### Bottom Navigation
```
[🏠 Home] [🏏 Matches] [🏆 Contests] [👤 Profile]
```

### Top Navigation
```
[← Back] Screen Title [⋮ Menu]
```

### Tab Navigation (within screens)
```
[Tab 1] [Tab 2] [Tab 3]
────────          
```

---

## Interaction Notes

1. **Swipe Gestures**: Horizontal swipe between tabs
2. **Pull to Refresh**: Pull down on scrollable lists
3. **Tap**: Standard tap for all buttons and cards
4. **Long Press**: Long press on team for options menu
5. **Haptic Feedback**: On button presses and selections

## Color Coding

- Green (#00C853): Success, primary actions, wins
- Gold (#FFC107): Premium features, captain selection
- Red (#EF5350): Live indicators, errors
- Blue (#0D1B2A): Headers, dark backgrounds
- White (#FFFFFF): Card backgrounds

---

**Wireframe Version**: 1.0  
**Last Updated**: February 2026  
**Created By**: DreamTeam Product Team
