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

      {/* <div className={`${CONTAINER} pt-5 md:pt-6`}>
        <Link href="/" aria-label="Anfuso Impianti — Home" className={`inline-block ${focusRing}`}>
          <Image src="/images/logo-anfuso.png" alt="Anfuso Anthony Impianti" width={1403} height={1121} className="block w-24 brightness-150 md:w-28" />
        </Link>
      </div> */}

      <div className={`${CONTAINER} grid flex-1 content-center gap-12 pt-24 pb-28 md:pt-28 lg:pt-8 lg:grid-cols-[minmax(0,1fr)_19rem] lg:items-center lg:gap-16 lg:pb-40`}>
        <div>
          <h1 id="hero-title" className="max-w-[18ch] text-5xl leading-[0.95] font-semibold tracking-[-0.035em] text-balance sm:text-6xl lg:text-7xl xl:text-[5.25rem]">
            Impianti elettrici a Catania<span className="text-primary [text-shadow:0_0_24px_var(--primary)]">.</span>
          </h1>
          <p className="mt-6 max-w-136 text-white/80">
            Il tuo elettricista per case, aziende e strutture ricettive: impianti certificati, domotica, videosorveglianza e fotovoltaico, dal sopralluogo alla dichiarazione di conformità.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-4">
            <a
              href="#contatti"
              className={`group inline-flex items-center gap-2.5 rounded-full bg-primary py-3 pr-5 pl-6 text-[15px] font-medium text-white shadow-[0_8px_24px_-8px] shadow-primary transition-colors hover:bg-[#2f78ff] ${focusRing}`}
            >
              Prenota il sopralluogo gratuito
              <Icon name="arrow" strokeWidth={2} className="size-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a href={PHONE_HREF} className={`text-[15px] text-white/70 transition-colors hover:text-white ${focusRing}`}>
              oppure chiama il <span className="font-medium text-white underline decoration-white/30 underline-offset-4">{PHONE}</span>
            </a>
          </div>
        </div>

        {/* Pannello opaco: le caratteristiche restano leggibili anche sopra le luci della villa. */}
        <ul className="grid divide-y divide-white/10 rounded-2xl border border-white/15 bg-background/80 shadow-[0_24px_48px_-24px_rgba(0,0,0,0.8)] backdrop-blur-md sm:grid-cols-3 sm:divide-x sm:divide-y-0 lg:grid-cols-1 lg:divide-x-0 lg:divide-y">
          {highlights.map((item) => (
            <li key={item.title} className="flex items-start gap-4 p-5">
              <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-primary/15 text-sky-300 ring-1 ring-primary/40">
                <Icon name={item.icon} className="size-5.5" />
              </span>
              <div>
                <p className="text-base font-semibold text-white md:text-base">{item.title}</p>
                <p className="mt-1 text-sm text-white/75 md:text-sm">{item.text}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
