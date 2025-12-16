'use client';

import { useXmasTheme } from '@/lib/contexts/XmasThemeContext';

export function XmasSnowflakes() {
  const { isXmasTheme } = useXmasTheme();

  if (!isXmasTheme) {
    return null;
  }

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0" aria-hidden="true">
      <div className="snowflake" style={{ left: '10%', animationDelay: '0s', animationDuration: '10s' }}>❄</div>
      <div className="snowflake" style={{ left: '20%', animationDelay: '2s', animationDuration: '12s' }}>❄</div>
      <div className="snowflake" style={{ left: '30%', animationDelay: '4s', animationDuration: '14s' }}>❄</div>
      <div className="snowflake" style={{ left: '40%', animationDelay: '6s', animationDuration: '10s' }}>❄</div>
      <div className="snowflake" style={{ left: '50%', animationDelay: '8s', animationDuration: '12s' }}>❄</div>
      <div className="snowflake" style={{ left: '60%', animationDelay: '1s', animationDuration: '14s' }}>❄</div>
      <div className="snowflake" style={{ left: '70%', animationDelay: '3s', animationDuration: '10s' }}>❄</div>
      <div className="snowflake" style={{ left: '80%', animationDelay: '5s', animationDuration: '12s' }}>❄</div>
      <div className="snowflake" style={{ left: '90%', animationDelay: '7s', animationDuration: '14s' }}>❄</div>
    </div>
  );
}
