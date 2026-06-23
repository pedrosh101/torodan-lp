import { Button } from "@/components/ui/button";
import { FaWhatsapp } from "react-icons/fa";
import {
  Globe,
  Rocket,
  Camera,
  Instagram,
  Mail,
  CheckCircle,
} from "lucide-react";
import Navbar from "@/components/navbar";
import Brands from "@/components/brands";
import Image from "next/image";
import computer from "../../public/computer.jpg";

const W = "max-w-screen-2xl mx-auto px-6 md:px-16";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col font-sans bg-clr2 text-clr1 scroll-smooth">
      <Navbar />

      {/* HERO */}
      <section className="relative flex flex-col items-start justify-end min-h-screen pb-24 pt-40 overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(var(--clr1) 1px, transparent 1px), linear-gradient(90deg, var(--clr1) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />

        <span className="absolute top-40 right-6 md:right-16 text-[10px] tracking-[0.3em] uppercase text-clr1/70 font-medium">
          Marketing Digital
        </span>

        <div className={`relative w-full ${W}`}>
          <p className="text-[11px] tracking-[0.35em] uppercase text-clr3 font-semibold mb-8">
            Torodan — Agência Digital
          </p>
          <h1 className="text-5xl md:text-[5.5rem] font-extrabold leading-[1.02] tracking-[-0.03em] mb-10">
            Impulsione seu negócio
            <br />
            com{" "}
            <em className="not-italic text-clr3 relative inline-block">
              Marketing Digital
              <span
                className="absolute bottom-1 left-0 w-full h-px bg-clr3/40"
                aria-hidden
              />
            </em>
          </h1>
          <p className="max-w-xl text-clr1/60 text-lg leading-relaxed mb-14 font-light">
            Aumente sua presença online, conquiste novos clientes e destaque sua
            marca.
          </p>

          <div className="flex items-center gap-6">
            <a href="#etapas">
              <Button
                size="lg"
                className="bg-clr3 hover:bg-clr1 text-clr2 transition-all duration-300 hover:scale-105 cursor-pointer tracking-[0.08em] font-medium px-10 py-6 rounded-full"
              >
                Saiba mais
              </Button>
            </a>
            <a
              href="#servicos"
              className="text-sm text-clr1/60 hover:text-clr1 transition-colors tracking-widest uppercase font-medium underline underline-offset-4 decoration-clr1/20"
            >
              Ver serviços
            </a>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="servicos" className="py-32 bg-clr1">
        <div className={W}>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-6">
            <div>
              <p className="text-[10px] tracking-[0.35em] uppercase text-clr3 font-semibold mb-4">
                O que fazemos
              </p>
              <h2 className="text-4xl md:text-5xl font-bold text-clr2 leading-tight tracking-[-0.02em]">
                Nossos Serviços
              </h2>
            </div>
            <p className="text-clr2/50 max-w-sm text-sm leading-relaxed font-light">
              Soluções integradas para cada etapa da sua presença digital.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-px bg-clr2/10">
            {[
              {
                icon: Globe,
                title: "Websites Estratégicos",
                desc: "Desenvolvimento de sites rápidos, responsivos e pensados para apresentar sua marca e gerar oportunidades de negócio.",
                num: "01",
              },
              {
                icon: Rocket,
                title: "Branding & Identidade",
                desc: "Construímos marcas fortes e consistentes que conectam com seu público.",
                num: "02",
              },
              {
                icon: Camera,
                title: "Conteúdo & Fotografia",
                desc: "Produção fotográfica profissional para alimentar redes sociais, websites e materiais de divulgação.",
                num: "03",
              },
            ].map(({ icon: Icon, title, desc, num }, i) => (
              <div
                key={i}
                className="bg-clr1 p-10 md:p-12 flex flex-col gap-8 group hover:bg-clr3 transition-all duration-500 cursor-default"
              >
                <div className="flex items-start justify-between">
                  <Icon className="w-8 h-8 text-clr3 group-hover:text-clr2 transition-colors duration-500" />
                  <span className="text-[10px] tracking-[0.3em] text-clr2/30 group-hover:text-clr2/60 font-medium transition-colors duration-500">
                    {num}
                  </span>
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-3 text-clr2 leading-snug tracking-[-0.01em]">
                    {title}
                  </h4>
                  <p className="text-clr2/60 group-hover:text-clr2/80 leading-relaxed text-sm transition-colors duration-500">
                    {desc}
                  </p>
                </div>
                <div className="mt-auto">
                  <div className="w-8 h-px bg-clr3 group-hover:bg-clr2 group-hover:w-16 transition-all duration-500" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="etapas" className="py-32 bg-clr2">
        <div className={W}>
          <div className="mb-20">
            <p className="text-[10px] tracking-[0.35em] uppercase text-clr3 font-semibold mb-4">
              O processo
            </p>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight tracking-[-0.02em]">
              Como Funciona?
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-0 border border-clr1/10">
            {[
{
title: "Imersão",
desc: "Conhecemos sua empresa, seus objetivos, público e diferenciais para construir uma comunicação alinhada ao seu negócio.",
},
{
title: "Planejamento",
desc: "Definimos a estratégia visual e digital, organizando identidade, conteúdo, website e presença nas redes sociais.",
},
{
title: "Produção",
desc: "Desenvolvemos a identidade visual, realizamos as fotografias e criamos os materiais que darão vida à sua marca.",
},
{
title: "Lançamento",
desc: "Publicamos o website, estruturamos os canais digitais e entregamos uma presença profissional pronta para crescer.",
},
].map((step, i) => (
              <div
                key={i}
                className="relative p-10 border-r border-clr1/10 last:border-r-0 group hover:bg-clr1/5 transition-colors duration-300 cursor-default"
              >
                <span className="block text-[3.5rem] font-extrabold text-clr3/20 leading-none mb-8 group-hover:text-clr3 transition-colors duration-300">
                  0{i + 1}
                </span>
                <h4 className="font-semibold text-base mb-3 tracking-[-0.01em]">
                  {step.title}
                </h4>
                <p className="text-clr1/70 text-sm leading-relaxed font-light">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW WE WORK */}
      <section id="sobre" className="py-32 bg-clr2">
        <div className={W}>
          <div className="grid md:grid-cols-2 gap-20 items-center">
            <div>
              <p className="text-[10px] tracking-[0.35em] uppercase text-clr3 font-semibold mb-4">
                Nosso diferencial
              </p>
              <h2 className="text-4xl md:text-5xl font-bold leading-tight tracking-[-0.02em] mb-14">
                Construímos marcas com propósito
              </h2>

              <div className="space-y-7">
                {[
"Cada projeto é desenvolvido de forma estratégica e exclusiva.",
"Construímos marcas com identidade visual forte e consistente.",
"Criamos experiências digitais que geram credibilidade e confiança.",
"Produzimos conteúdo visual autêntico através da fotografia profissional.",
"Valorizamos relações de longo prazo baseadas em transparência e excelência.",
]
.map((text, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-5 group cursor-default"
                  >
                    <div className="shrink-0 w-5 h-5 mt-0.5">
                      <CheckCircle className="w-5 h-5 text-clr3" />
                    </div>
                    <p className="text-clr1/70 leading-relaxed text-base font-light group-hover:text-clr1 transition-colors duration-200">
                      {text}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-4 bg-clr3/5 rounded-3xl -z-10" />
              <Image
                src={computer}
                alt="Computador"
                className="rounded-2xl shadow-2xl object-cover w-full aspect-4/3"
              />
            </div>
          </div>
        </div>
      </section>

      <Brands />

      {/* CTA */}
      <section className="relative py-32 bg-clr3 overflow-hidden">
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
            Vamos começar
          </p>
          <h2 className="text-4xl md:text-6xl font-bold text-clr2 leading-[1.05] tracking-[-0.03em] mb-8">
            Pronto para alavancar
            <br />
            seu negócio?
          </h2>
          <p className="text-clr2/70 text-lg mb-12 font-light leading-relaxed max-w-xl">
            Entre em contato e descubra como a Torodan pode ajudar sua marca a
            crescer.
          </p>
          <a href="https://wa.me/5512981622637" target="_blank">
            <Button
              size="lg"
              className="bg-clr2 text-clr3 hover:bg-clr1 hover:text-clr2 transition-all duration-300 hover:scale-105 px-10 py-6 font-semibold cursor-pointer tracking-[0.08em] rounded-full gap-3"
            >
              Solicitar Orçamento
              <FaWhatsapp className="w-5 h-5" />
            </Button>
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer id="contato" className="bg-clr1 text-clr2">
        <div className={`${W} pt-16 pb-10`}>
          <div className="flex flex-col md:flex-row justify-between items-start gap-10 pb-12 border-b border-clr2/10">
            <div>
              <h4 className="text-base font-semibold tracking-[-0.01em]">
                Torodan
              </h4>
              <p className="text-xs mt-2 text-clr2/40 font-light tracking-wide">
                Transformando ideias em resultados.
              </p>
            </div>

            <div className="flex flex-col md:flex-row gap-10 md:gap-20 text-sm">
              <div className="flex flex-col gap-3">
                <span className="text-[9px] tracking-[0.35em] uppercase text-clr2/30 font-medium">
                  Navegação
                </span>
                {["Serviços", "Etapas", "Como Trabalhamos", "Contato"].map(
                  (item) => (
                    <a
                      key={item}
                      href={`#${item.toLowerCase().replace(/\s/g, "")}`}
                      className="text-clr2/60 hover:text-clr3 transition-colors text-xs font-light"
                    >
                      {item}
                    </a>
                  ),
                )}
              </div>

              <div className="flex flex-col gap-3">
                <span className="text-[9px] tracking-[0.35em] uppercase text-clr2/30 font-medium">
                  Contato
                </span>
                <div className="flex gap-5">
                  <a
                    href="mailto:torodandigital@gmail.com"
                    className="text-clr2/60 hover:text-clr3 transition-colors"
                    aria-label="Email"
                  >
                    <Mail className="w-4 h-4" />
                  </a>
                  <a
                    href="https://wa.me/5512981622637"
                    target="_blank"
                    className="text-clr2/60 hover:text-clr3 transition-colors"
                    aria-label="WhatsApp"
                  >
                    <FaWhatsapp className="w-4 h-4" />
                  </a>
                  <a
                    href="https://instagram.com/torodan.digital"
                    className="text-clr2/60 hover:text-clr3 transition-colors"
                    target="_blank"
                    aria-label="Instagram"
                  >
                    <Instagram className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <p className="text-[10px] mt-8 text-clr2/25 font-light tracking-wide">
            © {new Date().getFullYear()} Torodan. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}
