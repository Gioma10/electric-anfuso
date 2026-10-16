import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/footer";
import { SideNav } from "@/components/side-nav";
import { TopBar } from "@/components/top-bar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const title = "Elettricista a Catania – Impianti elettrici e domotica | Anfuso Impianti";
const description =
  "Impianti elettrici certificati D.M. 37/08 a Catania e provincia: civili, industriali, domotica, videosorveglianza, antifurti e fotovoltaico. Sopralluogo gratuito.";

export const metadata: Metadata = {
  metadataBase: new URL("https://anfusoimpianti.it"),
  title,
  description,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "it_IT",
    url: "/",
    siteName: "Anfuso Impianti",
    title,
    description,
    images: [{ url: "/images/background.webp", width: 1672, height: 941, alt: "Villa con impianto di illuminazione a Catania" }],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="it"
      data-scroll-behavior="smooth"
      className={`${geistSans.variable} ${geistMono.variable} h-full scroll-smooth antialiased`}
    >
      <body className="flex min-h-full flex-col bg-background font-sans text-foreground selection:bg-accent selection:text-background">
        <TopBar />
        <SideNav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
