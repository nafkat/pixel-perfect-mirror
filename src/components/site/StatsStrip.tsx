import { useT } from "@/lib/i18n";
import { stats } from "@/lib/content";
import { Reveal } from "./Reveal";

export function StatsStrip() {
  const t = useT();
  return (
    <section className="border-y bg-navy-deep">
      <div className="mx-auto grid max-w-7xl grid-cols-2 lg:grid-cols-4">
        {stats.map((s, i) => (
          <Reveal key={s.value} delay={i * 120} className="border-l px-6 py-16 first:border-l-0 md:px-10">
            <p className="font-display text-7xl font-black text-primary md:text-8xl">{s.value}</p>
            <p className="eyebrow mt-4">{t(s.label)}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

