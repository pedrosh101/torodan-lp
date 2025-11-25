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


export default function Brands() {
  return (
    <section className="py-12 bg-clr2 text-clr2">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <Carousel
          plugins={[
            Autoplay({
              delay: 2000,
            }),
          ]}
        >
         <CarouselContent>
  <CarouselItem className="basis-1/2 md:basis-1/4 flex">
    <a href="https://estudiomasca.com" target="_blank">
      <Image src={brand1} alt="brand1" width={180} priority className="mt-3" />
    </a>
  </CarouselItem>

  <CarouselItem className="basis-1/2 md:basis-1/4 flex">
    <a href="https://allyribeiro.com/" target="_blank">
      <Image src={brand2} alt="brand2" width={180} priority className="mt-3" />
    </a>
  </CarouselItem>

  <CarouselItem className="basis-1/2 md:basis-1/4 flex">
    <a href="https://nicolevalente.com.br/" target="_blank">
      <Image src={brand3} alt="brand3" width={180} priority className="mt-3" />
    </a>
  </CarouselItem>

  <CarouselItem className="basis-1/2 md:basis-1/4 flex">
    <a href="https://viggianiarquitetura.com/" target="_blank">
      <Image src={brand4} alt="brand4" width={180} priority className="mt-3" />
    </a>
  </CarouselItem>

  <CarouselItem className="basis-1/2 md:basis-1/4 flex">
    <a href="https://arlivreeditora.com.br/" target="_blank">
      <Image src={brand5} alt="brand5" width={180} priority className="mt-3" />
    </a>
  </CarouselItem>

  <CarouselItem className="basis-1/2 md:basis-1/4 flex">
    <a href="https://artofmala.netlify.app/" target="_blank">
      <Image src={brand6} alt="brand5" width={180} priority className="mt-3" />
    </a>
  </CarouselItem>
</CarouselContent>

        </Carousel>
      </div>
    </section>
  );
}
