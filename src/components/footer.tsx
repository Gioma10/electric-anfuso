import type { ReactNode } from "react";
import Image from "next/image";
import { Icon } from "@/components/icons";
import { WhatsappIcon } from "@/components/whatsapp-icon";
import { EMAIL, PHONE, PHONE_HREF, QUOTE_HREF, WHATSAPP_HREF } from "@/lib/contacts";
import { SERVICE_AREAS, SERVICE_GROUPS, TECHNOLOGIES } from "@/lib/content";
import { CONTAINER } from "@/lib/layout";

const focusRing = "focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white";

const linkClass = `text-sm text-white/55 transition-colors hover:text-white ${focusRing}`;

function FooterColumn({ title, children }: { title: string; children: ReactNode }) {
  return (
    <nav aria-label={title}>
      <h3 className="text-sm font-semibold text-white md:text-sm">{title}</h3>
      <ul className="mt-4 space-y-2.5">{children}</ul>
    </nav>
  );
}

// Fine del circuito: la lampadina della linea laterale si accende qui.
export function Footer() {
  return (
    <footer id="contatti" className="relative isolate overflow-hidden border-t border-white/10">
      <span className="absolute top-1/3 -left-48 -z-10 size-[44rem] -translate-y-1/2 rounded-full bg-accent/10 blur-[120px]" aria-hidden="true" />

      <div className={`${CONTAINER} pt-28 pb-20 md:pt-36`}>
        <h2 className="max-w-[18ch] text-4xl tracking-[-0.03em] text-balance md:text-6xl">
          <span className="text-white/45">Hai seguito il filo fino in fondo.</span> Ora accendiamo il tuo progetto.
        </h2>
        <p className="mt-6 max-w-xl text-white/70">
          Sopralluogo e preventivo gratuiti, senza impegno. Rispondiamo entro 2 ore.
        </p>

        <div className="mt-10 flex flex-wrap gap-3">
          <a
            href={QUOTE_HREF}
            className={`group inline-flex items-center gap-2.5 rounded-full bg-accent py-3 pr-5 pl-6 text-[15px] font-medium text-background shadow-[0_8px_28px_-10px] shadow-accent transition-colors hover:bg-[#fef3c7] ${focusRing}`}
          >
            Richiedi un preventivo
            <Icon name="arrow" strokeWidth={2} className="size-4 transition-transform group-hover:translate-x-0.5" />
          </a>
          <a
            href={WHATSAPP_HREF}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center gap-2.5 rounded-full border border-white/20 px-5 py-3 text-[15px] font-medium transition-colors hover:border-[#25d366]/60 hover:bg-[#25d366]/10 ${focusRing}`}
          >
            <WhatsappIcon className="size-4.5 text-[#25d366]" />
            Scrivici su WhatsApp
          </a>
        </div>

        <dl className="mt-20 grid gap-8 border-t border-white/10 pt-10 sm:grid-cols-3">
          <div>
            <dt className="text-sm text-white/50">Telefono</dt>
            <dd className="mt-1.5">
              <a href={PHONE_HREF} className={`text-lg font-medium hover:text-accent ${focusRing}`}>{PHONE}</a>
            </dd>
          </div>
          <div>
            <dt className="text-sm text-white/50">Email</dt>
            <dd className="mt-1.5">
              <a href={`mailto:${EMAIL}`} className={`text-lg font-medium break-all hover:text-accent ${focusRing}`}>{EMAIL}</a>
            </dd>
          </div>
          <div>
            <dt className="text-sm text-white/50">Zona</dt>
            <dd className="mt-1.5 text-lg font-medium">Catania, provincia e costa ionica</dd>
          </div>
        </dl>
      </div>

      <div className="border-t border-white/10 bg-black/20">
        <div className={`${CONTAINER} grid gap-12 pt-16 pb-12 md:grid-cols-2 xl:grid-cols-[1.3fr_1fr_1fr_0.8fr_0.8fr] xl:gap-10`}>
          <div>
            <Image src="/images/logo-anfuso.png" alt="Anfuso Anthony Impianti" width={1403} height={1121} className="block w-24 brightness-150" />
            <p className="mt-5 max-w-xs text-sm text-white/55 md:text-sm">
              Impianti elettrici e tecnologici a Catania e provincia. Progettazione, installazione e certificazione D.M. 37/08, con installazioni in tutta la Sicilia.
            </p>
          </div>

          <FooterColumn title="Servizi">
            {SERVICE_GROUPS.flatMap((group) => group.services).map((service) => (
              <li key={service.id}>
                {/* <a> nativo: l'hashchange apre la tab giusta nella sezione Servizi. */}
                <a href={`#${service.id}`} className={linkClass}>
                  {service.title}
                </a>
              </li>
            ))}
          </FooterColumn>

          <FooterColumn title="Tecnologie">
            {TECHNOLOGIES.map((tech) => (
              <li key={tech.title}>
                <a href="#tecnologie" className={linkClass}>
                  {tech.title}
                </a>
              </li>
            ))}
          </FooterColumn>

          <FooterColumn title="Azienda">
            {[
              { href: "#servizi", label: "Servizi" },
              { href: "#tecnologie", label: "Tecnologie" },
              { href: "#come-lavoriamo", label: "Come lavoriamo" },
              { href: "#realizzazioni", label: "Realizzazioni" },
              { href: "#contatti", label: "Contatti" },
            ].map((link) => (
              <li key={link.href}>
                <a href={link.href} className={linkClass}>
                  {link.label}
                </a>
              </li>
            ))}
          </FooterColumn>

          <FooterColumn title="Zone servite">
            {SERVICE_AREAS.map((area) => (
              <li key={area} className="text-sm text-white/55">
                {area}
              </li>
            ))}
          </FooterColumn>
        </div>

        <div className="border-t border-white/5">
          <div className={`${CONTAINER} flex flex-col gap-2 pt-6 pb-32 text-xs text-white/40 sm:flex-row sm:justify-between lg:pb-6`}>
            <p className="text-xs md:text-xs">© Anfuso Impianti – Tutti i diritti riservati</p>
            <p className="text-xs md:text-xs">P.IVA 05982790874 · Catania</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
