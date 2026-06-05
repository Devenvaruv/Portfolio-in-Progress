import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const sketchBlock = localFont({
  src: "../fonts/Sketch_Block.ttf",
  variable: "--font-sketch-block",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Deven Varu | Software Engineer",
  description: "Sketch-style portfolio for Deven Varu, software engineer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={sketchBlock.variable}>
      <body>{children}</body>
    </html>
  );
}
