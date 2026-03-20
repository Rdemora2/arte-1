"use client"

import { useState, useEffect } from "react"
import { ArrowUp } from "lucide-react"
import { cn } from "@/lib/utils"

export function BackToTop() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 400)
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <button
      onClick={scrollToTop}
      className={cn(
        "fixed bottom-6 right-6 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-[#B01E23] text-white shadow-lg shadow-[#B01E23]/30 transition-all duration-500 hover:bg-[#8a171c] hover:scale-110 hover:shadow-xl hover:shadow-[#B01E23]/40",
        isVisible
          ? "translate-y-0 opacity-100"
          : "translate-y-16 opacity-0 pointer-events-none"
      )}
      aria-label="Voltar ao topo"
    >
      <ArrowUp className="h-5 w-5 transition-transform duration-300 group-hover:-translate-y-0.5" />
    </button>
  )
}
