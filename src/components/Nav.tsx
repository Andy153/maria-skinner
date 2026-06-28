"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const navLinks = [
  { href: "/", label: "Inicio" },
  { href: "/pasteleria", label: "Pastelería" },
  { href: "/deco", label: "Deco & Regalos" },
  { href: "/pedidos", label: "Pedidos" },
];

function MenuIcon({ open }: { open: boolean }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      aria-hidden="true"
      className="h-5 w-5"
    >
      {open ? (
        <>
          <line x1="6" y1="6" x2="18" y2="18" />
          <line x1="6" y1="18" x2="18" y2="6" />
        </>
      ) : (
        <>
          <line x1="4" y1="7" x2="20" y2="7" />
          <line x1="4" y1="12" x2="20" y2="12" />
          <line x1="4" y1="17" x2="20" y2="17" />
        </>
      )}
    </svg>
  );
}

export default function Nav() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const close = () => setOpen(false);
    window.addEventListener("resize", close);
    return () => window.removeEventListener("resize", close);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-gold/30 bg-cream/95 backdrop-blur-md">
      <nav className="relative mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8 lg:py-4">
        <Link href="/" aria-label="María Skinner — Inicio" className="shrink-0">
          <Image
            src="/images/logo-light.svg"
            alt="María Skinner"
            width={248}
            height={138}
            priority
            className="h-12 w-auto sm:h-16 lg:h-20"
          />
        </Link>

        <ul className="hidden items-center gap-6 lg:flex xl:gap-10">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="font-sans text-sm uppercase tracking-widest text-brown transition-colors hover:text-gold xl:text-base"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <button
          type="button"
          onClick={() => setOpen((current) => !current)}
          className="flex h-10 w-10 items-center justify-center rounded-sm border border-gold/40 text-brown transition-colors hover:border-gold hover:text-gold lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
        >
          <MenuIcon open={open} />
        </button>
      </nav>

      <div
        id="mobile-nav"
        className={`border-b border-gold/30 bg-cream/98 backdrop-blur-md lg:hidden ${
          open ? "block" : "hidden"
        }`}
      >
        <ul className="mx-auto flex max-w-6xl flex-col px-4 py-2 sm:px-6">
          {navLinks.map((link) => (
            <li key={link.href} className="border-b border-border-warm/60 last:border-b-0">
              <Link
                href={link.href}
                onClick={() => setOpen(false)}
                className="block py-4 font-sans text-base uppercase tracking-widest text-brown transition-colors hover:text-gold"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
