"use client";

import Image from "next/image";
import { Tv, Monitor, Satellite } from "lucide-react";
import { cn } from "@/lib/utils";

const operadoras = [
  {
    nome: "NewcoPlay",
    canal: "Streaming",
    tipo: "streaming",
    iconImage: "/images/newco-play.png",
    iconAlt: "NewcoPlay",
    href: "https://newcoplay.com.br/",
  },
  { nome: "Amazon Prime Video", canal: "Streaming", tipo: "streaming" },
  { nome: "Vivo TV", canal: "102 e 555", tipo: "tv" },
  { nome: "Claro TV", canal: "553", tipo: "tv" },
  { nome: "Oi", canal: "31", tipo: "tv" },
  { nome: "Sky", canal: "81", tipo: "satelite" },
  { nome: "GVT", canal: "84", tipo: "tv" },
  { nome: "Net", canal: "553", tipo: "tv" },
];

export function OndeAssistir() {
  const getIcon = (tipo: string) => {
    switch (tipo) {
      case "streaming":
        return Monitor;
      case "satelite":
        return Satellite;
      default:
        return Tv;
    }
  };

  return (
    <section
      id="onde-assistir"
      className="relative bg-neutral-900 py-20 md:py-28 overflow-hidden"
    >
      {/* Background Decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#B01E23]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-[#B01E23]/5 rounded-full blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-14 scroll-fade-up">
          <span className="inline-block px-4 py-1.5 mb-4 text-xs font-semibold uppercase tracking-wider text-[#B01E23] bg-[#B01E23]/10 rounded-full">
            Onde Assistir
          </span>
          <h2 className="text-3xl font-bold text-white md:text-4xl lg:text-5xl text-balance">
            Assista o Arte 1
          </h2>
          <p className="mt-4 text-neutral-400 max-w-2xl mx-auto text-lg">
            Encontre o Arte 1 na sua operadora de TV por assinatura ou streaming
          </p>
        </div>

        {/* Operadoras Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-5">
          {operadoras.map((operadora, index) => {
            const Icon = getIcon(operadora.tipo);
            const cardClassName = cn(
              "scroll-fade-up group relative bg-neutral-800/50 backdrop-blur-sm rounded-2xl p-5 border border-neutral-700/50 transition-all duration-500 hover:bg-neutral-800 hover:border-[#B01E23]/30 hover:shadow-xl hover:shadow-[#B01E23]/5 hover:-translate-y-1",
              operadora.href && "cursor-pointer",
              `scroll-delay-${Math.min((index + 1) * 100, 800)}`,
            );

            const cardContent = (
              <>
                {/* Glow Effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#B01E23]/0 to-[#B01E23]/0 opacity-0 transition-opacity duration-500 group-hover:opacity-10" />

                <div className="relative z-10 flex flex-col items-center text-center">
                  <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-neutral-700/50 text-neutral-400 transition-all duration-300 group-hover:bg-[#B01E23]/20 group-hover:text-[#B01E23]">
                    {operadora.iconImage ? (
                      <Image
                        src={operadora.iconImage}
                        alt={operadora.iconAlt ?? operadora.nome}
                        width={32}
                        height={32}
                        className="h-8 w-8 object-contain"
                      />
                    ) : (
                      <Icon className="h-6 w-6" />
                    )}
                  </div>
                  <h3 className="text-base font-bold text-white mb-0.5 transition-colors duration-300 group-hover:text-white">
                    {operadora.nome}
                  </h3>
                  <p className="text-sm text-neutral-400 transition-colors duration-300 group-hover:text-neutral-300">
                    {operadora.tipo === "streaming"
                      ? operadora.canal
                      : `Canal ${operadora.canal}`}
                  </p>
                </div>
              </>
            );

            if (operadora.href) {
              return (
                <a
                  key={operadora.nome}
                  href={operadora.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cardClassName}
                  aria-label={`Acessar ${operadora.nome}`}
                >
                  {cardContent}
                </a>
              );
            }

            return (
              <div key={operadora.nome} className={cardClassName}>
                {cardContent}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
