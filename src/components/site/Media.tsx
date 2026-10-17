import { useState } from "react";
import { Play } from "lucide-react";
import { useT } from "@/lib/i18n";
import type { MediaImage } from "@/lib/media";
import { showreel } from "@/lib/media";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Reveal } from "./Reveal";
import { cn } from "@/lib/utils";

/** Image with the shared navy grade so placeholders and real photos blend. */
export function GradedImage({ image, className, imgClassName }: { image: MediaImage; className?: string; imgClassName?: string }) {
  const t = useT();
  return (
    <div className={cn("relative overflow-hidden", className)}>
      <img src={image.src} alt={t(image.alt)} loading="lazy" className={cn("size-full object-cover", imgClassName)} />
      <div className="media-grade pointer-events-none absolute inset-0" />
    </div>
  );
}

export function Showreel() {
  const t = useT();
  const [open, setOpen] = useState(false);
  const v = showreel.video;
  return (
    <section className="relative border-t">
      <div className="mx-auto max-w-7xl px-6 pb-12 pt-32">
        <Reveal>
          <p className="eyebrow mb-6">Showreel</p>
          <h2 className="font-display text-5xl font-extrabold md:text-7xl">{t({ en: "The rig, in action.", el: "Η διάταξη, σε δράση." })}</h2>
        </Reveal>
      </div>
      <button onClick={() => setOpen(true)} className="group relative block aspect-[21/9] w-full overflow-hidden" aria-label={t({ en: "Play showreel", el: "Αναπαραγωγή βίντεο" })}>
        <GradedImage image={showreel.poster} className="absolute inset-0" imgClassName="transition-transform duration-[2s] group-hover:scale-105" />
        <span className="absolute inset-0 flex items-center justify-center">
          <span className="flex size-24 items-center justify-center rounded-full border border-primary bg-background/40 backdrop-blur transition-transform duration-500 group-hover:scale-110">
            <Play className="ml-1 size-9 text-primary" />
          </span>
        </span>
      </button>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-5xl border-border bg-background p-0">
          <DialogTitle className="sr-only">Showreel</DialogTitle>
          {v?.kind === "file" ? (
            <video src={v.src} controls autoPlay className="aspect-video w-full" />
          ) : v?.kind === "embed" ? (
            <iframe src={v.url} title="Showreel" allow="autoplay; fullscreen" allowFullScreen className="aspect-video w-full" />
          ) : (
            <div className="flex aspect-video items-center justify-center p-10 text-center">
              <p className="font-display text-3xl font-bold">{t({ en: "Video coming soon", el: "Το βίντεο έρχεται σύντομα" })}</p>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}

export function Gallery({ images }: { images: MediaImage[] }) {
  const t = useT();
  const [idx, setIdx] = useState<number | null>(null);
  const cur = idx !== null ? images[idx] : null;
  return (
    <>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {images.map((img, i) => (
          <Reveal key={i} delay={i * 80}>
            <button onClick={() => setIdx(i)} className="group block aspect-[4/3] w-full overflow-hidden" aria-label={t(img.alt)}>
              <GradedImage image={img} className="size-full" imgClassName="transition-transform duration-700 group-hover:scale-105" />
            </button>
          </Reveal>
        ))}
      </div>
      <Dialog open={idx !== null} onOpenChange={(o) => !o && setIdx(null)}>
        <DialogContent className="max-w-6xl border-border bg-background p-0">
          <DialogTitle className="sr-only">{cur ? t(cur.alt) : ""}</DialogTitle>
          {cur && (
            <figure>
              <img src={cur.src} alt={t(cur.alt)} className="max-h-[80vh] w-full object-contain" />
              <figcaption className="eyebrow p-4">{t(cur.alt)}</figcaption>
            </figure>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}


