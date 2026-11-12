import React, { useState } from 'react';

interface CheckBadgeProps {
  label?: string;
  checked?: boolean;
  defaultChecked?: boolean;
  onChange?: (checked: boolean) => void;
}

export function CheckBadge({
  label = 'badge',
  checked: controlledChecked,
  defaultChecked = false,
  onChange,
}: CheckBadgeProps) {
  // State internal jika komponen digunakan secara uncontrolled
  const [internalChecked, setInternalChecked] = useState(defaultChecked);

  // Tentukan apakah komponen dikontrol dari luar (parent) atau dari dalam
  const isControlled = controlledChecked !== undefined;
  const isChecked = isControlled ? controlledChecked : internalChecked;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newChecked = e.target.checked;
    
    if (!isControlled) {
      setInternalChecked(newChecked);
    }
    
    // Kembalikan status terbaru ke parent component
    onChange?.(newChecked);
  };

  return (
    <label
      className={`cursor-pointer select-none inline-flex items-center justify-center rounded-full self-start min-w-six px-four py-0.5 border transition-colors ${
        isChecked
          ? 'bg-theme-accent/15 border-theme-selected text-theme-accent' // Style saat checked
          : 'bg-theme-element hover:border-theme-selected border-transparent active:bg-theme-selected' // Style saat unchecked
      }`}
    >
      <input
        type="checkbox"
        className="sr-only" // Menyembunyikan checkbox bawaan secara visual tapi tetap aksesibel
        checked={isChecked}
        onChange={handleChange}
      />
      <span className="text-sm font-mono">{label}</span>
    </label>
  );
}