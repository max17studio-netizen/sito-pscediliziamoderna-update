import { createFileRoute } from "@tanstack/react-router";
import { Download } from "lucide-react";
import { SiteShell } from "@/components/site-shell";

export const Route = createFileRoute("/certificazioni")({
  component: CertificazioniComponent,
});

function CertificazioniComponent() {
  return (
    <SiteShell>
      <div className="mx-auto max-w-4xl px-5 py-32 md:py-40">
        <header className="mb-12 text-center">
          <h1 className="font-display text-4xl font-bold tracking-tight text-fg md:text-5xl">
            Certificazioni e Attestati
          </h1>
          <p className="mt-4 text-base text-fg/70">
            La trasparenza e la conformità legale sono alla base di ogni nostro cantiere in Lombardia.
            Qui puoi prendere visione e scaricare i nostri attestati ufficiali.
          </p>
        </header>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="flex flex-col justify-between rounded-xl border border-border bg-bg p-6 shadow-sm">
            <div>
              <div className="mb-5 flex h-40 items-center justify-center rounded-lg bg-white px-3">
                <img
                  src="/images/logo-iso.png?v=2"
                  alt="Logo certificazione ISO 9001:2015"
                  className="max-h-36 w-auto object-contain"
                />
              </div>
              <h2 className="text-xl font-semibold text-fg">Certificazione ISO 9001</h2>
              <p className="mt-2 text-sm leading-relaxed text-fg/70">
                Sistema di gestione della qualità aziendale riconosciuto a livello internazionale.
                Garantisce l'ottimizzazione dei processi operativi, dalla pianificazione alla finitura dei lavori edili.
              </p>
            </div>
            <a
              href="/docs/Certificato_ISO9001_2026_2029.pdf"
              download="PSC_Edilizia_Moderna_ISO_9001.pdf"
              className="mt-6 inline-flex h-11 items-center justify-center gap-2 rounded-lg bg-fg px-4 text-sm font-medium text-bg transition-opacity hover:opacity-90"
            >
              <Download className="size-4" />
              Scarica ISO 9001 (PDF)
            </a>
          </div>

          <div className="flex flex-col justify-between rounded-xl border border-border bg-bg p-6 shadow-sm">
            <div>
              <div className="mb-5 flex h-40 items-center justify-center rounded-lg bg-white px-3">
                <img
                  src="/images/logo-soa.png?v=2"
                  alt="Logo la Soatech S.p.A., organismo di attestazione SOA"
                  className="max-h-36 w-full object-contain"
                />
              </div>
              <h2 className="text-xl font-semibold text-fg">Attestazione SOA</h2>
              <p className="mt-2 text-sm leading-relaxed text-fg/70">
                Qualificazione obbligatoria per l'esecuzione di appalti pubblici di lavori.
                Attesta la capacità tecnica, economica e organizzativa dell'impresa nel sostenere opere complesse.
              </p>
            </div>
            <a
              href="/docs/attestato_soa.pdf?v=2"
              download="attestato_soa.pdf"
              className="mt-6 inline-flex h-11 items-center justify-center gap-2 rounded-lg bg-fg px-4 text-sm font-medium text-bg transition-opacity hover:opacity-90"
            >
              <Download className="size-4" />
              Scarica Attestato SOA (PDF)
            </a>
          </div>
        </div>
      </div>
    </SiteShell>
  );
}
