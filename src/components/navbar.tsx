"use client";

import Image from "next/image";
import logo from "../../public/logo.png";
import { Button } from "./ui/button";
import { useEffect } from "react";
import { FaWhatsapp } from "react-icons/fa";

function Navbar() {
  useEffect(() => {
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach((link) => {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        const targetId = link.getAttribute("href")?.substring(1);
        const target = document.getElementById(targetId!);
        if (target) {
          window.scrollTo({
            top: target.offsetTop - 80,
            behavior: "smooth",
          });
        }
      });
    });
  }, []);
  
  return (
    <header className="fixed top-0 left-0 w-full bg-clr2/90 backdrop-blur z-50 border-b border-clr1/10">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
        <Image src={logo} alt="image1" width={140} priority className="mt-3" />

        <nav className="hidden md:flex gap-8 text-sm font-medium">
          <a href="#servicos" className="hover:text-clr3 transition">
            Serviços
          </a>
          <a href="#etapas" className="hover:text-clr3 transition">
            Etapas
          </a>
          <a href="#sobre" className="hover:text-clr3 transition">
            Como Trabalhamos
          </a>

          <a href="#contato" className="hover:text-clr3 transition">
            Contato
          </a>
        </nav>
        <Button className="bg-clr3 hover:bg-clr1 text-clr2 transition-colors cursor-pointer">
          <a href="https://wa.me/5512981622637" target="_blank">
            Fale Conosco
          </a>
            <FaWhatsapp />
        </Button>
      </div>
    </header>
  );
}

export default Navbar;
