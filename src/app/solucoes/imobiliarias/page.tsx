import { Button } from "@/components/ui/button";
import { FaWhatsapp } from "react-icons/fa";
import {
  Camera,
  Instagram,
  TrendingDown,
  Star,
  Globe,
  Megaphone,
  Building2,
  ImageOff,
  MessageSquareOff,
  StarOff,
  CalendarClock,
  CheckCircle,
  ChevronDown,
} from "lucide-react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const W = "max-w-screen-2xl mx-auto px-6 md:px-16";

export default function Page() {
  return (
    <div className="min-h-screen flex flex-col font-sans bg-clr2 text-clr1 scroll-smooth">
      <Navbar />

      {/* HERO */}
      <section className="relative flex items-center min-h-[80vh] pt-40 pb-24 overflow-hidden">
        {/* Grid de fundo */}
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(var(--clr1) 1px, transparent 1px), linear-gradient(90deg, var(--clr1) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />

        {/* Imagem */}
        <div className="absolute inset-y-0 right-0 w-full md:w-[48%] overflow-hidden pointer-events-none">
          <div
            className="lg:absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: "url('/images/imob.jpg')",
            }}
          />
        </div>

   

        <div className={`relative z-10 w-full ${W}`}>
          <div className="max-w-2xl">
            <p className="mb-6 text-[11px] font-semibold tracking-[0.35em] uppercase text-clr3">
              Torodan — Marketing Digital
            </p>

            <h1 className="mb-8 text-6xl font-extrabold leading-[1.04] tracking-[-0.03em] md:text-6xl">
              Presença Digital
              <br />
              para{" "}
              <em className="relative inline-block not-italic text-clr3">
                Imobiliárias
        
              </em>
            </h1>

            <p className="mb-12 max-w-md text-base font-light leading-relaxed text-clr1/60 md:text-lg">
              A Torodan cuida das redes sociais, fotografia e comunicação
              digital da sua imobiliária para que você possa focar em fechar
              negócios e atender bem seus clientes.
            </p>

            <div className="flex items-center gap-6">
              <a href="#planos">
                <Button
                  size="lg"
                  className="cursor-pointer rounded-full bg-clr3 px-10 py-6 font-medium tracking-[0.08em] text-clr2 transition-all duration-300 hover:scale-105 hover:bg-clr1"
                >
                  Ver planos
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* DESAFIOS */}
      <section id="desafios" className="lg:py-32 py-20 bg-clr1">
        <div className={W}>
          <div className="flex flex-col md:flex-row md:items-end justify-between  mb-12 gap-6">
            <div>
              <p className="text-[10px] tracking-[0.35em] uppercase text-clr3 font-semibold mb-4">
                O mercado imobiliário
              </p>
              <h2 className="text-4xl md:text-5xl font-bold text-clr2 leading-tight tracking-[-0.02em]">
                Sua imobiliária enfrenta
                <br /> algum destes desafios?
              </h2>
            </div>
            <p className="text-clr2/70 max-w-sm text-sm leading-relaxed font-light">
              Situações que vemos com frequência em imobiliárias que ainda não
              priorizam o digital.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-px bg-clr2/10">
            {[
              {
                icon: ImageOff,
                title: "Fotos antigas dos imóveis",
                desc: "Imagens desatualizadas ou de baixa qualidade que não fazem justiça aos imóveis anunciados.",
              },
              {
                icon: MessageSquareOff,
                title: "Redes sociais paradas",
                desc: "Perfis sem atualização constante, perdendo oportunidades de engajar novos clientes.",
              },
              {
                icon: StarOff,
                title: "Poucas avaliações",
                desc: "Falta de prova social que gera insegurança em quem está pesquisando um imóvel.",
              },
              {
                icon: TrendingDown,
                title: "Site desatualizado",
                desc: "Páginas antigas, lentas ou pouco atraentes, que afastam visitantes em vez de converter.",
              },
              {
                icon: CalendarClock,
                title: "Baixa divulgação",
                desc: "Novas oportunidades e lançamentos que não chegam até quem realmente está procurando.",
              },
              {
                icon: Building2,
                title: "Marca pouco lembrada",
                desc: "Imobiliária que não se destaca da concorrência na hora da decisão do cliente.",
              },
            ].map(({ icon: Icon, title, desc }, i) => (
              <div
                key={i}
                className="bg-clr1 p-6 md:p-12 flex flex-col gap-8 group hover:bg-clr3 transition-all duration-500 cursor-default"
              >
                <Icon className="w-8 h-8 text-clr3 group-hover:text-clr2 transition-colors duration-500" />
                <div>
                  <h4 className="text-xl font-semibold mb-3 text-clr2 leading-snug tracking-[-0.01em]">
                    {title}
                  </h4>
                  <p className="text-clr2/60 group-hover:text-clr2/80 leading-relaxed text-sm transition-colors duration-500">
                    {desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMO AJUDAMOS */}
      <section id="solucoes" className="lg:py-32 py-20 bg-clr2">
        <div className={W}>
          <div className="grid md:grid-cols-2 lg:gap-20 gap-10 items-start">
            <div>
              <p className="text-[10px] tracking-[0.35em] uppercase text-clr3 font-semibold mb-4">
                Nossa solução
              </p>
              <h2 className="text-4xl md:text-5xl font-bold leading-tight tracking-[-0.02em] mb-8">
                Como ajudamos sua imobiliária
              </h2>
              <p className="text-clr1/80 leading-relaxed font-light text-base">
                Cuidamos de toda a comunicação digital da sua imobiliária,
                valorizando cada imóvel e mantendo sua marca sempre presente na
                rotina de quem está buscando comprar, vender ou alugar.
              </p>
            </div>

            <div className="space-y-7">
              {[
                {
                  icon: Camera,
                  text: "Fotografia profissional de imóveis, ambientes e diferenciais de cada empreendimento.",
                },
                {
                  icon: Star,
                  text: "Estratégias para aumentar avaliações e fortalecer a prova social da imobiliária.",
                },
                {
                  icon: Instagram,
                  text: "Gestão de redes sociais com posts e stories consistentes, valorizando cada imóvel.",
                },
                {
                  icon: Globe,
                  text: "Website institucional moderno, rápido e atualizado, pronto para gerar contatos.",
                },
                {
                  icon: Megaphone,
                  text: "Divulgação estratégica de lançamentos e novas oportunidades para seus clientes.",
                },
              ].map(({ icon: Icon, text }, i) => (
                <div
                  key={i}
                  className="flex items-start gap-5 group cursor-default"
                >
                  <div className="shrink-0 w-5 h-5 mt-0.5">
                    <Icon className="w-5 h-5 text-clr3" />
                  </div>
                  <p className="text-clr1/70 leading-relaxed text-base font-light group-hover:text-clr1 transition-colors duration-200">
                    {text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PLANOS */}
      <section id="planos" className="lg:py-32 py-20 bg-clr1">
        <div className={W}>
          <div className="flex flex-col md:flex-row md:items-end justify-between lg:mb-20 mb-12 gap-6">
            <div>
              <p className="text-[10px] tracking-[0.35em] uppercase text-clr3 font-semibold mb-4">
                Investimento
              </p>
              <h2 className="text-4xl md:text-5xl font-bold text-clr2 leading-tight tracking-[-0.02em]">
                Planos & Pacotes
              </h2>
            </div>
            <p className="text-clr2/50 max-w-sm text-sm leading-relaxed font-light">
              Pacotes pensados para diferentes momentos da sua imobiliária.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Plano Essencial",
                desc: "Ideal para imobiliárias que estão começando a organizar sua presença digital.",
                price: "800",
                featured: false,
                items: [
                  "Planejamento mensal",
                  "Gestão do Instagram/Facebook",
                  "8 posts mensais",
                  "2 visitas mensais para fotografar imóveis",
                  "Tratamento das imagens",
                  "Stories em dias de visita",
                  "Relatório simples",
                ],
              },
              {
                name: "Plano Presença",
                desc: "Para imobiliárias com carteira ativa de imóveis e que precisam de conteúdo constante.",
                price: "1.200",
                featured: true,
                items: [
                  "Tudo do Essencial +",
                  "12 a 16 posts",
                  "Fotografias de imóveis, fachadas e ambientes",
                  "Produção de vídeos curtos para Reels",
                  "Atualização de perfil Google",
                  "Criação de artes para lançamentos e campanhas",
                ],
              },
              {
                name: "Plano Completo",
                desc: "Para imobiliárias que querem uma presença digital completa, do site às redes sociais.",
                price: "1.600",
                featured: false,
                items: [
                  "Tudo do Plano Presença +",
                  "Website institucional",
                  "Hospedagem e manutenção",
                  "Atualizações periódicas do site",
                  "Landing pages para lançamentos",
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
      <section id="faq" className="lg:py-32 py-20 bg-clr2">
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
                q: "Vocês fotografam apartamentos, casas e empreendimentos?",
                a: "Sim. Fazemos fotografia de imóveis residenciais, comerciais, lançamentos e condomínios, sempre valorizando os diferenciais de cada um.",
              },
              {
                q: "Como funciona a produção de conteúdo para as redes sociais?",
                a: "Planejamos um calendário mensal com posts e stories, alinhado às visitas de fotografia, para manter as redes da imobiliária sempre atualizadas.",
              },
              {
                q: "Vocês atendem corretores autônomos ou só imobiliárias?",
                a: "Atendemos tanto imobiliárias quanto corretores autônomos que querem fortalecer sua presença digital.",
              },
              {
                q: "Existe fidelidade nos contratos?",
                a: "Trabalhamos com planos mensais. Os detalhes de contrato são combinados diretamente com cada cliente, de acordo com o plano escolhido.",
              },
              {
                q: "Quanto tempo leva para ver resultados nas redes sociais?",
                a: "Os primeiros resultados de engajamento costumam aparecer nas primeiras semanas, mas resultados consistentes de geração de contatos evoluem ao longo dos meses com constância.",
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

      {/* CTA */}
      <section className="relative lg:py-32 py-20 bg-clr3 overflow-hidden">
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
            Pronto para modernizar
            <br />
            sua imobiliária?
          </h2>
          <p className="text-clr2/70 text-lg mb-12 font-light leading-relaxed max-w-xl">
            Entre em contato e descubra como a Torodan pode ajudar sua
            imobiliária a atrair mais clientes.
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
