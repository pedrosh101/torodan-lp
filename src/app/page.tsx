import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { FaWhatsapp } from "react-icons/fa";

import {
  Globe,
  Rocket,
  Target,
  Instagram,
  Mail,
  CheckCircle,
  MessageCircle,
} from "lucide-react";

import Navbar from "@/components/navbar";
import Brands from "@/components/brands";
import Image from "next/image";
import computer from "../../public/computer.jpg";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col font-sans bg-clr2 text-clr1 scroll-smooth">
      <Navbar />

      {/* HERO */}
      <section className="relative flex flex-col items-center justify-center text-center pt-44 pb-36 px-6 overflow-hidden">
        <h2 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight tracking-tight">
          Impulsione seu negócio <br />
          com <span className="text-clr3">Marketing Digital</span>
        </h2>
        <p className="max-w-2xl text-lg text-clr1/70 mb-10">
          A Torodan é especialista em estratégias digitais que geram resultados
          reais. Aumente sua presença online, conquiste novos clientes e
          destaque sua marca.
        </p>
        <Button
          size="lg"
          className="bg-clr3 hover:bg-clr1 text-clr2 font-semibold px-10 py-6 transition-transform hover:scale-105 cursor-pointer"
        >
          <a href="#etapas">Saiba mais</a>
        </Button>
      </section>

      <section
        id="servicos"
        className="pt-20 pb-0 lg:pt-24 lg:pb-24 bg-linear-to-b from-clr1 via-clr1 to-clr2"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-32">
            <h3 className="text-4xl font-bold text-center mb-14 text-clr2">
              Nossos Serviços
            </h3>
            <div className="grid md:grid-cols-3 gap-10">
              {[
                {
                  icon: Globe,
                  title: "Websites Otimizados",
                  desc: "Desenvolvimento de sites rápidos, responsivos e prontos para converter visitantes em clientes.",
                },
                {
                  icon: Target,
                  title: "Gestão de Tráfego",
                  desc: "Campanhas inteligentes no Google, Facebook e Instagram para gerar leads qualificados.",
                },
                {
                  icon: Rocket,
                  title: "Branding & Identidade",
                  desc: "Construímos marcas fortes e consistentes que conectam com seu público.",
                },
              ].map(({ icon: Icon, title, desc }, i) => (
                <Card
                  key={i}
                  className="bg-clr2 text-clr1 hover:-translate-y-1 hover:shadow-2xl transition-all duration-300 rounded-2xl cursor-default"
                >
                  <CardContent className="p-10 flex flex-col items-center text-center">
                    <Icon className="w-12 h-12 mb-5 text-clr3" />
                    <h4 className="text-xl font-semibold mb-3">{title}</h4>
                    <p className="text-clr1/80 leading-relaxed">{desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div id="etapas">
            <h3 className="text-4xl font-bold text-center mb-16 text-white">
              Como Funciona?
            </h3>
            <div className="grid md:grid-cols-4 gap-8">
              {["Diagnóstico", "Estratégia", "Execução", "Resultados"].map(
                (title, i) => (
                  <Card
                    key={i}
                    className="bg-clr2 border border-clr1/10 shadow-md hover:shadow-xl transition-all duration-300 rounded-2xl cursor-default"
                  >
                    <CardContent className="flex flex-col text-center items-center py-5 px-6">
                      <div className="text-clr2 text-5xl font-extrabold bg-clr3 flex justify-center items-center rounded-full w-20 h-20 shadow-lg mb-4">
                        {i + 1}
                      </div>
                      <h4 className="font-semibold text-lg mb-2">{title}</h4>
                      <p className="text-clr1/80 text-base leading-relaxed">
                        {
                          [
                            "Entendemos o seu negócio, público e desafios.",
                            "Planejamos as melhores ações para alcançar resultados.",
                            "Colocamos em prática as campanhas e acompanhamos de perto.",
                            "Analisamos e otimizamos continuamente para crescer ainda mais.",
                          ][i]
                        }
                      </p>
                    </CardContent>
                  </Card>
                )
              )}
            </div>
          </div>
        </div>
      </section>

      <section id="sobre" className="lg:pt-24 lg:pb-24 pt-20 pb-4 bg-clr2 ">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-4xl font-bold mb-16 text-center">Como Trabalhamos</h3>

          <div className="grid md:grid-cols-2 gap-14">
            <div className="bg-clr1 p-12 rounded-3xl shadow-xl border border-clr1/20 backdrop-blur-sm">
              <div className="space-y-6">
                {[
                  "Estratégias sob medida para cada negócio.",
                  "Foco total em performance e resultados reais.",
                  "Transparência e comunicação constante.",
                  "Acompanhamento técnico contínuo.",
                  "Compromisso com prazos e qualidade.",
                ].map((text, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-4 group hover:translate-x-1 transition-all cursor-default"
                  >
                    <div className="w-8 h-8 flex justify-center items-center rounded-full bg-clr3 text-clr2 shadow-md">
                      <CheckCircle className="w-5 h-5" />
                    </div>

                    <p className="text-clr2/90 leading-relaxed text-lg font-extralight">
                      {text}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <Image
              src={computer}
              alt="Computador"
              className="rounded-xl shadow-xl object-cover w-full"
            />
          </div>
        </div>
      </section>

      <Brands />

      {/* CTA */}
      <section className="bg-clr3 text-clr2 lg:py-24 py-16 px-4 text-center">
        <h3 className="text-4xl font-bold mb-4">
          Pronto para alavancar seu negócio?
        </h3>
        <p className="mb-10 text-lg text-clr2/90">
          Entre em contato e descubra como a Torodan pode ajudar sua marca a
          crescer.
        </p>

        <a href="https://wa.me/5512981622637" target="_blank">
          <Button
            size="lg"
            className="bg-clr2 text-clr1 hover:bg-clr1 hover:text-clr2 transition-transform hover:scale-105 px-10 py-6 font-semibold cursor-pointer"
          >
            Solicitar Orçamento
            <FaWhatsapp />
          </Button>
        </a>
      </section>

 
<footer id="contato" className="bg-clr1 text-clr2 pt-14 pb-4">
  <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center md:items-start gap-8 pb-6 px-6 text-center md:text-left">
    
    <div>
      <h4 className="text-xl font-semibold">Torodan - Marketing Digital</h4>
      <p className="text-sm mt-2">Transformando ideias em resultados.</p>
    </div>

    <div className="flex gap-6 text-xl">
      <a
        href="mailto:torodandigital@gmail.com"
        className="hover:text-clr3 transition"
      >
        <Mail className="w-6 h-6" />
      </a>

      <a
        href="https://wa.me/5512981622637"
        target="_blank"
        className="hover:text-clr3 transition"
      >
        <FaWhatsapp className="w-6 h-6" />
      </a>

      <a
        href="https://instagram.com/torodan.digital"
        className="hover:text-clr3 transition"
        target="_blank"
      >
        <Instagram className="w-6 h-6" />
      </a>
    </div>
  </div>

  <div className="h-px my-8 bg-clr2/40 max-w-7xl mx-auto"></div>

  <p className="text-center text-xs mt-6 opacity-70">
    © {new Date().getFullYear()} Torodan. Todos os direitos reservados.
  </p>
</footer>

    </div>
  );
}
