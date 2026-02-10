# DreamTeam Design System

## Overview
This document outlines the complete design system for the DreamTeam fantasy sports application, implementing **Option 3: Hybrid "DreamTeam Signature"** approach.

## Brand Identity

### App Name
**DreamTeam** - Fantasy Sports for New Zealand

### Tagline
"Build Your Dream Team, Win Real Cash"

### Target Audience
- Primary: New Zealand cricket enthusiasts aged 18-45
- Secondary: Fantasy sports players looking for NZ-focused platform

## Color Palette

### Primary Colors
- **DreamTeam Green** 
  - Primary: `#00C853`
  - Dark: `#00A344`
  - Light: `#5EFC82`
  - Usage: Primary buttons, success states, branding, win indicators

### Secondary Colors
- **Night Blue**
  - Primary: `#0D1B2A`
  - Dark: `#000814`
  - Light: `#1B263B`
  - Usage: Dark backgrounds, headers, navigation bars

### Accent Colors
- **Gold**
  - Primary: `#FFC107`
  - Dark: `#FFA000`
  - Light: `#FFD54F`
  - Usage: Premium features, highlights, rewards, captain selection

### Neutral Colors
- **Background**: `#F8F9FA` - Light app background
- **Surface**: `#FFFFFF` - Card backgrounds
- **Surface Dark**: `#1B263B` - Dark mode cards
- **Border**: `#DEE2E6` - Dividers and borders
- **Border Dark**: `#495057` - Dark borders

### Text Colors
- **Primary Text**: `#1B263B` - Headings and important text
- **Secondary Text**: `#6C757D` - Body text and labels
- **Disabled Text**: `#ADB5BD` - Disabled states
- **Inverse Text**: `#FFFFFF` - Text on dark backgrounds

### Status Colors
- **Success**: `#00C853` - Completed actions, wins
- **Warning**: `#FFA726` - Warnings and cautions
- **Error**: `#EF5350` - Errors and failures
- **Info**: `#42A5F5` - Informational messages

## Typography

### Font Family
- System default fonts for best native performance
- iOS: San Francisco
- Android: Roboto

### Type Scale

#### Headings
- **H1**: 32px / 40px line height / Bold (700)
  - Usage: Screen titles, main headings
  
- **H2**: 24px / 32px line height / Bold (700)
  - Usage: Section titles, card headers
  
- **H3**: 20px / 28px line height / SemiBold (600)
  - Usage: Subsection titles, list headers

#### Body Text
- **Body1**: 16px / 24px line height / Regular (400)
  - Usage: Primary body text, descriptions
  
- **Body2**: 14px / 20px line height / Regular (400)
  - Usage: Secondary text, supporting information

#### Special
- **Caption**: 12px / 16px line height / Regular (400)
  - Usage: Small labels, timestamps, metadata
  
- **Button**: 16px / 24px line height / SemiBold (600)
  - Usage: Button labels, CTAs

### Text Styles
- **Bold**: Used for emphasis and numbers
- **SemiBold**: Used for subheadings and button text
- **Regular**: Default for body text
- **Italic**: Used sparingly for quotes or special emphasis

## Spacing System

### Base Unit: 4px

### Spacing Scale
- **XS**: 4px - Minimal spacing
- **SM**: 8px - Compact spacing
- **MD**: 16px - Standard spacing
- **LG**: 24px - Comfortable spacing
- **XL**: 32px - Large spacing
- **XXL**: 48px - Extra large spacing

### Usage Guidelines
- Use MD (16px) as default padding for cards and containers
- Use LG (24px) for screen margins
- Use SM (8px) for tight groupings
- Use XL (32px) for major section separation

## Component Specifications

### Buttons

#### Primary Button
- Background: DreamTeam Green (`#00C853`)
- Text: White
- Border Radius: 8px
- Padding: 16px horizontal, 16px vertical
- Min Height: 48px
- States: Default, Hover, Pressed, Disabled

#### Secondary Button
- Background: Night Blue (`#0D1B2A`)
- Text: White
- Border Radius: 8px
- Same dimensions as primary

#### Outline Button
- Background: Transparent
- Border: 2px DreamTeam Green
- Text: DreamTeam Green
- Border Radius: 8px

### Cards

#### Standard Card
- Background: White (`#FFFFFF`)
- Border Radius: 12px
- Padding: 16px
- Shadow: 0px 2px 4px rgba(0,0,0,0.1)
- Elevation: 2

#### Premium Card
- Border: 2px Gold gradient
- Background: White with subtle gold tint
- Enhanced shadow

### Input Fields

#### Text Input
- Border: 1px solid Border (`#DEE2E6`)
- Border Radius: 8px
- Padding: 16px horizontal, 12px vertical
- Min Height: 48px
- Focus: Border changes to Primary Green
- Error: Border changes to Error Red

### Navigation

#### Bottom Tab Bar
- Height: 64px
- Background: Surface (`#FFFFFF`)
- Active Icon: Primary Green
- Inactive Icon: Secondary Text
- Labels: Caption style

#### Top Navigation Bar
- Height: 56px
- Background: Night Blue
- Title: White, H3 style
- Icons: White

## Iconography

### Icon Style
- Use emoji or simple line icons
- Icon Size: 24px for standard, 32px for featured
- Icon Color: Match text colors or use primary colors

### Common Icons
- 🏏 Cricket/Matches
- 🏆 Contests/Trophies
- 👤 Profile/User
- 💰 Wallet/Money
- ⚡ Quick/Fast actions
- ✓ Success/Confirmation
- ✕ Close/Cancel
- ← → Navigation arrows

## Player Role Colors

### Visual Differentiation
- **Wicket Keeper**: Gold (`#FFC107`)
- **Batsman**: Info Blue (`#42A5F5`)
- **Bowler**: Error Red (`#EF5350`)
- **All-Rounder**: Success Green (`#00C853`)

## Animation Principles

### Duration
- **Quick**: 150ms - Micro-interactions
- **Standard**: 300ms - Most transitions
- **Slow**: 500ms - Page transitions

### Easing
- **Ease-Out**: For entering elements
- **Ease-In**: For exiting elements
- **Ease-In-Out**: For moving elements

### Common Animations
- Button press: Scale down to 0.95
- Card press: Scale down to 0.98
- Modal appear: Slide up with fade
- Screen transition: Slide left/right

## Layout Guidelines

### Screen Structure
- Top Navigation: 56px fixed
- Content Area: Scrollable
- Bottom Navigation: 64px fixed (when applicable)

### Grid System
- 8px base grid
- 16px margins on mobile
- Cards span full width minus margins
- Lists have 16px spacing between items

### Breakpoints
- Mobile: < 768px (primary target)
- Tablet: 768px - 1024px
- Desktop: > 1024px (web version)

## Accessibility

### Contrast Ratios
- Normal text: Minimum 4.5:1
- Large text: Minimum 3:1
- All text meets WCAG AA standards

### Touch Targets
- Minimum size: 44x44px
- Spacing between targets: 8px minimum

### Color Blindness
- Never rely on color alone
- Use icons and labels with colors
- Tested with common color blindness types

## Dark Mode (Future)

### Planned Colors
- Background: Night Blue Dark (`#000814`)
- Surface: Night Blue Light (`#1B263B`)
- Text: Light variations of existing palette
- Primary/Accent colors remain the same for brand consistency

## Usage Examples

### Match Card
- White background card
- Team flags and names in H3
- Venue and time in Body2, Secondary Text
- Contest count with Primary Green
- "LIVE" badge in Error Red

### Player Card
- White card with role color accent
- Player name in Body1, Primary Text
- Team and role in Caption, Secondary Text
- Credits in large bold text
- Selection percentage in Caption

### Contest Card
- White card
- Prize pool in H2, Primary Green
- Entry fee prominent
- Progress bar showing spots filled
- Prize breakdown accessible

## Design Resources

### Design Files
- Figma files available in design repository
- Component library maintained in Storybook
- Icon set documented separately

### Style Guide Updates
- Version controlled with app releases
- Changes require design team approval
- Documentation updated with each major version

## Implementation Notes

### React Native
- Use StyleSheet for styles
- Leverage theme object from theme/index.ts
- Import colors, typography, spacing from theme files

### Consistency
- All components should use theme values
- No hard-coded colors or spacing
- Props for customization when needed

### Performance
- Optimize images and assets
- Use memo for expensive components
- Lazy load when appropriate

---

**Document Version**: 1.0  
**Last Updated**: February 2026  
**Maintained By**: DreamTeam Design Team
