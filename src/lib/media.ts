/**
 * Central media registry. Every photo/video slot on the site reads from here.
 * To swap a placeholder for real media, replace the file in src/assets/media/
 * (same name) or change the import below — no page code changes needed.
 */
import heroImg from "@/assets/hero.jpg";
import bollard from "@/assets/bollard.jpg";
import testcentre from "@/assets/testcentre.jpg";
import rigQuayside from "@/assets/media/rig-quayside.jpg";
import safetyEnclosure from "@/assets/media/safety-enclosure.jpg";
import whyInline from "@/assets/media/why-inline.jpg";
import inhouseInline from "@/assets/media/inhouse-inline.jpg";
import rigOverview from "@/assets/media/rig-overview.jpg";
import loadPin from "@/assets/media/load-pin.jpg";
import laserSetup from "@/assets/media/laser-setup.jpg";
import aboutStory from "@/assets/media/about-story.jpg";
import g1 from "@/assets/media/gallery-1.jpg";
import g2 from "@/assets/media/gallery-2.jpg";
import g3 from "@/assets/media/gallery-3.jpg";
import g4 from "@/assets/media/gallery-4.jpg";
import type { Chapter } from "@/lib/content";

type Bi = { en: string; el: string };
export type MediaImage = { src: string; alt: Bi };

/** Showreel source: null = "coming soon" dialog. */
export type VideoSource =
  | { kind: "file"; src: string } // e.g. import reel from "@/assets/media/reel.mp4"
  | { kind: "embed"; url: string } // e.g. "https://www.youtube.com/embed/XXXX" or "https://player.vimeo.com/video/XXXX"
  | null;

// TODO: replace with real rig footage (mp4, 1080p, < 10 MB, muted loop).
// One-line switch: import heroVid from "@/assets/media/hero.mp4"; then set heroVideo = heroVid
export const heroVideo: string | null = null;
export const heroPoster: string = heroImg; // TODO: replace with first frame of hero video

export const pageHeroes = {
  about: bollard,
  services: heroImg,
  testCentre: testcentre,
};

// TODO: replace with real showreel (local mp4 or YouTube/Vimeo embed)
export const showreel: { video: VideoSource; poster: MediaImage } = {
  video: null,
  poster: { src: rigQuayside, alt: { en: "BollardPull rig on the quayside", el: "Η διάταξη BollardPull στην προβλήτα" } },
};

/** Background image of each chapter section */
export const chapterBackgrounds: Record<Chapter["slug"], string> = {
  why: bollard,
  how: heroImg,
  safety: heroImg,
  "in-house": testcentre,
};

/** Extra image on each chapter page. "full" = full-width cinematic, "inline" = smaller within content. */
export const chapterImages: Record<Chapter["slug"], MediaImage & { layout: "full" | "inline" }> = {
  // TODO: replace with real photo of a ship moored to an old bollard
  why: { layout: "inline", src: whyInline, alt: { en: "Old bollard holding a modern ship", el: "Παλιός πάσσαλος που συγκρατεί σύγχρονο πλοίο" } },
  // TODO: replace with real photo of the rig pulling at the quayside
  how: { layout: "full", src: rigQuayside, alt: { en: "Test rig pulling a bollard at the quayside", el: "Διάταξη δοκιμών σε έλξη πασσάλου στην προβλήτα" } },
  // TODO: replace with real photo of the ballistic enclosure / control van
  safety: { layout: "full", src: safetyEnclosure, alt: { en: "Ballistic enclosure and control van", el: "Θωρακισμένο περίβλημα και όχημα ελέγχου" } },
  // TODO: replace with real Test Centre test-bed photo
  "in-house": { layout: "inline", src: inhouseInline, alt: { en: "Bollard bolted to the Test Centre test bed", el: "Πάσσαλος βιδωμένος στην κλίνη δοκιμών" } },
};

// TODO: replace with real capability photos
export const capabilityImages: MediaImage[] = [
  { src: rigOverview, alt: { en: "Rig overview", el: "Γενική άποψη διάταξης" } },
  { src: loadPin, alt: { en: "Load pin close-up", el: "Λεπτομέρεια πείρου φορτίου" } },
  { src: laserSetup, alt: { en: "Laser angle setup", el: "Ρύθμιση γωνίας με λέιζερ" } },
];

// TODO: replace with real Test Centre photos (6 slots)
export const testCentreGallery: MediaImage[] = [
  { src: g1, alt: { en: "Hydraulic cylinder under load", el: "Υδραυλικός κύλινδρος υπό φορτίο" } },
  { src: g2, alt: { en: "New bollards awaiting test", el: "Νέοι πάσσαλοι προς δοκιμή" } },
  { src: g3, alt: { en: "Load monitoring display", el: "Οθόνη παρακολούθησης φορτίου" } },
  { src: g4, alt: { en: "Anchor bolts on the test bed", el: "Κοχλίες αγκύρωσης στην κλίνη δοκιμών" } },
  { src: inhouseInline, alt: { en: "Bollard on the test bed", el: "Πάσσαλος στην κλίνη δοκιμών" } },
  { src: testcentre, alt: { en: "Test Centre hall", el: "Αίθουσα Κέντρου Δοκιμών" } },
];

// TODO: replace with real photo of the directors / rig build
export const aboutImage: MediaImage = {
  src: aboutStory,
  alt: { en: "Engineers inspecting the rig", el: "Μηχανικοί επιθεωρούν τη διάταξη" },
};
