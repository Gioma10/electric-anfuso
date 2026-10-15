"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
import { SectionHeader } from "@/components/section-header";
import { CONTAINER } from "@/lib/layout";

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    title: "Sopralluogo",
    text: "Veniamo da te senza impegno per analizzare le esigenze e prepararti un preventivo dettagliato.",
  },
  {
    title: "Progettazione su misura",
    text: "Ogni impianto è progettato specificamente per il tuo edificio, con documentazione tecnica completa.",
  },
  {
    title: "Installazione certificata",
    text: "Rilasciamo dichiarazione di conformità D.M. 37/08 per ogni impianto realizzato.",
  },
  {
    title: "Assistenza post-vendita",
    text: "Siamo raggiungibili anche dopo i lavori per manutenzione, aggiornamenti e interventi urgenti.",
  },
];

const standards = ["D.M. 37/08", "CEI 64-8", "CEI 11-27", "CEI 79-3"];

export function Process() {
  const listRef = useRef<HTMLOListElement>(null);

  useEffect(() => {
    const list = listRef.current;
    if (!list) return;
    const fill = list.querySelector<HTMLElement>("[data-process-wire]");
    const nodes = [...list.querySelectorAll<HTMLElement>("[data-step]")];
    const setNodes = (progress: number) =>
      nodes.forEach((node, i) => {
        node.dataset.on = String(progress >= i / (nodes.length - 1) - 0.01);
      });

    const mm = gsap.matchMedia();
    // Desktop: il cavo orizzontale si riempie allo scroll e accende i passi uno alla volta.
    mm.add("(min-width: 1024px) and (prefers-reduced-motion: no-preference)", () => {
      gsap.fromTo(
        fill,
        { scaleX: 0 },
        {
          scaleX: 1,
          ease: "none",
          scrollTrigger: {
            trigger: list,
            start: "top 80%",
            end: "top 30%",
            scrub: true,
            onUpdate: (self) => setNodes(self.progress),
            onRefresh: (self) => setNodes(self.progress),
          },
        },
      );
    });
    mm.add("(max-width: 1023px), (prefers-reduced-motion: reduce)", () => setNodes(1));

    return () => mm.revert();
  }, []);

  return (
    <section id="come-lavoriamo" aria-labelledby="come-lavoriamo-title" className="relative border-y border-white/5 bg-white/1.5 py-24 md:py-32">
      <div className={CONTAINER}>
        <SectionHeader
          title="Dal sopralluogo alla certificazione"
          titleId="come-lavoriamo-title"
          intro="Dal piccolo appartamento al grande impianto industriale, ogni progetto viene seguito con la stessa dedizione. Gestiamo l'intero ciclo: sopralluogo, progettazione, installazione, collaudo e manutenzione."
        >
          <ul className="mt-6 flex flex-wrap gap-2" aria-label="Normative di riferimento">
            {standards.map((standard) => (
              <li key={standard} className="rounded-md border border-primary/30 bg-primary/10 px-3 py-1.5 font-mono text-xs text-sky-300">
                {standard}
              </li>
            ))}
          </ul>
        </SectionHeader>

        <ol ref={listRef} className="relative mt-16 grid gap-12 lg:grid-cols-4 lg:gap-8">
          <span className="absolute top-6 right-[calc((100%-6rem)/4-1.5rem)] left-6 hidden h-0.5 -translate-y-1/2 bg-white/10 lg:block" aria-hidden="true">
            <span data-process-wire className="absolute inset-0 origin-left bg-linear-to-r from-primary to-sky-400 shadow-[0_0_10px] shadow-primary" />
          </span>

          {steps.map((step, i) => (
            <li key={step.title} data-step data-on="false" className="group relative pl-20 lg:pl-0">
              {i < steps.length - 1 && (
                <span className="absolute top-12 -bottom-12 left-6 w-0.5 -translate-x-1/2 bg-linear-to-b from-primary to-primary/20 lg:hidden" aria-hidden="true" />
              )}
              <span className="absolute top-0 left-0 flex size-12 items-center justify-center rounded-full border-2 border-white/15 bg-background font-mono text-sm text-white/40 transition-all duration-500 group-data-[on=true]:border-primary group-data-[on=true]:text-white group-data-[on=true]:shadow-[0_0_24px_-2px] group-data-[on=true]:shadow-primary lg:relative">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="text-xl transition-colors duration-500 md:text-xl lg:mt-8 lg:text-white/50 lg:group-data-[on=true]:text-white">{step.title}</h3>
              <p className="mt-3 text-sm text-white/60 md:text-base">{step.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
