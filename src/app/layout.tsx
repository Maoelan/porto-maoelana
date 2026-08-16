import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Maulana Muhammad | AI/ML & Automation Engineer",
  description: "Portfolio of Maulana Muhammad. AI/ML advisory, 4000+ code reviews, and impact-driven automation projects.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground selection:bg-accent selection:text-white relative`}
      >
        {/* Background Grid Pattern with Radial Gradient Mask */}
        <div className="fixed inset-0 z-[-1] h-full w-full bg-background bg-grid-white">
          <div className="absolute inset-0 pointer-events-none bg-background [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        </div>
        {children}
      </body>
    </html>
  );
}
