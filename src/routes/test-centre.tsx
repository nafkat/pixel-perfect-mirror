import { createFileRoute } from "@tanstack/react-router";
import { useT } from "@/lib/i18n";
import { chapters, nav } from "@/lib/content";
import { PageHero, CtaBand } from "@/components/site/Layout";
import { Reveal } from "@/components/site/Reveal";
import { ChapterSection } from "@/components/site/Chapter";
import testcentre from "@/assets/testcentre.jpg";

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
    en: "Clients and their representatives are welcome to witness testing first-hand at our Test Centre. New or removed bollards are bolted to an adaptable test bed and pulled at combined vertical and horizontal angles to their rated working capacity — or 10% beyond.",
    el: "Πελάτες και εκπρόσωποί τους είναι ευπρόσδεκτοι να παρακολουθήσουν από κοντά τις δοκιμές στο Test Centre μας. Νέοι ή αφαιρεμένοι πάσσαλοι βιδώνονται σε προσαρμόσιμη κλίνη δοκιμών και έλκονται σε συνδυασμένες κατακόρυφες και οριζόντιες γωνίες έως την ονομαστική ικανότητα λειτουργίας — ή 10% παραπάνω.",
  },
};

function TestCentre() {
  const t = useT();
  const inHouse = chapters.find((ch) => ch.slug === "in-house")!;
  return (
    <>
      <PageHero eyebrow={t(nav.testCentre)} title={t(c.title)} sub={t(c.body)} image={testcentre} />
      <ChapterSection chapter={inHouse} full />
      <Reveal>
        <CtaBand />
      </Reveal>
    </>
  );
}
