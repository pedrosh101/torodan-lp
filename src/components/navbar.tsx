"use client";

import Image from "next/image";
import logo from "../../public/logo.png";
import { Button } from "./ui/button";
import { useEffect, useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "./ui/sheet";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
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
        { label: "Serviços", href: "/#servicos" },
        { label: "Sobre", href: "/#sobre" },
        { label: "Preços", href: "/#precos" },
        { label: "Dúvidas", href: "/#duvidas" },
        { label: "Website", href: "/website" },
        { label: "Contato", href: "/#contato" },
      ];

  const ctaLabel = isEnglish ? "Book a Free Review" : "Fale Conosco";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach((link) => {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        const targetId = link.getAttribute("href")?.substring(1);
        const target = document.getElementById(targetId!);
        if (target) {
          window.scrollTo({ top: target.offsetTop - 80, behavior: "smooth" });
        }
      });
    });
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-clr2/95 backdrop-blur-md border-b border-clr1/8 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-screen-2xl mx-auto flex justify-between items-center px-6 md:px-16">
        <Link href={isEnglish ? "/en" : "/"}>
          {" "}
          <Image
            src={logo}
            alt="Torodan"
            width={130}
            priority
            className="mt-1 opacity-90 hover:opacity-100 transition-opacity"
          />
        </Link>

        <nav className="hidden md:flex gap-10 text-xs font-medium tracking-widest uppercase">
          {navItems.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              className="text-clr1/70 hover:text-clr1 transition-colors duration-200 relative group"
            >
              {label}
              <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-clr3 group-hover:w-full transition-all duration-300" />
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <a
            href="https://wa.me/5538998162313"
            target="_blank"
            className="hidden md:inline-block"
          >
            <Button className="bg-clr3 hover:bg-clr1 text-clr2 transition-all duration-300 cursor-pointer tracking-[0.08em] text-xs font-medium px-6 py-2.5 rounded-full gap-2.5">
              {ctaLabel}
              <FaWhatsapp className="w-3.5 h-3.5" />
            </Button>
          </a>

          {/* Mobile Menu Trigger */}
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger className="md:hidden text-clr1 p-1" aria-label="Abrir menu">
              <Menu size={26} />
            </SheetTrigger>

            <SheetContent
              side="right"
              className="w-[85vw] max-w-sm bg-clr2 border-l border-clr1/10 p-0 flex flex-col [&>button]:hidden"
            >
              {/* Header */}
              <SheetHeader className="h-20 px-5 flex flex-row items-center justify-between border-b border-clr1/10 space-y-0">
                <SheetTitle>
                  <Link
                    href={isEnglish ? "/en" : "/"}
                    onClick={() => setOpen(false)}
                    className="flex items-center"
                  >
                    <Image
                      src={logo}
                      alt="Torodan"
                      width={110}
                      className="opacity-90"
                    />
                  </Link>
                </SheetTitle>

                <SheetClose className="text-clr1 p-1" aria-label="Fechar menu">
                  <X size={24} />
                </SheetClose>
              </SheetHeader>

              {/* Links */}
              <ul className="flex-1 overflow-y-auto px-5 py-6 flex flex-col gap-0 text-[17px] font-medium text-clr1 tracking-wide">
                {navItems.map(({ label, href }) => (
                  <li key={href}>
                    <a
                      href={href}
                      onClick={() => setOpen(false)}
                      className="flex items-center py-3.5 border-b border-clr1/10"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>

              {/* Footer: CTA */}
              <div className="px-5 py-5 border-t border-clr1/10">
                <a
                  href="https://wa.me/5538998162313"
                  target="_blank"
                  onClick={() => setOpen(false)}
                >
                  <Button className="w-full bg-clr3 hover:bg-clr1 text-clr2 transition-all duration-300 cursor-pointer tracking-[0.08em] text-xs font-medium px-6 py-3 rounded-full gap-2.5 justify-center">
                    {ctaLabel}
                    <FaWhatsapp className="w-3.5 h-3.5" />
                  </Button>
                </a>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

export default Navbar;