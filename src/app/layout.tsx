import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import FloatingReserveButton from "@/components/FloatingReserveButton";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

// JSON-LD structured data for Cartersville, GA
const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "HairSalon",
  "name": "Locks By Lindsay",
  "image": "https://locks-by-lindsay.placeholder.com/logo.jpg",
  "description": "Lived-in Color & Extension Authority in Bartow County.",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Cartersville",
    "addressRegion": "GA",
    "postalCode": "30120",
    "addressCountry": "US"
  },
  "areaServed": [
    { "@type": "City", "name": "Cartersville" },
    { "@type": "PostalCode", "postalCode": "30120" },
    { "@type": "PostalCode", "postalCode": "30121" },
    { "@type": "PostalCode", "postalCode": "30137" }
  ],
  "telephone": "+1-555-0123",
  "url": "https://locks-by-lindsay.placeholder.com"
};

export const metadata: Metadata = {
  title: "Locks By Lindsay | Lived-in Color & Extension Authority",
  description: "Specialist hair studio in Cartersville, GA. The Lived-in Color & Extension Authority for Bartow County.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body className={`${inter.variable} ${playfair.variable}`}>
        {children}
        <FloatingReserveButton />
      </body>
    </html>
  );
}
