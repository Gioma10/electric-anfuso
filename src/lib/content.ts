import type { IconName } from "@/components/icons";

export type Service = { id: string; title: string; text: string; tags: string[]; icon: IconName };

export type ServiceGroup = { id: string; name: string; shortName: string; summary: string; services: Service[] };

export const SERVICE_GROUPS: ServiceGroup[] = [
  {
    id: "impianti",
    name: "Impianti elettrici",
    shortName: "Impianti",
    summary: "Dalla casa al capannone: impianti nuovi, rifacimenti, reti dati e manutenzione a norma CEI.",
    services: [
      {
        id: "impianti-elettrici-civili",
        title: "Impianti Elettrici Civili",
        text: "Progettazione e realizzazione di impianti elettrici completi per abitazioni, ville e condomini. Certificazione D.M. 37/08 inclusa.",
        tags: ["CEI 64-8", "D.M. 37/08", "Residenziale"],
        icon: "home",
      },
      {
        id: "impianti-industriali",
        title: "Impianti Industriali",
        text: "Quadri elettrici, illuminazione industriale e sistemi di videosorveglianza.",
        tags: ["BT/MT", "Automazione"],
        icon: "factory",
      },
      {
        id: "impianti-speciali",
        title: "Impianti Speciali",
        text: "Cablaggio strutturato Cat.6A, fibra ottica, reti LAN/WiFi enterprise, telefonia VoIP e diffusione sonora.",
        tags: ["Cat.6A", "Fibra", "VoIP"],
        icon: "network",
      },
      {
        id: "manutenzione",
        title: "Manutenzione",
        text: "Intervento per guasti, verifiche periodiche impianti, aggiornamento vecchi impianti a norma CEI vigente.",
        tags: ["Verifiche"],
        icon: "wrench",
      },
    ],
  },
  {
    id: "sicurezza",
    name: "Sicurezza",
    shortName: "Sicurezza",
    summary: "Videosorveglianza e antintrusione certificate per proteggere casa, azienda e struttura ricettiva.",
    services: [
      {
        id: "videosorveglianza",
        title: "Videosorveglianza",
        text: "Installazione sistemi TVCC IP e analogici, NVR/DVR, telecamere dome e bullet, accesso remoto da app mobile.",
        tags: ["4K", "NVR IP"],
        icon: "camera",
      },
      {
        id: "antifurti-allarmi",
        title: "Antifurti & Allarmi",
        text: "Centrali antintrusione certificate Grado 2-3, rilevatori volumetrici, sensori magnetici, sirene e collegamento GPRS.",
        tags: ["Grado 2", "4G", "CEI 79-3"],
        icon: "shield",
      },
    ],
  },
  {
    id: "energia",
    name: "Energia e comfort",
    shortName: "Energia",
    summary: "Produci la tua energia, controlla la casa dallo smartphone e scegli il clima giusto in ogni stanza.",
    services: [
      {
        id: "impianti-fotovoltaici",
        title: "Impianti Fotovoltaici",
        text: "Progettazione e installazione impianti FV residenziali e industriali, accumulo e monitoraggio remoto.",
        tags: ["Fotovoltaico", "Accumulo", "Monitoraggio"],
        icon: "solar",
      },
      {
        id: "domotica-smart-home",
        title: "Domotica & Smart Home",
        text: "Sistemi BTicino MyHOME, Vimar By-Me. Controllo luci, tapparelle, riscaldamento e sicurezza da smartphone.",
        tags: ["BTicino", "MyHOME", "IoT"],
        icon: "smartphone",
      },
      {
        id: "climatizzazione",
        title: "Climatizzazione",
        text: "Impianti di climatizzazione per privati e imprese.",
        tags: ["Certificazione"],
        icon: "snowflake",
      },
    ],
  },
];

export const TECHNOLOGIES: { title: string; text: string; icon: IconName }[] = [
  { title: "Domotica BTicino", text: "Controllo centralizzato di luci, clima, tapparelle e irrigazione", icon: "smartphone" },
  { title: "Videosorveglianza IP", text: "Telecamere 4K, analisi video AI, accesso remoto H.265+", icon: "camera" },
  { title: "Antintrusione", text: "Centrali Grado 2-3, PIR, doppia tecnologia, 4G/IP", icon: "shield" },
  { title: "Rivelazione Incendio", text: "Sistemi analogici EN 54, loop, pulsanti manuali e sirene", icon: "flame" },
  { title: "Fotovoltaico & Accumulo", text: "Impianti residenziali e industriali", icon: "solar" },
  { title: "Ricarica Veicoli EV", text: "Wallbox monofase e trifase, gestione intelligente dei carichi", icon: "ev" },
  { title: "Cablaggio Strutturato", text: "Cat.6A, fibra ottica, reti LAN/WiFi enterprise Ubiquiti", icon: "network" },
  { title: "Controllo Accessi", text: "Badge RFID, biometrico, videocitofonia IP e tornelli", icon: "badge" },
];

export const SERVICE_AREAS = [
  "Elettricista a Catania",
  "Elettricista ad Acireale",
  "Elettricista a Misterbianco",
  "Elettricista a Taormina",
  "Provincia di Catania",
  "Costa ionica",
];
