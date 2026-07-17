import { Button } from "@/components/ui/button";
import { FaWhatsapp } from "react-icons/fa";
import {
  Camera,
  Video,
  Palette,
  Globe,
  MessageCircle,
  MapPin,
  FileText,
  CheckCircle,
  ChevronDown,
  Sparkles,
  Instagram,
  Smartphone,
  Search,
  Scissors,
  HeartPulse,
  Shirt,
} from "lucide-react";
import Footer from "@/components/footer";
import NavbarInternas from "@/components/navbarInternas";

const W = "max-w-screen-2xl mx-auto px-6 md:px-16";

const WHATSAPP_MSG = encodeURIComponent(
  "Olá! Quero saber mais sobre a oferta de lançamento Presença Digital Essencial (R$ 1.200)."
);
const WHATSAPP_LINK = `https://wa.me/5538998162313?text=${WHATSAPP_MSG}`;

export const metadata = {
  title: "Presença Digital Essencial | Torodan",
  description:
    "Fotos, vídeos, posts e site institucional para o seu negócio. Oferta de lançamento por R$ 1.200.",
};

export default function OfertaLancamento() {
  return (
    <div className="min-h-screen flex flex-col font-sans bg-clr2 text-clr1 scroll-smooth">
      <NavbarInternas />

      {/* HERO */}
      <section className="relative bg-clr1 pt-40 pb-28 overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage:
              "linear-gradient(var(--clr3) 1px, transparent 1px), linear-gradient(90deg, var(--clr3) 1px, transparent 1px)",
            backgroundSize: "56px 56px",
          }}
        />

        <div className={`relative ${W}`}>
          <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 border border-clr3/40 rounded-full px-4 py-2 mb-8">
                <Sparkles className="w-3.5 h-3.5 text-clr3" />
                <span className="text-[10px] tracking-[0.3em] uppercase text-clr3 font-semibold">
                  Oferta de lançamento do estúdio
                </span>
              </div>

              <h1 className="text-4xl md:text-6xl font-extrabold leading-[1.05] tracking-[-0.03em] text-clr2 mb-6">
                Sua empresa,{" "}
                <em className="not-italic text-clr3">com cara de profissional</em>{" "}
                em poucas semanas
              </h1>

              <p className="max-w-xl text-clr2/70 text-lg leading-relaxed mb-10 font-light">
                Fotos profissionais, vídeos, artes para redes e um site
                institucional — tudo em um único pacote, feito para quem
                precisa sair do zero e começar com o pé direito.
              </p>

              <div className="flex flex-wrap items-center gap-6">
                <a href={WHATSAPP_LINK} target="_blank">
                  <Button
                    size="lg"
                    className="bg-clr3 hover:bg-clr2 text-clr2 hover:text-clr3 transition-all duration-300 hover:scale-105 cursor-pointer tracking-[0.08em] font-medium px-10 py-6 rounded-full gap-3"
                  >
                    Garantir minha vaga
                    <FaWhatsapp className="w-5 h-5" />
                  </Button>
                </a>
                <a
                  href="#inclui"
                  className="text-sm text-clr2/70 hover:text-clr2 transition-colors tracking-widest uppercase font-medium"
                >
                  Ver o que inclui
                </a>
              </div>
            </div>

            {/* PRICE STAMP CARD */}
            <div className="relative mx-auto lg:mx-0">
              <div className="absolute -inset-4 bg-clr3/10 rounded-3xl -z-10 rotate-3" />
              <div className="relative bg-clr2 rounded-2xl border border-clr2/10 shadow-2xl px-10 py-12 w-full max-w-sm -rotate-2">
                <p className="text-[10px] tracking-[0.3em] uppercase text-clr1/50 font-semibold mb-1">
                  Presença Digital Essencial
                </p>
                <p className="text-sm text-clr1/60 font-light mb-6">
                  Pacote único, do início ao fim
                </p>

                <div className="flex items-baseline gap-3 mb-1">
                  <span className="text-clr1/40 line-through text-lg font-light">
                    R$ 1.890
                  </span>
                  <span className="text-[10px] tracking-[0.2em] uppercase bg-clr3/15 text-clr3 font-semibold px-2.5 py-1 rounded-full">
                    Lançamento
                  </span>
                </div>
                <div className="flex items-baseline gap-2 mb-8">
                  <span className="text-5xl font-extrabold tracking-[-0.02em] text-clr1">
                    R$ 1.200
                  </span>
                </div>

                <div className="w-full h-px bg-clr1/10 mb-6" />

                <p className="text-xs text-clr1/50 font-light leading-relaxed">
                  Condição válida por tempo limitado, exclusiva para os
                  primeiros clientes do estúdio.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DIAGNÓSTICO */}
      <section className="py-28 bg-clr2">
        <div className={W}>
          <div className="grid md:grid-cols-2 gap-14 items-start">
            <div>
              <p className="text-[10px] tracking-[0.35em] uppercase text-clr3 font-semibold mb-4">
                Isso soa familiar?
              </p>
              <h2 className="text-3xl md:text-4xl font-bold leading-tight tracking-[-0.02em] mb-8">
                A maioria dos negócios locais ainda está invisível no digital.
              </h2>
                            <div className="space-y-5">
                {[
                  "Instagram abandonado, sem postar há meses.",
                  "Fotos tiradas às pressas, no celular.",
                  "Nenhum vídeo pra mostrar o dia a dia do negócio.",
                  "Não aparece quando alguém pesquisa no Google.",
                  "Site antigo, com um layout ruim, quando muito.",
                ].map((text, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-5 group cursor-default"
                  >
                    <div className="shrink-0 w-5 h-5 mt-0.5">
                      <CheckCircle className="w-5 h-5 text-clr3" />
                    </div>
                    <p className="text-clr1/80 leading-relaxed text-base font-light group-hover:text-clr1 transition-colors duration-200">
                      {text}
                    </p>
                  </div>
                ))}
              </div>

            </div>

            <div className="bg-clr1 rounded-2xl p-10 md:p-12">
              <p className="text-[10px] tracking-[0.35em] uppercase text-clr3 font-semibold mb-4">
                Feito para o seu segmento
              </p>
              <h3 className="text-2xl font-bold text-clr2 leading-snug tracking-[-0.01em] mb-8">
                Um pacote, vários tipos de negócio.
              </h3>
              <div className="flex flex-wrap gap-3">
                {[
                  { icon: HeartPulse, label: "Clínicas e fisioterapia" },
                  { icon: Scissors, label: "Barbearias e salões" },
                  { icon: Shirt, label: "Lojas de roupa" },
                  { icon: Instagram, label: "Estúdios e personal trainers" },
                  { icon: Smartphone, label: "Restaurantes e cafés" },
                  { icon: Search, label: "Comércios locais em geral" },
                ].map(({ icon: Icon, label }, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2.5 bg-clr2/5 border border-clr2/10 rounded-full pl-3 pr-4 py-2"
                  >
                    <Icon className="w-4 h-4 text-clr3 shrink-0" />
                    <span className="text-sm text-clr2/80 font-light">
                      {label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* O QUE INCLUI */}
      <section id="inclui" className="py-28 bg-clr1">
        <div className={W}>
          <div className="mb-16">
            <p className="text-[10px] tracking-[0.35em] uppercase text-clr3 font-semibold mb-4">
              O pacote
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-clr2 leading-tight tracking-[-0.02em] max-w-2xl">
              Tudo que sua empresa precisa pra existir de verdade no digital.
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {[
              {
                icon: Camera,
                title: "Fotografia & Vídeo",
                items: [
                  "Sessão fotográfica profissional",
                  "Fotos de produtos, ambiente ou equipe",
                  "Captação de vídeos curtos para Reels",
                ],
              },
              {
                icon: Palette,
                title: "Conteúdo para Redes",
                items: [
                  "8 artes/posts personalizados",
                  "Identidade visual aplicada nas publicações",
                  "Material pronto pra postar",
                ],
              },
              {
                icon: Globe,
                title: "Site Institucional",
                items: [
                  "Site de uma página, feito sob medida",
                  "Botão de contato direto pelo WhatsApp",
                  "Localização e formulário de contato",
                ],
              },
            ].map(({ icon: Icon, title, items }, i) => (
              <div
                key={i}
                className="bg-clr2/4 border border-clr2/10 rounded-2xl p-9 flex flex-col gap-6 hover:border-clr3/40 transition-colors duration-500"
              >
                <Icon className="w-7 h-7 text-clr3" />
                <h4 className="text-lg font-semibold text-clr2 tracking-[-0.01em]">
                  {title}
                </h4>
                <ul className="flex flex-col gap-3">
                  {items.map((item, j) => (
                    <li key={j} className="flex items-start gap-3">
                      <CheckCircle className="w-4 h-4 mt-0.5 shrink-0 text-clr3" />
                      <span className="text-sm text-clr2/70 font-light leading-relaxed">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-x-10 gap-y-4 pt-6 border-t border-clr2/10">
            {[
              { icon: MessageCircle, label: "Botão para WhatsApp" },
              { icon: MapPin, label: "Localização no site" },
              { icon: FileText, label: "Formulário de contato" },
            ].map(({ icon: Icon, label }, i) => (
              <div key={i} className="flex items-center gap-2.5">
                <Icon className="w-4 h-4 text-clr2/50" />
                <span className="text-sm text-clr2/60 font-light">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMO FUNCIONA */}
      <section className="py-28 bg-clr2">
        <div className={W}>
          <p className="text-[10px] tracking-[0.35em] uppercase text-clr3 font-semibold mb-4">
            O processo
          </p>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight tracking-[-0.02em] mb-16 max-w-2xl">
            Do primeiro contato ao site no ar.
          </h2>

          <div className="grid md:grid-cols-4 gap-10">
            {[
              {
                num: "01",
                title: "Diagnóstico",
                desc: "Conversamos sobre o negócio, o público e o que já existe hoje nas redes.",
              },
              {
                num: "02",
                title: "Produção",
                desc: "Sessão de fotos e vídeos no seu espaço, com direção de cena e enquadramento.",
              },
              {
                num: "03",
                title: "Aplicação",
                desc: "Criação das 8 artes e montagem do site com o material produzido.",
              },
              {
                num: "04",
                title: "Entrega",
                desc: "Você recebe tudo pronto: posts, vídeos e site publicado.",
              },
            ].map(({ num, title, desc }, i) => (
              <div key={i} className="flex flex-col gap-4">
                <span className="text-[10px] tracking-[0.3em] text-clr3 font-semibold">
                  {num}
                </span>
                <h4 className="text-lg font-semibold tracking-[-0.01em]">
                  {title}
                </h4>
                <p className="text-sm text-clr1/60 font-light leading-relaxed">
                  {desc}
                </p>
                {i < 3 && (
                  <div className="hidden md:block w-full h-px bg-clr1/10 mt-2" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* E DEPOIS */}
      <section className="py-28 bg-clr1">
        <div className={W}>
          <div className="bg-clr3 rounded-2xl p-10 md:p-14 grid md:grid-cols-[1fr_auto] gap-10 items-center">
            <div>
              <p className="text-[10px] tracking-[0.35em] uppercase text-clr2/60 font-semibold mb-4">
                E depois?
              </p>
              <h3 className="text-2xl md:text-3xl font-bold text-clr2 leading-snug tracking-[-0.02em] mb-4">
                Esse pacote é um começo, não um ponto final.
              </h3>
              <p className="text-clr2/80 font-light leading-relaxed max-w-xl">
                Ao final, você decide: fica com o material pronto e o site no
                ar, ou segue com a Torodan em um plano mensal — já conhecendo
                de perto a qualidade do nosso trabalho.
              </p>
            </div>
            <a href="#precos-mensais">
              <Button
                size="lg"
                className="bg-clr2 text-clr3 hover:bg-clr1 hover:text-clr2 transition-all duration-300 hover:scale-105 cursor-pointer tracking-[0.05em] font-medium px-8 py-6 rounded-full whitespace-nowrap"
              >
                Ver planos mensais
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-28 bg-clr2">
        <div className={W}>
          <div className="mb-12">
            <p className="text-[10px] tracking-[0.35em] uppercase text-clr3 font-semibold mb-4">
              Dúvidas
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-clr1 leading-tight tracking-[-0.02em]">
              Sobre a oferta de lançamento
            </h2>
          </div>

          <div className="border-t border-clr1/20">
            {[
              {
                q: "Serve para qualquer tipo de negócio?",
                a: "Sim. O pacote foi criado justamente para se adaptar a diferentes segmentos — clínicas, barbearias, lojas, restaurantes e outros pequenos negócios que precisam de fotos, vídeos e presença online.",
              },
              {
                q: "Como funciona a sessão de fotos e vídeos?",
                a: "Vamos até o seu espaço em uma visita agendada, fotografamos produtos, ambiente e equipe, e captamos vídeos curtos que servem tanto para as artes quanto para uso livre nas suas redes.",
              },
              {
                q: "O site fica no ar de verdade?",
                a: "Sim. É um site institucional de uma página, com botão de WhatsApp, localização e formulário de contato, pronto para receber visitantes.",
              },
              {
                q: "Quanto tempo leva do início à entrega?",
                a: "O prazo é combinado logo no início, mas em geral o processo completo — da sessão de fotos à entrega do site e das artes — leva poucas semanas.",
              },
              {
                q: "Essa condição é permanente?",
                a: "Não. R$ 1.200 é um valor de lançamento, válido por tempo limitado enquanto o estúdio constrói seu portfólio inicial. O valor normal do pacote é R$ 1.890.",
              },
            ].map(({ q, a }, i) => (
              <details key={i} className="group border-b border-clr1/20 py-6">
                <summary className="flex items-center justify-between cursor-pointer list-none">
                  <span className="text-clr1/80 font-medium text-base md:text-lg tracking-[-0.01em] pr-6">
                    {q}
                  </span>
                  <ChevronDown className="w-5 h-5 text-clr3 shrink-0 transition-transform duration-300 group-open:rotate-180" />
                </summary>
                <p className="text-clr1/90 text-[15px] leading-relaxed font-light mt-4 max-w-2xl">
                  {a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
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
            Vagas limitadas
          </p>
          <h2 className="text-4xl md:text-6xl font-bold text-clr2 leading-[1.05] tracking-[-0.03em] mb-8 max-w-2xl">
            Vamos colocar sua empresa no digital?
          </h2>
          <p className="text-clr2/70 text-lg mb-12 font-light leading-relaxed max-w-xl">
            Fale agora pelo WhatsApp e garanta o pacote de lançamento por
            R$ 1.200.
          </p>
          <a href={WHATSAPP_LINK} target="_blank">
            <Button
              size="lg"
              className="bg-clr2 text-clr3 hover:bg-clr1 hover:text-clr2 transition-all duration-300 hover:scale-105 px-10 py-6 font-semibold cursor-pointer tracking-[0.08em] rounded-full gap-3"
            >
              Garantir minha vaga
              <FaWhatsapp className="w-5 h-5" />
            </Button>
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}