"use client";

import { useEffect, useState } from "react";
import { navLinks, profile } from "@/data/portfolio";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("#home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    navLinks.forEach(({ href }) => {
      const el = document.querySelector(href);
      if (el) observer.observe(el);
    });

    return () => {
      window.removeEventListener("scroll", onScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/90 shadow-md backdrop-blur" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6">
        <a
          href="#home"
          className="font-heading text-3xl font-bold text-heading"
        >
          {profile.shortName}
          <span className="text-primary">.</span>
        </a>

        <ul className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`font-heading text-lg font-semibold transition-colors hover:text-primary ${
                  active === link.href ? "text-primary" : "text-heading"
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="hidden rounded-lg bg-primary px-6 py-3 font-heading text-lg font-semibold text-white shadow-lg shadow-primary/30 transition hover:-translate-y-0.5 hover:bg-primary-dark lg:inline-block"
        >
          Hire Me
        </a>

        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="card flex h-11 w-11 items-center justify-center lg:hidden"
        >
          <span className="relative block h-4 w-5">
            <span
              className={`absolute left-0 h-0.5 w-5 bg-heading transition-all ${open ? "top-2 rotate-45" : "top-0"}`}
            />
            <span
              className={`absolute top-2 left-0 h-0.5 w-5 bg-heading transition-opacity ${open ? "opacity-0" : ""}`}
            />
            <span
              className={`absolute left-0 h-0.5 w-5 bg-heading transition-all ${open ? "top-2 -rotate-45" : "top-4"}`}
            />
          </span>
        </button>
      </nav>

      {open && (
        <div className="border-t border-line bg-white px-4 pb-6 shadow-lg lg:hidden">
          <ul className="flex flex-col">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`block py-3 font-heading text-lg font-semibold ${
                    active === link.href ? "text-primary" : "text-heading"
                  }`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
