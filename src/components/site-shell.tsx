import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X, Phone, ArrowUpRight } from "lucide-react";
import { useEffect, useState, type ReactNode } from "react";
import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";
import { company, nav } from "@/lib/site";
import { cn } from "@/lib/utils";

export function SiteShell({ children }: { children: ReactNode }) {
  const pathname = useRouterState({
    select: (s) => s.location.pathname,
  });
  const overlay = pathname === "/";
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const inverted = open || (overlay && !scrolled);

  return (
    <div className="min-h-dvh bg-bg text-fg">
      <a
        href="#contenuto"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:bg-bg focus:px-3 focus:py-2"
      >
        Salta al contenuto
      </a>

      <header
        className={cn(
          "fixed inset-x-0 top-0 z-40 transition-[background-color,box-shadow,color] duration-200",
          inverted
            ? "bg-transparent text-ink-fg"
            : "bg-bg/95 text-fg shadow-[0_1px_0_0_var(--color-border)] backdrop-blur-sm",
        )}
      >
        <div className='mx-auto flex h-28 max-w-6xl items-center justify-between gap-4 px-5 md:h-32'>
          <Link to="/" aria-label="P.S.C. Edilizia Moderna — home">
            <Logo inverted={inverted} />
          </Link>

          <nav className="hidden items-center gap-8 lg:flex" aria-label="Principale">
            {nav.map((item) => {
              const active =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);
              return (
                <Link
                  key={item.href}
                  to={item.href as never}
                  className={cn(
                    "relative text-sm tracking-wide transition-opacity duration-150 hover:opacity-70",
                    active ? "font-medium" : "opacity-80",
                  )}
                >
                  {item.label}
                  {active ? (
                    <span
                      className={cn(
                        "absolute -bottom-1 left-0 h-px w-full",
                        inverted ? "bg-ink-fg" : "bg-primary",
                      )}
                    />
                  ) : null}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-2">
            <Button
              asChild
              size="sm"
              variant={inverted ? "inverse" : "primary"}
              className="hidden sm:inline-flex"
            >
              <Link to="/contatti">Preventivo</Link>
            </Button>
            <button
              type="button"
              className="inline-flex size-11 items-center justify-center rounded-md lg:hidden"
              aria-label={open ? "Chiudi menu" : "Apri menu"}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </div>
      </header>

      {open ? (
        <div className="fixed inset-0 z-30 bg-ink text-ink-fg lg:hidden">
          <nav
            className="flex h-full flex-col justify-between px-6 pb-10 pt-24"
            aria-label="Mobile"
          >
            <ul className="flex flex-col gap-2">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link
                    to={item.href as never}
                    className="font-display text-4xl font-medium tracking-tight"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="space-y-3 text-sm text-ink-fg/70">
              <a href={company.whatsapp} className="block">
                WhatsApp {company.mobile}
              </a>
              <p>
                {company.address}
                <br />
                {company.zip} {company.city} ({company.province})
              </p>
            </div>
          </nav>
        </div>
      ) : null}

      <main id="contenuto">{children}</main>

      <SiteFooter />

      {!open ? (
        <a
          href={company.whatsapp}
          className="fixed bottom-5 right-5 z-30 inline-flex h-12 items-center gap-2 rounded-full bg-primary px-4 text-sm font-medium text-primary-fg shadow-[0_8px_24px_rgba(12,18,36,0.22)] transition-transform duration-150 hover:opacity-90 active:scale-[0.96]"
          aria-label="Scrivi su WhatsApp"
        >
          <Phone className="size-4" />
          WhatsApp
        </a>
      ) : null}
    </div>
  );
}

function SiteFooter() {
  return (
    <footer className="border-t border-border bg-ink text-ink-fg">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-16 md:grid-cols-12 md:py-20">
        <div className="md:col-span-5">
          <Logo inverted size="footer" />
          <p className="mt-6 max-w-sm text-sm leading-relaxed text-ink-fg/70">
            Impresa edile a Lissone. Costruzioni, ristrutturazioni chiavi in
            mano e finiture in Monza e Brianza.
          </p>
        </div>
        <div className="md:col-span-3">
          <p className="text-xs font-large tracking-[0.18em] uppercase text-ink-fg/50">
            Pagine
          </p>
          <ul className="mt-4 space-y-2 text-sm">
            {nav.map((item) => (
              <li key={item.href}>
                <Link to={item.href} className="hover:opacity-70">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="md:col-span-4">
          <p className="text-xs font-medium tracking-[0.18em] uppercase text-ink-fg/50">
            Sede
          </p>
          <address className="mt-4 not-italic text-sm leading-relaxed text-ink-fg/80">
            {company.legalName}
            <br />
            {company.address}
            <br />
            {company.zip} {company.city} ({company.province})
          </address>
          <p className="mt-4 space-y-1 text-sm">
           <a href={company.mobileHref} className="block hover:opacity-70">
              Cell. {company.mobile}
          </a>
           <a href={company.emailHref} className="block hover:opacity-70">
              Email:  {company.email}
          </a>
           <a href={company.pecHref} className="block hover:opacity-70">
              PEC:  {company.pec}
          </a>
          </p>
          <div className="mt-5 flex gap-4 text-sm">
            <a
              href={company.instagram}
              className="inline-flex items-center gap-1 hover:opacity-70"
              rel="noreferrer"
              target="_blank"
            >
              Instagram <ArrowUpRight className="size-3.5" />
            </a>
            <a
              href={company.facebook}
              className="inline-flex items-center gap-1 hover:opacity-70"
              rel="noreferrer"
              target="_blank"
            >
              Facebook <ArrowUpRight className="size-3.5" />
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-ink-fg/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-5 py-5 text-xs text-ink-fg/50 sm:flex-row sm:justify-between">
          <p>
            P. IVA / C.F. {company.vat} · REA {company.rea}
          </p>
          <p>© {new Date().getFullYear()} {company.legalName}</p>
        </div>
      </div>
    </footer>
  );
}

export function CtaBand() {
  return (
    <section className="bg-primary text-primary-fg">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-8 px-5 py-16 md:flex-row md:items-center md:py-20">
        <div>
          <p className="text-xs font-medium tracking-[0.22em] uppercase opacity-80">
            Preventivo gratuito
          </p>
          <h2 className="mt-3 max-w-xl font-display text-3xl font-medium leading-tight md:text-4xl">
            Avete un cantiere in mente? Veniamo a vederlo.
          </h2>
        </div>
        <div className="flex flex-wrap gap-3">
          <Button asChild variant="inverse" size="lg">
            <Link to="/contatti">Richiedi preventivo</Link>
          </Button>
          <Button asChild variant="inverseOutline" size="lg">
            <a href={company.whatsapp}>WhatsApp</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
