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
```md
# TravelApp — Copilot / AI Agent Instructions (concise)

This file gives an AI coding agent the minimal, actionable knowledge to be productive in this Next.js 14 + TypeScript + Tailwind demo.

Key files & entry points
- App Router pages: `app/layout.tsx`, `app/page.tsx`, `app/*/page.tsx`
- UI components: `components/ui/*` (Button, Input, Select)
- Layout: `components/layout/Header.tsx`, `components/layout/Footer.tsx`
- Services & data: `lib/services/index.ts`, `lib/data/mockData.ts`, `lib/types/index.ts`

Architecture & patterns (what to follow)
- Service layer: use `lib/services/index.ts` static methods to read/modify arrays from `lib/data/mockData.ts`. No external API calls by default.
- App Router: files in `app/` are Server Components by default — add `'use client'` only for components that use hooks or browser APIs (see `components/layout/Header.tsx`).
- UI primitives: use components in `components/ui/` and the `cn()` helper in `lib/utils.ts` for conditional classes.

Styling & theming
- Tailwind tokens live in `tailwind.config.js` (primary, secondary palettes). Use `bg-primary-600`, `text-primary-600` patterns.
- Small custom CSS lives in `app/globals.css`. Prefer Tailwind; add CSS variables only when necessary.

Developer workflows & helpful commands
- Install & run: `npm install` then `npm run dev` (PowerShell: use `npm run dev`).
- Build: `npm run build`; Start prod server: `npm run start`.
- Lint: `npm run lint` (run before commits). Tests: `npm run test` (Jest + React Testing Library).
- Docker: `docker-compose --profile dev up --build travel-app-dev` (development with mounts).

Project-specific conventions
- Types: add shared types in `lib/types/index.ts` before changing mock data or services.
- Mock data: update arrays in `lib/data/mockData.ts` when adding sample content.
- Service IDs: Booking IDs are generated using timestamps (pattern `booking-${Date.now()}`) — keep consistent.
- Tests: unit tests for services are in `tests/` and component tests in `components/__tests__/`.

Edge cases agents should handle
- Server vs client: moving logic requiring `window` into a client component.
- Mock data mutations: services operate on in-memory arrays — persist changes only for integration testing or add an adapter.
- Theme & styling: prefer new Tailwind tokens to broad CSS overrides; follow `tailwind.config.js` palette.

Where to change things (examples)
- Add a new trip category: update `lib/types/index.ts` → add mock entries in `lib/data/mockData.ts` → update `TripService.searchTrips()` filter logic in `lib/services/index.ts` → add tests in `tests/services.test.ts`.
- Add client interactivity: create a component in `components/ui/`, mark with `'use client'`, then import into Server pages.

If uncertain, inspect these files first: `app/layout.tsx`, `lib/services/index.ts`, `lib/data/mockData.ts`, `tailwind.config.js`, and `jest.config.js`.

Questions or missing info
- If you need runtime envs, check `.env.local` (not committed) — this project uses mock data so envs are minimal.
- Ask the repo owner if you should replace mocks with real API adapters; otherwise, work in the service layer.

End of instructions — ask for feedback to clarify any missing conventions.
```