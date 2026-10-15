"use client";

import { type CSSProperties, type PointerEvent as ReactPointerEvent, useEffect, useRef, useState } from "react";
import { Icon } from "@/components/icons";
import { SERVICE_GROUPS } from "@/lib/content";
import { CONTAINER } from "@/lib/layout";

const services = SERVICE_GROUPS.flatMap((group) => group.services.map((service) => ({ ...service, group: group.name })));
const total = services.length;

const focusRing = "focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white";

// Oltre questa distanza il trascinamento lancia la carta in fondo al mazzo.
const THROW_DISTANCE = 90;
const THROW_MS = 450;

// Posizione di una carta nel mazzo: 0 è quella in cima, le altre si intravedono sotto.
function stackStyle(position: number): CSSProperties {
  const layers: CSSProperties[] = [
    { transform: "translate3d(0, 0, 0) rotate(0deg) scale(1)", opacity: 1, filter: "brightness(1)" },
    { transform: "translate3d(18px, 14px, 0) rotate(4.5deg) scale(0.96)", opacity: 1, filter: "brightness(0.85)" },
    { transform: "translate3d(-14px, 26px, 0) rotate(-4deg) scale(0.92)", opacity: 1, filter: "brightness(0.65)" },
  ];
  return { ...(layers[position] ?? { transform: "translate3d(0, 36px, 0) scale(0.88)", opacity: 0 }), zIndex: total - position };
}

export function Services() {
  const [index, setIndex] = useState(0);
  const [leaving, setLeaving] = useState<{ card: number; direction: number } | null>(null);
  const [dragX, setDragX] = useState<number | null>(null);
  const dragStart = useRef<number | null>(null);
  const suppressClick = useRef(false);
  const leaveTimer = useRef<ReturnType<typeof setTimeout>>(undefined);

  const next = (direction = -1) => {
    clearTimeout(leaveTimer.current);
    setLeaving({ card: index, direction });
    setIndex((index + 1) % total);
    leaveTimer.current = setTimeout(() => setLeaving(null), THROW_MS);
  };
  const prev = () => setIndex((index - 1 + total) % total);

  // Link diretti a un servizio (es. dal footer): porta quella carta in cima.
  useEffect(() => {
    const openFromHash = () => {
      const card = services.findIndex((service) => service.id === decodeURIComponent(window.location.hash.slice(1)));
      if (card === -1) return;
      setIndex(card);
      document.getElementById("servizi")?.scrollIntoView({ block: "start" });
    };
    openFromHash();
    window.addEventListener("hashchange", openFromHash);
    return () => {
      window.removeEventListener("hashchange", openFromHash);
      clearTimeout(leaveTimer.current);
    };
  }, []);

  const onPointerDown = (event: ReactPointerEvent<HTMLDivElement>) => {
    if (event.button !== 0) return;
    dragStart.current = event.clientX;
  };
  // La cattura del puntatore parte solo quando la carta si muove davvero:
  // catturare subito dirotterebbe il clic sul link "Richiedi un preventivo".
  const onPointerMove = (event: ReactPointerEvent<HTMLDivElement>) => {
    if (dragStart.current === null) return;
    const dx = event.clientX - dragStart.current;
    if (Math.abs(dx) > 6 && !event.currentTarget.hasPointerCapture(event.pointerId)) event.currentTarget.setPointerCapture(event.pointerId);
    if (event.currentTarget.hasPointerCapture(event.pointerId)) setDragX(dx);
  };
  const onPointerUp = () => {
    if (dragStart.current === null) return;
    dragStart.current = null;
    const dx = dragX ?? 0;
    setDragX(null);
    if (Math.abs(dx) > 6) {
      suppressClick.current = true;
      setTimeout(() => (suppressClick.current = false), 0);
    }
    if (Math.abs(dx) > THROW_DISTANCE) next(Math.sign(dx));
  };

  const active = services[index];

  return (
    <section id="servizi" aria-labelledby="servizi-title" className="relative overflow-hidden py-24 md:py-32">
      <div className={`${CONTAINER} grid items-center gap-14 lg:grid-cols-[minmax(0,1fr)_24rem] lg:gap-20`}>
        <div>
          <h2 id="servizi-title" className="text-4xl tracking-[-0.03em] text-balance md:text-5xl">
            I nostri servizi
          </h2>
          <p className="mt-5 max-w-xl text-white/65 md:text-base">
            Dalla progettazione alla certificazione, un unico referente per ogni tipo di impianto elettrico e tecnologico.
          </p>

          <ul className="mt-10 hidden max-w-xl grid-cols-2 gap-x-8 gap-y-1 md:grid" aria-label="Elenco servizi">
            {services.map((service, i) => {
              const isActive = i === index;
              return (
                <li key={service.id}>
                  <button
                    type="button"
                    onClick={() => setIndex(i)}
                    aria-current={isActive ? "true" : undefined}
                    className={`group flex w-full items-center gap-3 py-1.5 text-left text-sm transition-colors ${focusRing} ${isActive ? "text-white" : "text-white/50 hover:text-white/85"}`}
                  >
                    <span
                      className={`size-2 shrink-0 rounded-full transition-all duration-300 ${
                        isActive ? "bg-primary shadow-[0_0_10px_2px] shadow-primary" : "bg-white/20 group-hover:bg-white/50"
                      }`}
                      aria-hidden="true"
                    />
                    {service.title}
                  </button>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="mx-auto w-full max-w-[24rem]">
          <div
            role="region"
            aria-roledescription="carousel"
            aria-label="I nostri servizi"
            className="relative h-[21rem] touch-pan-y select-none"
            onPointerDown={onPointerDown}
            onPointerMove={onPointerMove}
            onPointerUp={onPointerUp}
            onPointerCancel={onPointerUp}
            onClickCapture={(event) => {
              if (suppressClick.current) {
                event.preventDefault();
                event.stopPropagation();
              }
            }}
          >
            {services.map((service, i) => {
              const position = (i - index + total) % total;
              const isTop = position === 0;
              const isLeaving = leaving?.card === i;
              const isDragging = isTop && dragX !== null;
              const style: CSSProperties = isLeaving
                ? { transform: `translate3d(${leaving.direction * 120}%, -6%, 0) rotate(${leaving.direction * 16}deg)`, opacity: 0, zIndex: total + 1 }
                : isDragging
                  ? { ...stackStyle(0), transform: `translate3d(${dragX}px, 0, 0) rotate(${dragX / 18}deg)`, transition: "none" }
                  : stackStyle(position);
              return (
                <article
                  key={service.id}
                  id={service.id}
                  role="group"
                  aria-roledescription="slide"
                  aria-label={`${i + 1} di ${total}: ${service.title}`}
                  aria-hidden={!isTop}
                  inert={!isTop}
                  style={style}
                  className={`absolute inset-0 flex flex-col rounded-2xl border border-white/10 bg-[#131d35] p-6 shadow-[0_20px_40px_-20px_rgba(0,0,0,0.9)] transition-[transform,opacity,filter] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] motion-reduce:transition-none ${
                    isTop ? "cursor-grab active:cursor-grabbing" : ""
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="flex size-11 items-center justify-center rounded-xl bg-primary/15 text-sky-300 ring-1 ring-primary/40">
                      <Icon name={service.icon} className="size-5.5" />
                    </span>
                    <span className="text-xs text-white/45">{service.group}</span>
                  </div>

                  <h3 className="mt-6 text-xl md:text-xl">{service.title}</h3>
                  <p className="mt-2 line-clamp-4 text-sm text-white/65 md:text-sm">{service.text}</p>

                  <ul className="mt-auto flex flex-wrap gap-1.5 pt-4" aria-label="Specifiche">
                    {service.tags.map((tag) => (
                      <li key={tag} className="rounded-full border border-white/10 px-2 py-0.5 font-mono text-[11px] text-white/55">
                        {tag}
                      </li>
                    ))}
                  </ul>

                  <a
                    href="#contatti"
                    draggable={false}
                    className={`group mt-5 flex items-center justify-between border-t border-white/10 pt-4 text-sm font-medium text-white transition-colors hover:text-sky-300 ${focusRing}`}
                  >
                    Richiedi un preventivo
                    <Icon name="arrow" strokeWidth={2} className="size-4 text-primary transition-transform group-hover:translate-x-1" />
                  </a>
                </article>
              );
            })}
          </div>

          <div className="mt-12 flex items-center justify-between">
            <p className="font-mono text-sm text-white/50" aria-live="polite">
              <span className="text-white">{String(index + 1).padStart(2, "0")}</span> / {String(total).padStart(2, "0")}
              <span className="sr-only">: {active.title}</span>
            </p>
            <div className="flex gap-2">
              <button
                type="button"
                aria-label="Servizio precedente"
                onClick={prev}
                className={`flex size-11 items-center justify-center rounded-full border border-white/15 transition-colors hover:border-primary hover:bg-primary/15 ${focusRing}`}
              >
                <Icon name="arrow" strokeWidth={2} className="size-4 rotate-180" />
              </button>
              <button
                type="button"
                aria-label="Servizio successivo"
                onClick={() => next()}
                className={`flex size-11 items-center justify-center rounded-full bg-primary text-white transition-colors hover:bg-[#2f78ff] ${focusRing}`}
              >
                <Icon name="arrow" strokeWidth={2} className="size-4" />
              </button>
            </div>
          </div>
          <p className="mt-3 text-xs text-white/40 md:text-xs">Trascina la carta o usa le frecce</p>
        </div>
      </div>
    </section>
  );
}
