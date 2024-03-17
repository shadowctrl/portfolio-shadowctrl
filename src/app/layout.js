import { Inter } from "next/font/google";
import localFont from "next/font/local";
import { GoogleAnalytics } from "@next/third-parties/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";
import Navbar from "../components/navbar/navbar.jsx";
import Footer from "../components/footer/footer.jsx";

const inter = Inter({ subsets: ["latin"] });
const mars = localFont({
  src: [
    {
      path: "../fonts/Mars/Mars Bold.otf",
      weight: "900",
      style: "normal",
    },
    {
      path: "../fonts/Mars/Mars Thin.otf",
      weight: "100",
      style: "normal",
    },
    {
      path: "../fonts/Mars/Mars.otf",
    },
  ],
  variable: "--font-mars",
});

const taurus = localFont({
  src: [
    {
      path: "../fonts/taurus-mono-outline/Taurus-Mono-Outline-Bold.otf",
      weight: "900",
      style: "normal",
    },
    {
      path: "../fonts/taurus-mono-outline/Taurus-Mono-Outline-Regular.otf",
      weight: "100",
      style: "normal",
    },
  ],
  variable: "--font-taurus",
});
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} ${mars.variable} ${taurus.variable}`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
      <GoogleAnalytics gaId="G-6LSJFNRLP1" />
      <Analytics />
    </html>
  );
}
