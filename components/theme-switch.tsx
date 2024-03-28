'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export default function ThemeSwitch() {
  const [mounted, setMounted] = useState<boolean>(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return null;
  }

  return (
    <label className="flex cursor-pointer select-none items-center animate-in fade-in slide-in-from-top">
      <div className="relative">
        <input
          type="checkbox"
          onChange={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          className="sr-only"
        />
        <div className="box block h-8 w-14 rounded-full dark:bg-blue bg-gray-light"></div>
        <div className="absolute left-1 top-1 flex h-6 w-6 items-center justify-center transform transition-transform rounded-full bg-white dark:translate-x-full"></div>
      </div>
      <span className="sr-only">Toggle theme</span>
    </label>
  );
}
