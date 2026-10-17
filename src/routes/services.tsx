import { createFileRoute } from "@tanstack/react-router";
import { useT } from "@/lib/i18n";
import { nav } from "@/lib/content";
import { PageHero, CtaBand } from "@/components/site/Layout";
import { Reveal } from "@/components/site/Reveal";
import { AngleDiagram, PlanAngleDiagram } from "@/components/site/Diagrams";
import { StatsStrip } from "./index";
import hero from "@/assets/hero.jpg";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Bollard Pull Testing to 125 t | BollardPull" },
      { name: "description", content: "Real-world pull testing of mooring bollards to your specified load and angle, or 10% above rated capacity." },
      { property: "og:title", content: "BollardPull Services" },
      { property: "og:description", content: "Real-world bollard pull testing up to 125 tonnes at combined angles." },
    ],
  }),
  component: Services,
});

const c = {
  title: { en: "Certainty, measured in tonnes.", el: "Βεβαιότητα, μετρημένη σε τόνους." },
  intro: {
    en: "BollardPull provides the highest level of validation of bollard load capacity through real-world pull testing — either to your specified load and angle, or to 10% above the manufacturer's rated capacity.",
    el: "Η BollardPull παρέχει το υψηλότερο επίπεδο επικύρωσης της φέρουσας ικανότητας πασσάλων μέσω πραγματικών δοκιμών έλξης — είτε στο φορτίο και τη γωνία που ορίζετε, είτε 10% πάνω από την ονομαστική ικανότητα του κατασκευαστή.",
  },
  castTitle: { en: "The problem with castings", el: "Το πρόβλημα με τα χυτά" },
  castBody: {
    en: "Bollards are castings, traded through suppliers. Casting quality — shrinkage, porosity, inclusions, metal composition — varies. We are not casting experts. But we can prove what a bollard actually holds.",
    el: "Οι πάσσαλοι είναι χυτά προϊόντα που διακινούνται μέσω προμηθευτών. Η ποιότητα χύτευσης — συρρίκνωση, πορώδες, εγκλείσματα, σύσταση μετάλλου — ποικίλλει. Δεν είμαστε ειδικοί στη χύτευση. Μπορούμε όμως να αποδείξουμε τι πραγματικά αντέχει ένας πάσσαλος.",
  },
  castTags: { en: ["Shrinkage", "Porosity", "Inclusions", "Composition"], el: ["Συρρίκνωση", "Πορώδες", "Εγκλείσματα", "Σύσταση"] },
  qTitle: { en: "Four questions you should ask yourself", el: "Τέσσερις ερωτήσεις που πρέπει να θέσετε" },
  questions: {
    en: [
      "How do you know bollards installed 50+ years ago are fit for modern ships and their steep mooring line angles?",
      "Did your supplier provide design standards, calculations and checks of the bollard body and anchorage, for all combined rope angles and load factors?",
      "New berth, new bollards, little documentation — how can you be sure of their source and quality?",
      "Were you advised of the correct torque settings and preloading of the anchor bolts to prevent movement under load?",
    ],
    el: [
      "Πώς γνωρίζετε ότι πάσσαλοι που εγκαταστάθηκαν πριν από 50+ χρόνια είναι κατάλληλοι για σύγχρονα πλοία και τις απότομες γωνίες των σχοινιών τους;",
      "Σας παρείχε ο προμηθευτής πρότυπα σχεδιασμού, υπολογισμούς και ελέγχους του σώματος και της αγκύρωσης, για όλες τις συνδυασμένες γωνίες και συντελεστές φορτίου;",
      "Νέα θέση πρόσδεσης, νέοι πάσσαλοι, ελάχιστη τεκμηρίωση — πώς μπορείτε να είστε σίγουροι για την προέλευση και την ποιότητά τους;",
      "Σας υποδείχθηκαν οι σωστές ροπές σύσφιξης και η προένταση των κοχλιών αγκύρωσης ώστε να αποφευχθεί μετακίνηση υπό φορτίο;",
    ],
  },
  closer: {
    en: "If you are uncertain about any of these, load testing is not an expense — it is certainty. We test to satisfy your risk profile and your insurer's.",
    el: "Αν έχετε αμφιβολία για οποιοδήποτε από αυτά, η δοκιμή φορτίου δεν είναι έξοδο — είναι βεβαιότητα. Δοκιμάζουμε ώστε να ικανοποιείται το προφίλ κινδύνου σας και του ασφαλιστή σας.",
  },
  capTitle: { en: "Capability", el: "Δυνατότητες" },
  capBody: {
    en: "An adaptable test rig pulling up to 125 tonnes at combined vertical and horizontal angles — replicating the real geometry of a ship's mooring line.",
    el: "Προσαρμόσιμη διάταξη δοκιμών με έλξη έως 125 τόνους σε συνδυασμένες κατακόρυφες και οριζόντιες γωνίες — αναπαράγοντας την πραγματική γεωμετρία του σχοινιού πρόσδεσης.",
  },
  elev: { en: "Elevation — vertical range", el: "Τομή — κατακόρυφο εύρος" },
  plan: { en: "Plan — horizontal range", el: "Κάτοψη — οριζόντιο εύρος" },
};

function Services() {
  const t = useT();
  return (
    <>
      <PageHero eyebrow={t(nav.services)} title={t(c.title)} sub={t(c.intro)} image={hero} />

      <section className="mx-auto grid max-w-7xl gap-16 px-6 py-32 lg:grid-cols-2">
        <Reveal>
          <p className="eyebrow mb-6">01</p>
          <h2 className="font-display text-5xl font-extrabold md:text-6xl">{t(c.castTitle)}</h2>
        </Reveal>
        <Reveal delay={150}>
          <p className="text-xl leading-relaxed text-muted-foreground">{t(c.castBody)}</p>
          <div className="mt-10 flex flex-wrap gap-3">
            {t(c.castTags).map((tag) => (
              <span key={tag} className="border px-4 py-2 font-mono text-xs uppercase tracking-widest text-steel">{tag}</span>
            ))}
          </div>
        </Reveal>
      </section>

      <section className="border-y bg-navy-deep py-32">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <p className="eyebrow mb-6">02</p>
            <h2 className="font-display max-w-4xl text-5xl font-extrabold md:text-7xl">{t(c.qTitle)}</h2>
          </Reveal>
          <div className="mt-20 grid gap-px bg-border md:grid-cols-2">
            {t(c.questions).map((q, i) => (
              <Reveal key={i} delay={i * 100} className="bg-navy-deep p-10">
                <p className="font-display text-7xl font-black text-primary">{i + 1}</p>
                <p className="mt-6 text-xl leading-relaxed">{q}</p>
              </Reveal>
            ))}
          </div>
          <Reveal>
            <p className="font-display mt-20 max-w-4xl text-3xl font-semibold leading-tight md:text-4xl">{t(c.closer)}</p>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-32">
        <Reveal>
          <p className="eyebrow mb-6">03</p>
          <h2 className="font-display text-5xl font-extrabold md:text-7xl">{t(c.capTitle)}</h2>
          <p className="mt-8 max-w-2xl text-lg text-muted-foreground">{t(c.capBody)}</p>
        </Reveal>
        <div className="mt-20 grid gap-12 lg:grid-cols-3">
          <Reveal className="border p-8 lg:col-span-2">
            <p className="eyebrow mb-6">{t(c.elev)}</p>
            <AngleDiagram className="w-full" />
          </Reveal>
          <Reveal delay={200} className="border p-8">
            <p className="eyebrow mb-6">{t(c.plan)}</p>
            <PlanAngleDiagram className="w-full" />
          </Reveal>
        </div>
      </section>

      <StatsStrip />
      <CtaBand />
    </>
  );
}
