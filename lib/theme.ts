'use client';

export type Theme = 'dark' | 'light';

export const getTheme = (): Theme => {
  if (typeof window === 'undefined') return 'dark';
  
  const stored = localStorage.getItem('theme') as Theme | null;
  if (stored) return stored;
  
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
};

export const setTheme = (theme: Theme) => {
  if (typeof window === 'undefined') return;
  
  localStorage.setItem('theme', theme);
  const root = document.documentElement;
  root.classList.remove('dark', 'light');
  root.classList.add(theme);
};

export const initTheme = () => {
  if (typeof window === 'undefined') return;
  
  const theme = getTheme();
  setTheme(theme);
};

