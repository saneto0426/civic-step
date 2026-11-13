import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CivicStep",
  description: "青山大学ボランティアマッチング",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
