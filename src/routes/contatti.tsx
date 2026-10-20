import { createFileRoute } from "@tanstack/react-router";
import { ContactForm } from "@/components/contact-form";
import { SiteShell } from "@/components/site-shell";
import { PageHero } from "@/components/PageHero";
import { company } from "@/lib/site";

export const Route = createFileRoute("/contatti")({
  component: Contatti,
  head: () => ({
    meta: [
      { title: "Contatti — P.S.C. Edilizia Moderna" },
      {
        name: "description",
        content:
          "Preventivo gratuito. Via Caravaggio 26/D, Lissone. Cell. 350 0298060 — Email: pscediliziamodernasrl@gmail.com.",
      },
    ],
  }),
});

function Contatti() {
  return (
    <SiteShell>
      <PageHero
        kicker="Contatti"
        title="Parliamone in cantiere, o da qui."
        lead="Sopralluogo gratuito a Lissone e in Brianza. Telefono, WhatsApp o il modulo: vi rispondiamo in orario di ufficio."
      />

      <section className="mx-auto grid max-w-6xl gap-12 px-5 py-16 md:grid-cols-12 md:py-24">
        <div className="md:col-span-5">
          <h2 className="font-display text-3xl font-medium">Sede</h2>
          <address className="mt-4 not-italic leading-relaxed text-muted">
            {company.legalName}
            <br />
            {company.address}
            <br />
            {company.zip} {company.city} ({company.province})
          </address>
          <ul className="mt-8 space-y-3 text-base">
            <li>
              <span className="block text-xs tracking-[0.18em] uppercase text-muted">
                Cellulare / WhatsApp
              </span>
              <a href={company.whatsapp} className="font-medium hover:text-primary">
                {company.mobile}
              </a>
            </li>
            {/* NUOVO BLOCCO INSERIMENTO EMAIL ORDINARIA */}
            <li>
              <span className="block text-xs tracking-[0.18em] uppercase text-muted">
                Email
              </span>
              <a href={company.emailHref} className="font-medium hover:text-primary">
                {company.email}
              </a>
            </li>
            {/* ....................................... */}
            <li>
              <span className="block text-xs tracking-[0.18em] uppercase text-muted">
                PEC
              </span>
              <a href={company.pecHref} className="font-medium hover:text-primary">
                {company.pec}
              </a>
            </li>
          </ul>
          <p className="mt-8 text-sm text-muted">
            P. IVA {company.vat} · REA {company.rea}
          </p>
          <a
            href={company.maps}
            className="mt-6 inline-block text-sm font-medium text-primary hover:opacity-80"
            target="_blank"
            rel="noreferrer"
          >
            Apri in Google Maps
          </a>
        </div>
        <div className="md:col-span-7">
          <ContactForm />
        </div>
      </section>

           <section className="border-t border-border">
        <div className="mx-auto max-w-6xl px-5 py-10 md:py-14">
          <div className="overflow-hidden rounded-xl bg-surface">
            <iframe
              title="Mappa — P.S.C. Edilizia Moderna, Lissone"
              src={company.osmEmbed}
              className="h-80 w-full border-0 md:h-[28rem]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen={true}
            />
          </div>
        </div>
      </section>

    </SiteShell>
  );
}
