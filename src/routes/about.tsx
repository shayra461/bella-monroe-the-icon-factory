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
          <div className="eyebrow text-muted-foreground mb-6">Meet the BMP Crew</div>
          <h2 className="font-serif text-5xl md:text-7xl mb-16">Meet the BMP Crew.</h2>
          <div className="grid md:grid-cols-2 gap-12 md:gap-20">
            <article>
              <div className="font-serif text-3xl md:text-4xl mb-2">Jamaal Fuller-Bey</div>
              <div className="eyebrow text-muted-foreground mb-6">Production Professional</div>
              <div className="space-y-5 text-muted-foreground leading-relaxed">
                <p>
                  Jamaal Fuller-Bey is a production professional with experience across live television,
                  global music festivals, stadium-scale productions, and international touring. Credits
                  include serving as a Production Assistant on major productions such as the MTV Video
                  Music Awards (VMAs), Global Citizen Festival, and a ton of music festivals, the Emmy
                  Award-winning Savage x Fenty Vol. 4, and the Rihanna's two-time Emmy Award-winning
                  Super Bowl LVII Halftime Show. Additional experience includes working as Back of House
                  Quartermaster for the Emmy Award-winning Beyoncé Bowl.
                </p>
                <p>
                  In touring, has supported large-scale arena and world tours as Back of House
                  Coordinator for Kid Cudi's To The Moon World Tour and the North American leg of SZA's
                  SOS Tour. Recognized for strong logistics coordination, fast-paced production support,
                  artist and crew operations, and delivering seamless execution in high-pressure live
                  entertainment environments.
                </p>
              </div>
            </article>

            <article>
              <div className="font-serif text-3xl md:text-4xl mb-2">Jhante' Belt</div>
              <div className="eyebrow text-muted-foreground mb-6">Casting Director &amp; Creative Producer</div>
              <div className="space-y-5 text-muted-foreground leading-relaxed">
                <p>
                  Jhante' Belt is an energized, creative, and detailed-oriented entertainment
                  professional with a strong passion for music, talent development, and creative
                  production.
                </p>
                <p>
                  As a casting director, Jhante' specializes in identifying diverse talent, coordinating
                  auditions, and creating authentic, engaging casts for film, television, stage
                  productions, and live events. She is committed to delivering seamless execution while
                  fostering a positive and inspiring creative environment. With over 20 years of
                  experience in entertainment and 15 years in production, she has built a diverse
                  background in dancing, modeling, singing, background vocals, staging, staffing, and
                  talent acquisition.
                </p>
                <p>
                  Known for her creativity, professionalism, and eye for talent, Jhante' is dedicated to
                  helping others discover, develop, and elevate their gifts. To name a few projects and
                  assignments completed by Jhante': Interning for Washington D.C.'s own WPGC, WKYS, and
                  WHUR, she has gained substantial experience while networking with others in the
                  industry. Jhante' was recently accepted into a creative cohort. Mayor Bowser's "202
                  Creates" residency program to network and expand her nonprofit organization dedicated
                  to youth and adults here in the city, "Jus Jai Foundation."
                </p>
                <p>
                  Her experience includes coordinating auditions/events/productions with local and
                  out-of-town companies/agencies, reserving and scouting event spaces or venues for
                  production, hosting small business expos, brand development, and supporting live
                  entertainment &amp; promotion environments, while collaborating with creatives to bring
                  visions to life with excellence and organization. She is dedicated to maintaining a
                  professional and organized production process no matter what.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* ABOUT ME */}
      <section className="py-28 px-6 md:px-14 max-w-[900px] mx-auto text-center">
        <div className="hover-zoom aspect-square w-56 md:w-72 mx-auto mb-10 rounded-full overflow-hidden">
          <img src={m2} alt="Bella Monroe" className="w-full h-full object-cover"/>
        </div>
        <div className="eyebrow text-muted-foreground mb-6">About Me</div>
        <h2 className="font-serif text-4xl md:text-6xl leading-[1.05] mb-8">Bella Monroe</h2>
        <p className="text-muted-foreground leading-relaxed text-lg">
          Founder &amp; Creative Director of the Bella Monroe Agency. I built this
          house to give emerging talent the structure, elegance, and opportunity
          they deserve — turning new faces into industry-ready icons.
        </p>
      </section>
    </Layout>
  );
}