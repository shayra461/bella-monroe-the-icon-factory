import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Check } from "lucide-react";
import Layout from "@/components/Layout";
import m3 from "@/assets/model-3.jpg";

export const Route = createFileRoute("/booking")({
  head: () => ({
    meta: [
      { title: "Booking — Bella Monroe" },
      { name: "description", content: "Book Bella Monroe talent for editorial, runway, brand campaigns, and creative direction." },
      { property: "og:title", content: "Book Talent — Bella Monroe" },
      { property: "og:description", content: "Reserve talent and production for your next campaign." },
    ],
  }),
  component: Booking,
});

const SERVICES = ["Editorial Shoot", "Runway Show", "Brand Campaign", "Event Appearance", "Creative Direction"];
const PAY = ["Credit Card", "MasterCard", "PayPal", "Bank Transfer"];

function Booking() {
  const [done, setDone] = useState(false);
  const [pay, setPay] = useState(PAY[0]);
  return (
    <Layout>
      <section className="grid md:grid-cols-12">
        <div className="md:col-span-5 relative h-[40vh] md:h-auto">
          <img src={m3} alt="" className="absolute inset-0 w-full h-full object-cover"/>
          <div className="absolute inset-0 bg-foreground/30"/>
          <div className="relative z-10 p-10 md:p-14 h-full flex flex-col justify-between text-background">
            <div>
              <div className="eyebrow mb-6 text-background/80">Reservations</div>
              <h1 className="font-serif text-5xl md:text-7xl leading-[1]">Book Talent.</h1>
            </div>
            <p className="text-background/80 max-w-sm leading-relaxed hidden md:block">
              A dedicated producer will reach out within 24 hours to confirm your booking and
              tailor a proposal to your project.
            </p>
          </div>
        </div>

        <div className="md:col-span-7 p-8 md:p-16">
          {done ? (
            <div className="h-full flex flex-col items-start animate-fade-up">
              <div className="h-16 w-16 rounded-full bg-foreground text-background flex items-center justify-center mb-8"><Check/></div>
              <div className="eyebrow text-muted-foreground mb-3">Confirmed</div>
              <h2 className="font-serif text-4xl md:text-5xl mb-6">Your request has been received.</h2>
              <p className="text-muted-foreground max-w-md">A house producer will be in touch within 24 hours.</p>
              <button onClick={() => setDone(false)} className="eyebrow mt-10 border border-foreground px-6 py-3 hover:bg-foreground hover:text-background transition">New Booking</button>
            </div>
          ) : (
            <form className="space-y-8 max-w-2xl" onSubmit={(e) => { e.preventDefault(); setDone(true); window.scrollTo({ top: 0, behavior: "smooth" }); }}>
              <Field label="Service">
                <select required className="input">
                  <option value="">Select a service</option>
                  {SERVICES.map(s => <option key={s}>{s}</option>)}
                </select>
              </Field>
              <div className="grid md:grid-cols-2 gap-8">
                <Field label="Date"><input required type="date" className="input"/></Field>
                <Field label="Time"><input required type="time" className="input"/></Field>
              </div>
              <Field label="Budget (USD)"><input required type="number" min="0" placeholder="10,000" className="input"/></Field>
              <div className="grid md:grid-cols-2 gap-8">
                <Field label="Full Name"><input required className="input" placeholder="Your name"/></Field>
                <Field label="Email"><input required type="email" className="input" placeholder="you@brand.com"/></Field>
              </div>
              <Field label="Notes"><textarea rows={4} className="input resize-none" placeholder="Tell us about your project"/></Field>
              <div>
                <div className="eyebrow text-muted-foreground mb-4">Payment Method</div>
                <div className="flex flex-wrap gap-3">
                  {PAY.map(p => (
                    <button type="button" key={p} onClick={() => setPay(p)} className={`eyebrow px-4 py-3 border transition ${pay === p ? "bg-foreground text-background border-foreground" : "border-border hover:bg-soft-gray"}`}>{p}</button>
                  ))}
                </div>
              </div>
              <button className="eyebrow bg-foreground text-background px-8 py-4 hover:opacity-90 w-full md:w-auto">Confirm Booking</button>
            </form>
          )}
        </div>
      </section>

      <style>{`
        .input { width:100%; background:transparent; border:0; border-bottom:1px solid var(--border); padding:.75rem 0; font-size:1rem; outline:none; transition:border-color .3s; }
        .input:focus { border-color: var(--foreground); }
      `}</style>
    </Layout>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <div className="eyebrow text-muted-foreground mb-2">{label}</div>
      {children}
    </label>
  );
}