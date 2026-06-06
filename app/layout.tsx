import type { Metadata } from "next";
import { Geist, Playfair_Display, Inter } from "next/font/google"
import "./globals.css";
import Header from "./components/header";
import Footer from "./components/footer";

const geistSans = Geist({ subsets: ["latin"] })
const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["400", "500", "600", "700", "800", "900"],
})
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: "Zaman Capital Group | Premium Investment Opportunities",
  description:
    "Backed by deep industry expertise, we specialize in multifamily acquisitions, value-add opportunities, and institutional-grade investments.",
  // --- ADDED CODE START ---
  icons: {
    icon: "/images/deals/logo-zaman.jpg",
  },
  // --- ADDED CODE END ---
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
    >
      <body className={`${geistSans.className} ${playfairDisplay.variable} ${inter.variable} bg-black text-platinum flex flex-col min-h-screen`}>
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
