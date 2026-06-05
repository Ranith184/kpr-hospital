import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FloatingEmergencyButton from "@/components/layout/FloatingEmergencyButton";

export const metadata: Metadata = {
  title: "KPR Multispeciality Hospital | Best Hospital in Karimnagar",
  description: "KPR Multispeciality Hospital is Karimnagar's most trusted hospital offering 24/7 emergency care, 20+ specialities, and 100+ expert doctors.",
};

const hospitalSchema = {
  "@context": "https://schema.org",
  "@type": "Hospital",
  "name": "KPR Multispeciality Hospital",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Main Road",
    "addressLocality": "Karimnagar",
    "addressRegion": "Telangana",
    "postalCode": "505001",
    "addressCountry": "IN"
  },
  "telephone": "+91-9999999999",
  "openingHours": "Mo-Su 00:00-24:00",
  "hasMap": "https://maps.google.com/?q=KPR+Hospital+Karimnagar"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="h-full antialiased"
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(hospitalSchema) }}
        />
      </head>
      <body className="min-h-full flex flex-col font-sans bg-background text-foreground">
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
        <FloatingEmergencyButton />
      </body>
    </html>
  );
}
