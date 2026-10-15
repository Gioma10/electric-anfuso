import Link from "next/link";
import { Icon, type IconName } from "@/components/icons";
import { SectionHeader } from "@/components/section-header";
import { CONTAINER } from "@/lib/layout";

const services: { title: string; text: string; tags: string[]; icon: IconName }[] = [
  {
    title: "Impianti Elettrici Civili",
    text: "Progettazione e realizzazione di impianti elettrici completi per abitazioni, ville e condomini. Certificazione D.M. 37/08 inclusa.",
    tags: ["CEI 64-8", "D.M. 37/08", "Residenziale"],
    icon: "home",
  },
  {
    title: "Impianti Industriali",
    text: "Quadri elettrici, illuminazione industriale e sistemi di videosorveglianza.",
    tags: ["BT/MT", "Automazione"],
    icon: "factory",
  },
  {
    title: "Domotica & Smart Home",
    text: "Sistemi BTicino MyHOME, Vimar By-Me. Controllo luci, tapparelle, riscaldamento e sicurezza da smartphone.",
    tags: ["BTicino", "MyHOME", "IoT"],
    icon: "smartphone",
  },
  {
    title: "Videosorveglianza",
    text: "Installazione sistemi TVCC IP e analogici, NVR/DVR, telecamere dome e bullet, accesso remoto da app mobile.",
    tags: ["4K", "NVR IP"],
    icon: "camera",
  },
  {
    title: "Antifurti & Allarmi",
    text: "Centrali antintrusione certificate Grado 2-3, rilevatori volumetrici, sensori magnetici, sirene e collegamento GPRS.",
    tags: ["Grado 2", "4G", "CEI 79-3"],
    icon: "shield",
  },
  {
    title: "Impianti Fotovoltaici",
    text: "Progettazione e installazione impianti FV residenziali e industriali, accumulo e monitoraggio remoto.",
    tags: ["Fotovoltaico", "Accumulo", "Monitoraggio"],
    icon: "solar",
  },
  {
    title: "Impianti Speciali",
    text: "Cablaggio strutturato Cat.6A, fibra ottica, reti LAN/WiFi enterprise, telefonia VoIP e diffusione sonora.",
    tags: ["Cat.6A", "Fibra", "VoIP"],
    icon: "network",
  },
  {
    title: "Manutenzione",
    text: "Intervento per guasti, verifiche periodiche impianti, aggiornamento vecchi impianti a norma CEI vigente.",
    tags: ["Verifiche"],
    icon: "wrench",
  },
  {
    title: "Climatizzazione",
    text: "Impianti di climatizzazione per privati e imprese.",
    tags: ["Certificazione"],
    icon: "snowflake",
  },
];

export function Services() {
  return (
    <section id="servizi" aria-labelledby="servizi-title" className="relative py-24 md:py-32">
      <div className={CONTAINER}>
        <SectionHeader
          title="Tutto ciò che serve per il tuo impianto"
          titleId="servizi-title"
          intro="Dalla progettazione alla certificazione, un unico referente per ogni tipo di impianto elettrico e tecnologico."
        />

        <ul className="mt-16 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => (
            <li
              key={service.title}
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-7 transition duration-300 hover:-translate-y-1 hover:border-primary/50 hover:bg-white/[0.05]"
            >
              <span className="absolute inset-x-8 top-0 h-px bg-linear-to-r from-transparent via-primary to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" aria-hidden="true" />
              <span className="pointer-events-none absolute -top-24 -right-24 size-48 rounded-full bg-primary/20 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" aria-hidden="true" />

              <span className="flex size-12 items-center justify-center rounded-xl bg-primary/10 text-primary ring-1 ring-primary/30 transition duration-300 group-hover:bg-primary group-hover:text-white group-hover:shadow-[0_0_24px_-4px] group-hover:shadow-primary">
                <Icon name={service.icon} className="size-6" />
              </span>

              <h3 className="mt-7 text-xl md:text-xl">{service.title}</h3>
              <p className="mt-3 flex-1 text-sm text-white/60 md:text-base">{service.text}</p>

              <ul className="mt-6 flex flex-wrap gap-2" aria-label="Specifiche">
                {service.tags.map((tag) => (
                  <li key={tag} className="rounded-full border border-white/10 px-2.5 py-1 font-mono text-[11px] text-white/60">
                    {tag}
                  </li>
                ))}
              </ul>

              <Link
                href="/#contatti"
                className="mt-6 flex items-center justify-between border-t border-white/10 pt-5 text-sm font-medium text-white/80 transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
              >
                Preventivo su misura
                <Icon name="arrow" strokeWidth={2} className="size-4 text-primary transition-transform group-hover:translate-x-1" />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
