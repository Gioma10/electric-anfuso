"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import { Fragment, useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const stops = [
  { id: "servizi", name: "Servizi" },
  { id: "come-lavoriamo", name: "Come lavoriamo" },
  { id: "realizzazioni", name: "Realizzazioni" },
];

// Il footer chiude il circuito: l'ultimo tratto di cavo accende la lampadina.
const END_ID = "contatti";

const focusRing = "focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white";

function Wire() {
  return (
    <div className="relative h-14 w-0.5 bg-white/15" aria-hidden="true">
      <div data-wire className="absolute inset-0 origin-top scale-y-0 bg-linear-to-b from-primary to-sky-400 shadow-[0_0_8px] shadow-primary" />
    </div>
  );
}

export function SideNav() {
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const nav = navRef.current;
    if (!nav) return;

    const wires = nav.querySelectorAll<HTMLElement>("[data-wire]");
    const terminals = nav.querySelectorAll<HTMLElement>("[data-terminal]");
    const targetIds = [...stops.map((stop) => stop.id), END_ID];

    // Ogni tratto si riempie mentre la sua sezione entra nello schermo
    // e si ferma (terminale acceso) quando la sezione arriva a metà.
    const ctx = gsap.context(() => {
      targetIds.forEach((id, i) => {
        const section = document.getElementById(id);
        if (!section) return;
        const setOn = (self: ScrollTrigger) => {
          terminals[i].dataset.on = String(self.progress > 0.99);
        };
        gsap.fromTo(
          wires[i],
          { scaleY: 0 },
          {
            scaleY: 1,
            ease: "none",
            scrollTrigger: {
              trigger: section,
              start: "top bottom",
              end: id === END_ID ? "bottom bottom" : "top center",
              scrub: true,
              onUpdate: setOn,
              onRefresh: setOn,
            },
          },
        );
      });
    }, nav);

    return () => ctx.revert();
  }, []);

  return (
    <nav ref={navRef} className="fixed top-1/2 left-6 z-30 hidden -translate-y-1/2 flex-col items-center lg:flex" aria-label="Sezioni della pagina">
      <Link
        href="/#home"
        aria-label="Torna all'inizio"
        className={`flex size-9 items-center justify-center rounded-md border border-primary/40 bg-background/60 text-primary shadow-[0_0_16px_-4px] shadow-primary backdrop-blur ${focusRing}`}
      >
        <svg className="size-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M13 2L4 14h6l-1 8 9-12h-6l1-8z" />
        </svg>
      </Link>

      {stops.map((stop, i) => (
        <Fragment key={stop.id}>
          <Wire />
          <Link href={`/#${stop.id}`} data-terminal data-on="false" className={`group relative my-1 flex size-4 items-center justify-center rounded-full ${focusRing}`}>
            <span
              className="size-3 rounded-full border-2 border-white/30 bg-background transition-all duration-300 group-hover:border-white/70 group-data-[on=true]:size-4 group-data-[on=true]:border-sky-300 group-data-[on=true]:bg-primary group-data-[on=true]:shadow-[0_0_14px_3px] group-data-[on=true]:shadow-primary"
              aria-hidden="true"
            />
            <span className="absolute top-1/2 left-8 -translate-y-1/2 whitespace-nowrap text-white/40 transition-colors group-hover:text-white/80 group-data-[on=true]:text-white">
              <span className="block font-mono text-xs">{String(i + 1).padStart(2, "0")}</span>
              <span className="block text-[11px] tracking-wide uppercase">{stop.name}</span>
            </span>
          </Link>
        </Fragment>
      ))}

      <Wire />
      <Link href={`/#${END_ID}`} data-terminal data-on="false" className={`group relative flex size-9 items-center justify-center rounded-full ${focusRing}`}>
        <svg
          className="size-8 text-white/30 transition-all duration-500 group-hover:text-white/60 group-data-[on=true]:text-accent group-data-[on=true]:drop-shadow-[0_0_10px_var(--accent)]"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <g className="opacity-0 transition-opacity duration-500 group-data-[on=true]:opacity-100">
            <path d="M12 1v1.5M4.2 4.2l1 1M19.8 4.2l-1 1M1.5 10.5H3M21 10.5h1.5" />
          </g>
          <path className="fill-transparent transition-colors duration-500 group-data-[on=true]:fill-current/30" d="M8.5 15.5a6 6 0 117 0c-.6.5-1 1.2-1 2v.5h-5v-.5c0-.8-.4-1.5-1-2z" />
          <path d="M9.5 20.5h5M10.5 23h3" />
        </svg>
        <span className="absolute top-1/2 left-12 -translate-y-1/2 whitespace-nowrap text-white/40 transition-colors group-hover:text-white/80 group-data-[on=true]:text-accent">
          <span className="block text-[11px] tracking-wide uppercase">Contatti</span>
          <span className="block font-mono text-[10px] opacity-0 transition-opacity group-data-[on=true]:opacity-100">circuito chiuso</span>
        </span>
      </Link>
    </nav>
  );
}
