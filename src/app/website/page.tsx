import { Button } from "@/components/ui/button";
import { FaWhatsapp } from "react-icons/fa";
import {
  ShieldCheck,
  MousePointerClick,
  Zap,
  Globe,
  ChevronDown,
} from "lucide-react";
import Image from "next/image";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const W = "max-w-screen-2xl mx-auto px-6 md:px-16";

const WHATSAPP_MSG = encodeURIComponent(
  "Olá! Gostaria de agendar uma Avaliação Gratuita do meu Site.",
);
const WHATSAPP_LINK = `https://wa.me/5512981622637?text=${WHATSAPP_MSG}`;

export const metadata = {
  title: "Torodan | Web Design",
  description:
    "Sites modernos e focados em conversão para negócios de serviços profissionais. Agende uma avaliação gratuita do seu site.",
};

export default function WebsiteReview() {
  return (
    <div className="min-h-screen flex flex-col font-sans bg-clr2 text-clr1 scroll-smooth">
      <Navbar />

      <section className="relative flex items-center min-h-[80vh]  pt-28 pb-16 overflow-hidden bg-clr1">
        <div className="absolute inset-0">
          <Image
            src="/images/websites.webp"
            alt=""
            fill
            priority
            className="object-cover object-right"
          />

          <div className="absolute inset-0 bg-clr2/85" />
          <div className="absolute inset-0 bg-linear-to-r from-clr2/80 via-clr2/10 to-clr2/10" />
        </div>

        <div className={`relative w-full ${W}`}>
          <p className="text-[11px] tracking-[0.35em] uppercase text-clr3 font-semibold mb-6">
            Torodan — Sites Modernos
          </p>
          <h1 className="text-4xl md:text-6xl font-extrabold leading-[1.05] tracking-[-0.03em] mb-5 max-w-3xl">
            Seu próximo cliente pode estar procurando pela sua empresa{" "}
            <span className="text-clr3">agora.</span>
          </h1>
          <p className="max-w-lg text-clr1/70 text-base md:text-lg leading-relaxed mb-9 font-light">
            Mais credibilidade, mais confiança e uma presença online que
            trabalha por você 24 horas por dia.
          </p>

          <div className="flex items-center gap-6">
            <a href={WHATSAPP_LINK} target="_blank">
              <Button
                size="lg"
                className="bg-clr3 hover:bg-clr1 hover:text-clr2 border border-transparent hover:border-clr1/20 text-clr2 transition-all duration-300 hover:scale-105 cursor-pointer tracking-[0.08em] font-medium px-10 py-6 rounded-full"
              >
                Vamos Conversar
              </Button>
            </a>
            <a
              href="#servicos"
              className="text-sm text-clr1/70 hover:text-clr1 transition-colors tracking-widest uppercase font-medium"
            >
              Como Trabalhamos
            </a>
          </div>
        </div>
      </section>

      <section className="lg:py-32 py-18 bg-clr1">
        <div className={W}>
          <div className="flex flex-col md:flex-row md:items-end justify-between lg:mb-20 mb-10 gap-6">
            <div>
              <p className="text-[10px] tracking-[0.35em] uppercase text-clr3 font-semibold mb-4">
                O QUE UM SITE PRECISA ENTREGAR
              </p>
              <h2 className="text-4xl md:text-5xl font-bold text-clr2 leading-tight tracking-[-0.02em]">
                Um ótimo site <br /> deve fazer quatro coisas.
              </h2>
            </div>

            <p className="text-clr2/60 max-w-sm text-sm leading-relaxed font-light">
              Todo projeto da Torodan é pensado para ajudar sua empresa a
              conquistar clientes, transmitir confiança e crescer no ambiente
              digital.
            </p>
          </div>

          <div className="grid gap-4 md:gap-px md:grid-cols-4 md:bg-clr2/10">
            {[
              {
                icon: ShieldCheck,
                title: "Gerar Confiança",
                desc: "A primeira impressão faz diferença. Um design profissional mostra que sua empresa é séria e preparada para atender novos clientes.",
                num: "01",
              },
              {
                icon: MousePointerClick,
                title: "Converter Visitantes",
                desc: "Seu cliente encontra rapidamente o que procura e consegue falar com sua empresa pelo WhatsApp, telefone ou formulário.",
                num: "02",
              },
              {
                icon: Zap,
                title: "Performance Rápida",
                desc: "Um site lento afasta visitantes. Desenvolvemos páginas rápidas para oferecer uma excelente experiência em qualquer dispositivo.",
                num: "03",
              },
              {
                icon: Globe,
                title: "Ser encontrado no Google",
                desc: "Aplicamos boas práticas de SEO para aumentar as chances da sua empresa aparecer quando alguém procurar pelos seus serviços.",
                num: "04",
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

      {/* COMO FUNCIONA */}
      <section className="lg:py-32 py-18 bg-clr2 text-clr1">
        <div className={W}>
          <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-20 items-start">
            {/* ESQUERDA */}
            <div className="md:sticky top-28">
              <p className="text-[10px] tracking-[0.35em] uppercase text-clr3 font-semibold mb-5">
                COMO FUNCIONA
              </p>

              <h2 className="text-4xl md:text-5xl font-bold tracking-[-0.02em] leading-tight mb-6">
                Cuidamos de todo o processo para você.
              </h2>

              <p className="text-clr1/65 leading-relaxed max-w-md">
                Desde o primeiro contato até a publicação do site, acompanhamos
                cada etapa para que você tenha uma experiência simples,
                transparente e sem complicações.
              </p>

              <div className="mt-10 inline-flex items-center gap-3 rounded-full border border-clr1/10 px-5 py-3">
                <span className="w-2 h-2 rounded-full bg-clr3" />
                <span className="text-sm text-clr1/70">
                  Acompanhamento do início ao fim
                </span>
              </div>
            </div>

            {/* DIREITA */}
            <div className="space-y-5">
              {[
                {
                  number: "01",
                  title: "Conhecemos sua empresa",
                  desc: "Conversamos para entender seu negócio, seus objetivos e o que você espera do novo site.",
                },
                {
                  number: "02",
                  title: "Planejamos a estrutura",
                  desc: "Organizamos as páginas, conteúdos e definimos a melhor forma de apresentar sua empresa.",
                },
                {
                  number: "03",
                  title: "Desenvolvemos o projeto",
                  desc: "Criamos um site moderno, rápido e totalmente responsivo.",
                },
                {
                  number: "04",
                  title: "Você acompanha tudo",
                  desc: "Apresentamos o projeto, realizamos ajustes e refinamos cada detalhe.",
                },
                {
                  number: "05",
                  title: "Publicamos o site",
                  desc: "Configuramos domínio, hospedagem e colocamos seu site no ar.",
                },
                {
                  number: "06",
                  title: "Suporte após a entrega",
                  desc: "Se precisar, continuamos disponíveis para manutenção e novas melhorias.",
                },
              ].map((item) => (
                <div
                  key={item.number}
                  className="group border border-clr1/10 rounded-3xl p-8 transition-all duration-300 hover:border-clr3 hover:bg-clr1/5"
                >
                  <div className="flex gap-6">
                    <span className="text-clr3 text-sm tracking-[0.25em] font-semibold pt-1">
                      {item.number}
                    </span>

                    <div>
                      <h3 className="text-xl font-semibold mb-3">
                        {item.title}
                      </h3>

                      <p className="text-clr1/65 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SOBRE */}
      <section className="lg:py-32 py-18 bg-clr1">
        <div
          className={`${W} grid lg:grid-cols-[0.9fr_1.1fr] gap-20 items-start`}
        >
          {/* ESQUERDA */}
          <div>
            <p className="text-[10px] tracking-[0.35em] uppercase text-clr3 font-semibold mb-5">
              Por que escolher a Torodan?
            </p>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight tracking-[-0.02em] mb-8 text-clr2">
              Não fazemos apenas páginas bonitas.
            </h2>

            <div className="space-y-6 text-clr2/80 leading-relaxed">
              <p>
                Criamos sites pensando em quem realmente importa: seus futuros
                clientes.
              </p>

              <p>
                Cada projeto é desenvolvido para transmitir confiança, carregar
                rapidamente e facilitar o contato com sua empresa.
              </p>

              <p>
                Utilizamos tecnologias modernas, priorizamos desempenho e
                seguimos boas práticas para que seu site tenha uma excelente
                experiência em computadores e celulares.
              </p>
              <p>Nosso objetivo é simples:</p>
              <p className="font-bold text-clr2/90">
                fazer seu site trabalhar para o seu negócio.
              </p>
            </div>
          </div>

          {/* DIREITA */}
          <div className="grid md:grid-cols-2 gap-5 text-clr2">
            {[
              {
                title: "Design Personalizado",
                desc: "Cada site é desenhado especificamente para o seu negócio, em vez de depender de templates genéricos.",
              },
              {
                title: "Performance em Primeiro Lugar",
                desc: "Carregamento rápido, layouts responsivos e desenvolvimento limpo desde a base.",
              },
              {
                title: "Foco em Conversão",
                desc: "Cada página é estruturada para guiar visitantes até ações relevantes e novos contatos.",
              },
              {
                title: "Colaboração Direta",
                desc: "Você trabalha diretamente com a pessoa que projeta e desenvolve seu site, do início ao fim.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="group border border-clr2/10 rounded-3xl p-8 transition-all duration-300 hover:border-clr3 hover:-translate-y-1"
              >
                <h3 className="text-xl font-semibold mb-4">{item.title}</h3>

                <p className=" leading-relaxed text-sm text-clr2/60">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="lg:py-32 py-18 bg-clr2">
        <div className={W}>
          <div className="mb-12">
            <p className="text-[10px] tracking-[0.35em] uppercase text-clr3 font-semibold mb-4">
              PERGUNTAS FREQUENTES
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-clr1 leading-tight tracking-[-0.02em]">
              Perguntas Frequentes
            </h2>
          </div>

          <div className="border-t border-clr2/15">
            {[
              {
                q: "Quanto custa um site?",
                a: "O valor depende do tipo de projeto, quantidade de páginas e funcionalidades desejadas. Antes de qualquer orçamento, entendemos suas necessidades para apresentar uma proposta personalizada e transparente.",
              },
              {
                q: "Quanto tempo leva para o site ficar pronto?",
                a: "Em média, entre 2 e 4 semanas. Projetos maiores ou com funcionalidades específicas podem exigir um prazo maior, que sempre é informado antes do início do desenvolvimento.",
              },
              {
                q: "Preciso fornecer todos os textos e imagens?",
                a: "Não. Se você já tiver esse material, utilizamos no projeto. Caso contrário, orientamos na criação dos conteúdos e, quando necessário, também oferecemos serviços de fotografia e produção de imagens.",
              },
              {
                q: "Meu site vai funcionar no celular?",
                a: "Sim. Todos os sites são desenvolvidos para oferecer uma ótima experiência em computadores, tablets e smartphones.",
              },
              {
                q: "Meu site aparece no Google?",
                a: "Sim. Desenvolvemos todos os projetos seguindo boas práticas de SEO para facilitar a indexação e aumentar as chances da sua empresa ser encontrada nas pesquisas.",
              },
              {
                q: "Depois de pronto, posso fazer alterações?",
                a: "Sim. Dependendo do projeto, você poderá editar algumas informações por conta própria ou contar conosco para futuras atualizações e manutenção.",
              },
              {
                q: "Preciso pagar alguma mensalidade?",
                a: "O desenvolvimento do site é um investimento único. Além disso, existem custos anuais ou mensais relacionados ao domínio, hospedagem e, caso deseje, planos de manutenção.",
              },
              {
                q: "Vocês oferecem suporte após a entrega?",
                a: "Sim. Continuamos disponíveis para suporte, manutenção e melhorias futuras, garantindo que seu site permaneça atualizado e funcionando corretamente.",
              },
            ].map(({ q, a }, i) => (
              <details key={i} className="group border-b border-clr1/15 py-6">
                <summary className="flex items-center justify-between cursor-pointer list-none">
                  <span className="text-clr1/85 font-medium text-base md:text-lg tracking-[-0.01em] pr-6">
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
            Vamos criar um site para
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
    </div>
  );
}
