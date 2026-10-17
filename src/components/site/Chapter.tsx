import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { useT } from "@/lib/i18n";
import { ui, type Chapter } from "@/lib/content";
import { Reveal, useParallax } from "./Reveal";
import { AngleDiagram, RigDiagram, PlanAngleDiagram } from "./Diagrams";
import { chapterBackgrounds, chapterImages } from "@/lib/media";
import { GradedImage } from "./Media";

export const chapterImage = chapterBackgrounds;

function Diagram({ slug }: { slug: Chapter["slug"] }) {
  const cls = "w-full max-w-md";
  if (slug === "how") return <AngleDiagram className={cls} />;
  if (slug === "safety") return <RigDiagram className={cls} />;
  if (slug === "in-house") return <PlanAngleDiagram className="w-full max-w-xs" />;
  return null;
}

/** Full-screen cinematic chapter, like a film act */
export function ChapterSection({ chapter, full = false }: { chapter: Chapter; full?: boolean }) {
  const t = useT();
  const bg = useParallax(0.2);
  return (
    <section id={chapter.slug} className="relative flex min-h-screen items-center overflow-hidden py-32">
      <div ref={bg} className="absolute inset-0 will-change-transform">
        <img src={chapterImage[chapter.slug]} alt="" loading="lazy" width={1920} height={1088} className="size-full object-cover" />
      </div>
      <div className="bg-overlay-chapter absolute inset-0" />
      <div className="relative mx-auto grid w-full max-w-7xl gap-16 px-6 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <Reveal>
            <p className="eyebrow mb-4">
              {t(ui.chapter)} {chapter.act}
            </p>
            <h2 className="font-display text-[22vw] font-black uppercase leading-[0.8] text-foreground/95 lg:text-[11rem]">
              {t(chapter.title)}
            </h2>
          </Reveal>
          <Reveal delay={200}>
            <p className="mt-10 font-display text-2xl font-semibold text-primary md:text-3xl">{t(chapter.kicker)}</p>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">{t(chapter.lead)}</p>
          </Reveal>
          {full ? (
            <Reveal delay={350}>
              <ol className="mt-12 space-y-6 border-l pl-8">
                {t(chapter.points).map((p, i) => (
                  <li key={i} className="relative">
                    <span className="absolute -left-[2.6rem] top-0.5 font-mono text-xs text-primary">0{i + 1}</span>
                    <p className="text-lg leading-relaxed">{p}</p>
                  </li>
                ))}
              </ol>
              {chapterImages[chapter.slug].layout === "inline" && (
                <GradedImage image={chapterImages[chapter.slug]} className="mt-12 aspect-[16/10] max-w-xl border" />
              )}
            </Reveal>
          ) : (
            <Reveal delay={350}>
              <Link
                to="/chapters/$slug"
                params={{ slug: chapter.slug }}
                className="group mt-10 inline-flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-foreground hover:text-primary"
              >
                {t(ui.readChapter)}
                <ArrowRight className="size-4 transition-transform duration-500 group-hover:translate-x-2" />
              </Link>
            </Reveal>
          )}
        </div>
        <div className="flex flex-col justify-end gap-10 lg:col-span-5">
          <Reveal delay={300}>
            <Diagram slug={chapter.slug} />
          </Reveal>
          <Reveal delay={450}>
            <p className="font-display text-8xl font-black text-primary md:text-9xl">{chapter.bigNumber}</p>
            <p className="mt-3 max-w-xs text-muted-foreground">{t(chapter.bigLabel)}</p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/** Full-width cinematic image for chapters with layout "full" */
export function ChapterWideImage({ slug }: { slug: Chapter["slug"] }) {
  const img = chapterImages[slug];
  if (img.layout !== "full") return null;
  return <GradedImage image={img} className="aspect-[21/9] w-full border-t" />;
}
