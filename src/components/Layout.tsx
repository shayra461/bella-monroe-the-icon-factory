import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, Instagram, Twitter, Facebook, Youtube } from "lucide-react";
import logoUrl from "@/assets/logo.svg";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/gallery", label: "Gallery" },
  { to: "/booking", label: "Booking" },
  { to: "/calendar", label: "Calendar" },
  { to: "/apply", label: "Apply" },
  { to: "/newsletter", label: "Journal" },
  { to: "/contact", label: "Contact" },
] as const;

export function Logo({ className = "", invert = false }: { className?: string; invert?: boolean }) {
  return (
    <Link to="/" aria-label="Bella Monroe" className={`inline-flex items-center ${className}`}>
      <img
        src={logoUrl}
        alt="Bella Monroe"
        className={`h-14 md:h-20 w-auto transition-all duration-500 ${invert ? "invert-0" : "invert"}`}
      />
    </Link>
  );
}

export function Header() {
  const [open, setOpen] = useState(false);
  const path = useRouterState({ select: s => s.location.pathname });

  useEffect(() => { setOpen(false); }, [path]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background border-b border-border">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10 h-24 md:h-28 flex items-center justify-between">
        <Logo invert={false} />
        <nav className="hidden lg:flex items-center gap-8">
          {NAV.map(n => (
            <Link key={n.to} to={n.to} className="eyebrow link-underline" activeProps={{ className: "eyebrow link-underline text-foreground font-semibold" }}>
              {n.label}
            </Link>
          ))}
        </nav>
        <div className="hidden lg:flex">
          <Link to="/booking" className="eyebrow border border-foreground px-5 py-3 hover:bg-foreground hover:text-background transition-colors duration-500">
            Book Talent
          </Link>
        </div>
        <button className="lg:hidden p-2" onClick={() => setOpen(v => !v)} aria-label="Menu">
          {open ? <X size={22}/> : <Menu size={22}/>}
        </button>
      </div>
      {open && (
        <div className="lg:hidden border-t border-border bg-background animate-fade-in">
          <nav className="flex flex-col px-6 py-6 gap-5">
            {NAV.map(n => (
              <Link key={n.to} to={n.to} className="eyebrow">{n.label}</Link>
            ))}
            <Link to="/booking" className="eyebrow border border-foreground px-5 py-3 text-center mt-2">Book Talent</Link>
          </nav>
        </div>
      )}
    </header>
  );
}

export function Footer() {
  return (
    <footer className="bg-foreground text-background mt-32">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10 py-20 grid gap-12 md:grid-cols-4">
        <div className="md:col-span-2">
          <img src={logoUrl} alt="Bella Monroe" className="h-20 md:h-24 w-auto" />
          <p className="mt-6 max-w-md text-background/70 leading-relaxed">
            A luxury fashion house and talent development agency. Editorial campaigns, runway production,
            and the elevation of new faces into industry-ready icons.
          </p>
          <div className="flex gap-5 mt-8">
            {[Instagram, Twitter, Facebook, Youtube].map((Icon, i) => (
              <a key={i} href="#" className="opacity-70 hover:opacity-100 transition" aria-label="social">
                <Icon size={18}/>
              </a>
            ))}
          </div>
        </div>
        <div>
          <div className="eyebrow text-background/60 mb-5">Agency</div>
          <ul className="space-y-3 text-sm">
            <li><Link to="/about" className="link-underline">About</Link></li>
            <li><Link to="/services" className="link-underline">Services</Link></li>
            <li><Link to="/gallery" className="link-underline">Gallery</Link></li>
            <li><Link to="/calendar" className="link-underline">Calendar</Link></li>
          </ul>
        </div>
        <div>
          <div className="eyebrow text-background/60 mb-5">Talent</div>
          <ul className="space-y-3 text-sm">
            <li><Link to="/apply" className="link-underline">Apply</Link></li>
            <li><Link to="/booking" className="link-underline">Book Now</Link></li>
            <li><Link to="/newsletter" className="link-underline">Journal</Link></li>
            <li><Link to="/contact" className="link-underline">Contact</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-background/15">
        <div className="mx-auto max-w-[1600px] px-6 md:px-10 py-6 flex flex-col md:flex-row gap-3 justify-between text-xs text-background/50">
          <div>© {new Date().getFullYear()} Bella Monroe Agency. All rights reserved.</div>
          <div className="eyebrow">Paris · Milan · New York · Lagos</div>
        </div>
      </div>
    </footer>
  );
}

export default function Layout({ children, dark = false }: { children: React.ReactNode; dark?: boolean }) {
  return (
    <div className={dark ? "bg-foreground text-background min-h-screen" : "bg-background text-foreground min-h-screen"}>
      <Header />
      <main className="pt-24 md:pt-28">{children}</main>
      <Footer />
    </div>
  );
}