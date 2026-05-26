import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Check, Upload } from "lucide-react";
import Layout from "@/components/Layout";
import m2 from "@/assets/model-2.jpg";
import m4 from "@/assets/model-4.jpg";

export const Route = createFileRoute("/apply")({
  head: () => ({
    meta: [
      { title: "Model Application — Bella Monroe" },
      { name: "description", content: "Apply to join Bella Monroe. Submit your portfolio and become part of the next era of luxury modeling." },
      { property: "og:title", content: "Apply — Bella Monroe" },
      { property: "og:description", content: "Submit your portfolio to join Bella Monroe." },
    ],
  }),
  component: Apply,
});

function Apply() {
  const [done, setDone] = useState(false);
  return (
    <Layout>
      <section className="relative h-[60vh] overflow-hidden -mt-1">
        <img src={m4} alt="" className="absolute inset-0 w-full h-full object-cover object-top animate-ken"/>
        <div className="absolute inset-0 bg-foreground/50"/>
        <div className="relative z-10 h-full flex flex-col justify-end p-6 md:p-14 max-w-[1600px] mx-auto text-background">
          <div className="eyebrow text-background/80 mb-6">Open Casting</div>
          <h1 className="font-serif text-[12vw] md:text-[8vw] leading-[0.9]">New Faces<br/><em className="text-silver">2026.</em></h1>
        </div>
      </section>

      <section className="grid lg:grid-cols-12 gap-0">
        <div className="lg:col-span-5 p-8 md:p-14 bg-soft-gray">
          <div className="eyebrow text-muted-foreground mb-6">Why apply</div>
          <h2 className="font-serif text-4xl md:text-5xl leading-[1.1] mb-8">A house, not a roster.</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Selected applicants enter our development program — coaching, portfolio building,
            and direct introductions to brands, designers, and editors.
          </p>
          <p className="text-muted-foreground leading-relaxed">All submissions are reviewed by the casting team within two weeks.</p>
          <img src={m2} alt="" className="w-full aspect-[4/5] object-cover mt-10 grayscale"/>
        </div>

        <div className="lg:col-span-7 p-8 md:p-14">
          {done ? (
            <div className="max-w-lg animate-fade-up">
              <div className="h-16 w-16 rounded-full bg-foreground text-background flex items-center justify-center mb-8"><Check/></div>
              <div className="eyebrow text-muted-foreground mb-3">Received</div>
              <h2 className="font-serif text-4xl md:text-5xl mb-6">Thank you.</h2>
              <p className="text-muted-foreground">Our casting team will reach out within two weeks if your profile aligns with our current selection.</p>
            </div>
          ) : (
            <form className="space-y-7 max-w-2xl" onSubmit={(e) => { e.preventDefault(); setDone(true); window.scrollTo({ top: 0, behavior: "smooth" }); }}>
              <h2 className="font-serif text-4xl mb-2">Application</h2>
              <div className="grid md:grid-cols-2 gap-7">
                <F label="Full Name"><input required className="in"/></F>
                <F label="Age"><input required type="number" min="14" className="in"/></F>
                <F label="Height"><input required placeholder={`e.g. 5'10" / 178cm`} className="in"/></F>
                <F label="Experience (years)"><input required type="number" min="0" className="in"/></F>
                <F label="Email"><input required type="email" className="in"/></F>
                <F label="Phone"><input required className="in"/></F>
                <F label="Instagram"><input className="in" placeholder="@handle"/></F>
                <F label="Portfolio URL"><input className="in" placeholder="https://"/></F>
              </div>
              <F label="Why Bella Monroe?"><textarea rows={4} className="in resize-none"/></F>
              <div>
                <div className="eyebrow text-muted-foreground mb-3">Upload Photos</div>
                <label className="border border-dashed border-foreground/40 p-8 flex flex-col items-center gap-3 cursor-pointer hover:bg-soft-gray transition">
                  <Upload size={20}/>
                  <div className="eyebrow">Drop files or click to upload</div>
                  <input type="file" multiple className="hidden"/>
                </label>
              </div>
              <button className="eyebrow bg-foreground text-background px-8 py-4 hover:opacity-90 w-full md:w-auto">Submit Application</button>
            </form>
          )}
        </div>
      </section>

      <style>{`.in{width:100%;background:transparent;border:0;border-bottom:1px solid var(--border);padding:.65rem 0;outline:none;transition:border-color .3s} .in:focus{border-color:var(--foreground)}`}</style>
    </Layout>
  );
}

function F({ label, children }: { label: string; children: React.ReactNode }) {
  return (<label className="block"><div className="eyebrow text-muted-foreground mb-2">{label}</div>{children}</label>);
}