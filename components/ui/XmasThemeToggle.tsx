'use client';

import { useXmasTheme } from '@/lib/contexts/XmasThemeContext';
import { cn } from '@/lib/utils';

export function XmasThemeToggle() {
  const { isXmasTheme, toggleXmasTheme } = useXmasTheme();

  return (
    <button
      onClick={toggleXmasTheme}
      className={cn(
        'relative inline-flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200',
        isXmasTheme
          ? 'bg-xmas-red-600 text-white hover:bg-xmas-red-700'
          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
      )}
      aria-label={isXmasTheme ? 'Disable Christmas theme' : 'Enable Christmas theme'}
      aria-pressed={isXmasTheme}
    >
      <span className="text-lg" role="img" aria-label="Christmas tree">
        🎄
      </span>
      <span className="hidden sm:inline">
        {isXmasTheme ? 'Xmas On' : 'Xmas Off'}
      </span>
    </button>
  );
}
