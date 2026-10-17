import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { toast } from "sonner";
import { MessageCircle, Mail, MapPin, Phone } from "lucide-react";
import { useT } from "@/lib/i18n";
import { nav } from "@/lib/content";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Reveal } from "@/components/site/Reveal";
import { whatsappHref } from "@/components/site/Layout";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact BollardPull — Request a Bollard Test Quote" },
      { name: "description", content: "Ask us about bollard load testing, or request a quote for on-site or Test Centre testing." },
      { property: "og:title", content: "Contact BollardPull" },
      { property: "og:description", content: "Have a question? Ask us here." },
    ],
  }),
  component: Contact,
});

const c = {
  title: { en: "Have a question? Ask us here.", el: "Έχετε ερώτηση; Ρωτήστε μας." },
  name: { en: "Name", el: "Όνομα" },
  email: { en: "Email", el: "Email" },
  company: { en: "Company", el: "Εταιρεία" },
  message: { en: "Message", el: "Μήνυμα" },
  send: { en: "Send message", el: "Αποστολή μηνύματος" },
  sent: { en: "Thank you — we'll be in touch shortly.", el: "Ευχαριστούμε — θα επικοινωνήσουμε σύντομα." },
  details: { en: "Contact details", el: "Στοιχεία επικοινωνίας" },
  wa: { en: "Prefer WhatsApp? Message us directly.", el: "Προτιμάτε WhatsApp; Στείλτε μας απευθείας." },
  waBtn: { en: "Chat on WhatsApp", el: "Συνομιλία στο WhatsApp" },
};

function Contact() {
  const t = useT();
  const [sending, setSending] = useState(false);
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);
    // TODO: connect to email delivery
    setTimeout(() => {
      setSending(false);
      (e.target as HTMLFormElement).reset();
      toast.success(t(c.sent));
    }, 600);
  };
  const field = "h-12 rounded-sm bg-navy-deep";
  return (
    <section className="mx-auto max-w-7xl px-6 pb-32 pt-40">
      <Reveal>
        <p className="eyebrow mb-6">{t(nav.contact)}</p>
        <h1 className="font-display max-w-5xl text-6xl font-black md:text-8xl">{t(c.title)}</h1>
      </Reveal>
      <div className="mt-20 grid gap-16 lg:grid-cols-12">
        <Reveal className="lg:col-span-7">
          <form onSubmit={onSubmit} className="grid gap-6 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="name" className="eyebrow">{t(c.name)}</Label>
              <Input id="name" required maxLength={100} className={field} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email" className="eyebrow">{t(c.email)}</Label>
              <Input id="email" type="email" required maxLength={255} className={field} />
            </div>
            <div className="space-y-2 sm:col-span-2">
              <Label htmlFor="company" className="eyebrow">{t(c.company)}</Label>
              <Input id="company" maxLength={150} className={field} />
            </div>
            <div className="space-y-2 sm:col-span-2">
              <Label htmlFor="message" className="eyebrow">{t(c.message)}</Label>
              <Textarea id="message" required maxLength={2000} rows={6} className="rounded-sm bg-navy-deep" />
            </div>
            <div className="sm:col-span-2">
              <Button type="submit" variant="hero" size="xl" disabled={sending}>{t(c.send)}</Button>
            </div>
          </form>
        </Reveal>
        <Reveal delay={200} className="space-y-12 lg:col-span-5">
          <div>
            <p className="eyebrow mb-6">{t(c.details)}</p>
            {/* TODO: replace placeholder contact details */}
            <ul className="space-y-5 text-lg">
              <li className="flex gap-4"><MapPin className="mt-1 size-5 text-primary" /> [TODO: Address]</li>
              <li className="flex gap-4"><Mail className="mt-1 size-5 text-primary" /> [TODO: email@bollardpull.com]</li>
              <li className="flex gap-4"><Phone className="mt-1 size-5 text-primary" /> [TODO: +30 XXX XXX XXXX]</li>
            </ul>
          </div>
          <div className="border p-8">
            <p className="font-display text-2xl font-semibold">{t(c.wa)}</p>
            <p className="mt-2 font-mono text-sm text-muted-foreground">+30 6XX XXX XXXX (TODO)</p>
            <Button asChild variant="whatsapp" size="xl" className="mt-6">
              <a href={whatsappHref} target="_blank" rel="noreferrer"><MessageCircle /> {t(c.waBtn)}</a>
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
