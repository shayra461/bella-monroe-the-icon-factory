import { createFileRoute } from "@tanstack/react-router";
import Layout from "@/components/Layout";
import m1 from "@/assets/model-1.jpg";
import m2 from "@/assets/model-2.jpg";
import m3 from "@/assets/model-3.jpg";
import m4 from "@/assets/model-4.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Bella Monroe Agency" },
      { name: "description", content: "The founder story, mission, and vision of Bella Monroe — a luxury fashion house redefining modern talent development." },
      { property: "og:title", content: "About — Bella Monroe" },
      { property: "og:description", content: "Founder story, mission, and vision of Bella Monroe." },
    ],
  }),
  component: About,
});

function About() {
  return (
    <Layout>
      <section className="px-6 md:px-14 max-w-[1600px] mx-auto pt-20 pb-24">
        <div className="eyebrow text-muted-foreground mb-8 animate-fade-up">Chapter I — The House</div>
        <h1 className="font-serif text-[14vw] md:text-[10vw] leading-[0.9] animate-fade-up delay-100">
          A house built<br/><em className="text-silver">for the iconic.</em>
        </h1>
      </section>

      <section className="grid md:grid-cols-2 gap-0">
        <div className="hover-zoom h-[80vh]">
          <img src={m4} alt="" className="w-full h-full object-cover"/>
        </div>
        <div className="flex items-center px-6 md:px-14 py-20">
          <div className="max-w-xl">
            <div className="eyebrow text-muted-foreground mb-6">Founder's Note</div>
            <h2 className="font-serif text-4xl md:text-5xl leading-[1.1] mb-8">From a quiet vision to a luxury house.</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Bella Monroe began as a single belief: that talent, given structure and elegance,
              becomes legacy. We built a house where new faces are not discovered — they are developed.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Every campaign, every runway, every fitting is a chapter in a longer story —
              the story of who modeling can become in the next century of fashion.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-foreground text-background py-28 px-6 md:px-14">
        <div className="max-w-[1400px] mx-auto grid md:grid-cols-2 gap-20">
          <div>
            <div className="eyebrow text-background/60 mb-6">Mission</div>
            <h3 className="font-serif text-3xl md:text-4xl leading-[1.2] mb-6">To elevate emerging talent into industry-ready icons.</h3>
            <p className="text-background/70 leading-relaxed">
              We develop, elevate, and position emerging models and creative talent through
              structured training, curated fashion experiences, and professional industry
              opportunities — building confidence, discipline, and brand identity.
            </p>
          </div>
          <div>
            <div className="eyebrow text-background/60 mb-6">Vision</div>
            <h3 className="font-serif text-3xl md:text-4xl leading-[1.2] mb-6">To become the global standard of luxury talent development.</h3>
            <p className="text-background/70 leading-relaxed">
              A platform where creativity, modeling, and luxury production intersect —
              producing iconic runway shows, editorial campaigns, and experiential fashion
              events that redefine modern talent development.
            </p>
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="py-28 px-6 md:px-14 max-w-[1400px] mx-auto">
        <div className="eyebrow text-muted-foreground mb-6">Timeline</div>
        <h2 className="font-serif text-5xl md:text-7xl mb-16">A house in motion.</h2>
        <div className="space-y-12">
          {[
            { y: "2022", t: "The first atelier", d: "Bella Monroe is founded with a single studio and three faces." },
            { y: "2023", t: "Editorial debut", d: "Our talent debuts across regional editorial campaigns and trunk shows." },
            { y: "2024", t: "Runway production", d: "First in-house produced runway: 'NOIR' — sold-out, critically acclaimed." },
            { y: "2025", t: "International expansion", d: "Partnerships across Paris, Milan, and New York." },
            { y: "2026", t: "The new era", d: "A global house with 40+ developed talents and a dedicated creative studio." },
          ].map((e) => (
            <div key={e.y} className="grid md:grid-cols-12 gap-6 border-t border-border pt-8">
              <div className="md:col-span-2 font-serif text-3xl">{e.y}</div>
              <div className="md:col-span-4 eyebrow">{e.t}</div>
              <div className="md:col-span-6 text-muted-foreground">{e.d}</div>
            </div>
          ))}
        </div>
      </section>

      {/* TEAM */}
      <section className="bg-soft-gray py-28 px-6 md:px-14">
        <div className="max-w-[1600px] mx-auto">
          <div className="eyebrow text-muted-foreground mb-6">The Team</div>
          <h2 className="font-serif text-5xl md:text-7xl mb-16">Faces of the house.</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { img: m2, name: "Bella Monroe", role: "Founder & Creative Director" },
              { img: m3, name: "Imani Hart", role: "Head of Talent" },
              { img: m1, name: "Naomi Cole", role: "Director of Production" },
            ].map((p) => (
              <div key={p.name}>
                <div className="hover-zoom aspect-[3/4] mb-5">
                  <img src={p.img} alt={p.name} className="w-full h-full object-cover grayscale"/>
                </div>
                <div className="font-serif text-2xl">{p.name}</div>
                <div className="eyebrow text-muted-foreground mt-1">{p.role}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}