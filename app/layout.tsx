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

const themeScript = `
try {
  var theme = localStorage.getItem("deven-portfolio-theme");
  if (theme !== "day" && theme !== "night") {
    theme = "day";
  }
  document.documentElement.dataset.theme = theme;
  document.documentElement.style.colorScheme = theme === "night" ? "dark" : "light";
} catch (error) {}
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={sketchBlock.variable} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
