"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const featuredContent = [
  {
    id: 1,
    title: "Arte em movimento, cultura em foco",
    description:
      "No Arte 1, cada faixa da programação abre novas leituras sobre imagem, memória e criação contemporânea.",
    image:
      "https://images.unsplash.com/photo-1541367777708-7905fe3296c0?w=1920&h=1080&fit=crop",
    category: "Em destaque",
  },
  {
    id: 2,
    title: "Curadoria que conecta linguagens",
    description:
      "Da arte urbana ao audiovisual experimental, nossa seleção valoriza vozes plurais e olhares que expandem repertórios.",
    image:
      "https://images.unsplash.com/photo-1507838153414-b4b713384a76?w=1920&h=1080&fit=crop",
    category: "Especial",
  },
  {
    id: 3,
    title: "Estreias, séries e documentários",
    description:
      "Uma grade pensada para quem busca conteúdo cultural com profundidade, estética e conversa com o presente.",
    image:
      "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=1920&h=1080&fit=crop",
    category: "Programação",
  },
  {
    id: 4,
    title: "Amostradas",
    description: "De 24 de março a 28 de junho. Em Belém do Pará",
    image: "/images/Amostradas/Medias/banner_hero_Amostradas.png",
    category: "Especial",
    ctaLabel: "saber mais",
    ctaHref: "/materia/amostradas",
  },
];

export function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  const goToSlide = useCallback(
    (index: number) => {
      if (isTransitioning) return;
      setIsTransitioning(true);
      setCurrentSlide(index);
      setTimeout(() => setIsTransitioning(false), 800);
    },
    [isTransitioning],
  );

  const nextSlide = useCallback(() => {
    goToSlide((currentSlide + 1) % featuredContent.length);
  }, [currentSlide, goToSlide]);

  const prevSlide = useCallback(() => {
    goToSlide(
      (currentSlide - 1 + featuredContent.length) % featuredContent.length,
    );
  }, [currentSlide, goToSlide]);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(nextSlide, 6000);
    return () => clearInterval(timer);
  }, [nextSlide, isPaused]);

  return (
    <section
      id="inicio"
      className="relative h-screen w-full overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Slides */}
      {featuredContent.map((item, index) => (
        <div
          key={item.id}
          className={cn(
            "absolute inset-0 transition-all duration-1000 ease-out",
            index === currentSlide
              ? "opacity-100 scale-100"
              : "opacity-0 scale-105",
          )}
        >
          <Image
            src={item.image}
            alt={item.title}
            fill
            className="object-cover"
            priority={index === 0}
            loading={index === 0 ? undefined : index === 1 ? "eager" : "lazy"}
            fetchPriority={index <= 1 ? "high" : "auto"}
            sizes="100vw"
            quality={80}
          />
          {/* Overlay Gradients */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/50 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/30" />
        </div>
      ))}

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute top-1/4 -left-20 h-96 w-96 rounded-full bg-[#B01E23]/10 blur-3xl animate-pulse" 
          style={{ animationDuration: "8s" }} 
        />
        <div
          className="absolute bottom-1/4 -right-20 h-80 w-80 rounded-full bg-[#B01E23]/5 blur-3xl animate-pulse"
          style={{ animationDuration: "12s", animationDelay: "2s" }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 flex h-full items-center">
        <div className="mx-auto w-full max-w-7xl translate-y-8 px-6 sm:px-8 md:translate-y-14 lg:translate-y-24 lg:px-12">
          <div className="max-w-2xl ml-8 pr-16 sm:ml-12 sm:pr-20 lg:ml-16 lg:pr-0">
            {/* Category Badge */}
            <span
              className={cn(
                "mb-6 inline-flex items-center gap-2 rounded-full bg-gradient-to-b from-[#d4232c] to-[#a0181e] border border-white/20 px-4 py-1.5 text-[11px] sm:text-xs font-bold tracking-[0.2em] text-white uppercase transition-all duration-1000 ease-out",
                "shadow-[0_8px_20px_-6px_rgba(176,30,35,0.5)]",
                currentSlide >= 0
                  ? "translate-y-0 opacity-100"
                  : "translate-y-4 opacity-0",
              )}
            >
              <span className="h-1.5 w-1.5 rounded-full bg-white opacity-90 shadow-[0_0_8px_white]" />
              {featuredContent[currentSlide].category}
            </span>

            {/* Title */}
            <h1
              key={`title-${currentSlide}`}
              className="mb-6 text-[40px] font-extrabold tracking-tighter leading-[0.95] text-white sm:text-6xl sm:leading-[0.93] lg:text-[88px] lg:leading-[0.9] text-balance drop-shadow-2xl animate-fade-in-up"
            >
              {featuredContent[currentSlide].title}
            </h1>

            {/* Description */}
            <p
              key={`desc-${currentSlide}`}
              className="text-lg text-white/80 sm:text-xl leading-relaxed text-pretty animate-fade-in-up"
              style={{ animationDelay: "150ms" }}
            >
              {featuredContent[currentSlide].description}
            </p>

            {featuredContent[currentSlide].ctaHref &&
              featuredContent[currentSlide].ctaLabel && (
                <Link
                  href={featuredContent[currentSlide].ctaHref}
                  className="mt-8 inline-flex items-center rounded-full bg-gradient-to-b from-[#d4232c] to-[#a0181e] px-8 py-3.5 text-[13px] font-bold uppercase tracking-[0.2em] text-white shadow-[0_15px_30px_-10px_rgba(176,30,35,0.5)] border border-white/15 transition-all duration-500 ease-out hover:scale-[0.98] hover:shadow-[0_5px_15px_-5px_rgba(176,30,35,0.7)]"
                >
                  {featuredContent[currentSlide].ctaLabel}
                </Link>
              )}
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <div className="absolute top-1/2 left-4 right-4 z-20 -translate-y-1/2 hidden sm:flex justify-between pointer-events-none sm:left-6 sm:right-6">
        <Button
          variant="ghost"
          size="icon"
          onClick={prevSlide}
          className="group h-12 w-12 rounded-full bg-white/10 border border-white/20 text-white backdrop-blur-xl transition-all duration-500 ease-out hover:bg-white/20 hover:scale-[1.05] pointer-events-auto sm:h-14 sm:w-14 shadow-xl"
          aria-label="Slide anterior"
        >
          <ChevronLeft className="h-5 w-5 transition-transform duration-500 ease-out group-hover:-translate-x-0.5 sm:h-6 sm:w-6" strokeWidth={1.5} />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          onClick={nextSlide}
          className="group h-12 w-12 rounded-full bg-white/10 border border-white/20 text-white backdrop-blur-xl transition-all duration-500 ease-out hover:bg-white/20 hover:scale-[1.05] pointer-events-auto sm:h-14 sm:w-14 shadow-xl"
          aria-label="Próximo slide"
        >
          <ChevronRight className="h-5 w-5 transition-transform duration-500 ease-out group-hover:translate-x-0.5 sm:h-6 sm:w-6" strokeWidth={1.5} />
        </Button>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 gap-3">
        {featuredContent.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className="group relative h-2.5 overflow-hidden rounded-full transition-all duration-500"
            style={{ width: index === currentSlide ? "2.5rem" : "0.625rem" }}
            aria-label={`Ir para slide ${index + 1}`}
          >
            <span className="absolute inset-0 bg-white/30" />
            {index === currentSlide && (
              <span
                className="absolute inset-0 bg-[#B01E23] origin-left animate-progress"
                style={{ animationDuration: "6s" }}
              />
            )}
          </button>
        ))}
      </div>

      {/* Scroll Indicator - Portuguese */}
      <div className="absolute bottom-8 right-8 z-20 hidden lg:block">
        <div className="flex flex-col items-center gap-2 text-white/50">
          <span className="text-xs font-medium tracking-widest uppercase">
            Rolar
          </span>
          <div className="h-10 w-px bg-gradient-to-b from-white/50 to-transparent animate-bounce" />
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes progress {
          from {
            transform: scaleX(0);
          }
          to {
            transform: scaleX(1);
          }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }
        .animate-progress {
          animation: progress linear forwards;
        }
      `}</style>
    </section>
  );
}
