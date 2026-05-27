import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Check, ArrowRight } from "lucide-react";
import Layout from "@/components/Layout";
import m1 from "@/assets/model-1.jpg";
import m2 from "@/assets/model-2.jpg";
import m3 from "@/assets/model-3.jpg";

export const Route = createFileRoute("/membership")({
  head: () => ({
    meta: [
      { title: "Membership — Bella Monroe Agency" },
      { name: "description", content: "Platinum and Bronze membership packages: 12-month model development, runway training, and production services." },
      { property: "og:title", content: "Membership — Bella Monroe" },
      { property: "og:description", content: "Select the membership that fits your journey — Platinum development or Bronze runway training." },
    ],
  }),
  component: Membership,
});

type Format = "in-person-private" | "virtual-private" | "in-person-group" | "virtual-group";

const FORMATS: { id: Format; label: string; single: number; bundles: Record<number, number>; perPerson: boolean }[] = [
  {
    id: "in-person-private",
    label: "In-Person (Private)",
    single: 150,
    perPerson: false,
    bundles: { 3: 420, 6: 780, 9: 1080, 12: 1320, 15: 1500, 18: 1620 },
  },
  {
    id: "virtual-private",
    label: "Virtual (Private)",
    single: 100,
    perPerson: false,
    bundles: { 3: 270, 6: 480, 9: 630, 12: 720, 15: 825, 18: 900 },
  },
  {
    id: "in-person-group",
    label: "In-Person Group",
    single: 60,
    perPerson: true,
    bundles: { 3: 150, 6: 300, 9: 450, 12: 600, 15: 750, 18: 900 },
  },
  {
    id: "virtual-group",
    label: "Virtual Group",
    single: 40,
    perPerson: true,
    bundles: { 3: 90, 6: 180, 9: 270, 12: 360, 15: 450, 18: 540 },
  },
];

const PLATINUM_INCLUDES = [
  "Runway Training",
  "Model Branding",
  "Portfolio Development",
  "Social Media Content",
  "Casting Preparation",
  "Exposure Opportunities",
  "Fashion Show & Productions",
];

const PRODUCTION = [
  { t: "Basic Production Support", p: "Starting at $500", d: "Essential on-site support for intimate presentations and small shows." },
  { t: "Full Show Coordination", p: "Starting at $1,000", d: "End-to-end coordination of talent, run-of-show, and backstage logistics." },
  { t: "Full Production Direction", p: "$1,500+", d: "Creative and technical direction of cinematic runway experiences." },
];

function Membership() {
  const [format, setFormat] = useState<Format>("in-person-private");
  const active = FORMATS.find(f => f.id === format)!;
  const bundles = Object.entries(active.bundles).map(([n, p]) => ({ n: Number(n), p }));

  return (
    <Layout>
      {/* Hero */}
      <section className="px-6 md:px-14 max-w-[1600px] mx-auto pt-20 pb-16">
        <div className="eyebrow text-muted-foreground mb-8">Memberships & Packages</div>
        <h1 className="font-serif text-[12vw] md:text-[8vw] leading-[0.95]">
          Choose your<br/><em className="text-silver">path forward.</em>
        </h1>
        <p className="mt-8 max-w-2xl text-muted-foreground leading-relaxed">
          Two distinct routes into the house — a full twelve-month transformation, or focused
          runway training tailored to your pace and format.
        </p>
      </section>

      {/* Platinum */}
      <section className="px-6 md:px-14 max-w-[1600px] mx-auto pb-24">
        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-10 border-t border-border pt-16">
          <div>
            <div className="eyebrow text-muted-foreground mb-4">01 — Platinum Membership</div>
            <h2 className="font-serif text-5xl md:text-6xl leading-[1]">12-Month Model Development Transformation</h2>
            <p className="mt-6 text-muted-foreground leading-relaxed max-w-md">
              A complete, year-long elevation into industry-ready talent — built around the
              standards of the world's leading houses.
            </p>
            <img src={m2} alt="Platinum membership" className="mt-10 w-full aspect-[4/5] object-cover"/>
          </div>

          <div className="bg-soft-gray p-8 md:p-12">
            <div className="grid sm:grid-cols-2 gap-6 pb-8 border-b border-border">
              <div>
                <div className="eyebrow text-muted-foreground mb-2">Adults</div>
                <div className="font-serif text-4xl">$150<span className="text-base text-muted-foreground"> enrollment</span></div>
                <div className="text-sm text-muted-foreground mt-2">$85 / month · ages 18+</div>
              </div>
              <div>
                <div className="eyebrow text-muted-foreground mb-2">Kids</div>
                <div className="font-serif text-4xl">$200<span className="text-base text-muted-foreground"> enrollment</span></div>
                <div className="text-sm text-muted-foreground mt-2">$125 / month · ages 5–17</div>
              </div>
            </div>
            <div className="mt-8">
              <div className="eyebrow text-muted-foreground mb-5">What's included</div>
              <ul className="grid sm:grid-cols-2 gap-3">
                {PLATINUM_INCLUDES.map(i => (
                  <li key={i} className="flex items-start gap-3 text-sm">
                    <Check size={16} className="mt-0.5 shrink-0"/>{i}
                  </li>
                ))}
              </ul>
            </div>
            <Link to="/apply" className="eyebrow mt-10 inline-flex items-center gap-3 border border-foreground px-6 py-4 hover:bg-foreground hover:text-background transition">
              Enroll in Platinum <ArrowRight size={14}/>
            </Link>
            <p className="text-xs text-muted-foreground mt-4">Monthly fees may apply.</p>
          </div>
        </div>
      </section>

      {/* Bronze */}
      <section className="px-6 md:px-14 max-w-[1600px] mx-auto pb-24">
        <div className="border-t border-border pt-16">
          <div className="eyebrow text-muted-foreground mb-4">02 — Bronze Membership Package</div>
          <h2 className="font-serif text-5xl md:text-6xl leading-[1] max-w-3xl">Runway Training Only</h2>
          <p className="mt-6 max-w-2xl text-foreground/80 leading-relaxed text-lg">
            Focused development for walk, posture, stage presence, and runway confidence.
          </p>

          {/* Single Sessions — all four formats shown */}
          <div className="mt-14">
            <div className="eyebrow text-muted-foreground mb-6">Single Sessions</div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {FORMATS.map(f => (
                <div key={f.id} className="bg-soft-gray p-6">
                  <div className="eyebrow text-muted-foreground">{f.label}</div>
                  <div className="font-serif text-4xl mt-3">
                    ${f.single}
                    {f.perPerson && <span className="text-sm text-muted-foreground"> per person</span>}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bundle selector */}
          <div className="mt-16">
            <div className="eyebrow text-muted-foreground mb-6">Session Bundles — choose a format</div>
            <div className="flex flex-wrap gap-3">
              {FORMATS.map(f => {
                const groupLabel =
                  f.id === "in-person-private" ? "In-Person Bundles (Private)" :
                  f.id === "virtual-private" ? "Virtual Bundles (Private)" :
                  f.id === "in-person-group" ? "Group Bundles (In-Person)" :
                  "Group Bundles (Virtual)";
                return (
                  <button
                    key={f.id}
                    onClick={() => setFormat(f.id)}
                    className={`eyebrow px-5 py-3 border transition-colors duration-300 ${
                      format === f.id
                        ? "bg-foreground text-background border-foreground"
                        : "border-border hover:border-foreground"
                    }`}
                  >
                    {groupLabel}
                  </button>
                );
              })}
            </div>

            <div className="mt-8">
              <div className="font-serif text-2xl mb-5">
                {active.id === "in-person-private" && "In-Person Bundles (Private)"}
                {active.id === "virtual-private" && "Virtual Bundles (Private)"}
                {active.id === "in-person-group" && "Group Bundles (In-Person)"}
                {active.id === "virtual-group" && "Group Bundles (Virtual)"}
              </div>
              <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
                {bundles.map(b => (
                  <Link
                    key={b.n}
                    to="/booking"
                    className="group border border-border p-5 hover:border-foreground transition-colors"
                  >
                    <div className="eyebrow text-muted-foreground">{b.n} Sessions</div>
                    <div className="font-serif text-2xl mt-2">
                      ${b.p.toLocaleString()}
                      {active.perPerson && <span className="text-xs text-muted-foreground"> per person</span>}
                    </div>
                  </Link>
                ))}
              </div>
              <Link to="/booking" className="eyebrow mt-8 inline-flex items-center gap-3 border border-foreground px-6 py-4 hover:bg-foreground hover:text-background transition">
                Book Bronze sessions <ArrowRight size={14}/>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Production */}
      <section className="px-6 md:px-14 max-w-[1600px] mx-auto pb-32">
        <div className="border-t border-border pt-16 grid lg:grid-cols-[1fr_1.2fr] gap-10">
          <div>
            <div className="eyebrow text-muted-foreground mb-4">03 — Production Services</div>
            <h2 className="font-serif text-5xl md:text-6xl leading-[1]">Hire our production team.</h2>
            <p className="mt-6 text-muted-foreground leading-relaxed max-w-md">
              From intimate presentations to full cinematic runway experiences — staffed,
              coordinated, and creatively directed by our house team.
            </p>
            <img src={m3} alt="Production services" className="mt-10 w-full aspect-[4/5] object-cover hidden lg:block"/>
          </div>
          <div className="space-y-4">
            {PRODUCTION.map(s => (
              <div key={s.t} className="border border-border p-8 hover:border-foreground transition-colors">
                <div className="flex flex-wrap items-baseline justify-between gap-3">
                  <h3 className="font-serif text-3xl">{s.t}</h3>
                  <div className="eyebrow">{s.p}</div>
                </div>
                <p className="text-muted-foreground mt-3 text-sm leading-relaxed">{s.d}</p>
                <Link to="/contact" className="eyebrow mt-6 inline-flex items-center gap-3 border border-foreground px-5 py-3 hover:bg-foreground hover:text-background transition">
                  Hire our production team <ArrowRight size={14}/>
                </Link>
              </div>
            ))}
            <img src={m1} alt="Production" className="w-full aspect-[16/9] object-cover lg:hidden mt-6"/>
          </div>
        </div>
      </section>
    </Layout>
  );
}