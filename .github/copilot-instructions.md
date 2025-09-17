# TravelApp AI Coding Agent Instructions

This is a Next.js 14 travel application with TypeScript, featuring trip search/booking, travel guides, and loyalty points. Built with App Router architecture, Tailwind CSS, and mock API services.

## Architecture & Data Flow

**Service Layer Pattern**: All data operations use static class methods in `lib/services/index.ts`:
- `TripService.searchTrips(filters)` - Handles complex filtering logic (destination, category, price, duration, rating)
- `BookingService.createBooking()` - Generates IDs using timestamps: `booking-${Date.now()}`
- `GuideService.getGuidesByDestination()` - Case-insensitive string matching

**Mock Data Structure**: All entities in `lib/data/mockData.ts` export as arrays (mockTrips, mockTravelGuides, mockBookings). Services manipulate these directly - no external API calls.

**Type System**: Core interfaces in `lib/types/index.ts`:
- `SearchFilters` uses optional properties with union types for Trip['category'] 
- Category values: `'adventure' | 'relaxation' | 'cultural' | 'family' | 'luxury' | 'Food Exploration'`
- Booking status: `'confirmed' | 'pending' | 'cancelled'`

## Component Patterns & Standards

**Client/Server Component Rules**:
- Pages in `app/` are Server Components by default
- Add `'use client'` for useState, useEffect, event handlers, browser APIs
- Example: `app/trips/page.tsx` uses `'use client'` for search filtering state

**UI Component System**: Located in `components/ui/` using forwardRef pattern:
```tsx
const Button = forwardRef<HTMLButtonElement, ButtonProps>(({ variant = 'default', size = 'md', ...props }, ref) => {
  // Variants: 'default' | 'secondary' | 'outline' | 'ghost'
  // Uses primary/secondary color tokens from tailwind.config.js
})
```

**State Management Pattern**: Use local useState with service calls, separate loading states:
```tsx
const [trips, setTrips] = useState<Trip[]>([]);
const [loading, setLoading] = useState(true);      // Initial load
const [searchLoading, setSearchLoading] = useState(false); // Search operations
```

## Styling & Theme System

**Color System**: Custom Tailwind tokens in `tailwind.config.js`:
- Primary: Blue palette (`primary-50` to `primary-700`) 
- Secondary: Green palette (`secondary-50` to `secondary-700`)
- Use `bg-primary-600`, `text-primary-600`, `hover:bg-primary-700` patterns

**Layout Patterns**:
- Container: `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`
- Grid layouts: `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8`
- Form layouts: `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4`

**Utility Helper**: Use `cn()` from `lib/utils.ts` for conditional classes (wraps clsx)

## Development Workflow & Testing

**Critical Commands**:
- `npm run dev` - Development server with hot reload
- `npm run lint` - ESLint check (required before commits)
- `npm run test` - Jest + React Testing Library
- Docker: `docker-compose --profile dev up --build travel-app-dev` for containerized development

**Jest Configuration**: Uses Next.js Jest config with path mapping:
- `@/components/*` → `<rootDir>/components/*`  
- `@/lib/*` → `<rootDir>/lib/*`
- Tests in `components/__tests__/` and `tests/`

**Mock Data Updates**: When adding new trip categories or data fields:
1. Update TypeScript interfaces in `lib/types/index.ts`
2. Add sample data to arrays in `lib/data/mockData.ts` 
3. Update service filtering logic in `lib/services/index.ts`

## Key Conventions

**File Naming**: PascalCase for components, camelCase for utilities, kebab-case for static assets
**Component Props**: Always use TypeScript interfaces, extend HTML element types when applicable
**Error Handling**: Use try/catch with console.error, show user-friendly messages in UI
**Loading States**: Skeleton placeholders using `animate-pulse` and gray backgrounds
**Accessibility**: Images need alt text (`alt=""` for decorative), semantic HTML, proper form labels

## Docker & Deployment

**Multi-stage setup**: `Dockerfile` for production, `Dockerfile.dev` for development
**Environment variables**: `NODE_ENV`, `NEXT_TELEMETRY_DISABLED=1` for production
**Health checks**: curl localhost:3000 with 30s intervals
**Volume mounting**: Development mode mounts source with `/app/node_modules` exclusion
## Test Frameworks

This project uses **Jest** as the primary test framework for both unit and integration tests. React component tests utilize **React Testing Library** for rendering and interaction. Integration tests may also use **Jest** with custom setup as needed.

**End-to-End & Browser Automation:**
If browser automation or end-to-end testing is required, use **Playwright**. Playwright can be used for UI interaction, browser-based integration, and scenario testing. Place Playwright tests in a dedicated folder (e.g., `tests/playwright/`).

Refer to Playwright documentation for setup and usage details.

**Unit Tests:**
- Located in `components/__tests__/` and other relevant folders
- Use Jest and React Testing Library

**Integration Tests:**
- Located in `tests/` and other relevant folders
- Use Jest (with custom setup if required)

Refer to `jest.config.js` and `jest.setup.js` for configuration details.
## Code Standards

### Required Before Each Commit
- Run `npm run lint` to ensure code follows project standards
- Make sure all components follow Next.js App Router patterns
- Client components should be marked with 'use client' when they use browser APIs or React hooks
- When adding new functionality, make sure you update the README
- Make sure that the repository structure documentation is correct and accurate in the Copilot Instructions file
- Ensure all tests pass by running `npm run test` in the terminal

### TypeScript and React Patterns
- Use TypeScript interfaces/types for all props and data structures
- Follow React best practices (hooks, functional components)
- Use proper state management techniques
- Components should be modular and follow single-responsibility principle

### Styling
- You must prioritize using Tailwind CSS classes as much as possible. If needed, you may define custom Tailwind Classes / Styles. Creating custom CSS should be the last approach.

## Development Flow
- Install dependencies: `npm install`
- Development server: `npm run dev`
- Build: `npm run build`
- Test: `npm run test`
- Lint: `npm run lint`

## Repository Structure
- `app/`: Next.js App Router pages and layouts organized by route
- `components/`: Reusable React components
  - `components/ui/`: UI components (buttons, inputs, etc.)
  - `components/__tests__/`: Component tests
- `lib/`: Core logic and services
  - `lib/data/`: Data models and mock data
  - `lib/types/`: TypeScript type definitions
- `public/`: Static assets
- `tests/`: Test files and test utilities
- `README.md`: Project documentation

## Key Guidelines
1. Make sure to evaluate the components you're creating, and whether they need 'use client'
2. Images should contain meaningful alt text unless they are purely for decoration. If they are for decoration only, a null (empty) alt text should be provided (alt="") so that the images are ignored by the screen reader.
3. Follow Next.js best practices for data fetching, routing, and rendering
4. Use proper error handling and loading states
5. Optimize components and pages for performance
6. Custom Info : https://docs.github.com/en/copilot/how-tos/configure-custom-instructions/add-repository-instructions,https://code.visualstudio.com/docs/copilot/copilot-customization#_reusable-prompt-files-experimental