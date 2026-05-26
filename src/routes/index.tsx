import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ArrowRight, Play } from "lucide-react";
import Layout from "@/components/Layout";
import m1 from "@/assets/model-1.jpg";
import m2 from "@/assets/model-2.jpg";
import m3 from "@/assets/model-3.jpg";
import m4 from "@/assets/model-4.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Bella Monroe — Where Fashion Talent Becomes Iconic" },
      { name: "description", content: "Luxury model development, fashion experiences, and creative talent elevation." },
      { property: "og:image", content: "" },
    ],
  }),
  component: Home,
});

const slides = [
  { img: m3, eyebrow: "Couture / FW26", title: "Where Fashion Talent\nBecomes Iconic" },
  { img: m4, eyebrow: "Editorial / Vol. 07", title: "Sculpted in Light,\nDressed in Silence" },
  { img: m2, eyebrow: "New Faces / 2026", title: "The Next Era of\nLuxury Modeling" },
];

function Home() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI(x => (x + 1) % slides.length), 6500);
    return () => clearInterval(t);
  }, []);
  const s = slides[i];
  return (
    <Layout>
      {/* HERO */}
      <section className="relative h-[calc(100svh-6rem)] md:h-[calc(100svh-7rem)] w-full overflow-hidden bg-foreground text-background">
        {slides.map((sl, idx) => (
          <div key={idx} className={`absolute inset-0 transition-opacity duration-[1600ms] ${idx === i ? "opacity-100" : "opacity-0"}`}>
            <img src={sl.img} alt="" className="h-full w-full object-cover object-top animate-ken" />
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/70" />
          </div>
        ))}
        <div className="relative z-10 h-full flex flex-col justify-end pb-24 md:pb-32 px-6 md:px-14 max-w-[1600px] mx-auto">
          <div key={i} className="animate-fade-up">
            <div className="eyebrow text-background/80 mb-6">{s.eyebrow}</div>
            <h1 className="font-serif text-[12vw] md:text-[7.5vw] leading-[0.95] whitespace-pre-line">{s.title}</h1>
            <p className="mt-8 max-w-xl text-background/80 leading-relaxed">
              Luxury model development, fashion experiences, and creative talent elevation —
              crafted for the brands that shape the next century of style.
            </p>
            <div className="flex flex-wrap gap-4 mt-10">
              <Link to="/booking" className="eyebrow bg-background text-foreground px-7 py-4 inline-flex items-center gap-3 hover:bg-silver transition">
                Book Now <ArrowRight size={14}/>
              </Link>
              <Link to="/gallery" className="eyebrow border border-background/60 px-7 py-4 inline-flex items-center gap-3 hover:bg-background hover:text-foreground transition">
                Explore Gallery
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute bottom-6 right-6 md:right-14 z-10 flex gap-2">
          {slides.map((_, idx) => (
            <button key={idx} onClick={() => setI(idx)} className={`h-[2px] transition-all duration-500 ${idx === i ? "w-12 bg-background" : "w-6 bg-background/40"}`} />
          ))}
        </div>
      </section>

      {/* MARQUEE */}
      <section className="border-y border-border py-6 overflow-hidden">
        <div className="flex gap-16 animate-marquee whitespace-nowrap font-serif text-3xl md:text-5xl">
          {Array.from({ length: 2 }).map((_, k) => (
            <div key={k} className="flex gap-16 items-center">
              {["Vogue", "Mugler", "Wilhelmina", "Dior", "Balenciaga", "Schiaparelli", "Saint Laurent", "Prada"].map((b) => (
                <span key={b} className="italic">{b} <span className="text-silver mx-2">✦</span></span>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* EDITORIAL SPLIT */}
      <section className="py-28 md:py-40 px-6 md:px-14 max-w-[1600px] mx-auto grid md:grid-cols-12 gap-10 items-center">
        <div className="md:col-span-5 hover-zoom">
          <img src={m2} alt="" className="w-full aspect-[3/4] object-cover" />
        </div>
        <div className="md:col-span-6 md:col-start-7">
          <div className="eyebrow text-muted-foreground mb-6">The House</div>
          <h2 className="font-serif text-5xl md:text-7xl leading-[1] mb-8">A New Definition of Modern Talent.</h2>
          <p className="text-muted-foreground leading-relaxed max-w-lg">
            Bella Monroe develops, elevates, and positions emerging models through structured training,
            curated fashion experiences, and professional industry opportunities — building confidence,
            discipline, and brand identity.
          </p>
          <Link to="/about" className="eyebrow mt-10 inline-flex items-center gap-3 link-underline">
            Discover the House <ArrowRight size={14}/>
          </Link>
        </div>
      </section>

      {/* FEATURED RUNWAY */}
      <section className="bg-foreground text-background py-28 md:py-40">
        <div className="max-w-[1600px] mx-auto px-6 md:px-14">
          <div className="flex items-end justify-between mb-16">
            <div>
              <div className="eyebrow text-background/60 mb-4">Featured Runway</div>
              <h2 className="font-serif text-5xl md:text-7xl">Spring Couture 26</h2>
            </div>
            <Link to="/gallery" className="hidden md:inline-block eyebrow link-underline">View All</Link>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[m4, m1, m3].map((img, idx) => (
              <div key={idx} className="group relative hover-zoom aspect-[3/4]">
                <img src={img} alt="" className="h-full w-full object-cover grayscale group-hover:grayscale-0 transition duration-1000"/>
                <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end">
                  <div className="font-serif text-2xl">Look 0{idx + 1}</div>
                  <div className="eyebrow text-background/70">Atelier</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VIDEO PLACEHOLDER */}
      <section className="relative h-[80vh] overflow-hidden">
        <img src={m4} alt="" className="absolute inset-0 w-full h-full object-cover object-top"/>
        <div className="absolute inset-0 bg-black/40"/>
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-background">
          <button className="h-20 w-20 rounded-full border border-background/60 flex items-center justify-center hover:bg-background hover:text-foreground transition">
            <Play size={22}/>
          </button>
          <div className="font-serif text-3xl md:text-5xl mt-8 text-center px-6">The Bella Monroe Film — 2026</div>
          <div className="eyebrow mt-4 text-background/70">Directed in Paris</div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-28 md:py-40 px-6 md:px-14 max-w-[1400px] mx-auto">
        <div className="eyebrow text-muted-foreground mb-6">Voices</div>
        <div className="grid md:grid-cols-2 gap-16">
          {[
            { q: "An agency that treats every face like a future archive piece. The standard is uncompromising.", a: "Creative Director, Maison Vela" },
            { q: "Bella Monroe doesn't just place models — they sculpt presence. Our campaign sold out in 72 hours.", a: "Founder, Noir Atelier" },
          ].map((t, i) => (
            <figure key={i}>
              <blockquote className="font-serif text-3xl md:text-4xl leading-[1.2]">&ldquo;{t.q}&rdquo;</blockquote>
              <figcaption className="eyebrow mt-6 text-muted-foreground">— {t.a}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* NEWSLETTER */}
      <section className="bg-soft-gray py-24 px-6 md:px-14">
        <div className="max-w-[900px] mx-auto text-center">
          <div className="eyebrow text-muted-foreground mb-6">The Journal</div>
          <h2 className="font-serif text-4xl md:text-6xl mb-8">Subscribe to the House Letter.</h2>
          <form className="flex flex-col sm:flex-row gap-3 max-w-xl mx-auto" onSubmit={(e) => { e.preventDefault(); alert("Welcome to Bella Monroe."); }}>
            <input type="email" required placeholder="Enter your email" className="flex-1 bg-transparent border-b border-foreground px-2 py-4 focus:outline-none eyebrow"/>
            <button className="eyebrow bg-foreground text-background px-7 py-4 hover:bg-foreground/90">Subscribe</button>
          </form>
        </div>
      </section>
    </Layout>
  );
}
