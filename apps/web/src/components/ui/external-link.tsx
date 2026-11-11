import type { ComponentProps } from 'react';

export function ExternalLink({ className = '', ...props }: ComponentProps<'a'>) {
  return (
    <a
      target="_blank"
      rel="noreferrer"
      className={`text-sm italic text-blue-600 hover:underline dark:text-blue-400 ${className}`}
      {...props}
    />
  );
}
