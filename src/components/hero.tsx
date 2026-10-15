import Image from "next/image";
import Link from "next/link";
import { Icon } from "@/components/icons";
import { PHONE, PHONE_HREF } from "@/lib/contacts";
import { CONTAINER } from "@/lib/layout";

const highlights = [
  {
    title: "Impianti certificati",
    text: "Dichiarazione D.M. 37/08 a ogni consegna",
    icon: "shield",
  },
  {
    title: "Sopralluogo gratuito",
    text: "Preventivo scritto, senza impegno",
    icon: "home",
  },
  {
    title: "Catania e provincia",
    text: "Fino alla costa ionica",
    icon: "pin",
  },
] as const;

const focusRing = "focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white";

export function Hero() {
  return (
    <section id="home" className="relative isolate flex min-h-svh w-full flex-col overflow-hidden" aria-labelledby="hero-title">
      <Image src="/images/background.webp" alt="" fill preload sizes="100vw" className="-z-20 object-cover object-[70%_center]" />
      <div className="absolute inset-0 -z-10 bg-linear-to-r from-background/95 via-background/70 to-background/10" aria-hidden="true" />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-1/2 bg-linear-to-t from-background via-background/60 to-transparent" aria-hidden="true" />
      <div className="absolute inset-0 -z-10 hidden bg-[radial-gradient(ellipse_at_88%_78%,rgba(15,23,42,0.9),transparent_45%)] lg:block" aria-hidden="true" />

      <div className={`${CONTAINER} grid flex-1 content-center gap-14 pt-32 pb-16 lg:grid-cols-[minmax(0,1fr)_16rem] lg:content-end lg:items-end lg:gap-16 lg:pb-20`}>
        <div>
          <h1 id="hero-title" className="max-w-[12ch] text-5xl leading-[0.95] font-semibold tracking-[-0.035em] text-balance sm:text-6xl lg:text-7xl xl:text-[5.5rem]">
            Tecnologia che migliora la tua vita<span className="text-primary [text-shadow:0_0_24px_var(--primary)]">.</span>
          </h1>
          <p className="mt-7 max-w-136 text-white/80">
            Impianti elettrici, sicurezza, domotica ed energia per case, aziende e strutture ricettive. Progettati, installati e certificati da un unico referente.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-4">
            <Link
              href="/#contatti"
              className={`group inline-flex items-center gap-2.5 rounded-full bg-primary py-3 pr-5 pl-6 text-[15px] font-medium text-white shadow-[0_8px_24px_-8px] shadow-primary transition-colors hover:bg-[#2f78ff] ${focusRing}`}
            >
              Prenota il sopralluogo gratuito
              <Icon name="arrow" strokeWidth={2} className="size-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
            <a href={PHONE_HREF} className={`text-[15px] text-white/70 transition-colors hover:text-white ${focusRing}`}>
              oppure chiama il <span className="font-medium text-white underline decoration-white/30 underline-offset-4">{PHONE}</span>
            </a>
          </div>
        </div>

        <ul className="grid gap-5 border-t border-white/15 pt-8 sm:grid-cols-3 lg:grid-cols-1 lg:gap-0 lg:border-t-0 lg:border-l lg:pt-0">
          {highlights.map((item) => (
            <li key={item.title} className="flex gap-4 lg:py-4 lg:pl-6">
              <Icon name={item.icon} className="mt-0.5 size-5 shrink-0 text-sky-300" />
              <div>
                <p className="text-[15px] font-medium md:text-[15px]">{item.title}</p>
                <p className="mt-0.5 text-sm text-white/60 md:text-sm">{item.text}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
