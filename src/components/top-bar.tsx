import Image from "next/image";
import { WhatsappButton } from "@/components/whatsapp-button";

export function TopBar() {
  return (
    <div className="fixed top-[max(1rem,env(safe-area-inset-top))] inset-x-4 z-40 flex items-center gap-3 md:top-6 md:right-6 md:left-auto">
      {/* Desktop: solo logo, la scritta si apre all'hover. */}
      <a
        href="#home"
        aria-label="Impianti Elettrici Antonino Anfuso — Torna all'inizio"
        className="group flex h-12 min-w-0 flex-1 items-center rounded-full bg-background/80 pr-4 pl-1.5 shadow-[0_8px_24px_-6px_rgba(0,0,0,0.6)] ring-1 ring-white/15 backdrop-blur-md transition-[padding] duration-300 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white md:h-14 md:flex-none md:pr-1.5 md:hover:pr-5 md:focus-visible:pr-5"
      >
        <Image src="/images/logo-anfuso.png" alt="" width={1403} height={1121} className="block h-10 w-auto shrink-0 brightness-150 md:h-12" />
        <span className="grid transition-[grid-template-columns,opacity] duration-300 md:grid-cols-[0fr] md:opacity-0 md:group-hover:grid-cols-[1fr] md:group-hover:opacity-100 md:group-focus-visible:grid-cols-[1fr] md:group-focus-visible:opacity-100">
          <span className="overflow-hidden pl-2.5 leading-tight whitespace-nowrap transition-[padding] duration-300 md:pl-0 md:group-hover:pl-2.5 md:group-focus-visible:pl-2.5">
            <span className="block text-[10px] tracking-[0.14em] text-white/70 uppercase md:text-[11px]">Impianti elettrici</span>
            <span className="block text-base font-semibold tracking-tight text-white md:text-lg">Antonino Anfuso</span>
          </span>
        </span>
      </a>
      <WhatsappButton />
    </div>
  );
}
