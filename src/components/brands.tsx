"use client";

import React from "react";
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import brand1 from "../../public/Frame16.png";
import brand2 from "../../public/Frame17.png";
import brand3 from "../../public/Frame18.png";
import brand4 from "../../public/Frame19.png";
import brand5 from "../../public/Frame20.png";
import brand6 from "../../public/Frame21.png";

const brands = [
  { src: brand1, alt: "Estudio Masca", href: "https://estudiomasca.com" },
  { src: brand2, alt: "Ally Ribeiro", href: "https://allyribeiro.com/" },
  { src: brand3, alt: "Nicole Valente", href: "https://nicolevalente.com.br/" },
  {
    src: brand4,
    alt: "Viggiani Arquitetura",
    href: "https://viggianiarquitetura.com/",
  },
  {
    src: brand5,
    alt: "Ar Livre Editora",
    href: "https://arlivreeditora.com.br/",
  },
  { src: brand6, alt: "Art of Mala", href: "https://artofmala.netlify.app/" },
];

export default function Brands() {
  return (
    <section className="py-20 bg-clr2 border-t border-clr1/8">
      <div className="max-w-screen-2xl mx-auto px-6 md:px-16">
        <div className="flex flex-col md:flex-row md:items-center gap-10 md:gap-20">
          <div className="shrink-0">
            <p className="text-[10px] tracking-[0.35em] uppercase text-clr3 font-semibold mb-4">
              Clientes & Parceiros{" "}
            </p>
          </div>

          <div className="flex-1 overflow-hidden">
            <Carousel
              plugins={[Autoplay({ delay: 2000, stopOnInteraction: false })]}
              opts={{ loop: true }}
            >
              <CarouselContent className="-ml-6">
                {brands.map((brand, i) => (
                  <CarouselItem key={i} className="basis-1/2 md:basis-1/4 pl-6">
                    <a
                      href={brand.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center opacity-40 hover:opacity-100 transition-opacity duration-300 grayscale hover:grayscale-0"
                    >
                      <Image
                        src={brand.src}
                        alt={brand.alt}
                        width={150}
                        priority
                        className="object-contain"
                      />
                    </a>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
}
