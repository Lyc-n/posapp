import { useEffect, useState } from 'react';

const STORAGE_KEY = 'posapp-theme';

function getInitialDark() {
  if (typeof document === 'undefined') {
    return false;
  }

  return document.documentElement.classList.contains('dark');
}

export function ThemeToggle() {
  const [dark, setDark] = useState(getInitialDark);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark);

    try {
      localStorage.setItem(STORAGE_KEY, dark ? 'dark' : 'light');
    } catch {
      // Ignore storage failures (for example, private browsing mode).
    }
  }, [dark]);

  return (
    <button
      type="button"
      onClick={() => setDark((value) => !value)}
      className="rounded-lg border border-theme-selected px-three py-two text-xs font-medium text-theme-text-secondary transition-colors hover:bg-theme-selected hover:text-theme-text"
    >
      {dark ? 'Light mode' : 'Dark mode'}
    </button>
  );
}
