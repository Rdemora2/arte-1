import { Header } from "@/components/arte1/header"
import { Hero } from "@/components/arte1/hero"
import { Programacao } from "@/components/arte1/programacao"
import { OndeAssistir } from "@/components/arte1/onde-assistir"
import { CanaisNewco } from "@/components/arte1/canais-newco"
import { Footer } from "@/components/arte1/footer"
import { BackToTop } from "@/components/arte1/back-to-top"
import { ScrollAnimations } from "@/components/arte1/scroll-animations"

export default function HomePage() {
  return (
    <>
      <ScrollAnimations />
      <Header />
      <main>
        <Hero />
        <Programacao />
        <OndeAssistir />
        <CanaisNewco />
      </main>
      <Footer />
      <BackToTop />
    </>
  )
}
