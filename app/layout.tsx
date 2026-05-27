import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "US-Squared Research Institute — Protecting Adolescent Brilliance",
  description:
    "Justice-centered programs and systems for youth, families, and the communities that hold them. A US-Squared Research Institute initiative. EIN 92-3221304.",
  keywords: [
    "US-Squared",
    "USSQ",
    "adolescent",
    "youth programs",
    "nonprofit",
    "justice-centered",
    "BASEops",
    "Atlas Academy",
    "Altered Earth Press",
    "Sparent Science",
  ],
  openGraph: {
    title: "US-Squared Research Institute",
    description: "Protecting adolescent brilliance through justice-centered programs and systems.",
    url: "https://us-squared.org",
    siteName: "US-Squared Research Institute",
    locale: "en_US",
    type: "website",
  },
  metadataBase: new URL("https://us-squared.org"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className="min-h-full bg-[#0E0E0E] text-[#F4F1EC]">{children}</body>
    </html>
  );
}
