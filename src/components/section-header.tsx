import type { ReactNode } from "react";

export function SectionHeader({
  title,
  titleId,
  intro,
  children,
}: {
  title: string;
  titleId: string;
  intro: string;
  children?: ReactNode;
}) {
  return (
    <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,26rem)] lg:items-end lg:gap-16">
      <h2 id={titleId} className="max-w-[16ch] text-4xl tracking-[-0.03em] text-balance md:text-5xl">
        {title}
      </h2>
      <div>
        <p className="text-white/65 md:text-base">{intro}</p>
        {children}
      </div>
    </div>
  );
}
