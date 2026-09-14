"use client";
import Navbar from "@/components/navbar";
import { useState } from "react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import Image from "next/image";
import Footer from "@/components/footer";
import RevealText from "@/components/revealText";


const W = "max-w-screen-2xl mx-auto px-6 md:px-16";

const photos = [
  "/photos/a.webp",
  "/photos/b.webp",
  "/photos/c.webp",

];

export default function Studio() {
  const [selectedPhoto, setSelectedPhoto] = useState<string | null>(null);

  return (
    <>
      <Navbar />
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
      <section className="bg-clr2">
        <div className={`${W} flex md:py-36 py-14`}>
          <div>
            <RevealText>

            <h2 className="text-2xl md:text-3xl 2xl:text-4xl font-medium md:font-bold leading-tight tracking-[-0.02em] text-clr1 md:text-justify">
              Atuamos na criação audiovisual para marcas, projetos culturais e negócios que desejam comunicar sua identidade através de imagens. Desenvolvemos cada produção de forma personalizada, unindo fotografia, vídeo e direção criativa para construir narrativas visuais com intenção e personalidade.
            </h2>
            </RevealText>
          </div>
        </div>
      </section>
      <section className="bg-clr2 text-clr1">
        <div className="grid grid-cols-1 md:grid-cols-3 ">
          {photos.map((src, index) => {
            const fullWidth = src.includes("10.webp");

            return (
              <button
                key={src}
                type="button"
                onClick={() => setSelectedPhoto(src)}
                className={`group relative block w-full break-inside-avoid overflow-hidden text-left ${
                  fullWidth ? "md:col-span-3 md:h-[96vh]" : ""
                }`}
                aria-label={`Ampliar foto ${index + 1}`}
              >
                <Image
                  src={src}
                  alt=""
                  width={fullWidth ? 4800 : 1600}
                  height={1200}
                  className="block transition-transform duration-500 group-hover:scale-[1.02]"
                />
              </button>
            );
          })}
        </div>

        <Dialog
          open={selectedPhoto !== null}
          onOpenChange={(open) => {
            if (!open) {
              setSelectedPhoto(null);
            }
          }}
        >
          <DialogContent
            onClick={() => setSelectedPhoto(null)}
            className="h-screen w-screen max-w-none! transform-none! border-0 bg-transparent p-0 shadow-none"
            showCloseButton={false}
          >
            <DialogTitle className="sr-only">Foto ampliada</DialogTitle>

            {selectedPhoto && (
              <div className="relative flex h-screen w-screen items-center justify-center">
                <Image
                  src={selectedPhoto}
                  alt="Foto ampliada"
                  fill
                  className="object-contain py-2 px-2 md:px-0"
                  sizes="100vw"
                  priority
                />
              </div>
            )}
          </DialogContent>
        </Dialog>
      </section>
      <Footer />
    </>
  );
}
