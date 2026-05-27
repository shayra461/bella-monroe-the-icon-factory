import { createFileRoute, Link, useSearch } from "@tanstack/react-router";
import { useState } from "react";
import { Check, Lock, ArrowLeft } from "lucide-react";
import Layout from "@/components/Layout";

export const Route = createFileRoute("/checkout")({
  validateSearch: (s: Record<string, unknown>) => ({
    item: typeof s.item === "string" ? s.item : "Bella Monroe Service",
    amount: typeof s.amount === "string" ? s.amount : "0",
  }),
  head: () => ({
    meta: [
      { title: "Checkout — Bella Monroe" },
      { name: "description", content: "Secure demo checkout for Bella Monroe services." },
    ],
  }),
  component: Checkout,
});

function Checkout() {
  const { item, amount } = useSearch({ from: "/checkout" });
  const [paid, setPaid] = useState(false);
  const [loading, setLoading] = useState(false);

  const onPay = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => { setLoading(false); setPaid(true); }, 1200);
  };

  return (
    <Layout>
      <section className="px-6 md:px-14 max-w-3xl mx-auto pt-20 pb-32">
        <Link to="/services" className="eyebrow text-muted-foreground inline-flex items-center gap-2 mb-8 hover:text-foreground">
          <ArrowLeft size={14}/> Back
        </Link>

        {paid ? (
          <div className="bg-soft-gray p-12 text-center">
            <div className="mx-auto w-14 h-14 rounded-full bg-foreground text-background flex items-center justify-center mb-6">
              <Check size={24}/>
            </div>
            <div className="eyebrow text-muted-foreground mb-3">Demo payment complete</div>
            <h1 className="font-serif text-4xl md:text-5xl leading-[1.05]">Thank you.</h1>
            <p className="mt-4 text-muted-foreground max-w-md mx-auto">
              Your booking for <em>{item}</em> has been received. A house representative will reach out shortly.
            </p>
            <Link to="/" className="eyebrow mt-8 inline-flex items-center gap-3 border border-foreground px-6 py-4 hover:bg-foreground hover:text-background transition">
              Return home
            </Link>
          </div>
        ) : (
          <>
            <div className="eyebrow text-muted-foreground mb-3">Secure checkout · demo</div>
            <h1 className="font-serif text-5xl md:text-6xl leading-[1]">Complete your booking.</h1>

            <div className="mt-10 grid md:grid-cols-[1.2fr_1fr] gap-8">
              <form onSubmit={onPay} className="space-y-5">
                <div>
                  <label className="eyebrow text-muted-foreground block mb-2">Email</label>
                  <input required type="email" placeholder="you@example.com" className="w-full border border-border bg-transparent px-4 py-3"/>
                </div>
                <div>
                  <label className="eyebrow text-muted-foreground block mb-2">Cardholder name</label>
                  <input required placeholder="Full name on card" className="w-full border border-border bg-transparent px-4 py-3"/>
                </div>
                <div>
                  <label className="eyebrow text-muted-foreground block mb-2">Card number</label>
                  <input required placeholder="4242 4242 4242 4242" className="w-full border border-border bg-transparent px-4 py-3 font-mono"/>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="eyebrow text-muted-foreground block mb-2">Expiry</label>
                    <input required placeholder="MM / YY" className="w-full border border-border bg-transparent px-4 py-3 font-mono"/>
                  </div>
                  <div>
                    <label className="eyebrow text-muted-foreground block mb-2">CVC</label>
                    <input required placeholder="123" className="w-full border border-border bg-transparent px-4 py-3 font-mono"/>
                  </div>
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className="eyebrow mt-4 inline-flex items-center justify-center gap-3 bg-foreground text-background px-6 py-4 w-full hover:opacity-90 transition disabled:opacity-60"
                >
                  <Lock size={14}/> {loading ? "Processing…" : `Pay $${Number(amount).toLocaleString()}`}
                </button>
                <p className="text-xs text-muted-foreground text-center">
                  This is a demo checkout. No real card is charged.
                </p>
              </form>

              <aside className="bg-soft-gray p-8 h-fit">
                <div className="eyebrow text-muted-foreground mb-4">Order summary</div>
                <div className="flex justify-between items-baseline pb-4 border-b border-border">
                  <div className="font-serif text-xl pr-4">{item}</div>
                  <div className="font-serif text-xl">${Number(amount).toLocaleString()}</div>
                </div>
                <div className="flex justify-between items-baseline pt-4">
                  <div className="eyebrow text-muted-foreground">Total</div>
                  <div className="font-serif text-2xl">${Number(amount).toLocaleString()}</div>
                </div>
              </aside>
            </div>
          </>
        )}
      </section>
    </Layout>
  );
}