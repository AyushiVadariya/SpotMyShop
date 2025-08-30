// app/(Customer)/contributors/layout.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SpotMyShop - Contributors",
  description: "Meet the amazing contributors of SpotMyShop who make it a success!",
};

export default function ContributorsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
