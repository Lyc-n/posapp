export function WebBadge() {
  return (
    <span className="inline-flex items-center gap-one rounded-full border border-theme-selected bg-theme-element px-two py-half text-xs font-medium text-theme-text-secondary">
      <span aria-hidden className="size-2 rounded-full bg-emerald-500" />
      Web
    </span>
  );
}
