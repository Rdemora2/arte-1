"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Clock, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

function getWeekDays() {
  const today = new Date();
  const days = [];

  for (let i = 0; i < 7; i++) {
    const date = new Date(today);
    date.setDate(today.getDate() - today.getDay() + 1 + i); // Começa na segunda

    const dayNames = ["DOM", "SEG", "TER", "QUA", "QUI", "SEX", "SÁB"];
    const dayIndex = date.getDay();

    days.push({
      short: dayNames[dayIndex],
      dayOfMonth: date.getDate(),
      date: date,
      isToday: date.toDateString() === today.toDateString(),
    });
  }

  return days;
}

const programacao = [
  {
    time: "06:00",
    title: "Despertar Cultural",
    description: "Matinal com notícias do mundo das artes",
    image:
      "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=400&h=225&fit=crop",
    duration: "2h",
  },
  {
    time: "08:00",
    title: "Documentário: Grandes Mestres",
    description: "A vida e obra de Leonardo da Vinci",
    image:
      "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=400&h=225&fit=crop",
    duration: "1h30",
  },
  {
    time: "10:00",
    title: "Arte Brasileira",
    description: "Explorando a riqueza artística nacional",
    image:
      "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=400&h=225&fit=crop",
    duration: "1h",
  },
  {
    time: "12:00",
    title: "Cinema Clássico",
    description: "Fellini: La Dolce Vita",
    image:
      "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=400&h=225&fit=crop",
    duration: "2h30",
  },
  {
    time: "15:00",
    title: "Música & Arte",
    description: "Jazz e suas influências na arte moderna",
    image:
      "https://images.unsplash.com/photo-1511192336575-5a79af67a629?w=400&h=225&fit=crop",
    duration: "1h",
  },
  {
    time: "18:00",
    title: "Arquitetura pelo Mundo",
    description: "As maravilhas da arquitetura gótica",
    image:
      "https://images.unsplash.com/photo-1431576901776-e539bd916ba2?w=400&h=225&fit=crop",
    duration: "1h",
  },
  {
    time: "20:00",
    title: "Ópera em Alta Definição",
    description: "La Traviata - Metropolitan Opera",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=225&fit=crop",
    duration: "3h",
  },
  {
    time: "23:00",
    title: "Cinema de Arte",
    description: "O filme premiado da semana",
    image:
      "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=400&h=225&fit=crop",
    duration: "2h",
  },
];

export function Programacao() {
  const [weekDays, setWeekDays] = useState<ReturnType<typeof getWeekDays>>([]);
  const [selectedDay, setSelectedDay] = useState(0);

  useEffect(() => {
    const days = getWeekDays();
    setWeekDays(days);
    const todayIndex = days.findIndex((d) => d.isToday);
    if (todayIndex >= 0) {
      setSelectedDay(todayIndex);
    }
  }, []);

  return (
    <section
      id="programacao"
      className="relative bg-neutral-50 py-20 sm:py-28 overflow-hidden"
    >
      {/* Background Decoration */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-1/4 h-px w-1/2 bg-gradient-to-r from-transparent via-[#B01E23]/20 to-transparent" />
        <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-[#B01E23]/5 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-neutral-200/50 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-14 text-center scroll-fade-up">
          <span className="mb-4 inline-block text-sm font-semibold tracking-widest text-[#B01E23] uppercase">
            Grade Completa
          </span>
          <h2 className="mb-4 text-4xl font-bold text-neutral-900 sm:text-5xl">
            Programação
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-neutral-600 leading-relaxed">
            Confira a grade completa do Canal Arte 1 e não perca nenhum
            programa.
          </p>
        </div>

        {/* Day Selector */}
        <div className="mb-10 flex items-center justify-center gap-2 scroll-fade-up scroll-delay-200">
          <Button
            variant="ghost"
            size="icon"
            className="h-10 w-10 shrink-0 rounded-full text-neutral-600 transition-all duration-300 hover:text-neutral-900 hover:bg-neutral-200"
            aria-label="Dias anteriores"
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>

          <div className="flex gap-2 overflow-x-auto py-2 sm:gap-2">
            {weekDays.map((day, index) => (
              <button
                key={`${day.short}-${day.dayOfMonth}`}
                onClick={() => setSelectedDay(index)}
                className={cn(
                  "group relative flex min-w-[60px] flex-col items-center rounded-xl px-3 py-2 text-center transition-all duration-300 sm:min-w-[70px] sm:px-4 sm:py-3",
                  selectedDay === index
                    ? "bg-[#B01E23] text-white shadow-lg shadow-[#B01E23]/30 scale-105"
                    : day.isToday
                      ? "bg-neutral-200 text-neutral-900 hover:bg-neutral-300"
                      : "bg-white text-neutral-600 hover:bg-neutral-100 shadow-sm",
                )}
              >
                <span className="text-[10px] font-bold uppercase tracking-wide sm:text-xs">
                  {day.short}
                </span>
                <span
                  className={cn(
                    "text-base font-bold sm:text-lg",
                    selectedDay === index ? "text-white" : "text-neutral-900",
                  )}
                >
                  {day.dayOfMonth}
                </span>
                {day.isToday && (
                  <span
                    className={cn(
                      "mt-0.5 text-[9px] font-medium uppercase tracking-wider",
                      selectedDay === index
                        ? "text-white/80"
                        : "text-neutral-500",
                    )}
                  >
                    Hoje
                  </span>
                )}
              </button>
            ))}
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="h-10 w-10 shrink-0 rounded-full text-neutral-600 transition-all duration-300 hover:text-neutral-900 hover:bg-neutral-200"
            aria-label="Próximos dias"
          >
            <ChevronRight className="h-5 w-5" />
          </Button>
        </div>

        {/* Schedule Grid */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {programacao.map((programa, index) => (
            <article
              key={index}
              className={cn(
                "scroll-fade-up group relative overflow-hidden rounded-2xl bg-white shadow-sm transition-all duration-500 hover:shadow-xl hover:-translate-y-2",
                `scroll-delay-${Math.min((index + 3) * 100, 800)}`,
              )}
            >
              {/* Image Container */}
              <div className="relative aspect-video overflow-hidden">
                <Image
                  src={programa.image}
                  alt={programa.title}
                  fill
                  sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition-all duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                {/* Duration Badge */}
                <div className="absolute bottom-3 left-3 flex items-center gap-1.5 rounded-full bg-black/70 px-3 py-1.5 text-xs font-medium text-white backdrop-blur-sm">
                  <Clock className="h-3 w-3" />
                  {programa.duration}
                </div>
              </div>

              {/* Content */}
              <div className="p-4">
                <div className="mb-2 flex items-center gap-2">
                  <span className="text-sm font-bold text-[#B01E23]">
                    {programa.time}
                  </span>
                  <span className="h-1 w-1 rounded-full bg-neutral-300" />
                  <span className="text-xs text-neutral-500">Ao vivo</span>
                </div>
                <h3 className="mb-1.5 font-bold text-neutral-900 line-clamp-1 group-hover:text-[#B01E23] transition-colors duration-300">
                  {programa.title}
                </h3>
                <p className="text-sm text-neutral-600 line-clamp-2 leading-relaxed">
                  {programa.description}
                </p>
              </div>

              {/* Hover Border */}
              <div className="absolute inset-0 rounded-2xl border-2 border-[#B01E23] opacity-0 transition-opacity duration-300 group-hover:opacity-100 pointer-events-none" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
