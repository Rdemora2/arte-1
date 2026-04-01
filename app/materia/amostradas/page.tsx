import Image from "next/image";
import { Header } from "@/components/arte1/header";
import { Footer } from "@/components/arte1/footer";

const introParagraphs = [
  "Esta exposição é uma das frentes de um projeto amplo, que se desdobra por plataformas físicas e digitais, unindo as vocações de suas duas instituições parceiras: a CAIXA Cultural e o canal Arte1.",
  "Os seis artistas aqui reunidos, das regiões Norte e Nordeste do país, desmancham as verdades absolutas de uma história única e nos convidam a imaginar outras histórias, com outros protagonistas, com roteiros simultâneos, e múltiplos finais possíveis. Dacordobarro, Gê Viana, Labô Young, Moara Tupinambá, Roberta Carvalho e Silvana Mendes têm em comum a reflexão sobre memórias e construção de identidades no Brasil, e atuam na elaboração de novas possibilidades de narrativas e na recuperação das que foram apagadas.",
  "Não à toa, o projeto toma como provocação o termo “amostradas”. Se, em sua origem, ele funcionava como uma pecha dirigida ao feminino — denunciando uma suposta vontade exacerbada de exuberância e frequentemente mobilizado como crítica ao desejo de protagonismo de mulheres e pessoas sexo-dissidentes no Brasil —, aqui esse movimento é reapropriado como um gesto de celebração. A proposta parte da constatação de que muitos desses artistas foram historicamente invisibilizados. Ao reuni-los, o projeto afirma um valor que é também uma decisão curatorial: caminhar deliberadamente na direção de uma hipervisibilidade. Trata-se de trabalhos que desejam ser vistos, apreciados, pensados, criticados e absorvidos: com esses verbos conceitualmente carregados, Amostradas inscreve-se em uma linhagem pop que atravessa as relações entre diferentes mídias e a intensa circulação de imagens na vida cotidiana. Aqui, a exposição assume essa condição como estratégia: transformar aquilo que antes operava como acusação em um dispositivo de presença, afirmação e potência estética.",
  "Para isso, foram comissionadas vinhetas audiovisuais que serão vistas como inserções na programação do Arte1, além desta exposição. Trata-se de uma estratégia de circulação: criar fragmentos de imagem que condensam aspectos de suas pesquisas e que permitem que a arte contemporânea encontre os públicos por meio da televisão. Obras que atravessam plataformas, que dialogam com a cultura visual cotidiana e que reconhecem, nos fluxos de imagem da vida diária, um território legítimo para a experiência estética e para a imaginação crítica. E, de repente, eis que podemos vislumbrar amostras de futuro logo ali à frente.",
];

const authors = "Gisele Kato e Ulisses Carrilho";

const artists = [
  {
    name: "Dacordobarro",
    bio: "Nascida em Manaus, Amazonas, em 1995, Dacordobarro mora atualmente em São Luís, Maranhão. A artista transforma suas vivências – as viagens, as experiências no terreiro e na encantaria, a maternidade – em colagens, lambe-lambes, desenhos e pinturas. No centro de sua produção está o olhar para o corpo negro na sociedade brasileira. Música, moda e a tradição oral são referências para a construção de um imaginário de liberdade, fé e autoestima.",
    images: [
      "/images/Amostradas/Artistas/Dacordobarro/Dacordobarro1.jpeg",
      "/images/Amostradas/Artistas/Dacordobarro/Dacordobarro2.jpeg",
      "/images/Amostradas/Artistas/Dacordobarro/Dacordobarro3.jpeg",
    ]
  },
  {
    name: "Gê Viana",
    bio: "Nascida em Santa Luzia, Maranhão, em 1986, Gê Viana mora hoje em São Luís, Maranhão. A artista trabalha com imagens históricas de arquivo e as memórias orais de sua família para explorar o contexto afro-diaspórico maranhense e questionar os discursos dominantes. Em pinturas, lambe-lambes, colagens e instalações, ela articula as linguagens do teatro, da performance e da fotografia, e oferece alternativas às narrativas estabelecidas sobre gênero, raça e orientação sexual na arte e na história brasileiras. Apresentou a instalação “A Colheita de Dan” na 36ª Bienal de São Paulo, em 2025.",
    images: [
      "/images/Amostradas/Artistas/Ge Viana/Ge-Viana1.jpeg",
      "/images/Amostradas/Artistas/Ge Viana/Ge-Viana2.jpeg",
      "/images/Amostradas/Artistas/Ge Viana/Ge-Viana3.jpeg",
      "/images/Amostradas/Artistas/Ge Viana/Ge-Viana4.jpeg",
    ]
  },
  {
    name: "Labô Young",
    bio: "Nascido em Icoaraci, Pará, em 1995, Labô Young mora hoje em Belém, Pará. Suas obras abraçam a potência da cultura amazônica e dos saberes ancestrais. Folhas de palmeiras, palhas e sementes são matéria-prima para peças esculturais cheias de tramas e tranças. Reconhecido também no mundo da moda, o artista dialoga com o universo da performance para criar obras que funcionam como escudos ou armaduras em nome da cura.",
    images: [
      "/images/Amostradas/Artistas/Nabo Young/Labo-Young1.jpeg",
      "/images/Amostradas/Artistas/Nabo Young/Labo-Young2.jpeg",
      "/images/Amostradas/Artistas/Nabo Young/Labo-Young3.jpeg",
      "/images/Amostradas/Artistas/Nabo Young/Labo-Young4.jpeg",
    ]
  },
  {
    name: "Moara Tupinambá",
    bio: "Natural de Belém, Pará, de 1983, Moara Tupinambá está atualmente radicada em Campinas, São Paulo. Em desenhos, pinturas, colagens e instalações, a artista e ativista indígena defende um olhar voltado para a ancestralidade, a resistência dos povos originários e o pensamento anticolonial. O protagonismo feminino também permeia sua produção: Moara integra o M.AR, coletivo de mulheres artistas do Pará.",
    images: [
      "/images/Amostradas/Artistas/Moara Tupinamba/Moara-Tupinamba1.jpeg",
      "/images/Amostradas/Artistas/Moara Tupinamba/Moara-Tupinamba2.jpeg",
      "/images/Amostradas/Artistas/Moara Tupinamba/Moara-Tupinamba3.jpeg",
      "/images/Amostradas/Artistas/Moara Tupinamba/Moara-Tupinamba4.jpeg",
    ]
  },
  {
    name: "Roberta Carvalho",
    bio: "Nascida em 1980 em Belém, Pará, onde segue até hoje, Roberta Carvalho assina trabalhos que envolvem várias linguagens visuais e tecnológicas, combinando suportes como vídeo, intervenção urbana, projeção, instalação e projetos interativos. A artista e diretora artística é criadora do Festival Amazônia Mapping, uma iniciativa pioneira que desde 2013 promove a união de arte e tecnologia no Brasil. Em 2022, apresentou no Rock in Rio uma instalação imersiva com mais de 50 artistas amazônidas.",
    images: [
      "/images/Amostradas/Artistas/Roberta Carvalho/Roberta-Carvalho1.jpeg",
      "/images/Amostradas/Artistas/Roberta Carvalho/Roberta-Carvalho2.jpeg",
      "/images/Amostradas/Artistas/Roberta Carvalho/Roberta-Carvalho3.jpeg",
    ]
  },
  {
    name: "Silvana Mendes",
    bio: "Nascida em 1991, em São Luís, Maranhão, onde continua morando, Silvana Mendes usa fotografia, pintura, lambe-lambe e principalmente a colagem para desconstruir as imagens negativas e os estereótipos impostos aos corpos negros ao longo da nossa história. Suas composições resgatam a subjetividade dos povos negros e dissipam sua postura artística descolonizadora.",
    images: [
      "/images/Amostradas/Artistas/Silvana Mendes/Silvana-Mendes1.jpeg",
      "/images/Amostradas/Artistas/Silvana Mendes/Silvana-Mendes2.jpeg",
      "/images/Amostradas/Artistas/Silvana Mendes/Silvana-Mendes3.jpeg",
      "/images/Amostradas/Artistas/Silvana Mendes/Silvana-Mendes4.jpeg",
    ]
  },
];

export default function MateriaAmostradasPage() {
  return (
    <>
      <Header />
      {/* Exactly match the fixed header height so content starts precisely underneath it */}
      <main className="min-h-screen bg-neutral-950 text-white selection:bg-[#B01E23] selection:text-white pt-20 md:pt-24">
        
        {/* Removed top padding to guarantee the sticky elements hit the ceiling instantly */}
        <section className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 pb-12 md:pb-24 pt-0">
          <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-16 xl:gap-20">
            
            {/* Left/Center Text Article */}
            <article className="flex-1 w-full order-2 lg:order-1 min-w-0 pb-12">
              
              {/* Sticky Title Image (Left aligned, solid background)
                  Glued exactly to the navbar. The extra padding and negative margin (bleed) 
                  ensures scrolling text never slips between the header and this title block. */}
              <div className="sticky top-20 md:top-24 z-40 bg-neutral-950 pb-4 mb-8 pt-8 -mt-8">
                <div className="relative h-12 sm:h-16 md:h-20 w-full max-w-[240px] sm:max-w-xs md:max-w-sm">
                  <Image
                    src="/images/Amostradas/Medias/amostradas-invert.png"
                    alt="AMOSTRADAS"
                    fill
                    className="object-contain object-left"
                    priority
                  />
                </div>
              </div>

              {/* Text Body */}
              <div className="prose prose-invert prose-lg md:prose-xl max-w-none mt-4">
                <div className="space-y-8 lg:space-y-10">
                  {introParagraphs.map((paragraph, index) => (
                    <p key={paragraph.slice(0, 24)} className="text-lg sm:text-xl lg:text-[22px] leading-relaxed font-light text-white/85 tracking-wide">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>

              {/* Authors */}
              <div className="mt-16 flex items-center justify-start gap-6">
                <p className="inline-flex items-center justify-center rounded-full border border-[#B01E23]/40 bg-[#B01E23]/10 px-8 py-2.5 text-xs font-bold tracking-[0.2em] uppercase text-[#f7c6c8] shadow-[0_0_15px_rgba(176,30,35,0.1)]">
                  {authors}
                </p>
                <div className="h-px flex-1 max-w-[100px] bg-gradient-to-r from-[#B01E23]/60 to-transparent" />
              </div>

              <div className="my-20 h-px w-full bg-gradient-to-r from-white/15 to-transparent" />

              {/* Artists Section Redesigned */}
              <div className="mt-16 sm:mt-24 border-t border-white/10 pt-16">
                <h3 className="text-xs sm:text-sm font-bold tracking-[0.4em] text-white/50 uppercase mb-16 text-center lg:text-left">
                  Artistas da Exposição
                </h3>
                <div className="flex flex-col gap-16 md:gap-24">
                  {artists.map((artist) => (
                    <section
                      key={artist.name}
                      className="group flex flex-col gap-6 md:gap-10"
                      aria-labelledby={`artist-${artist.name.replace(/\s+/g, '-').toLowerCase()}`}
                    >
                      <div className="max-w-2xl px-2">
                        <h4 
                          id={`artist-${artist.name.replace(/\s+/g, '-').toLowerCase()}`}
                          className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-4 sm:mb-6 transition-colors duration-500 group-hover:text-[#f7c6c8]"
                        >
                          {artist.name}
                        </h4>
                        <p className="text-base sm:text-lg md:text-[20px] leading-relaxed text-white/75 font-light">
                          {artist.bio}
                        </p>
                      </div>

                      {/* Image Gallery with Fallback */}
                      {artist.images && artist.images.length > 0 ? (
                        <div className="relative w-full overflow-hidden">
                          
                          {/* Desktop fading edges to indicate scroll presence */}
                          <div className="hidden md:block pointer-events-none absolute left-0 top-0 bottom-0 w-8 md:w-16 bg-gradient-to-r from-neutral-950 to-transparent z-10" />
                          <div className="hidden md:block pointer-events-none absolute right-0 top-0 bottom-0 w-8 md:w-16 bg-gradient-to-l from-neutral-950 to-transparent z-10" />

                          {/* Horizontal Snap Scroll Carousel */}
                          <div 
                            className="flex overflow-x-auto gap-4 md:gap-6 pb-6 px-2 snap-x snap-mandatory [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
                            role="region"
                            aria-roledescription="carousel"
                            aria-label={`Galeria de obras de ${artist.name}`}
                            tabIndex={0}
                          >
                            {artist.images.map((img, idx) => (
                              <div 
                                key={idx} 
                                className="relative flex-none w-[85vw] sm:w-[70vw] md:w-[50vw] lg:w-[45vw] max-w-[700px] aspect-video snap-center rounded-xl md:rounded-2xl overflow-hidden bg-neutral-900 border border-white/5 shadow-2xl transition-transform duration-500 hover:scale-[1.02]"
                                role="group"
                                aria-roledescription="slide"
                                aria-label={`Obra ${idx + 1} de ${artist.images.length} por ${artist.name}`}
                              >
                                <Image
                                  src={img}
                                  alt={`Obra de ${artist.name} - Imagem ${idx + 1}`}
                                  fill
                                  sizes="(max-width: 768px) 85vw, (max-width: 1024px) 50vw, 45vw"
                                  className="object-cover"
                                />
                              </div>
                            ))}
                          </div>
                        </div>
                      ) : (
                        <div className="w-full aspect-[21/9] flex items-center justify-center rounded-xl border border-dashed border-white/10 bg-neutral-900/30 mx-2">
                           <span className="text-white/30 text-sm font-medium tracking-widest uppercase">Acervo em breve</span>
                        </div>
                      )}
                    </section>
                  ))}
                </div>
              </div>
            </article>

            {/* Sidebar Sticky Ad - Lateral Direita */}
            {/* Added "flex flex-col justify-center" to vertically center the banner when sticky */}
            <aside className="order-1 lg:order-2 w-full lg:w-[320px] xl:w-[360px] shrink-0 lg:sticky lg:top-24 pt-6 lg:pt-0 pb-12 lg:pb-0 h-auto lg:h-[calc(100vh-96px)] z-30 flex flex-col justify-center">
              
              {/* Desktop Vertical Banner - Hidden on Mobile */}
              <div className="hidden lg:block relative w-auto mx-auto lg:ml-auto lg:mr-0 h-[460px] xl:h-[500px] max-h-[85vh] aspect-[350/762] rounded-[2rem] overflow-hidden border border-white/5 bg-[#0a0a0a]/50 shadow-2xl">
                  <Image
                    src="/images/Amostradas/Medias/apoiadores_amostradas.png"
                    alt="Apoiadores da Exposição"
                    fill
                    priority
                    className="object-contain object-center"
                  />
              </div>

              {/* Mobile Horizontal Banner - Hidden on Desktop */}
              <div className="block lg:hidden relative w-full h-[120px] sm:h-[160px] aspect-[21/9] rounded-2xl overflow-hidden border border-white/5 bg-[#0a0a0a]/50 shadow-xl mx-auto">
                  <Image
                    src="/images/Amostradas/Medias/apoiadores_amostradas_mobile.png"
                    alt="Apoiadores da Exposição Mobile"
                    fill
                    priority
                    className="object-contain object-center"
                  />
              </div>
            </aside>
            
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
