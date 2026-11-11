/**
 * CSS variable references for places that need a raw color value
 * instead of a Tailwind class (for example, native tab bar props).
 */
export const cssVars = {
  bg: 'var(--color-bg)',
  element: 'var(--color-element)',
  selected: 'var(--color-selected)',
  text: 'var(--color-text)',
  textSecondary: 'var(--color-text-secondary)',
} as const;

export type ThemeColor = keyof typeof cssVars;
