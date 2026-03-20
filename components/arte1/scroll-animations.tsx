"use client"

import { useEffect } from "react"

export function ScrollAnimations() {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px"
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("scroll-visible")
          // Unobserve after animation to prevent re-triggering
          observer.unobserve(entry.target)
        }
      })
    }, observerOptions)

    // Observe all elements with scroll animation classes
    const animatedElements = document.querySelectorAll(
      ".scroll-fade-up, .scroll-fade-in, .scroll-fade-left, .scroll-fade-right, .scroll-scale"
    )
    animatedElements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <style jsx global>{`
      /* Base states for scroll animations */
      .scroll-fade-up {
        opacity: 0;
        transform: translateY(40px);
        transition: opacity 0.8s ease-out, transform 0.8s ease-out;
      }
      
      .scroll-fade-in {
        opacity: 0;
        transition: opacity 0.8s ease-out;
      }
      
      .scroll-fade-left {
        opacity: 0;
        transform: translateX(-40px);
        transition: opacity 0.8s ease-out, transform 0.8s ease-out;
      }
      
      .scroll-fade-right {
        opacity: 0;
        transform: translateX(40px);
        transition: opacity 0.8s ease-out, transform 0.8s ease-out;
      }
      
      .scroll-scale {
        opacity: 0;
        transform: scale(0.95);
        transition: opacity 0.8s ease-out, transform 0.8s ease-out;
      }
      
      /* Visible states */
      .scroll-visible.scroll-fade-up,
      .scroll-visible.scroll-fade-in,
      .scroll-visible.scroll-fade-left,
      .scroll-visible.scroll-fade-right,
      .scroll-visible.scroll-scale {
        opacity: 1;
        transform: translateY(0) translateX(0) scale(1);
      }
      
      /* Stagger delays */
      .scroll-delay-100 { transition-delay: 100ms; }
      .scroll-delay-200 { transition-delay: 200ms; }
      .scroll-delay-300 { transition-delay: 300ms; }
      .scroll-delay-400 { transition-delay: 400ms; }
      .scroll-delay-500 { transition-delay: 500ms; }
      .scroll-delay-600 { transition-delay: 600ms; }
      .scroll-delay-700 { transition-delay: 700ms; }
      .scroll-delay-800 { transition-delay: 800ms; }
    `}</style>
  )
}
