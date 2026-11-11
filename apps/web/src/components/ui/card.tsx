import type { ComponentProps } from 'react';

export function Card({ className = '', ...props }: ComponentProps<'div'>) {
  return (
    <div
      className={`rounded-xl border border-theme-selected bg-theme-element p-four ${className}`}
      {...props}
    />
  );
}
