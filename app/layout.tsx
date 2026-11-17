import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Silk Festival 2026 | Directory Map",
  description:
    "แผนที่ไดเรกทอรี Silk Festival 2026 พร้อมตำแหน่งโซนอาหาร นิทรรศการ แฟชั่นรันเวย์ และเวที",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="th">
      <body>{children}</body>
    </html>
  );
}
