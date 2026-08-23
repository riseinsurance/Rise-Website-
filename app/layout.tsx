import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CornerWidget } from "@/components/layout/CornerWidget";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

// Matches the geometric sans used in the Rise wordmark (~/Desktop/Rise Logos)
// so headlines flow with the logo instead of contrasting against it.
const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: {
    default: "Rise Insurance Agency | Lubbock & West Texas",
    template: "%s | Rise Insurance Agency",
  },
  description:
    "Independent insurance for homeowners, families, and small businesses in Lubbock and West Texas. A real local team, not a call center.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <CornerWidget />
      </body>
    </html>
  );
}
