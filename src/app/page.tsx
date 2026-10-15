import { Hero } from "@/components/hero";
import { Process } from "@/components/process";
import { Projects } from "@/components/projects";
import { Services } from "@/components/services";
import { Technologies } from "@/components/technologies";
import { EMAIL } from "@/lib/contacts";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Electrician",
  name: "Anfuso Impianti",
  url: "https://anfusoimpianti.it",
  logo: "https://anfusoimpianti.it/images/logo-anfuso.png",
  image: "https://anfusoimpianti.it/images/background.webp",
  telephone: "+39 392 523 1181",
  email: EMAIL,
  vatID: "IT05982790874",
  address: { "@type": "PostalAddress", addressLocality: "Catania", addressRegion: "CT", addressCountry: "IT" },
  areaServed: ["Catania", "Provincia di Catania", "Acireale", "Misterbianco", "Taormina"],
};

export default function Home() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} />
      <Hero />
      <Services />
      <Technologies />
      <Process />
      <Projects />
    </main>
  );
}
