import type { Metadata } from "next";
import { Archivo, IBM_Plex_Mono, Newsreader } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

// Fonts are self-hosted by next/font at build time: no render-blocking
// third-party font request, font-display: swap on every face.
const newsreader = Newsreader({
  subsets: ["latin"],
  weight: "variable",
  style: "normal",
  axes: ["opsz"],
  display: "swap",
  variable: "--font-newsreader",
});
// The italic face serves the one italic phrase per headline, so it is not
// preloaded: the roman face and body font reach the first paint sooner.
const newsreaderItalic = localFont({
  src: "./fonts/newsreader-italic.woff2",
  style: "italic",
  weight: "200 800",
  display: "swap",
  preload: false,
  variable: "--font-newsreader-italic",
});
const archivo = Archivo({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  display: "swap",
  variable: "--font-archivo",
});
const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
  variable: "--font-plex-mono",
});

export const metadata: Metadata = {
  title: "US-Squared Research Institute — Protecting Adolescent Brilliance",
  description:
    "Justice-centered research, programs, and systems for youth, families, and the communities that hold them. US-Squared Research Institute is a 501(c)(3). EIN 92-3221304.",
  keywords: [
    "US-Squared",
    "USSQ",
    "US-Squared Research Institute",
    "adolescent",
    "youth programs",
    "nonprofit",
    "justice-centered",
    "Atlas ERA",
    "Atlas Academy",
    "Feelings Unplugged",
    "Altered Earth Press",
    "Sparent Science",
  ],
  openGraph: {
    title: "US-Squared Research Institute",
    description: "Protecting adolescent brilliance through justice-centered research, programs, and systems.",
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
    <html
      lang="en"
      data-venture="ussq"
      className={`h-full ${newsreader.variable} ${newsreaderItalic.variable} ${archivo.variable} ${plexMono.variable}`}
    >
      <body className="min-h-full">{children}</body>
    </html>
  );
}
