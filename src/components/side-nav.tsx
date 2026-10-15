"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Fragment, useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

// `short` è l'etichetta della barra mobile, dove lo spazio tra i nodi è poco.
const stops = [
  { id: "servizi", name: "Servizi", short: "Servizi" },
  { id: "come-lavoriamo", name: "Come lavoriamo", short: "Metodo" },
  { id: "realizzazioni", name: "Realizzazioni", short: "Lavori" },
];

// Il footer chiude il circuito: l'ultimo tratto di cavo accende la lampadina.
const END_ID = "contatti";

const focusRing = "focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white";

// Area di tocco più grande del segno visibile.
const hitArea = "before:absolute before:-inset-3 before:content-['']";

// Mobile: etichetta sotto il nodo. Desktop: a destra del nodo.
const labelPosition =
  "absolute top-full left-1/2 mt-1.5 -translate-x-1/2 text-center whitespace-nowrap lg:top-1/2 lg:mt-0 lg:-translate-x-0 lg:-translate-y-1/2 lg:text-left";

function Wire() {
  return (
    <div className="relative h-0.5 flex-1 bg-white/15 lg:h-14 lg:w-0.5 lg:flex-none" aria-hidden="true">
      <div
        data-wire
        className="absolute inset-0 origin-left scale-x-0 bg-linear-to-r from-primary to-sky-400 shadow-[0_0_8px] shadow-primary lg:origin-top lg:scale-x-100 lg:scale-y-0 lg:bg-linear-to-b"
      />
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
    // Il cavo è verticale su desktop e orizzontale nella barra mobile.
    const mm = gsap.matchMedia();
    mm.add({ isDesktop: "(min-width: 1024px)", isMobile: "(max-width: 1023px)" }, (context) => {
      const axis = context.conditions?.isDesktop ? "scaleY" : "scaleX";
      targetIds.forEach((id, i) => {
        const section = document.getElementById(id);
        if (!section) return;
        const setOn = (self: ScrollTrigger) => {
          terminals[i].dataset.on = String(self.progress > 0.99);
        };
        gsap.fromTo(
          wires[i],
          { scaleX: 1, scaleY: 1, [axis]: 0 },
          {
            [axis]: 1,
            ease: "none",
            scrollTrigger: {
              trigger: section,
              start: "top bottom",
              // clamp(): se la pagina finisce prima, il tratto si completa a fine scroll.
              end: "clamp(top center)",
              scrub: true,
              onUpdate: setOn,
              onRefresh: setOn,
            },
          },
        );
      });
    });

    return () => mm.revert();
  }, []);

  return (
    <nav
      ref={navRef}
      aria-label="Sezioni della pagina"
      className="fixed inset-x-3 bottom-[max(0.75rem,env(safe-area-inset-bottom))] z-30 flex items-center rounded-2xl border border-white/10 bg-background/85 px-4 pt-3 pb-7 shadow-[0_12px_32px_-12px_rgba(0,0,0,0.6)] backdrop-blur-md lg:inset-x-auto lg:top-1/2 lg:bottom-auto lg:left-6 lg:-translate-y-1/2 lg:flex-col lg:rounded-none lg:border-0 lg:bg-transparent lg:p-0 lg:shadow-none lg:backdrop-blur-none"
    >
      <a
        href="#home"
        aria-label="Torna all'inizio"
        className={`relative flex size-8 shrink-0 items-center justify-center rounded-md border border-primary/40 bg-background/60 text-primary shadow-[0_0_16px_-4px] shadow-primary lg:size-9 ${hitArea} ${focusRing}`}
      >
        <svg className="size-4.5 lg:size-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M13 2L4 14h6l-1 8 9-12h-6l1-8z" />
        </svg>
      </a>

      {stops.map((stop, i) => (
        <Fragment key={stop.id}>
          <Wire />
          <a
            href={`#${stop.id}`}
            data-terminal
            data-on="false"
            className={`group relative mx-1 flex size-4 shrink-0 items-center justify-center rounded-full lg:mx-0 lg:my-1 ${hitArea} ${focusRing}`}
          >
            <span
              className="size-3 rounded-full border-2 border-white/30 bg-background transition-all duration-300 group-hover:border-white/70 group-data-[on=true]:size-4 group-data-[on=true]:border-sky-300 group-data-[on=true]:bg-primary group-data-[on=true]:shadow-[0_0_14px_3px] group-data-[on=true]:shadow-primary"
              aria-hidden="true"
            />
            <span className={`${labelPosition} text-white/40 transition-colors group-hover:text-white/80 group-data-[on=true]:text-white lg:left-8`}>
              <span className="hidden font-mono text-xs lg:block">{String(i + 1).padStart(2, "0")}</span>
              <span className="block text-[10px] tracking-wide uppercase lg:text-[11px]">
                <span className="lg:hidden">{stop.short}</span>
                <span className="hidden lg:inline">{stop.name}</span>
              </span>
            </span>
          </a>
        </Fragment>
      ))}

      <Wire />
      <a
        href={`#${END_ID}`}
        data-terminal
        data-on="false"
        className={`group relative flex size-8 shrink-0 items-center justify-center rounded-full lg:size-9 ${hitArea} ${focusRing}`}
      >
        <svg
          className="size-7 text-white/30 transition-all duration-500 group-hover:text-white/60 group-data-[on=true]:text-accent group-data-[on=true]:drop-shadow-[0_0_10px_var(--accent)] lg:size-8"
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
        <span className={`${labelPosition} text-white/40 transition-colors group-hover:text-white/80 group-data-[on=true]:text-accent lg:left-12`}>
          <span className="block text-[10px] tracking-wide uppercase lg:text-[11px]">Contatti</span>
          <span className="hidden font-mono text-[10px] opacity-0 transition-opacity group-data-[on=true]:opacity-100 lg:block">circuito chiuso</span>
        </span>
      </a>
    </nav>
  );
}
