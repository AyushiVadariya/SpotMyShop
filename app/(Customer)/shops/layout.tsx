// app/(Customer)/shops/layout.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SpotMyShop - Shops",
  description: "Explore various shops available on SpotMyShop to find the best deals.",
};

export default function ShopsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
