import { WhatsappIcon } from "@/components/whatsapp-icon";
import { WHATSAPP_HREF } from "@/lib/contacts";

export function WhatsappButton() {
  return (
    <a
      href={WHATSAPP_HREF}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Scrivici su WhatsApp"
      className="fixed top-[max(1rem,env(safe-area-inset-top))] right-4 z-40 flex size-12 items-center justify-center rounded-full bg-green-600 text-white shadow-[0_8px_24px_-6px_rgba(0,0,0,0.6)] ring-1 ring-white/15 transition hover:scale-105 hover:bg-green-500 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white md:top-6 md:right-6 md:size-14"
    >
      <WhatsappIcon className="size-6 md:size-7" />
    </a>
  );
}
