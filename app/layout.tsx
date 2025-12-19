import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: 'swap', // Optimization: ensures text is visible during font load
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: 'swap',
});

// Viewport configuration (Separate from Metadata in Next.js 14+)
export const viewport: Viewport = {
  themeColor: "#082f49", // sky-950
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://skyspaceaviation.com"), // Change to your actual domain
  title: {
    default: "Sky Space Aviation & Legal Consultancy Firm | Law Space Beyond",
    template: "%s | Sky Space Aviation",
  },
  description: "Certified Law Professionals specializing in Airline Registration, Regulatory Compliance, and Aviation Legal Advisory. Trusted by 100K+ clients worldwide.",
  keywords: ["Aviation Law", "Airline Registration", "Legal Consultancy", "Aircraft Licensing", "Regulatory Compliance"],
  authors: [{ name: "Sky Space Aviation" }],
  creator: "Sky Space Aviation",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://skyspaceaviation.com",
    siteName: "Sky Space Aviation",
    title: "Sky Space Aviation & Legal Consultancy Firm",
    description: "Leading experts in aviation law and regulatory compliance. Navigating the skies with legal precision.",
    images: [
      {
        url: "/api/og", // <--- Point to your new API route
        width: 1200,
        height: 630,
        alt: "Sky Space Aviation & Legal Consultancy Firm - Law Space Beyond",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sky Space Aviation & Legal Consultancy",
    description: "Expert aviation legal counsel and consultancy services.",
    images: ["/api/og"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Structured Data for Google (Schema.org)
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LegalService",
    "name": "Sky Space Aviation & Legal Consultancy Firm",
    "image": "https://skyspaceaviation.com/logo.png",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "89/1, New West Monipur, Mirpur-2",
      "addressLocality": "Dhaka",
      "postalCode": "1216",
      "addressCountry": "BD"
    },
    "url": "https://skyspaceaviation.com",
    "telephone": "+8801712218542",
    "openingHours": "Mo-Fr 09:00-18:00",
    "description": "Specialists in aviation law, airline registration, and regulatory compliance."
  };

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* JSON-LD Structured Data Injection */}
        <Script
          id="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased selection:bg-sky-500 selection:text-white`}>
        {/* Accessibility: Skip to Content Link */}
        <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:z-[100] focus:p-4 focus:bg-white focus:text-sky-600">
          Skip to content
        </a>
        
        <Navbar />
        <main id="main-content">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}