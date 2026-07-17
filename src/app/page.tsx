import { Button } from "@/components/ui/button";
import { FaWhatsapp } from "react-icons/fa";
import {
  Globe,
  Camera,
  Share2,
  CheckCircle,
  ChevronDown,
} from "lucide-react";
import Navbar from "@/components/navbar";
import Brands from "@/components/brands";
import Image from "next/image";
import computer from "../../public/computer.jpg";
import Footer from "@/components/footer";

const W = "max-w-screen-2xl mx-auto px-6 md:px-16";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col font-sans bg-clr2 text-clr1 scroll-smooth">
      <Navbar />

      {/* HERO */}
      <section className="relative flex flex-col items-start justify-end 2xl:min-h-screen pb-24 pt-40 overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(var(--clr1) 1px, transparent 1px), linear-gradient(90deg, var(--clr1) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />

        <span className="absolute top-40 right-6 md:right-16 text-[10px] tracking-[0.3em] uppercase text-clr1/70 font-medium hidden lg:flex">
          Soluções Web
        </span>

        <div className={`relative w-full ${W} lg:mt-28 2xl:mt-0`}>
          <p className="text-[11px] tracking-[0.35em] uppercase text-clr3 font-semibold mb-8">
            Torodan — Marketing digital
          </p>
          <h1 className="text-5xl md:text-[5.5rem] font-extrabold leading-[1.02] tracking-[-0.03em] mb-6">
            O{"  "}
            <em className="not-italic text-clr3 relative inline-block">
              time do marketing
            </em>
            <br />
            da sua empresa
          </h1>
          <p className="max-w-xl text-clr1/70 text-lg leading-relaxed mb-12 font-light">
            Assumimos toda a produção de conteúdo e a presença digital do seu
            negócio para que você possa focar no que realmente importa.
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
              className="text-sm text-clr1/70 hover:text-clr1 transition-colors tracking-widest uppercase font-medium "
            >
              Ver serviços
            </a>
          </div>
        </div>
      </section>

      {/* SERVICES */}
<section id="servicos" className="lg:py-32 py-18 bg-clr1">
  <div className={W}>
    <div className="flex flex-col md:flex-row md:items-end justify-between lg:mb-20 mb-10 gap-6">
      <div>
        <p className="text-[10px] tracking-[0.35em] uppercase text-clr3 font-semibold mb-4">
          O que fazemos
        </p>
        <h2 className="text-4xl md:text-5xl font-bold text-clr2 leading-tight tracking-[-0.02em]">
          Soluções para seu negócio
        </h2>
      </div>

      <p className="text-clr2/60 max-w-sm text-sm leading-relaxed font-light">
        Soluções integradas para cada etapa da sua presença digital.
      </p>
    </div>

    <div className="grid gap-4 md:gap-px md:grid-cols-3 md:bg-clr2/10">
      {[
        {
          icon: Share2,
          title: "Gestão de Presença Digital",
          desc: "Planejamento, produção de conteúdo e gestão das redes sociais para manter sua empresa ativa, profissional e relevante.",
          num: "01",
        },
        {
          icon: Camera,
          title: "Fotografia Profissional",
          desc: "Fotografia profissional e criação de conteúdo para destacar sua marca em todos os canais.",
          num: "02",
        },
        {
          icon: Globe,
          title: "Websites Estratégicos",
          desc: "Sites modernos, rápidos e preparados para apresentar sua empresa e gerar novas oportunidades de negócio.",
          num: "03",
        },
      ].map(({ icon: Icon, title, desc, num }, i) => (
        <div
          key={i}
          className="
            bg-clr1
            border border-clr2/10
            rounded-xl
            md:border-0
            md:rounded-none
            p-8 md:p-12
            flex flex-col gap-8
            group
            md:hover:bg-clr3
            transition-all duration-500
            cursor-default
          "
        >
          <div className="flex items-start justify-between">
            <Icon className="w-8 h-8 text-clr3 md:group-hover:text-clr2 transition-colors duration-500" />

            <span className="text-[10px] tracking-[0.3em] text-clr2/40 md:text-clr2/30 md:group-hover:text-clr2/60 font-medium transition-colors duration-500">
              {num}
            </span>
          </div>

          <div>
            <h4 className="text-xl font-semibold mb-3 text-clr2 leading-snug tracking-[-0.01em]">
              {title}
            </h4>

            <p className="text-clr2/70 md:text-clr2/60 md:group-hover:text-clr2/80 leading-relaxed text-sm transition-colors duration-500">
              {desc}
            </p>
          </div>

          <div className="mt-auto">
            <div className="w-16 md:w-8 h-px bg-clr3 md:group-hover:bg-clr2 md:group-hover:w-16 transition-all duration-500" />
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

      {/* HOW WE WORK */}
      <section id="sobre" className="lg:py-32 py-18 bg-clr2">
        <div className={W}>
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <p className="text-[10px] tracking-[0.35em] uppercase text-clr3 font-semibold mb-4">
                SOBRE A TORODAN
              </p>
              <h2 className="text-4xl md:text-5xl font-bold leading-tight tracking-[-0.02em] mb-10">
                Mais do que entregar peças, trabalhamos para fazer sua empresa
                crescer no digital.
              </h2>

              <div className="space-y-5">
                {[
                  "Atendimento próximo e personalizado, sem fórmulas prontas ou soluções genéricas.",
                  "Planejamento baseado na realidade e nos objetivos do seu negócio.",
                  "Produção de fotos, vídeos, conteúdo e website integrada em uma única estratégia.",
                  "Acompanhamento contínuo para manter sua comunicação sempre atualizada.",
                  "Atendimento presencial em Diamantina e região, com suporte remoto para clientes de outras cidades.",
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

      {/* PRICING */}
      <section id="precos" className="lg:py-32 py-18 bg-clr1">
        <div className={W}>
          <div className="flex flex-col md:flex-row md:items-end justify-between lg:mb-20 mb-10 gap-6">
            <div>
              <p className="text-[10px] tracking-[0.35em] uppercase text-clr3 font-semibold mb-4">
                Investimento
              </p>
              <h2 className="text-4xl md:text-5xl font-bold text-clr2 leading-tight tracking-[-0.02em]">
                Planos & Pacotes
              </h2>
            </div>
            <p className="text-clr2/60 max-w-sm text-sm leading-relaxed font-light">
              Escolha o pacote ideal para o momento do seu negócio.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Plano Essencial",
                desc: "Ideal para pequenos negócios.",
                price: "800",
                featured: false,
                items: [
                  "Planejamento mensal",
                  "Gestão do Instagram/Facebook",
                  "8 posts mensais",
                  "2 visitas mensais para fotografias",
                  "Tratamento das imagens",
                  "Stories em dias de visita",
                  "Relatório simples",
                ],
              },
              {
                name: "Plano Presença",
                desc: "Para empresas que dependem bastante do digital.",
                price: "1.200",
                featured: true,
                items: [
                  "Tudo do Essencial +",
                  "12 a 16 posts",
                  "Fotografias de produtos, ambiente ou equipe",
                  "Produção de vídeos curtos para Reels",
                  "Atualização de perfil Google",
                  "Criação de artes para campanhas",
                ],
              },
              {
                name: "Plano Completo",
                desc: "Presença digital completa, sem preocupações.",
                price: "1.600",
                featured: false,
                items: [
                  "Tudo do Plano Presença +",
                  "Website institucional",
                  "Hospedagem e manutenção",
                  "Atualizações periódicas do site",
                  "Landing pages quando necessário",
                  "Prioridade no atendimento",
                ],
              },
            ].map((plan, i) => (
              <div
                key={i}
                className={`relative flex flex-col p-10 rounded-2xl border transition-all duration-500 ${
                  plan.featured
                    ? "bg-clr3 border-clr3 md:-translate-y-4 shadow-2xl"
                    : "bg-clr2/3 border-clr2/10 hover:border-clr3/40"
                }`}
              >
                {plan.featured && (
                  <span className="absolute -top-3 left-10 text-[9px] tracking-[0.3em] uppercase bg-clr2 text-clr3 font-semibold px-4 py-1.5 rounded-full">
                    Mais Popular
                  </span>
                )}

                <h4 className="text-xl font-semibold mb-2 tracking-[-0.01em] text-clr2">
                  {plan.name}
                </h4>
                <p
                  className={`text-sm mb-8 font-light leading-relaxed ${
                    plan.featured ? "text-clr2/70" : "text-clr2/50"
                  }`}
                >
                  {plan.desc}
                </p>

                <div className="mb-8">
                  <span className="text-4xl font-extrabold tracking-[-0.02em] text-clr2">
                    R$ {plan.price}
                  </span>
                  <span
                    className={`text-sm font-light ${
                      plan.featured ? "text-clr2/70" : "text-clr2/50"
                    }`}
                  >
                    /mês
                  </span>
                </div>

                <div
                  className={`w-full h-px mb-8 ${
                    plan.featured ? "bg-clr2/20" : "bg-clr2/10"
                  }`}
                />

                <ul className="flex flex-col gap-4 mb-10 flex-1">
                  {plan.items.map((item, j) => (
                    <li key={j} className="flex items-start gap-3">
                      <CheckCircle
                        className={`w-4 h-4 mt-0.5 shrink-0 ${
                          plan.featured ? "text-clr2" : "text-clr3"
                        }`}
                      />
                      <span
                        className={`text-sm leading-relaxed font-light ${
                          plan.featured ? "text-clr2/90" : "text-clr2/70"
                        }`}
                      >
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>

                <a href="https://wa.me/5538998162313" target="_blank">
                  <Button
                    size="lg"
                    className={`w-full transition-all duration-300 hover:scale-105 cursor-pointer tracking-[0.05em] font-medium rounded-full ${
                      plan.featured
                        ? "bg-clr2 text-clr3 hover:bg-clr1 hover:text-clr2"
                        : "bg-clr3 text-clr2 hover:bg-clr2 hover:text-clr3"
                    }`}
                  >
                    Solicitar Orçamento
                  </Button>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="duvidas" className="lg:py-32 py-20 bg-clr2">
        <div className={W}>
          <div className="mb-12">
            <p className="text-[10px] tracking-[0.35em] uppercase text-clr3 font-semibold mb-4">
              Dúvidas
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-clr1 leading-tight tracking-[-0.02em]">
              Perguntas Frequentes
            </h2>
          </div>

          <div className=" border-t border-clr1/20">
            {[
              {
                q: "Quais serviços a Torodan oferece?",
                a: "Atuamos com gestão de redes sociais, fotografia comercial, produção de vídeos, criação de websites e consultoria para fortalecer a presença digital de empresas.",
              },
              {
                q: "Vocês atendem apenas empresas de Diamantina?",
                a: "Não. O atendimento presencial é realizado em Diamantina e região, enquanto projetos de websites e marketing também podem ser desenvolvidos remotamente para clientes de qualquer cidade.",
              },
              {
                q: "Preciso contratar todos os serviços juntos?",
                a: "Não. Você pode contratar apenas fotografia, apenas um website ou somente a gestão das redes sociais. Também criamos soluções completas para quem deseja centralizar toda a comunicação em um único parceiro.",
              },
              {
                q: "Como funciona o processo de trabalho?",
                a: "Começamos entendendo seu negócio e seus objetivos. A partir disso, definimos uma estratégia, produzimos os materiais necessários e acompanhamos continuamente os resultados.",
              },
              {
                q: "Quanto tempo leva para um projeto ficar pronto?",
                a: "Depende do serviço contratado. Sessões fotográficas costumam ser entregues em poucos dias, enquanto websites e projetos de marketing seguem um cronograma definido junto ao cliente.",
              },
              {
                q: "Os planos possuem fidelidade?",
                a: "Cada projeto é apresentado de forma transparente antes da contratação. Alguns serviços são pontuais e outros funcionam por meio de planos mensais, sempre definidos previamente.",
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
      <Brands />

      {/* CTA */}
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
          <a href="https://wa.me/5538998162313" target="_blank">
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
      <Footer />
    </div>
  );
}
