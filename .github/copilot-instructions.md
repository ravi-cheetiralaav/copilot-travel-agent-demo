This is a Next.js-based travel application with TypeScript that helps users search for trips, manage bookings, view travel guides, and track points. The application uses React components, server components, and client components as part of the Next.js App Router architecture. Please follow these guidelines when contributing:
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