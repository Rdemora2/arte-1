import Image from "next/image";
import { Header } from "@/components/arte1/header";
import { Footer } from "@/components/arte1/footer";

const title = "AMOSTRADAS";

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
  },
  {
    name: "Gê Viana",
    bio: "Nascida em Santa Luzia, Maranhão, em 1986, Gê Viana mora hoje em São Luís, Maranhão. A artista trabalha com imagens históricas de arquivo e as memórias orais de sua família para explorar o contexto afro-diaspórico maranhense e questionar os discursos dominantes. Em pinturas, lambe-lambes, colagens e instalações, ela articula as linguagens do teatro, da performance e da fotografia, e oferece alternativas às narrativas estabelecidas sobre gênero, raça e orientação sexual na arte e na história brasileiras. Apresentou a instalação “A Colheita de Dan” na 36ª Bienal de São Paulo, em 2025.",
  },
  {
    name: "Labô Young",
    bio: "Nascido em Icoaraci, Pará, em 1995, Labô Young mora hoje em Belém, Pará. Suas obras abraçam a potência da cultura amazônica e dos saberes ancestrais. Folhas de palmeiras, palhas e sementes são matéria-prima para peças esculturais cheias de tramas e tranças. Reconhecido também no mundo da moda, o artista dialoga com o universo da performance para criar obras que funcionam como escudos ou armaduras em nome da cura.",
  },
  {
    name: "Moara Tupinambá",
    bio: "Natural de Belém, Pará, de 1983, Moara Tupinambá está atualmente radicada em Campinas, São Paulo. Em desenhos, pinturas, colagens e instalações, a artista e ativista indígena defende um olhar voltado para a ancestralidade, a resistência dos povos originários e o pensamento anticolonial. O protagonismo feminino também permeia sua produção: Moara integra o M.AR, coletivo de mulheres artistas do Pará.",
  },
  {
    name: "Roberta Carvalho",
    bio: "Nascida em 1980 em Belém, Pará, onde segue até hoje, Roberta Carvalho assina trabalhos que envolvem várias linguagens visuais e tecnológicas, combinando suportes como vídeo, intervenção urbana, projeção, instalação e projetos interativos. A artista e diretora artística é criadora do Festival Amazônia Mapping, uma iniciativa pioneira que desde 2013 promove a união de arte e tecnologia no Brasil. Em 2022, apresentou no Rock in Rio uma instalação imersiva com mais de 50 artistas amazônidas.",
  },
  {
    name: "Silvana Mendes",
    bio: "Nascida em 1991, em São Luís, Maranhão, onde continua morando, Silvana Mendes usa fotografia, pintura, lambe-lambe e principalmente a colagem para desconstruir as imagens negativas e os estereótipos impostos aos corpos negros ao longo da nossa história. Suas composições resgatam a subjetividade dos povos negros e dissipam sua postura artística descolonizadora.",
  },
];

export default function MateriaAmostrasRajadasPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-neutral-950 pb-16 pt-28 text-white md:pt-36 lg:pb-24">
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_10%,rgba(176,30,35,0.3),transparent_45%),radial-gradient(circle_at_82%_2%,rgba(255,255,255,0.08),transparent_42%)]" />

          <div className="relative mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="overflow-hidden rounded-2xl border border-white/10 bg-neutral-900/60 shadow-2xl shadow-black/35 backdrop-blur-sm">
              <Image
                src="/images/banner_publicidade_caixa.png"
                alt="AMOSTRADAS"
                width={2500}
                height={834}
                priority
                className="h-auto w-full"
                sizes="(min-width: 1280px) 1152px, (min-width: 1024px) 90vw, 95vw"
              />
            </div>

            <article className="mt-8 rounded-2xl border border-white/10 bg-neutral-900/70 p-6 shadow-2xl shadow-black/35 backdrop-blur-sm sm:p-8 lg:p-10">
              <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
                {title}
              </h1>

              <div className="mt-8 space-y-6 text-base leading-relaxed text-white/85 sm:text-lg">
                {introParagraphs.map((paragraph, index) => (
                  <p key={paragraph.slice(0, 24)} className="">
                    {paragraph}
                  </p>
                ))}
              </div>

              <p className="mt-8 inline-flex rounded-full border border-[#B01E23]/50 bg-[#B01E23]/15 px-4 py-2 text-sm font-semibold text-[#f7c6c8]">
                {authors}
              </p>

              <div className="my-10 h-px w-full bg-gradient-to-r from-transparent via-white/35 to-transparent" />

              <div className="grid gap-5 md:grid-cols-2">
                {artists.map((artist) => (
                  <section
                    key={artist.name}
                    className="rounded-xl border border-white/10 bg-neutral-950/60 p-5 transition-colors duration-300 hover:border-[#B01E23]/35"
                  >
                    <h2 className="text-2xl font-bold tracking-tight text-white">
                      {artist.name}
                    </h2>
                    <p className="mt-3 text-sm leading-relaxed text-white/80 sm:text-base">
                      {artist.bio}
                    </p>
                  </section>
                ))}
              </div>
            </article>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
