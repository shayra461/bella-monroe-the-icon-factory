import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import Layout from "@/components/Layout";
import m1 from "@/assets/model-1.jpg";
import m2 from "@/assets/model-2.jpg";
import m3 from "@/assets/model-3.jpg";
import m4 from "@/assets/model-4.jpg";

export const Route = createFileRoute("/newsletter")({
  head: () => ({
    meta: [
      { title: "The Journal — Bella Monroe" },
      { name: "description", content: "Editorial previews, runway dispatches, and house news — delivered monthly." },
      { property: "og:title", content: "The Journal — Bella Monroe" },
      { property: "og:description", content: "Subscribe to The House Letter for editorial previews and event invitations." },
    ],
  }),
  component: Newsletter,
});

function Newsletter() {
  const [ok, setOk] = useState(false);
  return (
    <Layout>
      <section className="grid md:grid-cols-2 min-h-[70vh]">
        <div className="p-8 md:p-14 flex flex-col justify-center">
          <div className="eyebrow text-muted-foreground mb-6">The House Letter</div>
          <h1 className="font-serif text-6xl md:text-8xl leading-[0.95]">Style,<br/>seen first.</h1>
          <p className="text-muted-foreground mt-8 max-w-md leading-relaxed">
            Editorial previews, runway dispatches, and private event invitations — written by
            the Bella Monroe editors. One letter, every season.
          </p>
          <form className="mt-10 flex max-w-md" onSubmit={(e) => { e.preventDefault(); setOk(true); }}>
            <input required type="email" placeholder="Your email" className="flex-1 bg-transparent border-b border-foreground px-2 py-4 outline-none"/>
            <button className="eyebrow bg-foreground text-background px-6 py-4 hover:opacity-90">Subscribe</button>
          </form>
          {ok && <div className="eyebrow text-muted-foreground mt-4 animate-fade-up">Welcome to the house.</div>}
        </div>
        <div className="relative hover-zoom min-h-[50vh]">
          <img src={m3} alt="" className="absolute inset-0 w-full h-full object-cover"/>
        </div>
      </section>

      <section className="px-6 md:px-14 max-w-[1600px] mx-auto py-28">
        <div className="flex items-end justify-between mb-12">
          <div>
            <div className="eyebrow text-muted-foreground mb-4">In This Issue</div>
            <h2 className="font-serif text-4xl md:text-6xl">Editorial Previews</h2>
          </div>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { img: m4, t: "The Lacquer Edit", c: "Editorial · 8 min" },
            { img: m2, t: "Casting Diaries 26", c: "Profile · 5 min" },
            { img: m1, t: "Backstage at NOIR", c: "Runway · 12 min" },
          ].map((p) => (
            <article key={p.t} className="group cursor-pointer">
              <div className="hover-zoom aspect-[4/5] mb-5">
                <img src={p.img} alt="" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition duration-700"/>
              </div>
              <div className="eyebrow text-muted-foreground">{p.c}</div>
              <div className="font-serif text-3xl mt-2 link-underline inline-block">{p.t}</div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-foreground text-background py-24 px-6 md:px-14">
        <div className="max-w-[1400px] mx-auto grid md:grid-cols-2 gap-12 items-center">
          <h3 className="font-serif text-4xl md:text-6xl">Upcoming events,<br/>first to your inbox.</h3>
          <p className="text-background/70 leading-relaxed">
            Subscribers receive private invitations to runway shows, editorial launches, and seasonal
            previews — before they are announced anywhere else.
          </p>
        </div>
      </section>
    </Layout>
  );
}