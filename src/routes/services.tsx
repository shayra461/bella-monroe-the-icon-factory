import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { X, ArrowRight } from "lucide-react";
import Layout from "@/components/Layout";
import m1 from "@/assets/model-1.jpg";
import m2 from "@/assets/model-2.jpg";
import m3 from "@/assets/model-3.jpg";
import m4 from "@/assets/model-4.jpg";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Bella Monroe Agency" },
      { name: "description", content: "Model development, runway coaching, editorial shoots, fashion show production, brand campaigns, and creative direction." },
      { property: "og:title", content: "Services — Bella Monroe" },
      { property: "og:description", content: "Premium services for brands and emerging talent." },
    ],
  }),
  component: Services,
});

const SERVICES = [
  { n: "01", t: "Model Development", img: m2, d: "An end-to-end program shaping new faces into industry-ready professionals." },
  { n: "02", t: "Runway Coaching", img: m3, d: "Walks, posture, and presence — calibrated for couture and ready-to-wear." },
  { n: "03", t: "Fashion Show Production", img: m4, d: "Full creative and technical production of cinematic runway experiences." },
  { n: "04", t: "Editorial Shoots", img: m1, d: "Curated editorial direction for magazines, lookbooks, and brand stories." },
  { n: "05", t: "Portfolio Building", img: m2, d: "Bespoke portfolios shot in the language of the world's leading houses." },
  { n: "06", t: "Brand Campaigns", img: m3, d: "Full-spectrum campaigns from concept through delivery." },
  { n: "07", t: "Talent Management", img: m4, d: "Strategic representation across fashion, beauty, and entertainment." },
  { n: "08", t: "Creative Direction", img: m1, d: "Art direction for collections, capsules, and brand reinventions." },
  { n: "09", t: "Event Production", img: m2, d: "Launches, presentations, and experiential fashion events." },
  { n: "10", t: "Personal Branding", img: m3, d: "Identity systems for talent — from style codes to public narrative." },
];

function Services() {
  const [active, setActive] = useState<typeof SERVICES[number] | null>(null);
  return (
    <Layout>
      <section className="px-6 md:px-14 max-w-[1600px] mx-auto pt-20 pb-20">
        <div className="eyebrow text-muted-foreground mb-8">What we do</div>
        <h1 className="font-serif text-[12vw] md:text-[8vw] leading-[0.95]">Services<br/><em className="text-silver">of the house.</em></h1>
      </section>

      <section className="px-6 md:px-14 max-w-[1600px] mx-auto pb-32">
        <div className="grid md:grid-cols-2 gap-x-12 gap-y-2 border-t border-border">
          {SERVICES.map((s) => (
            <button
              key={s.n}
              onClick={() => setActive(s)}
              className="group text-left grid grid-cols-[60px_1fr_auto] items-center gap-6 py-8 border-b border-border hover:bg-soft-gray transition-colors duration-500 px-2"
            >
              <div className="eyebrow text-muted-foreground">{s.n}</div>
              <div>
                <div className="font-serif text-3xl md:text-4xl">{s.t}</div>
                <div className="text-muted-foreground text-sm mt-2 max-w-md">{s.d}</div>
              </div>
              <ArrowRight className="opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition" size={18}/>
            </button>
          ))}
        </div>
      </section>

      {active && (
        <div className="fixed inset-0 z-[60] bg-foreground/90 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in" onClick={() => setActive(null)}>
          <div className="bg-background max-w-4xl w-full max-h-[90vh] overflow-auto grid md:grid-cols-2" onClick={(e) => e.stopPropagation()}>
            <img src={active.img} alt={active.t} className="w-full h-72 md:h-full object-cover"/>
            <div className="p-10 relative">
              <button onClick={() => setActive(null)} className="absolute top-4 right-4 p-2" aria-label="close"><X size={20}/></button>
              <div className="eyebrow text-muted-foreground mb-4">Service {active.n}</div>
              <h3 className="font-serif text-4xl mb-6">{active.t}</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">{active.d}</p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Delivered by a dedicated team of producers, stylists, and creative directors —
                in the editorial language Bella Monroe is known for.
              </p>
              <Link to="/booking" className="eyebrow inline-flex items-center gap-3 border border-foreground px-6 py-3 hover:bg-foreground hover:text-background transition">
                Inquire <ArrowRight size={14}/>
              </Link>
            </div>
          </div>
        </div>
      )}
    </Layout>
  );
}