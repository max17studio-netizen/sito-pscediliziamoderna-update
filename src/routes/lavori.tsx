import { createFileRoute } from "@tanstack/react-router";
import { CtaBand, SiteShell } from "@/components/site-shell";
import { PageHero } from "@/components/PageHero";
import { projects } from "@/lib/site";

export const Route = createFileRoute("/lavori")({
  component: Lavori,
  head: () => ({
    meta: [
      { title: "Lavori — P.S.C. Edilizia Moderna" },
      {
        name: "description",
        content:
          "Interventi residenziali di P.S.C. Edilizia Moderna a Lissone e in Brianza: ville, appartamenti, facciate e sottotetti.",
      },
    ],
  }),
});

function Lavori() {
  return (
    <SiteShell>
      <PageHero
        kicker="Lavori"
        title="Cantiere chiuso, casa abitata."
        lead="Una selezione di interventi residenziali in Lissone e Brianza: ville, appartamenti, facciate e recuperi di sottotetto."
      />

      <section className="mx-auto max-w-6xl px-5 py-16 md:py-24">
        <div className="grid gap-x-8 gap-y-14 md:grid-cols-2">
          {projects.map((p, i) => (
            <article
              key={p.slug}
              className={i === 0 ? "md:col-span-2" : undefined}
            >
              <img
                src={p.image}
                alt={`${p.title} a ${p.place}`}
                className={
                  i === 0
                    ? "aspect-[16/9] w-full rounded-xl object-cover"
                    : "aspect-[4/3] w-full rounded-xl object-cover"
                }
              />
              <div className="mt-5 flex flex-wrap items-baseline justify-between gap-2">
                <h2 className="font-display text-3xl font-medium">{p.title}</h2>
                <p className="text-xs tracking-[0.18em] uppercase text-muted">
                  {p.place} · {p.year}
                </p>
              </div>
              <p className="mt-1 text-sm text-primary">{p.type}</p>
              <p className="mt-3 max-w-2xl leading-relaxed text-muted">
                {p.summary}
              </p>
            </article>
          ))}
        </div>
      </section>

      <CtaBand />
    </SiteShell>
  );
}
