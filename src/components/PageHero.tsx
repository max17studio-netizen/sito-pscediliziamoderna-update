
export function PageHero({
  kicker, title, lead,
}: {
  kicker: string;
  title: string;
  lead?: string;
}): import("react").JSX.Element {
  return (
    <header className="border-b border-border bg-surface">
      <div className="mx-auto max-w-6xl px-5 pb-14 pt-36 md:pb-20 md:pt-44">
        <p className="text-xs font-medium tracking-[0.22em] uppercase text-primary">
          {kicker}
        </p>
        <h1 className="mt-4 max-w-3xl font-display text-4xl font-medium leading-[1.08] tracking-tight md:text-6xl">
          {title}
        </h1>
        {lead ? (
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
            {lead}
          </p>
        ) : null}
      </div>
    </header>
  );
}
