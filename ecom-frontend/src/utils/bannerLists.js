import {
  FaBoxOpen,
  FaHome,
  FaShoppingCart,
  FaStore,
  FaThList,
} from "react-icons/fa";

export const bannerLists = [
  {
    id: 1,
    // Replaced 'https://embarkx.com/sample/placeholder.png' with a living room/sofa image (1200x500)
    image: "https://picsum.photos/id/165/1200/500",
    title: "Home Comfort",
    subtitle: "Living Room",
    description: "Upgrade your space with cozy and stylish sofas",
  },
  {
    id: 2,
    // Replaced 'https://embarkx.com/sample/placeholder.png' with a tech/TV image (1200x500)
    image: "https://picsum.photos/id/250/1200/500",
    title: "Entertainment Hub",
    subtitle: "Smart TV",
    description: "Experience the latest in home entertainment",
  },
  {
    id: 3,
    // Replaced 'https://embarkx.com/sample/placeholder.png' with a clothing/lifestyle image (1200x500)
    image: "https://picsum.photos/id/433/1200/500",
    title: "Playful Picks",
    subtitle: "Kids' Clothing",
    description: "Bright and fun styles for kids, up to 20% off",
  },
];

export const adminNavigation = [
  {
    name: "Dashboard",
    href: "/admin",
    icon: FaHome,
    current: true,
  },
  {
    name: "Orders",
    href: "/admin/orders",
    icon: FaShoppingCart,
  },
  {
    name: "Products",
    href: "/admin/products",
    icon: FaBoxOpen,
  },
  {
    name: "Categories",
    href: "/admin/categories",
    icon: FaThList,
  },
  {
    name: "Sellers",
    href: "/admin/sellers",
    icon: FaStore,
  },
];

export const sellerNavigation = [
  {
    name: "Orders",
    href: "/admin/orders",
    icon: FaShoppingCart,
    current: true,
  },
  {
    name: "Products",
    href: "/admin/products",
    icon: FaBoxOpen,
  },
];
