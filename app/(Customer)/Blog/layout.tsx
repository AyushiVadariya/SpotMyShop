// app/(Customer)/Blog/layout.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SpotMyShop - Blog",
  description: "Stay updated with the latest shopping trends, tips, and insights on the SpotMyShop blog.",
};

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}