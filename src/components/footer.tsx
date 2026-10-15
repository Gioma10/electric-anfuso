import Image from "next/image";
import { Icon } from "@/components/icons";
import { WhatsappIcon } from "@/components/whatsapp-icon";
import { EMAIL, PHONE, PHONE_HREF, QUOTE_HREF, WHATSAPP_HREF } from "@/lib/contacts";
import { CONTAINER } from "@/lib/layout";

const focusRing = "focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white";

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

      <div className="border-t border-white/5">
        <div className={`${CONTAINER} flex flex-col gap-4 py-8 text-sm text-white/45 sm:flex-row sm:items-center sm:justify-between`}>
          <Image src="/images/anfuso-impianti-spina.png" alt="Anfuso Impianti" width={2022} height={778} className="block w-24 opacity-70 brightness-0 invert" />
          <p>© Anfuso Impianti · P.IVA 05982790874</p>
        </div>
      </div>
    </footer>
  );
}
