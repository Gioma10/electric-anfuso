import { Icon } from "@/components/icons";
import { SectionHeader } from "@/components/section-header";
import { TECHNOLOGIES } from "@/lib/content";
import { CONTAINER } from "@/lib/layout";

export function Technologies() {
  return (
    <section id="tecnologie" aria-labelledby="tecnologie-title" className="relative pb-24 md:pb-32">
      <div className={CONTAINER}>
        <SectionHeader
          title="Specializzati nei sistemi del futuro"
          titleId="tecnologie-title"
          intro="Integriamo le tecnologie più avanzate per rendere ogni edificio più sicuro, efficiente e connesso."
        />

        {/* Scheda tecnica: celle separate da righe sottili, come un quadro di progetto. */}
        <ul className="mt-14 grid overflow-hidden rounded-2xl border border-white/10 sm:grid-cols-2 lg:grid-cols-4">
          {TECHNOLOGIES.map((tech) => (
            <li
              key={tech.title}
              className="group relative -mt-px -ml-px border-t border-l border-white/10 p-6 transition-colors duration-300 hover:bg-primary/[0.06] md:p-7"
            >
              <Icon name={tech.icon} className="size-7 text-sky-300 transition-transform duration-500 group-hover:-translate-y-0.5" />
              <h3 className="mt-8 text-lg md:text-lg">{tech.title}</h3>
              <p className="mt-2 text-sm text-white/55 md:text-sm">{tech.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
