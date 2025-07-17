"use client"

import { useEffect, useState } from "react"

export default function NavbarClient() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <style jsx>{`
      header {
        background: ${scrolled ? "rgba(15, 15, 35, 0.98)" : "rgba(15, 15, 35, 0.95)"};
        backdrop-filter: blur(${scrolled ? "20px" : "12px"});
        border-bottom: 1px solid ${scrolled ? "rgba(139, 92, 246, 0.3)" : "rgba(55, 65, 81, 0.5)"};
      }
    `}</style>
  )
}
