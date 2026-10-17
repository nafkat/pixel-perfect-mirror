export type L<T = string> = { en: T; el: T };

export const nav = {
  home: { en: "Home", el: "Αρχική" },
  about: { en: "About", el: "Εταιρεία" },
  services: { en: "Services", el: "Υπηρεσίες" },
  testCentre: { en: "Test Centre", el: "Test Centre" },
  contact: { en: "Contact", el: "Επικοινωνία" },
  quote: { en: "Request a Quote", el: "Ζητήστε Προσφορά" },
};

export const hero = {
  title: { en: "Proof. Not Promises.", el: "Απόδειξη. Όχι Υποσχέσεις." },
  sub: {
    en: "Bollard load testing to internationally recognised standards — up to 125 tonnes, at your quayside or in our Test Centre.",
    el: "Δοκιμές φορτίου πασσάλων πρόσδεσης με διεθνώς αναγνωρισμένα πρότυπα — έως 125 τόνους, στην προβλήτα σας ή στο Test Centre μας.",
  },
  scroll: { en: "Scroll", el: "Κύλιση" },
};

export const stats: { value: string; label: L }[] = [
  { value: "125t", label: { en: "Test capacity", el: "Ικανότητα δοκιμής" } },
  { value: "+10%", label: { en: "Proof margin", el: "Περιθώριο απόδειξης" } },
  { value: "4", label: { en: "Live cameras", el: "Κάμερες ζωντανής μετάδοσης" } },
  { value: "2m", label: { en: "Low-creep rope", el: "Σχοινί χαμηλού ερπυσμού" } },
];

export const intro = {
  en: "Decades of hands-on marine contracting — design, build and installation — give us a practical understanding of how mooring bollards are loaded in real life, and how they should be tested. Our directors design the equipment, control the protocols and oversee every test on site.",
  el: "Δεκαετίες πρακτικής εμπειρίας σε θαλάσσια έργα — σχεδιασμό, κατασκευή και εγκατάσταση — μας δίνουν βαθιά κατανόηση του πώς φορτίζονται οι πάσσαλοι πρόσδεσης στην πράξη και πώς πρέπει να δοκιμάζονται. Οι διευθυντές μας σχεδιάζουν τον εξοπλισμό, ελέγχουν τα πρωτόκολλα και επιβλέπουν κάθε δοκιμή επί τόπου.",
};

export type ChapterSlug = "why" | "how" | "safety" | "in-house";

export type Chapter = {
  slug: ChapterSlug;
  act: string;
  title: L;
  kicker: L;
  lead: L;
  points: L<string[]>;
  bigNumber: string;
  bigLabel: L;
};

export const chapters: Chapter[] = [
  {
    slug: "why",
    act: "I",
    title: { en: "Why", el: "Γιατί" },
    kicker: { en: "Why test a bollard?", el: "Γιατί να δοκιμάσετε έναν πάσσαλο;" },
    lead: {
      en: "Every vessel that berths puts its faith in a piece of cast iron. Bigger ships, higher freeboards, steeper line angles — the demands on mooring hardware have never been greater.",
      el: "Κάθε πλοίο που δένει σε προβλήτα εμπιστεύεται ένα χυτό κομμάτι σιδήρου. Μεγαλύτερα πλοία, ψηλότερα εξάλω, πιο απότομες γωνίες σχοινιών — οι απαιτήσεις πάνω στον εξοπλισμό πρόσδεσης δεν ήταν ποτέ μεγαλύτερες.",
    },
    points: {
      en: [
        "Age, corrosion or unknown origin — never designed for modern, steep mooring line angles.",
        "Inadequate strength or anchorage calculations by the supplier.",
        "Unvetted casting and material quality.",
        "Constant-tension winches loading bollards continuously to capacity — leading to fatigue.",
      ],
      el: [
        "Ηλικία, διάβρωση ή άγνωστη προέλευση — ποτέ σχεδιασμένοι για τις σύγχρονες απότομες γωνίες σχοινιών πρόσδεσης.",
        "Ανεπαρκείς υπολογισμοί αντοχής ή αγκύρωσης από τον προμηθευτή.",
        "Μη ελεγμένη ποιότητα χύτευσης και υλικού.",
        "Βαρούλκα σταθερής τάσης που φορτίζουν συνεχώς τους πασσάλους στο όριο — οδηγώντας σε κόπωση.",
      ],
    },
    bigNumber: "4",
    bigLabel: {
      en: "Failure modes revealed: body shear, overturning, sliding, bearing.",
      el: "Τρόποι αστοχίας που αποκαλύπτονται: διάτμηση σώματος, ανατροπή, ολίσθηση, έδραση.",
    },
  },
  {
    slug: "how",
    act: "II",
    title: { en: "How", el: "Πώς" },
    kicker: { en: "A real pull. Not a simulation.", el: "Πραγματικό τράβηγμα. Όχι προσομοίωση." },
    lead: {
      en: "Our portable rig is delivered to the quayside and simulates a real ship's mooring line pulling away from the quay at combined vertical and horizontal angles — not bollard-to-bollard, not hammer tests.",
      el: "Η φορητή διάταξή μας μεταφέρεται στην προβλήτα και προσομοιώνει το σχοινί πρόσδεσης ενός πραγματικού πλοίου που τραβά μακριά από την προβλήτα, σε συνδυασμένες κατακόρυφες και οριζόντιες γωνίες — όχι πάσσαλος-προς-πάσσαλο, όχι δοκιμές σφυριού.",
    },
    points: {
      en: [
        "Pulls and holds to a pre-set level: unity or +10%.",
        "Calibrated load pin records the applied force.",
        "Laser measurement of base movement, bending or failure.",
        "Four video cameras live-stream every test.",
      ],
      el: [
        "Τράβηγμα και συγκράτηση σε προκαθορισμένο επίπεδο: ονομαστικό ή +10%.",
        "Βαθμονομημένος αισθητήρας φορτίου καταγράφει τη δύναμη.",
        "Μέτρηση λέιζερ για μετακίνηση βάσης, κάμψη ή αστοχία.",
        "Τέσσερις κάμερες μεταδίδουν ζωντανά κάθε δοκιμή.",
      ],
    },
    bigNumber: "+10%",
    bigLabel: { en: "Beyond rated capacity, on request.", el: "Πάνω από την ονομαστική ικανότητα, κατόπιν αιτήματος." },
  },
  {
    slug: "safety",
    act: "III",
    title: { en: "Safety", el: "Ασφάλεια" },
    kicker: { en: "Designed so failure goes nowhere.", el: "Σχεδιασμένο ώστε η αστοχία να μη βλάπτει κανέναν." },
    lead: {
      en: "Every test is conducted remotely from a control van via an umbilical line. A short, low-creep synthetic rope pulls seaward — so a failed bollard's trajectory is away from people.",
      el: "Κάθε δοκιμή διεξάγεται εξ αποστάσεως από όχημα ελέγχου μέσω ομφάλιου καλωδίου. Ένα κοντό συνθετικό σχοινί χαμηλού ερπυσμού τραβά προς τη θάλασσα — έτσι η τροχιά ενός πασσάλου που αστοχεί είναι μακριά από ανθρώπους.",
    },
    points: {
      en: [
        "Remote operation from a control van.",
        "~2 m low-creep synthetic rope, pulling seaward.",
        "Motorised adjustments minimise manual handling.",
        "Ballistic-grade transparent enclosure arrests and retains fragments — enabling metallurgical analysis of any failure.",
      ],
      el: [
        "Απομακρυσμένη λειτουργία από όχημα ελέγχου.",
        "Συνθετικό σχοινί ~2 m χαμηλού ερπυσμού, με έλξη προς τη θάλασσα.",
        "Μηχανοκίνητες ρυθμίσεις ελαχιστοποιούν τη χειρωνακτική εργασία.",
        "Διαφανές βαλλιστικό περίβλημα συγκρατεί τα θραύσματα — επιτρέποντας μεταλλουργική ανάλυση κάθε αστοχίας.",
      ],
    },
    bigNumber: "2m",
    bigLabel: { en: "Short rope. Minimal stored energy.", el: "Κοντό σχοινί. Ελάχιστη αποθηκευμένη ενέργεια." },
  },
  {
    slug: "in-house",
    act: "IV",
    title: { en: "In-House", el: "Στο Κέντρο" },
    kicker: { en: "Witness it first-hand.", el: "Παρακολουθήστε το από κοντά." },
    lead: {
      en: "See the proof with your own eyes. Bring your surveyor or your insurer to our Test Centre, where new or removed bollards are anchored to an adaptable test bed and taken to rated working load — or beyond.",
      el: "Δείτε την απόδειξη με τα μάτια σας. Φέρτε τον επιθεωρητή ή τον ασφαλιστή σας στο Test Centre μας, όπου νέοι ή αφαιρεμένοι πάσσαλοι αγκυρώνονται σε προσαρμόσιμη κλίνη δοκιμών και φτάνουν στο ονομαστικό φορτίο λειτουργίας — ή πιο πέρα.",
    },
    points: {
      en: [
        "Witness testing for clients, insurers and surveyors.",
        "Adaptable test bed for new or removed bollards.",
        "Combined vertical and horizontal pull angles.",
        "Rated capacity or +10%.",
      ],
      el: [
        "Δοκιμές παρουσία πελατών, ασφαλιστών και επιθεωρητών.",
        "Προσαρμόσιμη κλίνη για νέους ή αφαιρεμένους πασσάλους.",
        "Συνδυασμένες κατακόρυφες και οριζόντιες γωνίες έλξης.",
        "Ονομαστική ικανότητα ή +10%.",
      ],
    },
    bigNumber: "125t",
    bigLabel: { en: "Maximum test load.", el: "Μέγιστο φορτίο δοκιμής." },
  },
];

export const ui = {
  readChapter: { en: "Read the chapter", el: "Διαβάστε το κεφάλαιο" },
  chapter: { en: "Chapter", el: "Κεφάλαιο" },
  next: { en: "Next chapter", el: "Επόμενο κεφάλαιο" },
  ctaTitle: { en: "Know what your bollards hold.", el: "Μάθετε τι αντέχουν οι πάσσαλοί σας." },
  ctaSub: {
    en: "Tell us about your berth. We'll propose a test programme to satisfy your risk profile — and your insurer's.",
    el: "Πείτε μας για την προβλήτα σας. Θα προτείνουμε πρόγραμμα δοκιμών που ικανοποιεί το προφίλ κινδύνου σας — και του ασφαλιστή σας.",
  },
  rights: { en: "All rights reserved.", el: "Με επιφύλαξη παντός δικαιώματος." },
};
