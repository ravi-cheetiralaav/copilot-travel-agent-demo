# Theme System Implementation Prompt

## Overview
Implement a comprehensive theme system for a Next.js travel application that allows users to switch between blue, green, and red color palettes dynamically. The theme should persist across sessions and apply to all UI components.

## Requirements

### 1. Color Palettes
Create three distinct color themes:
- **Blue Theme (Ocean Blue)**: Professional, trustworthy feel
- **Green Theme (Nature Green)**: Fresh, eco-friendly vibe  
- **Red Theme (Sunset Red)**: Bold, energetic appearance

Each theme should include a full color scale (50-900) following Tailwind CSS conventions.

### 2. Technical Implementation

#### A. Tailwind Configuration
```javascript
// tailwind.config.js
theme: {
  extend: {
    colors: {
      // Static color palettes
      blue: { /* 50-900 scale */ },
      green: { /* 50-900 scale */ },
      red: { /* 50-900 scale */ },
      
      // Dynamic theme colors using CSS custom properties
      theme: {
        50: 'var(--color-theme-50)',
        100: 'var(--color-theme-100)',
        // ... through 900
      }
    }
  }
}
```

#### B. React Context for Theme Management
Create a ThemeContext that:
- Manages current theme state
- Provides theme switching functionality
- Persists theme preference in localStorage
- Updates CSS custom properties dynamically
- Includes TypeScript types for theme colors

#### C. Theme Selector Component
Build a user-friendly theme selector that:
- Shows color previews for each theme
- Indicates the currently selected theme
- Works on both desktop and mobile
- Includes accessibility features (ARIA labels)

#### D. Component Updates
Update existing components to use theme colors:
- Replace hardcoded color classes with `theme-*` classes
- Update hover states and focus states
- Ensure good contrast ratios for accessibility

### 3. Integration Points

#### A. Layout Integration
- Wrap the entire app in ThemeProvider
- Add ThemeSelector to the header/navigation
- Ensure theme persists across page navigation

#### B. Component Integration
Update key components:
- Buttons (primary, secondary, outline variants)
- Cards (borders, hover states)
- Navigation links
- Hero sections and CTAs
- Form elements

### 4. User Experience Considerations

#### A. Visual Feedback
- Smooth transitions between themes
- Clear visual indication of selected theme
- Consistent color application across all components

#### B. Accessibility
- Maintain WCAG color contrast standards
- Provide descriptive theme names
- Include proper ARIA labels for theme selector

#### C. Performance
- Minimize layout shifts during theme changes
- Use CSS custom properties for efficient updates
- Lazy load theme logic where appropriate

### 5. File Structure
```
lib/
  contexts/
    ThemeContext.tsx          # Theme management logic
components/
  ui/
    ThemeSelector.tsx         # Theme switching component
    Button.tsx                # Updated with theme colors
    Card.tsx                  # Updated with theme colors
app/
  layout.tsx                  # ThemeProvider integration
tailwind.config.js            # Color palette definitions
```

### 6. Implementation Steps

1. **Setup Color System**
   - Define comprehensive color palettes in Tailwind config
   - Add CSS custom properties for dynamic theming

2. **Create Theme Context**
   - Build React context for theme state management
   - Implement localStorage persistence
   - Add TypeScript types

3. **Build Theme Selector**
   - Create intuitive theme switching UI
   - Add color previews and accessibility features

4. **Update Components**
   - Replace static colors with theme-aware classes
   - Test all interactive states (hover, focus, active)

5. **Integration & Testing**
   - Integrate ThemeProvider at app level
   - Test theme persistence and switching
   - Verify accessibility compliance

### 7. Code Examples

#### Theme Context Usage:
```tsx
const { theme, setTheme } = useTheme();
// theme: 'blue' | 'green' | 'red'
```

#### Component Styling:
```tsx
// Before
className="bg-blue-600 hover:bg-blue-700"

// After  
className="bg-theme-600 hover:bg-theme-700"
```

#### Theme Selector:
```tsx
<ThemeSelector />
// Renders theme options with color previews
```

### 8. Testing Checklist
- [ ] Theme switches correctly between all three options
- [ ] Theme preference persists after page refresh
- [ ] All components respond to theme changes
- [ ] Color contrast meets accessibility standards
- [ ] Theme selector works on mobile devices
- [ ] No console errors during theme switching
- [ ] Smooth transitions between themes

### 9. Future Enhancements
- Add system theme detection (light/dark mode)
- Implement custom theme creation
- Add theme presets for different user types
- Consider seasonal theme variations
- Add theme scheduling (auto-switch based on time)

## Expected Outcome
Users can seamlessly switch between three professionally designed color themes that persist across sessions and apply consistently throughout the entire application, enhancing personalization and user engagement.
