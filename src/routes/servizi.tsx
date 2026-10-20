import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { CtaBand, SiteShell } from "@/components/site-shell";
import { PageHero } from "@/components/PageHero";
import { services } from "@/lib/site";

export const Route = createFileRoute("/servizi")({
  component: Servizi,
  head: () => ({
    meta: [
      { title: "Servizi — P.S.C. Edilizia Moderna" },
      {
        name: "description",
        content:
          "Ristrutturazioni chiavi in mano, costruzioni, isolamenti, impianti idraulici ed elettrici, carpenteria metallica, infissi e facciate a Lissone.",
      },
    ],
  }),
});

function Servizi() {
  return (
    <SiteShell>
      <PageHero
        kicker="Servizi"
        title="Tutto quello che serve per chiudere un cantiere."
        lead="Ristrutturazioni, costruzioni, isolamenti, impianti, infissi, facciate e pratiche. Un’unica impresa, a Lissone."
      />

      <section className="mx-auto max-w-6xl px-5 py-16 md:py-24">
        <div className="grid gap-8 md:grid-cols-2">
          {services.map((s) => (
            <Link
              key={s.slug}
              to="/$serviceslug"
              params={{ serviceslug: s.slug }}
              className="group grid overflow-hidden rounded-xl bg-surface sm:grid-cols-5 transition-transform duration-200 hover:scale-[1.01] hover:shadow-sm"
            >
              <div className="sm:col-span-2">
                <img
                  src={s.image}
                  alt=""
                  className="h-48 w-full object-cover sm:h-full group-hover:opacity-90 transition-opacity"
                />
              </div>
              <div className="flex flex-col justify-between p-6 sm:col-span-3">
                <div>
                  <h2 className="font-display text-2xl font-medium md:text-3xl">
                    {s.title}
                  </h2>
                  <p className="mt-3 text-sm leading-relaxed text-muted">
                    {s.lead}
                  </p>
                </div>
                <p className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-primary">
                  Approfondisci <ArrowRight className="size-4" />
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <CtaBand />
    </SiteShell>
  );
}