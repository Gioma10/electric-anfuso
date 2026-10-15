import Image from "next/image";
import Link from "next/link";
import { WhatsappIcon } from "@/components/whatsapp-icon";
import { WHATSAPP_HREF } from "@/lib/contacts";

export function Navbar() {
  return (
    <header className="absolute inset-x-0 top-0 z-20">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-6 px-5 md:h-24 md:px-12">
        <Link className="block shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white" href="/" aria-label="Anfuso Impianti — Home">
          <Image src="/images/anfuso-impianti-spina.png" alt="Anfuso Impianti" width={2022} height={778} className="block w-28 brightness-0 invert md:w-32" />
        </Link>

        <a
          href={WHATSAPP_HREF}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Scrivici su WhatsApp"
          className="group inline-flex h-10 items-center gap-2 rounded-full border border-white/20 bg-background/40 pr-4 pl-3 text-sm font-medium text-white backdrop-blur-md transition-colors hover:border-[#25d366]/60 hover:bg-[#25d366]/10 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white max-sm:w-10 max-sm:justify-center max-sm:px-0"
        >
          <WhatsappIcon className="size-4.5 text-[#25d366]" />
          <span className="max-sm:sr-only">WhatsApp</span>
        </a>
      </div>
    </header>
  );
}
