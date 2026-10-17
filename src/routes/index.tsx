import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { useT } from "@/lib/i18n";
import { hero, nav, intro, chapters, ui } from "@/lib/content";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/site/Reveal";
import { ChapterSection } from "@/components/site/Chapter";
import { CtaBand } from "@/components/site/Layout";
import { StatsStrip } from "@/components/site/StatsStrip";
import { heroPoster, heroVideo } from "@/lib/media";
import { Showreel } from "@/components/site/Media";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "BollardPull — Proof. Not Promises. | Bollard Load Testing" },
      { name: "description", content: "Mooring bollard proof load testing up to 125 tonnes, on-site at your quayside or in our Test Centre." },
      { property: "og:title", content: "BollardPull — Proof. Not Promises." },
      { property: "og:description", content: "Mooring bollard proof load testing up to 125 tonnes, on-site or in our Test Centre." },
    ],
  }),
  component: Home,
});

function Home() {
  const t = useT();
  return (
    <>
      <section className="relative flex min-h-screen items-center overflow-hidden">
        {heroVideo ? (
          <video src={heroVideo} poster={heroPoster} autoPlay muted loop playsInline className="absolute inset-0 size-full object-cover" />
        ) : (
          <img src={heroPoster} alt="" width={1920} height={1088} className="animate-slow-zoom absolute inset-0 size-full object-cover" />
        )}
        <div className="bg-overlay-hero absolute inset-0" />
        <div className="relative mx-auto w-full max-w-7xl px-6 pt-24">
          <Reveal>
            <p className="eyebrow mb-8">BollardPull · 125 t · EN / EL</p>
            <h1 className="font-display max-w-6xl text-6xl font-black sm:text-8xl lg:text-[9.5rem]">{t(hero.title)}</h1>
          </Reveal>
          <Reveal delay={300}>
            <p className="mt-10 max-w-2xl text-lg text-muted-foreground md:text-xl">{t(hero.sub)}</p>
            <div className="mt-12 flex flex-wrap gap-4">
              <Button asChild variant="hero" size="xl">
                <Link to="/contact">{t(nav.quote)}</Link>
              </Button>
              <Button asChild variant="line" size="xl">
                <a href="#why">{t(ui.readChapter)}</a>
              </Button>
            </div>
          </Reveal>
        </div>
        <a href="#chapters" className="eyebrow absolute bottom-8 left-1/2 -translate-x-1/2 animate-pulse">
          {t(hero.scroll)} ↓
        </a>
      </section>

      <section id="chapters" className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid gap-px overflow-hidden border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {chapters.map((c, i) => (
            <Reveal key={c.slug} delay={i * 100} className="bg-background">
              <Link
                to="/chapters/$slug"
                params={{ slug: c.slug }}
                className="group flex h-full min-h-72 flex-col justify-between p-8 transition-colors duration-500 hover:bg-card"
              >
                <span className="font-mono text-xs text-primary">{c.act}</span>
                <div>
                  <h3 className="font-display text-4xl font-extrabold uppercase">{t(c.title)}</h3>
                  <p className="mt-3 text-sm text-muted-foreground">{t(c.kicker)}</p>
                  <ArrowRight className="mt-6 size-5 text-steel transition-all duration-500 group-hover:translate-x-2 group-hover:text-primary" />
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <StatsStrip />

      <section className="mx-auto max-w-5xl px-6 py-32">
        <Reveal>
          <p className="eyebrow mb-6">{t(nav.about)}</p>
          <p className="font-display text-3xl font-semibold leading-tight md:text-5xl">{t(intro)}</p>
          <Link to="/about" className="mt-10 inline-flex items-center gap-3 text-xs uppercase tracking-[0.25em] hover:text-primary">
            {t(nav.about)} <ArrowRight className="size-4" />
          </Link>
        </Reveal>
      </section>

      {chapters.map((c) => (
        <ChapterSection key={c.slug} chapter={c} />
      ))}

      <Showreel />
      <CtaBand />
    </>
  );
}
