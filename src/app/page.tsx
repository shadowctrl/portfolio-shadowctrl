import type { Metadata } from "next"
import Hero from "../components/sections/Hero"
import About from "../components/sections/About"
import Services from "../components/sections/Services"
import Portfolio from "../components/sections/Portfolio"
import Testimonials from "../components/sections/Testimonials"
import Skills from "../components/sections/Skills"
import Contact from "../components/sections/Contact"
import CTA from "../components/sections/CTA"

export const metadata: Metadata = {
  title: "Shadowctrl - Full Stack Developer & Founder of Asynx Private Limited",
  description:
    "Top-rated freelance full stack developer specializing in Next.js, React, and scalable web solutions. Founder of Asynx Private Limited with 4+ years of experience building end-to-end ecommerce, SaaS applications, and custom web solutions.",
  keywords: [
    "shadowctrl",
    "full stack developer",
    "next.js expert",
    "react developer",
    "freelance developer",
    "upwork top rated",
    "asynx private limited",
    "web development services",
    "ecommerce development",
    "saas applications",
    "custom web solutions",
    "business automation",
    "scalable applications",
  ],
  openGraph: {
    title: "Shadowctrl - Full Stack Developer & Founder of Asynx Private Limited",
    description: "Top-rated freelance full stack developer specializing in Next.js, React, and scalable web solutions.",
    url: "https://shadowctrl.me",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Shadowctrl Portfolio",
      },
    ],
  },
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <Skills />
      <Testimonials />
      <CTA />
      <Contact />
    </>
  )
}
