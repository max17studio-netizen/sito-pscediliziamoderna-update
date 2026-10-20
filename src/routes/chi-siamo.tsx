import { createFileRoute } from "@tanstack/react-router";
import { CtaBand, SiteShell } from "@/components/site-shell";
import { PageHero } from "@/components/PageHero";
import { company } from "@/lib/site";

export const Route = createFileRoute("/chi-siamo")({
  component: ChiSiamo,
  head: () => ({
    meta: [
      { title: "Chi siamo — P.S.C. Edilizia Moderna" },
      {
        name: "description",
        content:
          "P.S.C. Edilizia Moderna S.r.l. è un’impresa edile di Lissone. Oltre quarant’anni di cantiere in Monza e Brianza.",
      },
    ],
  }),
});

function ChiSiamo() {
  return (
    <SiteShell>
      <PageHero
        kicker="Chi siamo"
        title="Impresa edile a Lissone, da più di quarant’anni."
        lead="P.S.C. Edilizia Moderna è una società di Lissone. Costruiamo, ristrutturiamo e completiamo edifici in Monza e Brianza, con cantiere proprio e un referente unico."
      />

      <section className="mx-auto grid max-w-6xl gap-12 px-5 py-16 md:grid-cols-12 md:py-24">
        <div className="md:col-span-7">
          <h2 className="font-display text-3xl font-medium md:text-4xl">
            Un cantiere che risponde.
          </h2>
          <div className="mt-6 space-y-4 leading-relaxed text-muted">
            <p>
              La società ha sede in Via Caravaggio 26/D, a Lissone. Da qui
              copriamo i comuni della Brianza: Monza, Seregno, Desio, Muggiò,
              Vimercate e i paesi limitrofi. Non siamo una rete di subappalti
              senza volto: il cantiere ha un responsabile, e quel responsabile
              ha un numero.
            </p>
            <p>
              Operiamo da più di quarant’anni nel settore edile. L’esperienza
              sta nel mestiere — murature, isolamenti, impianti, infissi,
              finiture — e nel modo di tenere insieme le fasi, così il cliente
              non deve fare da direttore dei lavori.
            </p>
            <p>
              L’oggetto sociale copre costruzione e ristrutturazione di
              immobili, isolamenti termo-acustici, finiture interne ed esterne,
              impianti elettrici e termoidraulici, posa di infissi, pratiche
              edilizie. In pratica: se riguarda la casa, lo facciamo o lo
              coordiniamo.
            </p>
          </div>
        </div>
        <aside className="md:col-span-5">
          <div className="rounded-xl bg-surface p-6 md:p-8">
            <p className="text-xs font-medium tracking-[0.22em] uppercase text-primary">
              Società
            </p>
            <dl className="mt-5 space-y-4 text-sm">
              <Row label="Ragione sociale" value={company.legalName} />
              <Row
                label="Sede"
                value={`${company.address}, ${company.zip} ${company.city} (${company.province})`}
              />
              <Row label="P. IVA / C.F." value={company.vat} />
              <Row label="REA" value={company.rea} />
              <Row label="PEC" value={company.pec} />
            </dl>
          </div>
        </aside>
      </section>

      <section className="bg-surface">
        <div className="mx-auto grid max-w-6xl gap-8 px-5 py-16 md:grid-cols-2 md:py-24">
          <img
            src="/images/site.jpg"
            alt="Interno di un appartamento in ristrutturazione a Lissone"
            className="aspect-[3/2] w-full rounded-xl object-cover"
          />
          <img
            src="/images/insulation.jpg"
            alt="Posa di cappotto termico su una villa in Brianza"
            className="aspect-[3/2] w-full rounded-xl object-cover"
          />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16 md:py-24">
        <h2 className="font-display text-3xl font-medium md:text-4xl">
          Come scegliamo di lavorare.
        </h2>
        <ul className="mt-10 grid gap-8 md:grid-cols-3">
          {[
            {
              t: "Un contratto, un calendario",
              d: "Preferiamo il chiavi in mano. Voi parlate con noi, non con cinque ditte diverse. Tempi e voci sono scritti prima di aprire il cantiere.",
            },
            {
              t: "Pratiche in regola",
              d: "CILA, SCIA, catasto: le predisponiamo con un tecnico abilitato. Il cantiere parte quando il titolo c’è, non prima.",
            },
            {
              t: "Finiture da abitare",
              d: "Non chiudiamo un lavoro con la pittura ancora fresca e i battiscopa storti. La consegna è pulita, collaudata, abitabile.",
            },
          ].map((item) => (
            <li key={item.t} className="border-t border-border pt-6">
              <h3 className="font-display text-2xl font-medium">{item.t}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">{item.d}</p>
            </li>
          ))}
        </ul>
      </section>

      <CtaBand />
    </SiteShell>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <dt className="text-muted">{label}</dt>
      <dd className="mt-0.5 font-medium">{value}</dd>
    </div>
  );
}
