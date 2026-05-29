import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Check, Lock } from "lucide-react";
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
              <p className="text-muted-foreground mb-8">Your application has been received. To complete your submission, please pay the non-refundable $30 application fee.</p>
              <Link
                to="/checkout"
                search={{ item: "Model & Talent Development Application Fee", amount: "30" }}
                className="eyebrow inline-flex items-center gap-3 bg-foreground text-background px-8 py-4 hover:opacity-90 transition"
              >
                <Lock size={14}/> Pay Application Fee — $30
              </Link>
              <p className="text-xs text-muted-foreground mt-4">Non-refundable. Supports the administrative processing and coordination of all auditions.</p>
            </div>
          ) : (
            <form className="space-y-7 max-w-2xl" onSubmit={(e) => { e.preventDefault(); setDone(true); window.scrollTo({ top: 0, behavior: "smooth" }); }}>
              <div>
                <h2 className="font-serif text-4xl mb-3">Model &amp; Talent Development Application</h2>
                <div className="eyebrow text-muted-foreground mb-4">About this program</div>
                <p className="text-muted-foreground leading-relaxed mb-3">
                  Bella Monroe Productions is a modeling and talent development production company focused on training, education, branding, and professional growth opportunities within fashion, media, and entertainment.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  We are not a competitive modeling or pageant organization, and participation is centered on development, experience-building, and production opportunities rather than competition.
                </p>
              </div>

              <div className="border border-foreground/20 p-5 bg-soft-gray">
                <div className="eyebrow mb-2">Application Fee — $30</div>
                <p className="text-xs text-muted-foreground">Non-refundable. Supports the administrative processing and coordination of all auditions. Payment is collected after you submit this form.</p>
              </div>

              <Section title="Personal Information">
                <div className="grid md:grid-cols-2 gap-7">
                  <F label="Full Name"><input required className="in"/></F>
                  <F label="Age"><input required type="number" min="14" className="in"/></F>
                  <F label="Phone Number"><input required className="in"/></F>
                  <F label="City Currently Living In"><input required className="in"/></F>
                  <F label="Email"><input required type="email" className="in"/></F>
                </div>
              </Section>

              <Section title="Experience & Background">
                <F label="Are you currently part of any modeling or talent development program?">
                  <Radios name="current_program" options={["Yes", "No"]}/>
                </F>
                <F label="If yes, please list:"><input className="in"/></F>
                <F label="Do you consider yourself a creative?">
                  <Radios name="creative" options={["Yes", "No"]}/>
                </F>
                <F label="If yes, what do you do? (check all that apply)">
                  <div className="grid sm:grid-cols-2 gap-2 pt-2">
                    {["Content Creator","Photographer","Actor","Stylist / Fashion","Music Artist","Choreographer"].map(o => (
                      <label key={o} className="flex items-center gap-2 text-sm"><input type="checkbox" className="accent-foreground"/> {o}</label>
                    ))}
                  </div>
                </F>
                <F label="Other"><input className="in"/></F>
                <F label="Explain"><textarea rows={3} className="in resize-none"/></F>
              </Section>

              <Section title="Talent Category">
                <F label="Which best describes you?">
                  <Radios name="category" options={["Model", "Dancer", "Both", "Other"]}/>
                </F>
                <F label="Other"><input className="in"/></F>
              </Section>

              <Section title="Interest & Commitment">
                <F label="Are you interested in participating in a structured training and development program if selected?">
                  <Radios name="interested" options={["Yes", "No", "Maybe"]}/>
                </F>
                <F label="Our programs may include participation fees depending on training, production, and development opportunities. Would you be open to learning more about program investment requirements?">
                  <Radios name="investment" options={["Yes", "No", "Maybe"]}/>
                </F>
              </Section>

              <Section title="Goals">
                <F label="Why do you want to join Bella Monroe Productions?"><textarea rows={4} className="in resize-none"/></F>
                <F label="What are your modeling or entertainment goals?"><textarea rows={4} className="in resize-none"/></F>
              </Section>

              <Section title="Agreement & Confirmation">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  I confirm that the information provided is true and accurate to the best of my knowledge. I understand that Bella Monroe Productions is a modeling and talent development production company focused on training, branding, and professional opportunities, and is not a competitive modeling or pageant organization. I understand that participation may include structured development programs, training sessions, and production opportunities, and that program investment requirements may apply depending on placement.
                </p>
                <label className="flex items-start gap-3 text-sm pt-2">
                  <input required type="checkbox" className="mt-1 accent-foreground"/>
                  <span>I agree to the statement above.</span>
                </label>
                <div className="grid md:grid-cols-2 gap-7 pt-2">
                  <F label="Signature (type full name)"><input required className="in"/></F>
                  <F label="Date"><input required type="date" className="in"/></F>
                </div>
              </Section>

              <button className="eyebrow bg-foreground text-background px-8 py-4 hover:opacity-90 w-full md:w-auto">Submit & Continue to Payment</button>
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

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="pt-6 border-t border-border space-y-5">
      <div className="eyebrow">{title}</div>
      {children}
    </div>
  );
}

function Radios({ name, options }: { name: string; options: string[] }) {
  return (
    <div className="flex flex-wrap gap-5 pt-2">
      {options.map(o => (
        <label key={o} className="flex items-center gap-2 text-sm">
          <input type="radio" name={name} className="accent-foreground"/> {o}
        </label>
      ))}
    </div>
  );
}