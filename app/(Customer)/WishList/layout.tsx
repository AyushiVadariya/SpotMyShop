import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SpotMyShop - Wishlists",
  description: "Save your favorite products to your wishlist and shop them anytime on SpotMyShop.",
};

export default function WishlistsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
