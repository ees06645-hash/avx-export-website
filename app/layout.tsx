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
  title: "AVX Export | Premium Indian Avocados from Yercaud",
  description:
    "AVX Export supplies premium Indian avocados from Yercaud, Salem, Tamil Nadu for wholesale, domestic supply and export buyers.",
  keywords: [
    "AVX Export",
    "Indian avocado exporter",
    "avocado exporter India",
    "Yercaud avocados",
    "fresh avocado wholesale India",
    "avocado export from India",
    "premium Indian avocados",
  ],
  authors: [{ name: "AVX Export" }],
  creator: "AVX Export",
  metadataBase: new URL("https://avx-export-website-fxsv.vercel.app"),
  openGraph: {
    title: "AVX Export | Premium Indian Avocados",
    description:
      "Premium Indian avocados from Yercaud for wholesale, supply and export buyers.",
    url: "https://avx-export-website-fxsv.vercel.app",
    siteName: "AVX Export",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
