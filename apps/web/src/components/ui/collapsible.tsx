import { useId, useState, type ReactNode } from 'react';

type CollapsibleProps = {
  title: string;
  children: ReactNode;
};

export function Collapsible({ title, children }: CollapsibleProps) {
  const [open, setOpen] = useState(false);
  const contentId = useId();

  return (
    <div className="rounded-xl border border-theme-selected bg-theme-element">
      <button
        type="button"
        aria-expanded={open}
        aria-controls={contentId}
        onClick={() => setOpen((value) => !value)}
        className="flex w-full items-center justify-between gap-three px-four py-three text-left"
      >
        <span className="text-sm font-semibold">{title}</span>
        <span aria-hidden className="text-theme-text-secondary">
          {open ? '−' : '+'}
        </span>
      </button>

      {open ? (
        <div
          id={contentId}
          className="flex flex-col gap-two border-t border-theme-selected px-four py-three"
        >
          {children}
        </div>
      ) : null}
    </div>
  );
}
