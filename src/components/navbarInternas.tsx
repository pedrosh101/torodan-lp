"use client";

import Image from "next/image";
import logo from "../../public/logo.png";
import { Button } from "./ui/button";
import { useEffect, useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import Link from "next/link";

function NavbarInternas() {
  const [scrolled, setScrolled] = useState(false);

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
          ? "bg-clr1/95 backdrop-blur-md  py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-screen-2xl mx-auto flex justify-between items-center px-6 md:px-16">
        <Link href="/">
          <Image
            src={logo}
            alt="Torodan"
            width={130}
            priority
            className="mt-1 opacity-90 hover:opacity-100 transition-opacity"
          />
        </Link>

        <nav className="hidden md:flex gap-10 text-xs font-medium tracking-widest uppercase">
          {[
            { label: "Serviços", href: "#servicos" },
            { label: "Sobre", href: "#sobre" },
            { label: "Preços", href: "#precos" },
            { label: "Dúvidas", href: "#duvidas" },
            { label: "Contato", href: "#contato" },
          ].map(({ label, href }) => (
            <a
              key={href}
              href={href}
              className="text-clr2/70 hover:text-clr2 transition-colors duration-200 relative group"
            >
              {label}
              <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-clr3 group-hover:w-full transition-all duration-300" />
            </a>
          ))}
        </nav>

        <a href="https://wa.me/5538998162313" target="_blank">
          <Button className="bg-clr3 hover:bg-clr3/80 text-clr2 transition-all duration-300 cursor-pointer tracking-[0.08em] text-xs font-medium px-6 py-2.5 rounded-full gap-2.5">
            Fale Conosco
            <FaWhatsapp className="w-3.5 h-3.5" />
          </Button>
        </a>
      </div>
    </header>
  );
}

export default NavbarInternas;
