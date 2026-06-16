import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Orient UBook — Investor & Developer Roadmap",
  description: "Investor landing and developer specification for the Orient UBook tourism concierge platform.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  );
}
