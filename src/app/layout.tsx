import type { Metadata } from "next";
import "./globals.css";

// SEO & Meta Tags Configuration
export const metadata: Metadata = {
  title: "Gamify | Stop Studying, Start Leveling Up",
  description: "A progression-based gamified learning platform. Conquer gates, master skill trees, and defeat the final boss to earn your certification.",
  openGraph: {
    title: "Gamify | The Future of Certification Prep",
    description: "Traditional learning is broken. Turn your certification prep into a data-driven adventure.",
    url: "https://gamify.app", // Replace with your actual domain later
    siteName: "Gamify",
    images: [
      {
        url: "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?q=80&w=1200&auto=format&fit=crop", // OG Image placeholder
        width: 1200,
        height: 630,
        alt: "Gamify Platform Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}