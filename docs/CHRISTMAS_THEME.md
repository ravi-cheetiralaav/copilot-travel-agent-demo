# Christmas Theme Feature

This document describes the Christmas theme toggle feature for the TravelApp.

## Overview

The Christmas theme provides a festive appearance for the TravelApp website during the holiday season. Users can toggle between the default theme and the Christmas theme with a single click.

## Features

### Visual Changes When Enabled
- **Header**: Changes from white to festive red background (`bg-xmas-red-700`)
- **Logo**: Changes from "T" to Santa emoji (🎅)
- **Navigation**: White text with gold hover effects
- **Buttons**: Primary buttons use red, secondary buttons use green
- **Snowflakes**: Animated snowflakes fall across the screen
- **Toggle Button**: Shows "Xmas On" in red background

### Theme Persistence
- Theme preference is saved to `localStorage`
- Automatically restored on page reload
- No server-side session required

## Implementation Details

### Color Palette
The Christmas theme uses three color families defined in `tailwind.config.js`:

- **Red** (`xmas-red`): Primary Christmas color for headers and buttons
  - 50, 100, 500, 600, 700 variants
- **Green** (`xmas-green`): Secondary Christmas color for buttons
  - 50, 100, 500, 600, 700 variants
- **Gold** (`xmas-gold`): Accent color for logo and hover effects
  - 50, 100, 500, 600, 700 variants

### Components

#### `XmasThemeContext.tsx`
- React Context provider for theme state
- Manages `isXmasTheme` boolean state
- Provides `toggleXmasTheme` function
- Handles localStorage persistence

#### `XmasThemeToggle.tsx`
- Toggle button component
- Shows Christmas tree emoji (🎄)
- Displays "Xmas On" or "Xmas Off" text
- Accessible with proper ARIA attributes

#### `XmasSnowflakes.tsx`
- Decorative snowflake animation component
- Only renders when Christmas theme is enabled
- 9 animated snowflakes with varied timing
- Non-interactive (pointer-events: none)

### Modified Components

#### `Header.tsx`
- Uses `useXmasTheme` hook to get theme state
- Conditional styling for background, text, and logo
- Includes `XmasThemeToggle` component

#### `Button.tsx`
- Added `useXmasTheme` prop
- Applies Christmas colors when enabled
- Maintains all existing variants

#### `layout.tsx`
- Wraps app with `XmasThemeProvider`
- Includes `XmasSnowflakes` component

## Usage

### For Users
1. Look for the Christmas tree (🎄) toggle in the header
2. Click to enable/disable the Christmas theme
3. Theme preference is saved automatically

### For Developers

#### Using the Theme Context
```tsx
import { useXmasTheme } from '@/lib/contexts/XmasThemeContext';

function MyComponent() {
  const { isXmasTheme, toggleXmasTheme } = useXmasTheme();
  
  return (
    <div className={isXmasTheme ? 'bg-xmas-red-600' : 'bg-primary-600'}>
      {/* Component content */}
    </div>
  );
}
```

#### Using Christmas Colors in Buttons
```tsx
<Button useXmasTheme={isXmasTheme}>
  Click Me
</Button>
```

## Testing

### Unit Tests
Located in `components/__tests__/XmasThemeToggle.test.tsx`:
- Toggle button rendering
- Theme state changes
- localStorage persistence
- Accessibility attributes

Run with: `npm test`

### E2E Tests
Located in `tests/playwright/xmas-theme.spec.ts`:
- Theme toggle functionality
- Visual changes verification
- Persistence after reload
- Snowflake animation
- Accessibility checks

Run with: `npm run test:e2e`

## Accessibility

- Toggle button has proper ARIA labels
- `aria-pressed` attribute reflects state
- Snowflakes are hidden from screen readers (`aria-hidden="true"`)
- Christmas theme maintains WCAG contrast ratios
- Keyboard navigation fully supported

## Browser Support

- Modern browsers with CSS animations support
- localStorage required for persistence
- Graceful fallback to default theme if localStorage unavailable

## Future Enhancements

Potential improvements:
- Additional holiday themes (e.g., New Year, Valentine's Day)
- Theme scheduling (auto-enable during December)
- More decorative elements (bells, stars, etc.)
- Theme customization options
- Integration with user preferences API
