"use client"

import { ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const canais = [
  {
    name: "AgroMais",
    description: "AgroMais proporciona conteúdo especializado sobre o agronegócio, abordando temas como tecnologia agrícola, práticas de cultivo, e inovações no setor. Com uma programação voltada para agricultores, produtores e interessados no universo rural.",
    color: "#2d5a27",
    url: "https://agromais.uol.com.br/",
  },
  {
    name: "Arte 1",
    description: "Arte1 é um canal dedicado à arte e à cultura, trazendo uma programação informativa e inspiradora. Com conteúdos que incluem documentários, entrevistas, performances e debates, o Arte1 promove a valorização da criatividade e o acesso à diversidade artística.",
    color: "#B01E23",
    featured: true,
    url: "#inicio",
  },
  {
    name: "BandNews TV",
    description: "BandNews TV é um canal de notícias brasileiro que oferece uma cobertura abrangente dos principais eventos e acontecimentos no Brasil e no mundo. Com uma abordagem jornalística confiável e atualizações em tempo real.",
    color: "#e63946",
    url: "https://bandnewstv.uol.com.br/",
  },
  {
    name: "BandSports",
    description: "BandSports se dedica a exibir o universo dos esportes, oferecendo uma programação variada que inclui transmissões ao vivo de competições esportivas, análises, comentários e notícias sobre diversos esportes.",
    color: "#1d3557",
    url: "https://bandsports.uol.com.br/",
  },
  {
    name: "Fish TV",
    description: "Fish TV é um canal dedicado à pesca esportiva, natureza e aventura, trazendo uma programação informativa e educativa. Com conteúdos que incluem documentários, dicas de especialistas, técnicas de pesca e conservação.",
    color: "#0077b6",
    url: "https://www.fishtv.com/",
  },
  {
    name: "NewcoPlay",
    description: "NewcoPlay é a plataforma de streaming do grupo Newco, oferecendo acesso a todos os canais do grupo em um só lugar. Assista onde e quando quiser.",
    color: "#023e8a",
    url: "https://newcoplay.com.br/",
  },
  {
    name: "Sabor & Arte",
    description: "Sabor & Arte é um canal dedicado à culinária e à cultura gastronômica. Com uma programação rica em receitas, dicas de cozinha, e conteúdos sobre a arte de cozinhar, o canal é uma fonte de inspiração para chefs amadores e profissionais.",
    color: "#bc6c25",
    url: "https://canalsaborearte.uol.com.br/",
  },
  {
    name: "Sexprivé",
    description: "Sexprivé aborda temas relacionados ao sexo e à sexualidade de maneira informativa e educativa. Com uma programação que inclui discussões, entrevistas e conteúdo educativo sobre questões de sexualidade e relacionamentos.",
    color: "#9d4edd",
    url: "https://canalsexprive.com.br/",
  },
  {
    name: "Terraviva",
    description: "Terraviva foca em temas relacionados ao agronegócio, à vida rural e à natureza. Ele oferece uma programação voltada para o público interessado em agricultura, pecuária, sustentabilidade e desenvolvimento rural.",
    color: "#386641",
    url: "https://terraviva.uol.com.br/",
  },
]

export function CanaisNewco() {
  return (
    <section 
      id="canais-newco" 
      className="relative bg-neutral-900 py-20 sm:py-28 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#B01E23]/30 to-transparent" />
        <div className="absolute -top-60 left-1/2 -translate-x-1/2 h-[500px] w-[800px] rounded-full bg-[#B01E23]/5 blur-3xl" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neutral-700 to-transparent" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-14 text-center scroll-fade-up">
          <span className="mb-4 inline-block text-sm font-semibold tracking-widest text-[#B01E23] uppercase">
            Nosso Grupo
          </span>
          <h2 className="mb-4 text-4xl font-bold text-white sm:text-5xl">
            Canais Newco
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-neutral-400 leading-relaxed">
            Conheça todos os canais do grupo Newco e descubra conteúdos exclusivos para todos os gostos.
          </p>
        </div>

        {/* Channels Grid */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {canais.map((canal, index) => (
            <article
              key={canal.name}
              className={cn(
                "scroll-fade-up group relative overflow-hidden rounded-2xl bg-neutral-800/50 p-5 backdrop-blur-sm transition-all duration-500 hover:bg-neutral-800",
                canal.featured && "ring-2 ring-[#B01E23] ring-offset-2 ring-offset-neutral-900 sm:col-span-2 lg:col-span-1",
                `scroll-delay-${Math.min((index + 1) * 100, 800)}`
              )}
            >
              {/* Featured Badge */}
              {canal.featured && (
                <span className="absolute right-4 top-4 rounded-full bg-[#B01E23] px-3 py-1 text-xs font-bold text-white shadow-lg shadow-[#B01E23]/30">
                  Você está aqui
                </span>
              )}
              
              {/* Color Indicator */}
              <div 
                className="mb-4 h-1.5 w-12 rounded-full transition-all duration-300 group-hover:w-20"
                style={{ backgroundColor: canal.color }}
              />

              {/* Content */}
              <h3 className="mb-2 text-lg font-bold text-white transition-colors duration-300 group-hover:text-[#B01E23]">
                {canal.name}
              </h3>
              <p className="mb-4 text-sm leading-relaxed text-neutral-400 line-clamp-3">
                {canal.description}
              </p>

              {/* Button */}
              <Button
                variant="ghost"
                size="sm"
                className="group/btn text-neutral-300 transition-all duration-300 hover:bg-white/10 hover:text-white"
                asChild
              >
                <a 
                  href={canal.url} 
                  target={canal.featured ? "_self" : "_blank"} 
                  rel={canal.featured ? undefined : "noopener noreferrer"}
                >
                  {canal.featured ? "Ver programação" : "Acessar o site"}
                  {!canal.featured && (
                    <ExternalLink className="ml-2 h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                  )}
                </a>
              </Button>

              {/* Hover Glow */}
              <div 
                className="absolute inset-0 -z-10 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                style={{ 
                  background: `radial-gradient(circle at 50% 100%, ${canal.color}15 0%, transparent 60%)`
                }}
              />
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
