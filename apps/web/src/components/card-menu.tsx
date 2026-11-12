import { useState } from "react";

interface CardMenuProps {
  title: string;
  subtitle?: string;
  description?: string;
  image?: string;
  price?: number;
  stock: number;
  isWishlisted?: boolean;
  defaultWishlisted?: boolean;
  onToggleWishlist?: (wishlisted: boolean) => void;
  onAdd?: () => void;
}

export function CardMenu({
  title,
  subtitle,
  description,
  image,
  price,
  stock,
  isWishlisted: controlledWishlisted,
  defaultWishlisted = false,
  onToggleWishlist,
  onAdd,
}: CardMenuProps) {
  const [internalWishlisted, setInternalWishlisted] = useState(defaultWishlisted);

  const isControlled = controlledWishlisted !== undefined;
  const isWishlisted = isControlled ? controlledWishlisted : internalWishlisted;
  const isOutOfStock = stock <= 0;

  const handleWishlistClick = () => {
    const nextState = !isWishlisted;
    if (!isControlled) {
      setInternalWishlisted(nextState);
    }
    onToggleWishlist?.(nextState);
  };

  return (
    <div
      className={`min-w-six min-h-six bg-theme-bg border border-theme-selected rounded-2xl overflow-hidden flex flex-col justify-between transition-all ${
        isOutOfStock ? "opacity-60" : "hover:shadow-md"
      }`}
    >
      <div>
        {/* Bagian Gambar */}
        <div className="bg-theme-selected w-full h-40 min-h-six flex justify-center items-center overflow-hidden relative">
          {image ? (
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover text-xs"
            />
          ) : (
            <span className="text-xs font-mono text-theme-text">
              menu photos....
            </span>
          )}

          {/* Tombol Wishlist / Favorit di Kiri Atas */}
          <button
            type="button"
            onClick={handleWishlistClick}
            aria-label={isWishlisted ? "Hapus dari wishlist" : "Tambah ke wishlist"}
            className="absolute top-2.5 left-2.5 w-8 h-8 rounded-full bg-theme-bg/90 border border-theme-selected flex items-center justify-center transition-transform active:scale-90 cursor-pointer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill={isWishlisted ? "#ef4444" : "none"}
              stroke={isWishlisted ? "#ef4444" : "currentColor"}
              strokeWidth="2"
              className="w-4 h-4 transition-colors"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
              />
            </svg>
          </button>

          {/* Badge Stok di Kanan Atas */}
          <span
            className={`absolute top-2.5 right-2.5 text-[11px] font-mono px-2.5 py-0.5 rounded-full ${
              isOutOfStock
                ? "bg-theme-accent/20 text-red-600 border border-theme-accent/50"
                : "bg-theme-bg text-inherit border border-theme-selected"
            }`}
          >
            {isOutOfStock ? "Sold Out" : `Stock: ${stock}`}
          </span>
        </div>

        {/* Bagian Konten Teks */}
        <div className="p-three flex flex-col gap-1.5">
          <div>
            <h3 className="text-lg font-semibold leading-tight">{title}</h3>
            {subtitle && (
              <p className="text-xs font-mono text-gray-500 mt-0.5">
                {subtitle}
              </p>
            )}
          </div>

          {description && (
            <p className="text-sm text-gray-600 line-clamp-2 mt-1">
              {description}
            </p>
          )}
        </div>
      </div>

      {/* Bagian Footer: Harga & Tombol Aksi */}
      <div className="px-three pb-four pt-2 border-t border-theme-selected/20 flex items-center justify-between gap-2">
        <div className="flex flex-col">
          {price !== undefined && (
            <span className="text-base font-semibold">
              Rp {price.toLocaleString("id-ID")}
            </span>
          )}
        </div>

        <button
          type="button"
          disabled={isOutOfStock}
          onClick={onAdd}
          className="text-xs font-mono px-three py-1.5 rounded-full bg-theme-element border border-theme-selected hover:bg-theme-selected hover:text-theme-text-secondary active:scale-95 transition-all disabled:pointer-events-none disabled:opacity-50 cursor-pointer"
        >
          {isOutOfStock ? "Habis" : "+ Tambah"}
        </button>
      </div>
    </div>
  );
}