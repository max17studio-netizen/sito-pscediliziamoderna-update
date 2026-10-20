import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { CtaBand, SiteShell } from "@/components/site-shell";
import { Button } from "@/components/ui/button";
import { company, processSteps, projects, services } from "@/lib/site";

export const Route = createFileRoute("/")({ component: Home });

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "GeneralContractor",
  name: company.legalName,
  image: "/images/hero.jpg",
  telephone: company.mobileHref.replace("tel:", ""),
  email: company.pec,
  address: {
    "@type": "PostalAddress",
    streetAddress: company.address,
    addressLocality: company.city,
    postalCode: company.zip,
    addressRegion: company.province,
    addressCountry: "IT",
  },
  url: "https://www.instagram.com/p.s.c.ediliziamoderna/",
  areaServed: "Monza e Brianza",
};

function Home() {
  return (
    <SiteShell>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="relative min-h-[92vh] bg-ink text-ink-fg">
        <img
          src="/images/hero.jpg"
          alt="Villa ristrutturata a Lissone, facciata in calce e infissi in bronzo al crepuscolo"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/55 to-ink/25" />
        <div className="relative mx-auto flex min-h-[92vh] max-w-6xl flex-col justify-end px-5 pb-16 pt-32 md:pb-20">
          <p className="text-xs font-medium tracking-[0.28em] uppercase text-ink-fg/80">
            Lissone · Monza e Brianza
          </p>
          <h1 className="mt-4 max-w-3xl font-display text-5xl font-medium leading-[0.98] tracking-tight md:text-7xl">
            Edilizia su misura, fatta per durare.
          </h1>
          <p className="mt-6 max-w-lg text-base leading-relaxed text-ink-fg/80 md:text-lg">
            Ristrutturazioni chiavi in mano, costruzioni e finiture. Un unico
            referente di cantiere, dalla pratica comunale alla consegna delle
            chiavi.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild variant="primary" size="lg">
              <Link to="/contatti">Richiedi preventivo</Link>
            </Button>
            <Button asChild variant="inverseOutline" size="lg">
              <Link to="/lavori">Guarda i lavori</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-bg">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-px bg-border md:grid-cols-4">
          {[
            ["40+", "anni di cantiere"],
            ["1", "referente per voi"],
            ["MB", "Lissone e Brianza"],
            ["chiavi", "in mano"],
          ].map(([stat, label]) => (
            <div key={label} className="bg-bg px-5 py-8 md:px-8 md:py-10">
              <p className="font-display text-4xl font-medium tracking-tight md:text-5xl">
                {stat}
              </p>
              <p className="mt-2 text-sm text-muted">{label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-20 md:py-28">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="text-xs font-medium tracking-[0.22em] uppercase text-primary">
              Cosa facciamo
            </p>
            <h2 className="mt-3 max-w-xl font-display text-4xl font-medium tracking-tight md:text-5xl">
              Dal cappotto al parquet, lo stesso cantiere.
            </h2>
          </div>
          <Button asChild variant="outline">
            <Link to="/servizi">
              Tutti i servizi <ArrowRight className="size-4" />
            </Link>
          </Button>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.slice(0, 6).map((s) => (
            <Link
              key={s.slug}
              to="/servizi/$slug"
              params={{ slug: s.slug }}
              className="group overflow-hidden rounded-xl bg-surface transition-transform duration-200 hover:-translate-y-0.5"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={s.image}
                  alt=""
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
              </div>
              <div className="p-5">
                <h3 className="font-display text-2xl font-medium">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {s.short}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-surface">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-20 md:grid-cols-2 md:gap-16 md:py-28">
          <div className="overflow-hidden rounded-xl">
            <img
              src="/images/craft.jpg"
              alt="Posa di intonaco a calce, dettaglio di cantiere"
              className="aspect-[3/2] w-full object-cover"
            />
          </div>
          <div>
            <p className="text-xs font-medium tracking-[0.22em] uppercase text-primary">
              Chi siamo
            </p>
            <h2 className="mt-3 font-display text-4xl font-medium tracking-tight md:text-5xl">
              Una ditta di Lissone, non un call center.
            </h2>
            <p className="mt-6 leading-relaxed text-muted">
              P.S.C. Edilizia Moderna opera da più di quarant’anni nel settore
              edile. Sede in Via Caravaggio, a Lissone: da qui copriamo Monza,
              Seregno, Desio, Muggiò e i comuni della Brianza.
            </p>
            <p className="mt-4 leading-relaxed text-muted">
              Seguiamo l’intervento per intero — pratiche, demolizioni,
              isolamento, impianti, infissi e finiture — con un responsabile di
              cantiere che risponde del risultato.
            </p>
            <Button asChild variant="ink" className="mt-8">
              <Link to="/chi-siamo">
                Chi siamo <ArrowRight className="size-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-20 md:py-28">
        <p className="text-xs font-medium tracking-[0.22em] uppercase text-primary">
          Come lavoriamo
        </p>
        <h2 className="mt-3 max-w-xl font-display text-4xl font-medium tracking-tight md:text-5xl">
          Quattro passi, niente zone d’ombra.
        </h2>
        <ol className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((step) => (
            <li key={step.n} className="border-t border-border pt-6">
              <p className="font-display text-3xl text-primary">{step.n}</p>
              <h3 className="mt-3 font-display text-2xl font-medium">
                {step.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                {step.text}
              </p>
            </li>
          ))}
        </ol>
      </section>

      <section className="border-t border-border bg-bg">
        <div className="mx-auto max-w-6xl px-5 py-20 md:py-28">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="text-xs font-medium tracking-[0.22em] uppercase text-primary">
                Lavori
              </p>
              <h2 className="mt-3 font-display text-4xl font-medium tracking-tight md:text-5xl">
                Interventi recenti in Brianza.
              </h2>
            </div>
            <Button asChild variant="outline">
              <Link to="/lavori">
                Tutti i lavori <ArrowRight className="size-4" />
              </Link>
            </Button>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {projects.slice(0, 3).map((p) => (
              <article key={p.slug} className="group">
                <div className="overflow-hidden rounded-xl">
                  <img
                    src={p.image}
                    alt={`${p.title} a ${p.place}`}
                    className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                </div>
                <p className="mt-4 text-xs tracking-[0.18em] uppercase text-muted">
                  {p.place} · {p.year}
                </p>
                <h3 className="mt-1 font-display text-2xl font-medium">
                  {p.title}
                </h3>
                <p className="mt-2 text-sm text-muted">{p.type}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </SiteShell>
  );
}
