"use client";

import { Instagram, Mail, MapPin } from "lucide-react";
import Image from "next/image";
import { FaWhatsapp } from "react-icons/fa";
import logo from "../../public/logoFooter.png";
import { usePathname } from "next/navigation";

function Footer() {
  const W = "max-w-screen-2xl mx-auto px-6 md:px-16";
  const pathname = usePathname();
  const isEnglish = pathname.startsWith("/en");

  const navItems = isEnglish
    ? [
        { label: "Features", href: "#features" },
        { label: "Review", href: "#review" },
        { label: "About", href: "#about" },
        { label: "FAQ", href: "#faq" },
      ]
    : [
        { label: "Serviços", href: "#servicos" },
        { label: "Sobre", href: "#sobre" },
        { label: "Preços", href: "#precos" },
        { label: "Dúvidas", href: "#duvidas" },
        { label: "Contato", href: "#contato" },
      ];

  const footerText = isEnglish
    ? {
        navigation: "Navigation",
        contact: "Contact",
        copyright: `© ${new Date().getFullYear()} Torodan. All rights reserved.`,
      }
    : {
        navigation: "Navegação",
        contact: "Contato",
        copyright: `© ${new Date().getFullYear()} Torodan. Todos os direitos reservados.`,
      };

  return (
    <footer id="contato" className="bg-clr1 text-clr2">
      <div className={`${W} pt-16 pb-10`}>
        <div className="flex flex-col md:flex-row justify-between items-start gap-8 md:gap-10 pb-12 border-b border-clr2/10">
          {/* Informações */}
          <div className="w-full md:w-auto">
            <Image
              src={logo}
              alt="Torodan"
              width={90}
              priority
              className="opacity-90 hover:opacity-100 transition-opacity mb-8"
            />

            <div className="text-clr2/80 font-light leading-relaxed text-xs md:space-y-4 space-y-2">
              <div className="flex gap-2">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0 text-clr3" />
                <p>
                  Rua José Pedro da Cunha Pereira, 50 - Bom Jesus
                  <br />
                  Diamantina - MG
                </p>
              </div>

              <a
                href="mailto:pedro@torodan.com"
                className="flex items-center gap-2 text-clr2/70 hover:text-clr3 transition-colors"
              >
                <Mail className="w-4 h-4 shrink-0 text-clr3" />
                <span>pedro@torodan.com</span>
              </a>

              <a
                href="https://wa.me/5538998162313"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-clr2/70 hover:text-clr3 transition-colors"
              >
                <FaWhatsapp className="w-4 h-4 shrink-0 text-clr3" />
                38 99816-2313
              </a>
            </div>
          </div>

          {/* Navegação */}
          <div className="w-full md:w-auto grid grid-cols-2 md:flex md:flex-row gap-8 md:gap-24 text-sm">
            <div className="flex flex-col gap-3">
              <span className="text-[10px] tracking-[0.35em] uppercase text-clr2/90 font-medium">
                {footerText.navigation}
              </span>

              {navItems.map(({ label, href }) => (
                <a
                  key={href}
                  href={href}
                  className="text-clr2/70 hover:text-clr3 transition-colors text-xs font-light"
                >
                  {label}
                </a>
              ))}
            </div>

            <div className="flex flex-col gap-4">
              <span className="text-[10px] tracking-[0.35em] uppercase text-clr2/90 font-medium">
                {footerText.contact}
              </span>

              <div className="flex gap-5">
                <a
                  href="mailto:pedro@torodan.com"
                  className="text-clr2/70 hover:text-clr3 transition-colors"
                >
                  <Mail className="w-5 h-5" />
                </a>

                <a
                  href="https://wa.me/5538998162313"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-clr2/70 hover:text-clr3 transition-colors"
                >
                  <FaWhatsapp className="w-5 h-5" />
                </a>

                <a
                  href="https://instagram.com/torodan.digital"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-clr2/70 hover:text-clr3 transition-colors"
                >
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <p className="text-[10px] mt-8 text-center md:text-left text-clr2/60 font-light tracking-wide">
           {footerText.copyright}
        </p>
      </div>
    </footer>
  );
}

export default Footer;
