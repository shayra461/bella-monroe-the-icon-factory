import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Instagram, Twitter, Facebook, Youtube, Mail, Phone, MapPin } from "lucide-react";
import Layout from "@/components/Layout";
import m1 from "@/assets/model-1.jpg";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Bella Monroe Agency" },
      { name: "description", content: "Reach the Bella Monroe house — bookings, press, and casting inquiries." },
      { property: "og:title", content: "Contact — Bella Monroe" },
      { property: "og:description", content: "Bookings, press, and casting inquiries." },
    ],
  }),
  component: Contact,
});

function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <Layout>
      <section className="px-6 md:px-14 max-w-[1600px] mx-auto pt-20 pb-16">
        <div className="eyebrow text-muted-foreground mb-8">Reach the House</div>
        <h1 className="font-serif text-[12vw] md:text-[8vw] leading-[0.95]">Let's<br/><em className="text-silver">create together.</em></h1>
      </section>

      <section className="px-6 md:px-14 max-w-[1600px] mx-auto pb-24 grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-7">
          {sent ? (
            <div className="animate-fade-up">
              <div className="eyebrow text-muted-foreground mb-3">Sent</div>
              <h3 className="font-serif text-4xl">Your message is with us.</h3>
              <p className="text-muted-foreground mt-4">A team member will respond within 48 hours.</p>
            </div>
          ) : (
            <form className="space-y-7 max-w-2xl" onSubmit={(e) => { e.preventDefault(); setSent(true); }}>
              <div className="grid md:grid-cols-2 gap-7">
                <F label="Name"><input required className="in"/></F>
                <F label="Email"><input required type="email" className="in"/></F>
              </div>
              <F label="Subject"><input className="in"/></F>
              <F label="Message"><textarea rows={6} required className="in resize-none"/></F>
              <button className="eyebrow bg-foreground text-background px-8 py-4 hover:opacity-90">Send Message</button>
            </form>
          )}
        </div>
        <aside className="lg:col-span-5 space-y-10">
          <Block icon={<Mail size={16}/>} title="Email" lines={["hello@bellamonroe.agency", "press@bellamonroe.agency"]}/>
          <Block icon={<Phone size={16}/>} title="Phone" lines={["+33 (0)1 84 88 09 12", "+1 (212) 555 0119"]}/>
          <Block icon={<MapPin size={16}/>} title="Studios" lines={["Paris · Atelier 14", "New York · Gallery 9", "Lagos · The Atrium"]}/>
          <div>
            <div className="eyebrow text-muted-foreground mb-4">Follow</div>
            <div className="flex gap-5">
              {[Instagram, Twitter, Facebook, Youtube].map((Icon, i) => (
                <a key={i} href="#" className="hover:opacity-60 transition"><Icon size={18}/></a>
              ))}
            </div>
          </div>
        </aside>
      </section>

      <section className="relative h-[60vh] overflow-hidden">
        <img src={m1} alt="" className="absolute inset-0 w-full h-full object-cover grayscale"/>
        <div className="absolute inset-0 bg-foreground/40"/>
        <div className="relative z-10 h-full flex items-center justify-center text-background text-center px-6">
          <div>
            <div className="eyebrow mb-4">Bella Monroe HQ</div>
            <div className="font-serif text-4xl md:text-6xl">14 Rue de l'Atelier · Paris</div>
          </div>
        </div>
      </section>

      <style>{`.in{width:100%;background:transparent;border:0;border-bottom:1px solid var(--border);padding:.65rem 0;outline:none;transition:border-color .3s} .in:focus{border-color:var(--foreground)}`}</style>
    </Layout>
  );
}

function F({ label, children }: { label: string; children: React.ReactNode }) {
  return (<label className="block"><div className="eyebrow text-muted-foreground mb-2">{label}</div>{children}</label>);
}

function Block({ icon, title, lines }: { icon: React.ReactNode; title: string; lines: string[] }) {
  return (
    <div className="border-t border-border pt-6">
      <div className="eyebrow text-muted-foreground mb-3 flex items-center gap-2">{icon}{title}</div>
      {lines.map(l => <div key={l} className="font-serif text-2xl">{l}</div>)}
    </div>
  );
}