import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { XmasThemeToggle } from '../ui/XmasThemeToggle';
import { XmasThemeProvider } from '@/lib/contexts/XmasThemeContext';

// Mock localStorage
const localStorageMock = (() => {
  let store: Record<string, string> = {};

  return {
    getItem: (key: string) => store[key] || null,
    setItem: (key: string, value: string) => {
      store[key] = value;
    },
    clear: () => {
      store = {};
    },
  };
})();

Object.defineProperty(window, 'localStorage', {
  value: localStorageMock,
});

describe('XmasThemeToggle Component', () => {
  beforeEach(() => {
    localStorageMock.clear();
  });

  it('renders toggle button with default state', () => {
    render(
      <XmasThemeProvider>
        <XmasThemeToggle />
      </XmasThemeProvider>
    );
    const button = screen.getByRole('button', { name: /enable christmas theme/i });
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent('Xmas Off');
  });

  it('toggles theme when clicked', () => {
    render(
      <XmasThemeProvider>
        <XmasThemeToggle />
      </XmasThemeProvider>
    );
    const button = screen.getByRole('button');
    
    // Initial state - off
    expect(button).toHaveTextContent('Xmas Off');
    expect(button).toHaveAttribute('aria-pressed', 'false');
    
    // Click to enable
    fireEvent.click(button);
    expect(button).toHaveTextContent('Xmas On');
    expect(button).toHaveAttribute('aria-pressed', 'true');
    
    // Click to disable
    fireEvent.click(button);
    expect(button).toHaveTextContent('Xmas Off');
    expect(button).toHaveAttribute('aria-pressed', 'false');
  });

  it('saves theme preference to localStorage', () => {
    render(
      <XmasThemeProvider>
        <XmasThemeToggle />
      </XmasThemeProvider>
    );
    const button = screen.getByRole('button');
    
    // Enable theme
    fireEvent.click(button);
    expect(localStorage.getItem('xmasTheme')).toBe('true');
    
    // Disable theme
    fireEvent.click(button);
    expect(localStorage.getItem('xmasTheme')).toBe('false');
  });

  it('applies correct styling when theme is enabled', () => {
    render(
      <XmasThemeProvider>
        <XmasThemeToggle />
      </XmasThemeProvider>
    );
    const button = screen.getByRole('button');
    
    // Enable theme
    fireEvent.click(button);
    expect(button).toHaveClass('bg-xmas-red-600');
  });

  it('has accessible labels', () => {
    render(
      <XmasThemeProvider>
        <XmasThemeToggle />
      </XmasThemeProvider>
    );
    const button = screen.getByRole('button');
    
    // Check initial aria-label
    expect(button).toHaveAttribute('aria-label', 'Enable Christmas theme');
    
    // Click and check updated aria-label
    fireEvent.click(button);
    expect(button).toHaveAttribute('aria-label', 'Disable Christmas theme');
  });
});
