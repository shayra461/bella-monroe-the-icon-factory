import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { X } from "lucide-react";
import Layout from "@/components/Layout";
import m1 from "@/assets/model-1.jpg";
import m2 from "@/assets/model-2.jpg";
import m3 from "@/assets/model-3.jpg";
import m4 from "@/assets/model-4.jpg";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — Bella Monroe Editorial Archive" },
      { name: "description", content: "Editorial campaigns, runway, and studio work from the Bella Monroe archive." },
      { property: "og:title", content: "Gallery — Bella Monroe" },
      { property: "og:description", content: "Editorial campaigns, runway, and studio archive." },
    ],
  }),
  component: Gallery,
});

const ALL = [
  { img: m4, cat: "Campaign", t: "Noir Vol. 1" },
  { img: m3, cat: "Runway", t: "FW26 Atelier" },
  { img: m2, cat: "Studio", t: "Silver Hour" },
  { img: m1, cat: "Campaign", t: "Ground State" },
  { img: m3, cat: "Runway", t: "Look 09" },
  { img: m4, cat: "Studio", t: "Lacquer" },
  { img: m2, cat: "Campaign", t: "Maison Vela" },
  { img: m1, cat: "Runway", t: "Floor Study" },
  { img: m4, cat: "Studio", t: "Mirror Test" },
];
const CATS = ["All", "Runway", "Studio", "Campaign"] as const;

function Gallery() {
  const [cat, setCat] = useState<typeof CATS[number]>("All");
  const [zoom, setZoom] = useState<string | null>(null);
  const list = cat === "All" ? ALL : ALL.filter(x => x.cat === cat);
  return (
    <Layout>
      <section className="px-6 md:px-14 max-w-[1600px] mx-auto pt-20 pb-12">
        <div className="eyebrow text-muted-foreground mb-8">The Archive</div>
        <h1 className="font-serif text-[12vw] md:text-[8vw] leading-[0.95]">Editorial.<br/><em className="text-silver">Cinematic.</em></h1>

        <div className="mt-14 flex flex-wrap gap-4 border-t border-border pt-6">
          {CATS.map(c => (
            <button key={c} onClick={() => setCat(c)} className={`eyebrow px-4 py-2 transition ${cat === c ? "bg-foreground text-background" : "hover:bg-soft-gray"}`}>
              {c}
            </button>
          ))}
        </div>
      </section>

      <section className="px-6 md:px-14 max-w-[1600px] mx-auto pb-32">
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 [column-fill:_balance]">
          {list.map((g, i) => (
            <button
              key={i}
              onClick={() => setZoom(g.img)}
              className="block mb-6 w-full group hover-zoom relative"
              style={{ breakInside: "avoid" }}
            >
              <img src={g.img} alt={g.t} className={`w-full object-cover ${i % 3 === 0 ? "aspect-[3/4]" : i % 3 === 1 ? "aspect-square" : "aspect-[4/5]"}`}/>
              <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/30 transition-all duration-500 flex items-end p-5">
                <div className="text-background opacity-0 group-hover:opacity-100 transition">
                  <div className="eyebrow">{g.cat}</div>
                  <div className="font-serif text-2xl">{g.t}</div>
                </div>
              </div>
            </button>
          ))}
        </div>
      </section>

      {zoom && (
        <div className="fixed inset-0 z-[60] bg-foreground/95 backdrop-blur flex items-center justify-center p-6 animate-fade-in" onClick={() => setZoom(null)}>
          <button className="absolute top-6 right-6 text-background p-2"><X/></button>
          <img src={zoom} alt="" className="max-h-[90vh] max-w-[90vw] object-contain animate-reveal"/>
        </div>
      )}
    </Layout>
  );
}