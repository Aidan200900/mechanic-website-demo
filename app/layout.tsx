import type { Metadata } from "next";
import { Inter, Black_Ops_One } from "next/font/google";
import "./globals.css";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const blackOpsOne = Black_Ops_One({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-display",
});

export const metadata: Metadata = {
  title: "VoltPro Electric | Licensed Electricians You Can Trust",
  description:
    "Austin's top-rated electricians. Residential, commercial, EV charging, panel upgrades & 24/7 emergency service. Free estimates. TX Lic. #ELEC-00123456.",
  openGraph: {
    title: "VoltPro Electric | Licensed Electricians You Can Trust",
    description:
      "Austin's top-rated electricians. Free estimates. 24/7 emergency service.",
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
      <body className={`${inter.variable} ${blackOpsOne.variable} antialiased`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
