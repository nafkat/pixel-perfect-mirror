import { createFileRoute } from "@tanstack/react-router";
import { useT } from "@/lib/i18n";
import { chapters, nav } from "@/lib/content";
import { PageHero, CtaBand } from "@/components/site/Layout";
import { Reveal } from "@/components/site/Reveal";
import { ChapterSection } from "@/components/site/Chapter";
import { RigDiagram } from "@/components/site/Diagrams";
import bollard from "@/assets/bollard.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About BollardPull — Marine Contracting Expertise" },
      { name: "description", content: "Decades of marine contracting experience behind every bollard load test. Hands-on directors, purpose-built rig." },
      { property: "og:title", content: "About BollardPull" },
      { property: "og:description", content: "Hands-on marine contracting expertise behind every bollard load test." },
    ],
  }),
  component: About,
});

const c = {
  title: { en: "We know bollards.", el: "Γνωρίζουμε τους πασσάλους." },
  body: {
    en: [
      "BollardPull brings together decades of hands-on expertise in marine contracting — design, build and installation. That combination gives us a deep, practical understanding of how mooring bollards are loaded in real life, and how they should be tested.",
      "Our directors are hands-on: they design the equipment, control the test protocols and oversee every operation on site, from start to finish.",
      "We know bollards and ship moorings worldwide — regional styles and designs vary, but the basic function is always the same: to hold a vessel, safely, under realistic mooring conditions.",
    ],
    el: [
      "Η BollardPull συνδυάζει δεκαετίες πρακτικής εμπειρίας σε θαλάσσια έργα — σχεδιασμό, κατασκευή και εγκατάσταση. Αυτός ο συνδυασμός μάς δίνει βαθιά, πρακτική κατανόηση του πώς φορτίζονται οι πάσσαλοι πρόσδεσης στην πραγματικότητα και πώς πρέπει να δοκιμάζονται.",
      "Οι διευθυντές μας συμμετέχουν ενεργά: σχεδιάζουν τον εξοπλισμό, ελέγχουν τα πρωτόκολλα δοκιμών και επιβλέπουν κάθε επιχείρηση επί τόπου, από την αρχή ως το τέλος.",
      "Γνωρίζουμε πασσάλους και προσδέσεις πλοίων παγκοσμίως — τα τοπικά στυλ και σχέδια διαφέρουν, αλλά η βασική λειτουργία είναι πάντα η ίδια: να συγκρατεί ένα πλοίο, με ασφάλεια, υπό ρεαλιστικές συνθήκες πρόσδεσης.",
    ],
  },
  rigTitle: { en: "Why we built our own rig", el: "Γιατί κατασκευάσαμε τη δική μας διάταξη" },
  rigBody: {
    en: [
      "Older methods — pulling with a tug, or loading one bollard against another — are dangerous under high load and don't replicate how a ship actually loads a bollard.",
      "Our rig is compact, adaptable, and contains the test specimen. It pulls the way a real mooring line pulls, and keeps people out of harm's way.",
    ],
    el: [
      "Οι παλαιότερες μέθοδοι — έλξη με ρυμουλκό ή φόρτιση ενός πασσάλου έναντι άλλου — είναι επικίνδυνες υπό υψηλό φορτίο και δεν αναπαράγουν τον πραγματικό τρόπο φόρτισης από ένα πλοίο.",
      "Η διάταξή μας είναι συμπαγής, προσαρμόσιμη και περικλείει το δοκίμιο. Τραβά όπως ένα πραγματικό σχοινί πρόσδεσης και κρατά τους ανθρώπους μακριά από τον κίνδυνο.",
    ],
  },
};

function About() {
  const t = useT();
  return (
    <>
      <PageHero eyebrow={t(nav.about)} title={t(c.title)} image={bollard} />
      <section className="mx-auto max-w-4xl space-y-8 px-6 py-32">
        {t(c.body).map((p, i) => (
          <Reveal key={i} delay={i * 120}>
            <p className={i === 0 ? "font-display text-3xl font-semibold leading-tight md:text-4xl" : "text-lg leading-relaxed text-muted-foreground"}>{p}</p>
          </Reveal>
        ))}
      </section>
      <section className="border-y bg-navy-deep">
        <div className="mx-auto grid max-w-7xl gap-16 px-6 py-32 lg:grid-cols-2">
          <Reveal>
            <h2 className="font-display text-5xl font-extrabold md:text-6xl">{t(c.rigTitle)}</h2>
            <div className="mt-8 space-y-6">
              {t(c.rigBody).map((p, i) => (
                <p key={i} className="text-lg leading-relaxed text-muted-foreground">{p}</p>
              ))}
            </div>
          </Reveal>
          <Reveal delay={200} className="flex items-center">
            <RigDiagram className="w-full" />
          </Reveal>
        </div>
      </section>
      {chapters.slice(0, 3).map((ch) => (
        <ChapterSection key={ch.slug} chapter={ch} />
      ))}
      <CtaBand />
    </>
  );
}
