'use client';

import { useState, useEffect } from 'react';  // Importing React hooks
import { useTheme } from 'next-themes';  // Importing useTheme from next-themes
import { SunIcon, MoonIcon } from '@heroicons/react/24/outline';  // Correct import path

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();  // Using next-themes' useTheme hook
  const [mounted, setMounted] = useState(false);  // For checking hydration

  // Ensuring that we only apply the theme after the component has mounted
  useEffect(() => {
    setMounted(true);  // Set mounted to true after component mounts
  }, []);  // Empty dependency array ensures this runs only once on mount

  // Return null to avoid hydration issues while the component is not yet mounted
  if (!mounted) {
    return null;
  }

  // Toggling theme based on current state
  return (
    <button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="flex items-center justify-center p-2 rounded-full"
    >
      {/* Conditionally render Sun or Moon icon based on the current theme */}
      {theme === 'dark' ? (
        <SunIcon className="w-6 h-6" />
      ) : (
        <MoonIcon className="w-6 h-6" />
      )}
    </button>
  );
}
