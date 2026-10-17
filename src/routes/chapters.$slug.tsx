import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { chapters, ui } from "@/lib/content";
import { useT } from "@/lib/i18n";
import { ChapterSection } from "@/components/site/Chapter";
import { CtaBand } from "@/components/site/Layout";

export const Route = createFileRoute("/chapters/$slug")({
  loader: ({ params }) => {
    const chapter = chapters.find((c) => c.slug === params.slug);
    if (!chapter) throw notFound();
    return { slug: chapter.slug };
  },
  head: ({ loaderData }) => {
    const c = chapters.find((x) => x.slug === loaderData?.slug);
    if (!c) return { meta: [{ title: "Chapter not found — BollardPull" }, { name: "robots", content: "noindex" }] };
    return {
      meta: [
        { title: `${c.title.en} — ${c.kicker.en} | BollardPull` },
        { name: "description", content: c.lead.en },
        { property: "og:title", content: `${c.title.en} — BollardPull` },
        { property: "og:description", content: c.lead.en },
      ],
    };
  },
  component: ChapterPage,
});

function ChapterPage() {
  const { slug } = Route.useLoaderData();
  const t = useT();
  const idx = chapters.findIndex((c) => c.slug === slug);
  const chapter = chapters[idx]!;
  const next = chapters[(idx + 1) % chapters.length]!;
  return (
    <>
      <ChapterSection chapter={chapter} full />
      <section className="border-t">
        <Link
          to="/chapters/$slug"
          params={{ slug: next.slug }}
          className="group mx-auto flex max-w-7xl items-center justify-between px-6 py-16"
        >
          <div>
            <p className="eyebrow">{t(ui.next)} · {next.act}</p>
            <p className="font-display mt-3 text-5xl font-black uppercase md:text-7xl">{t(next.title)}</p>
          </div>
          <ArrowRight className="size-10 text-steel transition-all duration-500 group-hover:translate-x-3 group-hover:text-primary" />
        </Link>
      </section>
      <CtaBand />
    </>
  );
}
