import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteShell } from "@/components/site-shell";
import { services, projects } from "@/lib/site";
import { ArrowLeft, ArrowUpRight } from "lucide-react";

export const Route = createFileRoute("/$serviceslug")({
  component: ServiceDetailComponent,
});

function ServiceDetailComponent() {
  const { serviceslug } = Route.useParams();

  // Trova il servizio specifico basandosi sullo slug nell'indirizzo web
  const service = services.find((s) => s.slug === serviceslug);

  if (!service) {
    return (
      <SiteShell>
        <div className="mx-auto max-w-xl py-40 text-center">
          <h1 className="text-2xl font-bold">Servizio non trovato</h1>
          <Link to="/servizi" className="mt-4 inline-block text-primary">Torna ai servizi</Link>
        </div>
      </SiteShell>
    );
  }

  // Filtra automaticamente i progetti associati a questa categoria
  const relatedProjects = projects.filter((p) => 
    p.type.toLowerCase().includes(service.title.toLowerCase()) || 
    p.summary.toLowerCase().includes(service.title.toLowerCase())
  );

  return (
    <SiteShell>
      <div className="mx-auto max-w-6xl px-5 py-32 md:py-40">
        <Link to="/servizi" className="inline-flex items-center gap-2 text-sm text-muted hover:text-fg mb-8 transition-colors">
          <ArrowLeft className="size-4" /> Torna ai servizi
        </Link>

        <div className="grid gap-12 md:grid-cols-12 items-start">
          <div className="md:col-span-7">
            <h1 className="font-display text-4xl font-bold tracking-tight text-fg md:text-5xl">
              {service.title}
            </h1>
            <p className="mt-6 text-base leading-relaxed text-muted whitespace-pre-line">
              {service.lead}
            </p>

            {/* Punti di forza / Caratteristiche del servizio */}
            <div className="mt-8">
              <h3 className="text-sm font-semibold tracking-wider uppercase text-fg/50">Cosa include l'intervento:</h3>
              <ul className="mt-4 space-y-2.5">
                {service.points?.map((point, index) => (
                  <li key={index} className="flex items-center gap-3 text-sm text-fg/80">
                    <span className="size-1.5 rounded-full bg-primary" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="mt-10 bg-surface rounded-xl p-6 border border-border">
              <h3 className="text-lg font-semibold">Richiedi un preventivo per questo servizio</h3>
              <p className="mt-2 text-sm text-muted">Effettuiamo sopralluoghi gratuiti a Lissone, in tutta la provincia di Monza e Brianza e nell'area della Lombardia.</p>
              <Link to="/contatti" className="mt-4 inline-flex h-10 items-center justify-center rounded-lg bg-primary px-4 text-sm font-medium text-primary-fg hover:opacity-90 transition-opacity">
                Richiedi sopralluogo gratuito
              </Link>
            </div>
          </div>

          <div className="md:col-span-5">
            <div className="overflow-hidden rounded-xl border border-border bg-surface aspect-[4/3] md:aspect-square">
              <img 
                src={service.image} 
                alt={service.title} 
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* SEZIONE FILTRATA DEI PROGETTI RECENTI */}
        <section className="mt-24 border-t border-border pt-16">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="font-display text-3xl font-medium">Interventi recenti di {service.title.toLowerCase()}</h2>
              <p className="text-sm text-muted">I nostri cantieri completati con successo sul territorio.</p>
            </div>
            <Link to="/lavori" className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:opacity-80 transition-opacity">
              Vedi tutte le realizzazioni <ArrowUpRight className="size-4" />
            </Link>
          </div>

          {relatedProjects.length > 0 ? (
            <div className="mt-10 grid gap-8 md:grid-cols-2">
              {relatedProjects.map((p) => (
                <article key={p.slug} className="group">
                  <div className="overflow-hidden rounded-xl border border-border bg-surface aspect-[16/9]">
                    <img
                      src={p.image}
                      alt={`${p.title} a ${p.place}`}
                      className="h-full w-full object-cover group-hover:scale-[1.01] transition-transform duration-200"
                    />
                  </div>
                  <div className="mt-4 flex items-baseline justify-between gap-2">
                    <h3 className="font-display text-2xl font-medium">{p.title}</h3>
                    <p className="text-xs tracking-[0.18em] uppercase text-muted">
                      {p.place} · {p.year}
                    </p>
                  </div>
                  <p className="mt-2 text-sm text-muted leading-relaxed line-clamp-2">
                    {p.summary}
                  </p>
                </article>
              ))}
            </div>
          ) : (
            <div className="mt-10 rounded-xl bg-surface border border-border p-8 text-center text-sm text-muted">
              Le foto dei nuovi cantieri per questa specifica categoria sono in fase di caricamento ed elaborazione tecnica.
            </div>
          )}
        </section>
      </div>
    </SiteShell>
  );
}