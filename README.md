# TravelApp - Next.js Travel Application

A comprehensive travel application built with Next.js, TypeScript, and Tailwind CSS that helps users search for trips, manage bookings, view travel guides, and track loyalty points.

## Features

- **Trip Search & Booking**: Browse and search for curated travel experiences with advanced filtering
- **Travel Guides**: Expert tips and local insights for destinations
- **Booking Management**: View and manage your travel bookings
- **Loyalty Points System**: Earn and track points with every booking
- **Responsive Design**: Mobile-first design that works on all devices
- **Modern UI**: Clean, accessible interface built with Tailwind CSS

## Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Testing**: Jest + React Testing Library
- **Linting**: ESLint with Next.js configuration

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd copilot-agent-demo
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Development Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run test` - Run tests
- `npm run test:watch` - Run tests in watch mode

## Project Structure

```
app/                    # Next.js App Router pages and layouts
├── layout.tsx         # Root layout component
├── page.tsx           # Home page
├── trips/             # Trip-related pages
├── guides/            # Travel guides pages
├── bookings/          # Booking management pages
├── points/            # Loyalty points page
└── globals.css        # Global styles

components/             # Reusable React components
├── ui/                # Basic UI components (buttons, inputs, etc.)
├── layout/            # Layout components (header, footer)
├── trips/             # Trip-specific components
├── guides/            # Guide-specific components
├── bookings/          # Booking-specific components
└── __tests__/         # Component tests

lib/                   # Core logic and services
├── types/             # TypeScript type definitions
├── data/              # Mock data and data models
├── services/          # Data service functions
└── utils.ts           # Utility functions

public/                # Static assets
tests/                 # Test files and test utilities
```

## Features Overview

### Trip Search
- Advanced filtering by destination, category, price, duration, and rating
- Interactive trip cards with detailed information
- Individual trip detail pages with booking interface

### Travel Guides
- Expert-authored destination guides
- Tag-based categorization
- Rich content with images and reading time estimates

### Booking Management
- View all bookings with status tracking
- Cancel bookings with confirmation
- Detailed booking information including special requests

### Loyalty Points System
- Points earned based on booking value (1 point per $1 spent)
- Membership tiers: Bronze, Silver, Gold, Platinum
- Progress tracking and benefits overview
- Bonus point opportunities

## Code Standards

### TypeScript
- Strict typing enabled
- Interfaces for all props and data structures
- Proper type exports and imports

### React Patterns
- Functional components with hooks
- Server components for data fetching
- Client components marked with 'use client' directive
- Proper separation of concerns

### Styling Guidelines
- Tailwind CSS classes prioritized
- Consistent spacing and color schemes
- Responsive design patterns
- Accessibility considerations

### Testing
- Jest configuration for Next.js
- React Testing Library for component tests
- Service layer unit tests
- Test coverage for critical paths

## Development Guidelines

### Before Each Commit
1. Run `npm run lint` to ensure code standards
2. Run `npm run test` to verify all tests pass
3. Verify components follow Next.js App Router patterns
4. Update documentation if adding new features

### Component Development
- Use TypeScript interfaces for all props
- Follow single-responsibility principle
- Implement proper error handling and loading states
- Include meaningful alt text for images
- Optimize for performance

### Adding New Features
1. Create types in `lib/types/`
2. Add mock data in `lib/data/`
3. Implement service functions in `lib/services/`
4. Create reusable components in `components/`
5. Build pages in `app/` directory
6. Add tests for new functionality
7. Update this README

## API Structure

The application uses mock data and service functions to simulate a backend API. Key services include:

- **TripService**: Search trips, get trip details, featured trips
- **GuideService**: Fetch travel guides, filter by destination
- **BookingService**: Create bookings, manage user bookings

## Contributing

1. Follow the established code patterns
2. Maintain TypeScript strict mode compliance
3. Add tests for new components and functions
4. Update documentation for new features
5. Ensure responsive design implementation

## License

This project is part of a demo application for showcasing Next.js and modern web development practices.
