import { useState } from "react";
import { CheckBadge } from "@/components/check-badge";
import { CardMenu } from "@/components/card-menu";

type BadgeItem = {
  label: string;
};

type MenuItem = {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  price: number;
  stock: number;
  image?: string;
};

const badgeItems: BadgeItem[] = [
  { label: "All" },
  { label: "Appetizer" },
  { label: "Maincourse" },
  { label: "Dessert" },
];

const menuItems: MenuItem[] = [
  {
    id: 1,
    title: "Caesar Salad",
    subtitle: "Appetizer",
    description: "Selada romaine segar dengan saus caesar khas, parmesan, dan crouton renyah.",
    price: 45000,
    stock: 12,
    image: "",
  },
  {
    id: 2,
    title: "Garlic Bread",
    subtitle: "Appetizer",
    description: "Roti baguette panggang dengan mentega bawang putih dan peterseli segar.",
    price: 28000,
    stock: 8,
    image: "",
  },
  {
    id: 3,
    title: "Ribeye Steak",
    subtitle: "Maincourse",
    description: "Daging sapi panggang pilihan dengan saus lada hitam dan kentang tumbuk.",
    price: 185000,
    stock: 5,
    image: "",
  },
  {
    id: 4,
    title: "Salmon Teriyaki",
    subtitle: "Maincourse",
    description: "Fillet salmon panggang dengan saus teriyaki manis gurih dan nasi hangat.",
    price: 135000,
    stock: 0,
    image: "",
  },
  {
    id: 5,
    title: "Tiramisu Classic",
    subtitle: "Dessert",
    description: "Lapisan ladyfinger celup kopi espresso dengan krim mascarpone lembut.",
    price: 55000,
    stock: 10,
    image: "",
  },
  {
    id: 6,
    title: "Chocolate Lava Cake",
    subtitle: "Dessert",
    description: "Kue cokelat hangat dengan lelehan cokelat pekat di bagian tengah.",
    price: 48000,
    stock: 4,
    image: "",
  },
];

export function HomePage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategories, setSelectedCategories] = useState<string[]>(["All"]);
  const [wishlistIds, setWishlistIds] = useState<number[]>([1]);

  const handleCategoryChange = (category: string, isChecked: boolean) => {
    if (category === "All") {
      setSelectedCategories(isChecked ? ["All"] : []);
      return;
    }

    setSelectedCategories((prev) => {
      const withoutAll = prev.filter((item) => item !== "All");

      const updated = isChecked
        ? [...withoutAll, category]
        : withoutAll.filter((item) => item !== category);

      return updated.length === 0 ? ["All"] : updated;
    });
  };

  const toggleWishlist = (id: number, isWishlisted: boolean) => {
    setWishlistIds((prev) =>
      isWishlisted ? [...prev, id] : prev.filter((item) => item !== id)
    );
  };

  // Filter menu berdasarkan kategori dan kata kunci pencarian
  const filteredMenus = menuItems.filter((menu) => {
    const matchesCategory =
      selectedCategories.includes("All") ||
      selectedCategories.includes(menu.subtitle);

    const matchesSearch =
      menu.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      menu.description.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  return (
    <div className="flex flex-col gap-four px-11 py-five">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-semibold">Menu</h1>
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search Foods"
          className="text-sm font-normal border rounded-full px-three py-1.5 border-theme-selected focus:outline-none hover:ring-3 focus:ring-3 ring-theme-selected"
        />
      </div>

      <div className="flex flex-wrap gap-2">
        {badgeItems.map((item) => (
          <CheckBadge
            key={item.label}
            label={item.label}
            checked={selectedCategories.includes(item.label)}
            onChange={(isChecked) => handleCategoryChange(item.label, isChecked)}
          />
        ))}
      </div>

      {filteredMenus.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-four">
          {filteredMenus.map((menu) => (
            <CardMenu
              key={menu.id}
              title={menu.title}
              subtitle={menu.subtitle}
              description={menu.description}
              price={menu.price}
              stock={menu.stock}
              image={menu.image}
              isWishlisted={wishlistIds.includes(menu.id)}
              onToggleWishlist={(status) => toggleWishlist(menu.id, status)}
              onAdd={() => console.log("Tambah ke keranjang:", menu.title)}
            />
          ))}
        </div>
      ) : (
        <div className="py-12 text-center text-sm font-mono text-gray-500">
          Menu tidak ditemukan untuk pencarian "{searchQuery}".
        </div>
      )}
    </div>
  );
}