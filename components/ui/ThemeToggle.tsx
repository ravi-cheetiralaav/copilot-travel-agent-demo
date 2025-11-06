'use client';

import { useTheme } from '@/lib/contexts/ThemeContext';
import { Palette } from 'lucide-react';

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-md text-gray-700 hover:text-theme-primary-600 hover:bg-gray-100 transition-colors theme-transition"
      aria-label={`Switch to ${theme === 'default' ? 'orange' : 'default'} theme`}
      title={`Switch to ${theme === 'default' ? 'orange' : 'default'} theme`}
    >
      <Palette className="h-5 w-5" />
    </button>
  );
}