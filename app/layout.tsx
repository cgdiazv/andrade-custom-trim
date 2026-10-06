import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
});

import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Andrade Trim and Cabinet | Dallas & Fort Worth Custom Carpentry",
  description:
    "Expert trim carpentry and custom cabinet installation in Dallas & Fort Worth. High-quality craftsmanship for homes and businesses.",
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  name: "Andrade Custom Trim",
  url: "https://andradecustomtrim.com",
  logo: "https://andradecustomtrim.com/logo.webp",
  image: "https://andradecustomtrim.com/images/header01.webp",
  telephone: "+1-469-358-1011",
  email: "info@andradecustomtrim.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "1329 County Road 278, Building 475A",
    addressLocality: "Melissa",
    addressRegion: "TX",
    postalCode: "75454",
    addressCountry: "US",
  },
  areaServed: [
    "Melissa",
    "Dallas",
    "Fort Worth",
    "Allen",
    "Plano",
    "Frisco",
    "McKinney",
    "Prosper",
  ],
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
      opens: "09:00",
      closes: "19:00",
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} font-sans h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema),
          }}
        />
      </head>
      <body
        className="min-h-full flex flex-col bg-white text-gray-900 font-sans"
        suppressHydrationWarning
      >
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
