"use client";
import Navbar from "@/components/navbar";
import { useState } from "react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import Image from "next/image";
import Footer from "@/components/footer";
import RevealText from "@/components/revealText";
import { FaWhatsapp } from "react-icons/fa";
import { Button } from "@/components/ui/button";

const W = "max-w-screen-2xl mx-auto px-6 md:px-16";

const WHATSAPP_MSG = encodeURIComponent(
  "Olá! Gostaria de conversar sobre uma produção audiovisual.",
);
const WHATSAPP_LINK = `https://wa.me/5512981622637?text=${WHATSAPP_MSG}`;
const photos = ["/photos/a.webp", "/photos/b.webp", "/photos/c.webp"];

const featured = photos[1];

const services = [
  {
    title: "Fotografia",
    text: "Retratos, produtos, ambientes e bastidores registrados com direção de luz e composição alinhadas à identidade da marca. O resultado é um acervo coeso para site, redes, campanhas e materiais institucionais.",
  },
  {
    title: "Vídeo",
    text: "Filmes institucionais, conteúdos de campanha e registros de projetos e eventos. Roteiro, captação e finalização conduzidos de ponta a ponta, com a mesma linguagem em todas as peças.",
  },
  {
    title: "Direção criativa",
    text: "Conceito, referências e linguagem visual definidos antes de ligar a câmera, para que cada imagem reforce o mesmo posicionamento e a marca seja reconhecida onde aparecer.",
  },
];

const steps = [
  {
    title: "Escuta e diagnóstico",
    text: "Entendemos o negócio, o público e o momento da marca antes de propor qualquer imagem.",
  },
  {
    title: "Conceito e planejamento",
    text: "Definimos linguagem visual, referências, roteiro, locações e cronograma, alinhados com o cliente.",
  },
  {
    title: "Captação",
    text: "Equipe enxuta e direção atenta no set, com equipamento adequado às necessidades de cada projeto.",
  },
  {
    title: "Pós-produção e entrega",
    text: "Edição, tratamento de cor e finalização nos formatos que a marca vai usar, prontos para publicar.",
  },
];

export default function Studio() {
  const [selectedPhoto, setSelectedPhoto] = useState<string | null>(null);

  return (
    <>
      <Navbar />

      {/* Vídeo */}
      <section className="relative h-screen w-full overflow-hidden bg-neutral-100">
        <video
          src="/PORTFOLIO.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 h-full w-full object-cover grayscale"
        />
      </section>

      {/* Institucional */}
      <section className="bg-clr2 text-clr1">
        <div
          className={`${W} grid grid-cols-1 gap-12 py-16 md:grid-cols-12 md:gap-24 md:py-32`}
        >
          {featured && (
            <button
              type="button"
              onClick={() => setSelectedPhoto(featured)}
              className="group relative block aspect-4/5 w-full overflow-hidden md:col-span-5"
              aria-label="Ampliar foto"
            >
              <Image
                src={featured}
                alt=""
                fill
                sizes="(min-width: 768px) 40vw, 100vw"
                className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
              />
            </button>
          )}

          <div className="flex flex-col  gap-10 md:col-span-7">
            <RevealText>
              <h2 className="text-3xl font-medium leading-[1.1] tracking-[-0.02em] md:text-4xl md:font-bold 2xl:text-5xl">
                Cada marca tem uma forma própria de ser vista. Nosso trabalho é
                encontrá-la e registrá-la.
              </h2>
            </RevealText>

            <div className=" space-y-5 text-base leading-relaxed md:text-lg">
              <p>
                Produzimos fotografia e vídeo para marcas, projetos culturais e negócios
                que querem comunicar sua identidade com clareza e consistência.
              </p>
              <p>
                Cada produção é desenvolvida sob medida, unindo captação,
                direção criativa e narrativa visual para que a imagem da marca
                seja construída com intenção e sustentada ao longo do tempo.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Frentes de atuação */}
      <section className="bg-clr2 text-clr1">
        <div className={`${W} pb-16 md:pb-32`}>
          <div className="grid grid-cols-1 border-t border-clr1/25 md:grid-cols-3">
            {services.map((service, i) => (
              <article
                key={service.title}
                className={`flex flex-col gap-4 py-8 md:py-10 md:pr-10 ${
                  i > 0
                    ? "border-t border-clr1/25 md:border-t-0 md:border-l md:pl-10"
                    : ""
                }`}
              >
                <h3 className="text-2xl font-bold tracking-[-0.02em] md:text-3xl">
                  {service.title}
                </h3>
                <p className="text-base leading-relaxed md:text-lg">
                  {service.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Processo */}
      <section className="bg-clr1 text-clr2">
        <div
          className={`${W} grid grid-cols-1 gap-12 py-16 md:grid-cols-12 md:gap-16 md:py-32`}
        >
          <div className="md:col-span-5">
            <div className="md:sticky md:top-32">
              <h2 className="text-3xl font-medium leading-[1.1] tracking-[-0.02em] md:text-5xl md:font-bold">
                Um processo claro, do briefing à entrega.
              </h2>
              <p className="mt-6 max-w-md text-base leading-relaxed md:text-lg">
                Cada projeto é desenhado sob medida, mas segue um caminho que dá
                previsibilidade ao cliente e liberdade à criação.
              </p>
            </div>
          </div>

          <ol className="md:col-span-7">
            {steps.map((step, i) => (
              <li
                key={step.title}
                className="grid grid-cols-[3rem_1fr] gap-4 border-t border-clr2/25 py-8 md:grid-cols-[5rem_1fr] md:py-10"
              >
                <span className="text-xl font-medium tabular-nums md:text-2xl text-clr3">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="space-y-3">
                  <h3 className="text-2xl font-bold tracking-[-0.02em] md:text-3xl">
                    {step.title}
                  </h3>
                  <p className="max-w-lg text-base leading-relaxed md:text-lg">
                    {step.text}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>



      <section className="relative lg:py-32 py-18 bg-clr3 overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "linear-gradient(var(--clr2) 1px, transparent 1px), linear-gradient(90deg, var(--clr2) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
        <div className={`relative ${W}`}>
          <p className="text-[10px] tracking-[0.35em] uppercase text-clr2/60 font-semibold mb-6">
            VAMOS TIRAR SUA IDEIA DO PAPEL
          </p>

          <h2 className="text-4xl md:text-6xl font-bold text-clr2 leading-[1.05] tracking-[-0.03em] mb-4">
            Vamos criar um vídeo para
            <br />o seu negócio?
          </h2>

          <p className="text-clr2/80 text-lg my-6 font-light leading-relaxed max-w-xl">
            Conte um pouco sobre sua empresa e seus objetivos. Vamos indicar a
            melhor solução e preparar uma proposta sem compromisso.
          </p>
          <a href={WHATSAPP_LINK} target="_blank">
            <Button
              size="lg"
              className="bg-clr2 text-clr3 hover:bg-clr1 hover:text-clr2 transition-all duration-300 hover:scale-105 px-10 py-6 font-semibold cursor-pointer tracking-[0.08em] rounded-full"
            >
              Solicitar orçamento
              <FaWhatsapp className="w-5 h-5" />
            </Button>
          </a>
        </div>
      </section>

      <Footer />
    </>
  );
}
