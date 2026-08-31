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
  metadataBase: new URL("https://avx-export-website-fxsv.vercel.app"),

  title: "AVX Export | Avocado Exporter in Yercaud, India",

  description:
    "AVX Export is a fresh avocado supplier and exporter from Yercaud, Salem, Tamil Nadu, India, supplying premium Indian avocados for wholesale, domestic and export buyers.",

  keywords: [
    "AVX Export",
    "avocado exporter in Yercaud",
    "Yercaud avocado supplier",
    "avocado exporter in India",
    "avocado supplier in Salem",
    "avocado exporter in Tamil Nadu",
    "fresh avocado supplier India",
    "fresh Indian avocados",
    "Yercaud fresh avocado",
    "avocado wholesale supplier",
  ],

  authors: [{ name: "AVX Export" }],
  creator: "AVX Export",
  publisher: "AVX Export",

  alternates: {
    canonical: "/",
  },

  verification: {
    google: "cMe011cZiIDYAcx45LBGHqLIexj1W3XCFXU1qQkjSuE",
  },

  openGraph: {
    title: "AVX Export | Avocado Exporter in Yercaud, India",
    description:
      "Premium fresh avocados from Yercaud, Salem, Tamil Nadu, India for wholesale supply, domestic buyers and export customers.",
    url: "https://avx-export-website-fxsv.vercel.app/",
    siteName: "AVX Export",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "/image/avocado-hero.jpg",
        width: 1200,
        height: 630,
        alt: "Premium fresh Indian avocados from Yercaud",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "AVX Export | Avocado Exporter in Yercaud, India",
    description:
      "Premium fresh avocados from Yercaud, India for wholesale supply, domestic buyers and export customers.",
    images: ["/image/avocado-hero.jpg"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({
  children,
}: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
      </body>
    </html>
  );
}