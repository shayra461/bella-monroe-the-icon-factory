import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import Layout from "@/components/Layout";
import m1 from "@/assets/model-1.jpg";
import m2 from "@/assets/model-2.jpg";
import m3 from "@/assets/model-3.jpg";
import m4 from "@/assets/model-4.jpg";

export const Route = createFileRoute("/calendar")({
  head: () => ({
    meta: [
      { title: "Calendar — Bella Monroe Events & Sessions" },
      { name: "description", content: "Upcoming runway shows, talent sessions, and fashion events from Bella Monroe." },
      { property: "og:title", content: "Calendar — Bella Monroe" },
      { property: "og:description", content: "Upcoming runway shows, workshops, and fashion events." },
    ],
  }),
  component: CalendarPage,
});

const EVENTS = [
  { date: "12 Mar", day: "Thu", time: "20:00", title: "NOIR — Couture Runway", loc: "Paris · Atelier 14", cat: "Runway", img: m4 },
  { date: "23 Mar", day: "Mon", time: "10:00", title: "New Faces Workshop", loc: "Milano · Studio Vela", cat: "Workshop", img: m2 },
  { date: "04 Apr", day: "Sat", time: "19:30", title: "Spring Editorial Showcase", loc: "New York · Gallery 9", cat: "Editorial", img: m1 },
  { date: "18 Apr", day: "Sat", time: "16:00", title: "Runway Coaching Intensive", loc: "London · House Studio", cat: "Coaching", img: m3 },
  { date: "02 May", day: "Sat", time: "21:00", title: "Maison Vela × Bella Monroe", loc: "Lagos · The Atrium", cat: "Show", img: m4 },
];

function CalendarPage() {
  const [sel, setSel] = useState<number | null>(0);
  return (
    <Layout>
      <section className="px-6 md:px-14 max-w-[1600px] mx-auto pt-20 pb-16">
        <div className="eyebrow text-muted-foreground mb-6">Schedule</div>
        <h1 className="font-serif text-[12vw] md:text-[8vw] leading-[0.95]">Season 26<br/><em className="text-silver">Calendar.</em></h1>
      </section>

      <section className="px-6 md:px-14 max-w-[1600px] mx-auto pb-32 grid lg:grid-cols-12 gap-10">
        <div className="lg:col-span-7 border-t border-border">
          {EVENTS.map((e, i) => (
            <button key={i} onClick={() => setSel(i)} className={`w-full text-left grid grid-cols-[80px_70px_1fr_auto] gap-6 items-center py-8 border-b border-border transition-colors ${sel === i ? "bg-soft-gray" : "hover:bg-soft-gray/60"} px-2`}>
              <div>
                <div className="font-serif text-3xl">{e.date}</div>
                <div className="eyebrow text-muted-foreground">{e.day}</div>
              </div>
              <div className="eyebrow text-muted-foreground">{e.time}</div>
              <div>
                <div className="font-serif text-2xl md:text-3xl">{e.title}</div>
                <div className="text-sm text-muted-foreground mt-1">{e.loc}</div>
              </div>
              <div className="eyebrow border border-foreground px-3 py-1 hidden md:block">{e.cat}</div>
            </button>
          ))}
        </div>
        <aside className="lg:col-span-5 lg:sticky lg:top-28 self-start">
          {sel !== null && (
            <div className="animate-fade-up" key={sel}>
              <div className="hover-zoom aspect-[4/5]">
                <img src={EVENTS[sel].img} alt="" className="w-full h-full object-cover"/>
              </div>
              <div className="eyebrow text-muted-foreground mt-6">{EVENTS[sel].cat} · {EVENTS[sel].loc}</div>
              <h3 className="font-serif text-3xl md:text-4xl mt-2">{EVENTS[sel].title}</h3>
              <p className="text-muted-foreground mt-4 leading-relaxed">
                An invitation-only experience. Limited seats remain — request access through the house concierge.
              </p>
              <button className="eyebrow mt-6 bg-foreground text-background px-6 py-3 hover:opacity-90">Request Access</button>
            </div>
          )}
        </aside>
      </section>
    </Layout>
  );
}