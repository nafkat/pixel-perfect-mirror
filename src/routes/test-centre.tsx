import { createFileRoute } from "@tanstack/react-router";
import { useT } from "@/lib/i18n";
import { chapters, nav } from "@/lib/content";
import { PageHero, CtaBand } from "@/components/site/Layout";
import { Reveal } from "@/components/site/Reveal";
import { ChapterSection } from "@/components/site/Chapter";
import { pageHeroes, testCentreGallery } from "@/lib/media";
import { Gallery } from "@/components/site/Media";

export const Route = createFileRoute("/test-centre")({
  head: () => ({
    meta: [
      { title: "Test Centre — Witness Bollard Testing | BollardPull" },
      { name: "description", content: "Witness bollard proof load testing first-hand at the BollardPull Test Centre, to rated capacity or 10% beyond." },
      { property: "og:title", content: "BollardPull Test Centre" },
      { property: "og:description", content: "Witness bollard testing first-hand, to rated capacity or +10%." },
    ],
  }),
  component: TestCentre,
});

const c = {
  title: { en: "See it hold.", el: "Δείτε το να αντέχει." },
  body: {
    en: "See the proof with your own eyes. Bring your surveyor or your insurer to our Test Centre, where new or removed bollards are anchored to an adaptable test bed and taken to rated working load — or beyond.",
    el: "Δείτε την απόδειξη με τα μάτια σας. Φέρτε τον επιθεωρητή ή τον ασφαλιστή σας στο Test Centre μας, όπου νέοι ή αφαιρεμένοι πάσσαλοι αγκυρώνονται σε προσαρμόσιμη κλίνη δοκιμών και φτάνουν στο ονομαστικό φορτίο λειτουργίας — ή πιο πέρα.",
  },
};

function TestCentre() {
  const t = useT();
  const inHouse = chapters.find((ch) => ch.slug === "in-house")!;
  return (
    <>
      <PageHero eyebrow={t(nav.testCentre)} title={t(c.title)} sub={t(c.body)} image={pageHeroes.testCentre} />
      <ChapterSection chapter={inHouse} full />
      <section className="mx-auto max-w-7xl px-6 py-32">
        <Reveal>
          <p className="eyebrow mb-6">{t({ en: "Gallery", el: "Γκαλερί" })}</p>
          <h2 className="font-display mb-16 text-5xl font-extrabold md:text-7xl">{t({ en: "The Test Centre", el: "Το Κέντρο Δοκιμών" })}</h2>
        </Reveal>
        <Gallery images={testCentreGallery} />
      </section>
      <Reveal>
        <CtaBand />
      </Reveal>
    </>
  );
}
