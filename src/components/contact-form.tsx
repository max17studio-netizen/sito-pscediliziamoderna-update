import { useState, type FormEvent, type ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { services } from "@/lib/site";

const STORAGE_KEY = "psc-preventivi";

type Payload = {
  nome: string;
  telefono: string;
  email: string;
  comune: string;
  servizio: string;
  messaggio: string;
  at: string;
};

export function ContactForm({ defaultService = "" }: { defaultService?: string }) {
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError("");
    const data = new FormData(e.currentTarget);
    const payload: Payload = {
      nome: String(data.get("nome") ?? "").trim(),
      telefono: String(data.get("telefono") ?? "").trim(),
      email: String(data.get("email") ?? "").trim(),
      comune: String(data.get("comune") ?? "").trim(),
      servizio: String(data.get("servizio") ?? "").trim(),
      messaggio: String(data.get("messaggio") ?? "").trim(),
      at: new Date().toISOString(),
    };

    if (!payload.nome || !payload.telefono || !payload.messaggio) {
      setError("Compilate nome, telefono e una breve descrizione del lavoro.");
      return;
    }
    if (!data.get("privacy")) {
      setError("Per inviare la richiesta occorre accettare il trattamento dei dati.");
      return;
    }

    try {
      const prev = JSON.parse(localStorage.getItem(STORAGE_KEY) ?? "[]") as Payload[];
      localStorage.setItem(STORAGE_KEY, JSON.stringify([payload, ...prev].slice(0, 20)));
    } catch {
      /* ignore quota */
    }
    setSent(true);
  }

  if (sent) {
    return (
      <div className="rounded-xl bg-surface px-6 py-10">
        <p className="text-xs font-medium tracking-[0.22em] uppercase text-primary">
          Richiesta inviata
        </p>
        <h3 className="mt-3 font-display text-3xl font-medium">
          Grazie, vi ricontattiamo a breve.
        </h3>
        <p className="mt-4 max-w-md text-muted">
          Abbiamo registrato la vostra richiesta. Per urgenze potete chiamare o
          scrivere su WhatsApp: rispondiamo in orario di ufficio.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-5" noValidate>
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Nome e cognome" htmlFor="nome">
          <Input id="nome" name="nome" autoComplete="name" required />
        </Field>
        <Field label="Telefono" htmlFor="telefono">
          <Input
            id="telefono"
            name="telefono"
            type="tel"
            autoComplete="tel"
            required
          />
        </Field>
        <Field label="Email" htmlFor="email">
          <Input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
          />
        </Field>
        <Field label="Comune dell’immobile" htmlFor="comune">
          <Input id="comune" name="comune" placeholder="Lissone, Monza…" />
        </Field>
      </div>
      <Field label="Tipo di lavoro" htmlFor="servizio">
        <select
          id="servizio"
          name="servizio"
          defaultValue={defaultService}
          className="h-11 w-full rounded-md border border-border bg-paper px-3.5 text-base text-fg outline-none focus-visible:border-primary focus-visible:ring-2 focus-visible:ring-primary/20"
        >
          <option value="">Selezionate…</option>
          {services.map((s) => (
            <option key={s.slug} value={s.slug}>
              {s.title}
            </option>
          ))}
          <option value="altro">Altro</option>
        </select>
      </Field>
      <Field label="Descrizione del lavoro" htmlFor="messaggio">
        <Textarea
          id="messaggio"
          name="messaggio"
          required
          placeholder="Superficie, tempi, cosa vorreste fare…"
        />
      </Field>
      <label htmlFor="privacy" className="flex items-start gap-3 text-sm text-muted">
        <input
          id="privacy"
          type="checkbox"
          name="privacy"
          className="mt-1 size-4 shrink-0 accent-primary"
        />
        <span>
          Acconsento al trattamento dei dati per essere ricontattato in merito a
          questa richiesta, ai sensi del Regolamento UE 2016/679.
        </span>
      </label>
      {error ? (
        <p className="text-sm text-primary" role="alert">
          {error}
        </p>
      ) : null}
      <Button type="submit" size="lg">
        Invia richiesta
      </Button>
    </form>
  );
}

function Field({
  label,
  htmlFor,
  children,
}: {
  label: string;
  htmlFor: string;
  children: ReactNode;
}) {
  return (
    <div>
      <Label htmlFor={htmlFor}>{label}</Label>
      {children}
    </div>
  );
}
