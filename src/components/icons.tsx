const paths = {
  home: "M3 11l9-7 9 7v9a1 1 0 01-1 1H4a1 1 0 01-1-1v-9zM12.5 10L10 14h3.5L11 18",
  factory: "M3 21V10l5 3v-3l5 3v-3l5 3V4h3v17H3zM7 17h2m3 0h2",
  smartphone: "M8 2h8a1 1 0 011 1v18a1 1 0 01-1 1H8a1 1 0 01-1-1V3a1 1 0 011-1zM11 19h2M9.5 9.5a3.5 3.5 0 015 0M11 11.5a1.5 1.5 0 012 0",
  camera: "M3 8l12-4 2 6-12 4-2-6zM17 7.5l3-1v4l-3 1M8 13l1.5 4.5M4 18h6M4 15v6",
  shield: "M12 3l7 3v5c0 4.5-3 8.3-7 10-4-1.7-7-5.5-7-10V6l7-3zM9.5 11.5h5v4h-5zM10.5 11.5V10a1.5 1.5 0 013 0v1.5",
  solar: "M4 15l2-7h12l2 7H4zM12 8v7M5 11.5h14M12 15v3m-4 3h8M12 2v2M4.9 4.4l1.2 1.2M19.1 4.4l-1.2 1.2",
  network: "M9 3h6v4H9zM12 7v4M5 11h14M5 11v4M12 11v4M19 11v4M2.5 15h5v5h-5zM9.5 15h5v5h-5zM16.5 15h5v5h-5z",
  wrench: "M14.7 6.3a4 4 0 00-5.4 5.4L3 18l3 3 6.3-6.3a4 4 0 005.4-5.4l-2.5 2.5-2.4-.6-.6-2.4 2.5-2.5z",
  snowflake: "M12 2v20M3.3 7l17.4 10M3.3 17L20.7 7M9 3.5l3 2 3-2M9 20.5l3-2 3 2M3.5 10.5l3.4-.5-1-3.3M20.5 13.5l-3.4.5 1 3.3M3.5 13.5l3.4.5-1 3.3M20.5 10.5l-3.4-.5 1-3.3",
  building: "M4 21V4a1 1 0 011-1h9a1 1 0 011 1v17M15 9h4a1 1 0 011 1v11M2 21h20M8 7h3M8 11h3M8 15h3",
  arrow: "M5 12h14m-6-6l6 6-6 6",
  pin: "M12 21s-6.5-5.6-6.5-11A6.5 6.5 0 0118.5 10c0 5.4-6.5 11-6.5 11zm0-8.5a2.5 2.5 0 100-5 2.5 2.5 0 000 5z",
} as const;

export type IconName = keyof typeof paths;

export function Icon({ name, className, strokeWidth = 1.5 }: { name: IconName; className?: string; strokeWidth?: number }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d={paths[name]} />
    </svg>
  );
}
