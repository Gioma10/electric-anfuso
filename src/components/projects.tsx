"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { type CSSProperties, useEffect, useRef } from "react";
import { Icon, type IconName } from "@/components/icons";
import { SectionHeader } from "@/components/section-header";
import { CONTAINER } from "@/lib/layout";

gsap.registerPlugin(ScrollTrigger);

type Project = {
  title: string;
  category: string;
  location: string;
  text: string;
  metric: { value: string; label: string };
  specs: string[];
  icon: IconName;
  glow: string;
};

const projects: Project[] = [
  {
    title: "Villa unifamiliare – Impianto completo",
    category: "Residenziale",
    location: "Catania",
    text: "Rifacimento impianto elettrico completo su 3 livelli: quadro generale, punti luce LED, prese USB, domotica BTicino MyHOME e impianto di videosorveglianza.",
    metric: { value: "3", label: "livelli" },
    specs: ["Quadro generale", "MyHOME", "TVCC"],
    icon: "home",
    glow: "#1565ff",
  },
  {
    title: "Capannone industriale 2.500 mq",
    category: "Industriale",
    location: "Misterbianco",
    text: "Quadri di zona, impianto forza motrice trifase, illuminazione LED industriale e sistema di videosorveglianza.",
    metric: { value: "2.500", label: "mq" },
    specs: ["Trifase", "LED industriale", "TVCC"],
    icon: "factory",
    glow: "#06b6d4",
  },
  {
    title: "Hotel 4★ – Sistema TVCC & Allarme",
    category: "Alberghiero",
    location: "Taormina",
    text: "Installazione 12 telecamere IP 4K, NVR 16 canali e copertura WiFi totale.",
    metric: { value: "12", label: "telecamere 4K" },
    specs: ["IP 4K", "NVR 16 ch", "WiFi"],
    icon: "camera",
    glow: "#38bdf8",
  },
  {
    title: "Impianto fotovoltaico 10 kWp",
    category: "Fotovoltaico",
    location: "Catania",
    text: "Installazione pannelli monocristallini, inverter Huawei, sistema di accumulo 6 kWh e monitoraggio remoto in tempo reale.",
    metric: { value: "10", label: "kWp" },
    specs: ["Accumulo 6 kWh", "Huawei", "Monitoraggio"],
    icon: "solar",
    glow: "#f59e0b",
  },
  {
    title: "Uffici direzionali – Cablaggio e domotica",
    category: "Uffici",
    location: "Catania",
    text: "Cablaggio strutturato Cat.6A, fibra interna, rete WiFi enterprise Ubiquiti, sistema BTicino per controllo luci.",
    metric: { value: "Cat.6A", label: "cablaggio" },
    specs: ["Fibra", "Ubiquiti", "BTicino"],
    icon: "network",
    glow: "#1565ff",
  },
  {
    title: "Condominio 24 unità – Impianti comuni",
    category: "Residenziale",
    location: "Acireale",
    text: "Rifacimento impianto elettrico parti comuni, videocitofonia, illuminazione LED a risparmio energetico.",
    metric: { value: "24", label: "unità" },
    specs: ["Parti comuni", "Videocitofonia", "LED"],
    icon: "building",
    glow: "#06b6d4",
  },
];

const blueprint =
  "bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-size-[22px_22px]";

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <article
      style={{ "--glow": project.glow } as CSSProperties}
      className="group relative flex w-[82vw] shrink-0 snap-start flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#0b1222] transition-colors duration-300 hover:border-(--glow)/60 sm:w-[400px]"
    >
      <div className={`relative h-48 overflow-hidden border-b border-white/10 ${blueprint}`}>
        <span className="absolute -right-10 -bottom-16 size-64 rounded-full bg-(--glow) opacity-25 blur-3xl transition-opacity duration-500 group-hover:opacity-40" aria-hidden="true" />
        <Icon
          name={project.icon}
          strokeWidth={0.75}
          className="absolute -right-4 -bottom-6 size-48 text-(--glow) opacity-70 drop-shadow-[0_0_18px_var(--glow)] transition-transform duration-700 group-hover:scale-105 group-hover:-rotate-3"
        />
        <div className="absolute inset-x-5 top-5 flex items-center justify-between">
          <span className="rounded-full border border-white/15 bg-background/60 px-3 py-1 text-xs font-medium backdrop-blur">{project.category}</span>
          <span className="font-mono text-xs text-white/40">
            {String(index + 1).padStart(2, "0")} / {String(projects.length).padStart(2, "0")}
          </span>
        </div>
        <p className="absolute bottom-5 left-5 text-base md:text-base">
          <span className="block text-5xl leading-none font-semibold tracking-tight">{project.metric.value}</span>
          <span className="mt-2 block font-mono text-xs text-white/60 uppercase">{project.metric.label}</span>
        </p>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <p className="flex items-center gap-1.5 text-xs text-white/50 md:text-xs">
          <Icon name="pin" className="size-3.5" />
          {project.location}
        </p>
        <h3 className="mt-2 text-lg leading-snug md:text-lg">{project.title}</h3>
        <p className="mt-3 flex-1 lg:line-clamp-3 text-sm text-white/60 md:text-sm">{project.text}</p>
        <ul className="mt-5 flex flex-wrap gap-2" aria-label="Dettagli">
          {project.specs.map((spec) => (
            <li key={spec} className="rounded-full border border-white/10 px-2.5 py-1 font-mono text-[11px] text-white/60">
              {spec}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}

export function Projects() {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const fillRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const track = trackRef.current;
    if (!section || !track) return;

    const mm = gsap.matchMedia();
    // Desktop: la sezione si blocca e lo scroll verticale fa scorrere le card in orizzontale.
    mm.add("(min-width: 1024px) and (prefers-reduced-motion: no-preference)", () => {
      const distance = () => Math.max(0, track.scrollWidth - window.innerWidth);
      gsap
        .timeline({
          scrollTrigger: {
            trigger: section,
            start: "top top",
            end: () => `+=${distance()}`,
            pin: true,
            scrub: 0.6,
            invalidateOnRefresh: true,
            refreshPriority: 1,
          },
        })
        .to(track, { x: () => -distance(), ease: "none" })
        .fromTo(fillRef.current, { scaleX: 0 }, { scaleX: 1, ease: "none" }, 0);
      // I trigger della linea laterale sono stati creati prima del pin: vanno ricalcolati.
      ScrollTrigger.sort();
      ScrollTrigger.refresh();
    });

    return () => mm.revert();
  }, []);

  return (
    <section ref={sectionRef} id="realizzazioni" aria-labelledby="realizzazioni-title" className="relative overflow-hidden py-24 md:py-32 lg:flex lg:h-svh lg:flex-col lg:justify-center lg:py-10">
      <div className={CONTAINER}>
        <SectionHeader
          title="Alcuni dei nostri lavori"
          titleId="realizzazioni-title"
          intro="Progetti realizzati in ambito residenziale, industriale, commerciale e pubblico in tutta la Sicilia."
        >
          <p className="mt-4 hidden items-center gap-2 text-sm text-white/45 lg:flex">
            Continua a scorrere
            <Icon name="arrow" strokeWidth={2} className="size-4" />
          </p>
        </SectionHeader>
      </div>

      {/* Maschera fissa: le card sfumano prima di passare sotto la linea laterale. */}
      <div className="lg:mask-[linear-gradient(to_right,transparent_150px,black_190px)]">
        <div
          ref={trackRef}
          className="mt-12 flex snap-x snap-mandatory scroll-px-5 gap-5 overflow-x-auto px-5 pb-4 [scrollbar-width:none] md:scroll-px-12 md:px-12 lg:mt-10 lg:snap-none lg:overflow-visible lg:pl-48 2xl:pl-[calc((100vw-80rem)/2+3rem)]"
        >
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}

          <div className="flex w-[82vw] shrink-0 snap-start flex-col justify-between rounded-2xl border border-primary/40 bg-linear-to-br from-primary/25 via-primary/10 to-transparent p-8 sm:w-[340px]">
            <div>
              <h3 className="text-2xl md:text-2xl">Hai un progetto in mente?</h3>
              <p className="mt-3 text-sm text-white/70 md:text-base">Contattaci per un sopralluogo e un preventivo gratuito. Rispondiamo entro 2 ore.</p>
            </div>
            <a
              href="#contatti"
              className="group mt-8 inline-flex items-center justify-center gap-3 rounded-md bg-primary px-6 py-3.5 font-medium text-white transition-colors hover:bg-primary/85 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
            >
              Richiedi preventivo
              <Icon name="arrow" strokeWidth={2} className="size-4 transition-transform group-hover:translate-x-0.5" />
            </a>
          </div>
          <span className="w-px shrink-0 md:w-7" aria-hidden="true" />
        </div>
      </div>

      <div className={`${CONTAINER} mt-8 hidden lg:block`} aria-hidden="true">
        <span className="relative block h-0.5 w-full bg-white/10">
          <span ref={fillRef} className="absolute inset-0 origin-left scale-x-0 bg-linear-to-r from-primary to-sky-400 shadow-[0_0_10px] shadow-primary" />
        </span>
      </div>
    </section>
  );
}
