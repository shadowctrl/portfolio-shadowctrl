import { Inter } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";
import Navbar from "../components/navbar/navbar.jsx";
import Footer from "../components/footer/footer.jsx";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
      <GoogleAnalytics gaId="G-6LSJFNRLP1" />
      <Analytics />
    </html>
  );
}
