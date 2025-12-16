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
    const saved = localStorage.getItem('xmasTheme');
    if (saved === 'true') {
      setIsXmasTheme(true);
    }
  }, []);

  const toggleXmasTheme = () => {
    setIsXmasTheme((prev) => {
      const newValue = !prev;
      localStorage.setItem('xmasTheme', String(newValue));
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
