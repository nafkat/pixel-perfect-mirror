import { Link } from "@tanstack/react-router";
import { useEffect, useState, type ReactNode } from "react";
import { Menu, X, MessageCircle } from "lucide-react";
import { useLang, useT } from "@/lib/i18n";
import { nav, ui } from "@/lib/content";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

// TODO: replace with real WhatsApp number
export const WHATSAPP_NUMBER = "306XXXXXXXXX";
export const whatsappHref = `https://wa.me/${WHATSAPP_NUMBER}`;

const links = [
  { to: "/", label: nav.home },
  { to: "/about", label: nav.about },
  { to: "/services", label: nav.services },
  { to: "/test-centre", label: nav.testCentre },
  { to: "/contact", label: nav.contact },
] as const;

function Logo() {
  return (
    <Link to="/" className="flex items-center gap-3">
      <svg viewBox="0 0 24 24" className="size-6" fill="none">
        <path className="stroke-primary" strokeWidth="1.5" d="M8 21V11Q8 8 5 8H19Q16 8 16 11V21M4 21H20" />
      </svg>
      <span className="font-display text-lg font-bold tracking-tight">
        Bollard<span className="text-primary">Pull</span>
      </span>
    </Link>
  );
}

function LangSwitch() {
  const { lang, setLang } = useLang();
  return (
    <div className="flex items-center font-mono text-xs tracking-widest">
      {(["en", "el"] as const).map((l, i) => (
        <span key={l} className="flex items-center">
          {i > 0 && <span className="px-1.5 text-muted-foreground">/</span>}
          <button
            onClick={() => setLang(l)}
            className={cn("uppercase transition-colors", lang === l ? "text-primary" : "text-muted-foreground hover:text-foreground")}
            aria-pressed={lang === l}
          >
            {l}
          </button>
        </span>
      ))}
    </div>
  );
}

export function Navbar() {
  const t = useT();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 80);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-700",
        scrolled || open ? "border-b bg-navy-deep/85 backdrop-blur-md" : "bg-transparent",
      )}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Logo />
        <nav className="hidden items-center gap-8 lg:flex">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              activeOptions={{ exact: true }}
              className="text-xs uppercase tracking-[0.2em] text-muted-foreground transition-colors hover:text-foreground data-[status=active]:text-foreground"
            >
              {t(l.label)}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-5">
          <LangSwitch />
          <Button asChild variant="hero" size="sm" className="hidden md:inline-flex">
            <Link to="/contact">{t(nav.quote)}</Link>
          </Button>
          <button className="lg:hidden" onClick={() => setOpen(!open)} aria-label="Menu">
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>
      {open && (
        <nav className="flex flex-col gap-1 border-t px-6 py-6 lg:hidden">
          {links.map((l) => (
            <Link key={l.to} to={l.to} onClick={() => setOpen(false)} className="py-3 font-display text-3xl font-bold">
              {t(l.label)}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}

export function WhatsAppFab() {
  return (
    <a
      href={whatsappHref}
      target="_blank"
      rel="noreferrer"
      aria-label="WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex size-14 items-center justify-center rounded-full bg-whatsapp text-navy-deep shadow-lg transition-transform duration-500 hover:scale-110"
    >
      <MessageCircle className="size-6" />
    </a>
  );
}

export function CtaBand() {
  const t = useT();
  return (
    <section className="relative overflow-hidden border-t py-32">
      <div className="grid-lines absolute inset-0 opacity-40" />
      <div className="relative mx-auto max-w-5xl px-6 text-center">
        <h2 className="font-display text-5xl font-extrabold md:text-7xl">{t(ui.ctaTitle)}</h2>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">{t(ui.ctaSub)}</p>
        <Button asChild variant="hero" size="xl" className="mt-10">
          <Link to="/contact">{t(nav.quote)}</Link>
        </Button>
      </div>
    </section>
  );
}

export function Footer() {
  const t = useT();
  return (
    <footer className="border-t bg-navy-deep">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-6 py-12 md:flex-row md:items-center md:justify-between">
        <Logo />
        <nav className="flex flex-wrap gap-6">
          {links.map((l) => (
            <Link key={l.to} to={l.to} className="text-xs uppercase tracking-[0.2em] text-muted-foreground hover:text-foreground">
              {t(l.label)}
            </Link>
          ))}
        </nav>
        <p className="eyebrow">© {new Date().getFullYear()} BollardPull. {t(ui.rights)}</p>
      </div>
    </footer>
  );
}

export function PageHero({ eyebrow, title, sub, image }: { eyebrow: string; title: ReactNode; sub?: ReactNode; image: string }) {
  return (
    <section className="relative flex min-h-[80vh] items-end overflow-hidden pb-20 pt-32">
      <img src={image} alt="" width={1920} height={1088} className="animate-slow-zoom absolute inset-0 size-full object-cover" />
      <div className="bg-overlay-hero absolute inset-0" />
      <div className="relative mx-auto w-full max-w-7xl px-6">
        <Reveal>
          <p className="eyebrow mb-6">{eyebrow}</p>
          <h1 className="font-display max-w-5xl text-6xl font-extrabold md:text-8xl">{title}</h1>
          {sub && <p className="mt-8 max-w-2xl text-lg text-muted-foreground md:text-xl">{sub}</p>}
        </Reveal>
      </div>
    </section>
  );
}

import { Reveal } from "./Reveal";
