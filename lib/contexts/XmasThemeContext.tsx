'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface XmasThemeContextType {
  isXmasTheme: boolean;
  toggleXmasTheme: () => void;
}

const XmasThemeContext = createContext<XmasThemeContextType | undefined>(undefined);

export function XmasThemeProvider({ children }: { children: ReactNode }) {
  const [isXmasTheme, setIsXmasTheme] = useState(false);

  // Load theme preference from localStorage on mount
  useEffect(() => {
    // Check if we're in a browser environment
    if (typeof window !== 'undefined') {
      try {
        const saved = localStorage.getItem('xmasTheme');
        if (saved === 'true') {
          setIsXmasTheme(true);
        }
      } catch (error) {
        console.error('Failed to load theme preference:', error);
      }
    }
  }, []);

  const toggleXmasTheme = () => {
    setIsXmasTheme((prev) => {
      const newValue = !prev;
      if (typeof window !== 'undefined') {
        try {
          localStorage.setItem('xmasTheme', String(newValue));
        } catch (error) {
          console.error('Failed to save theme preference:', error);
        }
      }
      return newValue;
    });
  };

  return (
    <XmasThemeContext.Provider value={{ isXmasTheme, toggleXmasTheme }}>
      {children}
    </XmasThemeContext.Provider>
  );
}

export function useXmasTheme() {
  const context = useContext(XmasThemeContext);
  if (context === undefined) {
    throw new Error('useXmasTheme must be used within an XmasThemeProvider');
  }
  return context;
}
