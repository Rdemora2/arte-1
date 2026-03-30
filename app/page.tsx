import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/arte1/header";
import { Hero } from "@/components/arte1/hero";
import { Programacao } from "@/components/arte1/programacao";
import { OndeAssistir } from "@/components/arte1/onde-assistir";
import { CanaisNewco } from "@/components/arte1/canais-newco";
import { Footer } from "@/components/arte1/footer";
import { BackToTop } from "@/components/arte1/back-to-top";
import { ScrollAnimations } from "@/components/arte1/scroll-animations";

export default function HomePage() {
  return (
    <>
      <ScrollAnimations />
      <Header />
      <main>
        <section className="relative">
          <div className="pointer-events-auto absolute left-1/2 top-20 z-40 w-[86vw] max-w-[980px] -translate-x-1/2 md:top-24 md:w-[78vw] lg:max-w-[560px]">
            <Link
              href="https://www.caixacultural.gov.br/Paginas/Belem.aspx"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Abrir pagina da Caixa Cultural em nova guia"
              className="group block"
            >
              <Image
                src="/images/banner_publicidade_caixa.png"
                alt="Banner de publicidade Amostras"
                width={2500}
                height={834}
                className="h-auto w-full rounded-sm shadow-2xl shadow-black/35 transition-transform duration-300 group-hover:scale-[1.01]"
                priority
                sizes="(min-width: 1024px) 560px, (min-width: 768px) 78vw, 86vw"
              />
            </Link>
          </div>
          <Hero />
        </section>
        <Programacao />
        <OndeAssistir />
        <CanaisNewco />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
