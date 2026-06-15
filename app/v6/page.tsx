"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";

const CAPS = [
  { num:"01", title:"Face Recognition",    body:"AI identifies you in under one second. Register once at any INSHOP unit — recognized everywhere, forever."          },
  { num:"02", title:"Smart Display",        body:"The terminal rebuilds a screen just for you the moment you approach — your name, your offers, your promotions."       },
  { num:"03", title:"Live Inventory",       body:"Every product on every shelf tracked in real time. Stock drops below threshold — an automatic order fires instantly." },
  { num:"04", title:"AI Shelf Verify",      body:"After every restock, AI validates placement, label facing, and quantity before any payment is released."             },
  { num:"05", title:"Door-Close Checkout",  body:"Close the door. Checkout complete. System tracked what you took, charged your payment, sent an SMS receipt."         },
  { num:"06", title:"INSHOP OS",            body:"Suppliers, fillers, customers, and every live unit connected to one OS. One dashboard. One source of truth."         },
];

const LOCS = ["Profit Holon","Profit Shoham","Profit Kiryat Ono","Profit Modi'in","Profit Yokneam","Profit Petah Tikva","Profit Kiryat Yam","Profit Rosh HaAyin","Profit Yavne","Lazuz Petah Tikva"];

const GOLD = "#b8912f";
const CREAM = "#f5f2ed";
const INK = "#0a0a0a";

function Fade({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [on, setOn] = useState(false);
  const [m, setM] = useState(false);
  useEffect(() => { setM(true); }, []);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setOn(true); obs.disconnect(); } }, { threshold: 0.05 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return (
    <div ref={ref} className={className} style={{
      opacity: !m || on ? 1 : 0,
      transform: !m || on ? "translateY(0)" : "translateY(20px)",
      transition: m ? `opacity 0.85s ease ${delay}s, transform 0.85s cubic-bezier(0.16,1,0.3,1) ${delay}s` : "none",
    }}>
      {children}
    </div>
  );
}

export default function V6() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <div className="overflow-x-hidden" style={{ background: CREAM, color: INK, fontFamily:"var(--font-geist-sans), sans-serif" }}>

      {/* NAV */}
      <nav className="fixed top-0 inset-x-0 z-40 transition-all duration-300" style={{
        background: scrolled ? "rgba(245,242,237,0.94)" : "rgba(245,242,237,0.98)",
        backdropFilter: "blur(16px)",
        borderBottom: scrolled ? `1px solid rgba(10,10,10,0.09)` : "1px solid transparent",
      }}>
        <div className="max-w-[1280px] mx-auto px-8 h-[60px] flex items-center justify-between">
          <Link href="/" className="font-black text-[1.1rem] tracking-tight" style={{ color: INK, textDecoration:"none" }}>
            in<span style={{ color: GOLD }}>S</span>hop
            <span className="ml-2 font-mono text-[9px] tracking-[0.25em] uppercase" style={{ color:`${GOLD}90` }}>v6</span>
          </Link>
          <div className="hidden md:flex items-center gap-8">
            {[["System","#system"],["Hardware","#hardware"],["Live","#live"]].map(([l,h]) => (
              <a key={h} href={h} className="text-sm hover:opacity-100 transition-opacity" style={{ color:`${INK}80`, textDecoration:"none" }}>{l}</a>
            ))}
          </div>
          <div className="flex items-center gap-3">
            <div className="hidden md:flex items-center gap-0.5 rounded-full p-0.5" style={{ border:`1px solid rgba(10,10,10,0.12)`, background:"rgba(10,10,10,0.03)" }}>
              {([["V1","/"],["V2","/v2"],["V3","/v3"],["V5","/v5"],["V6","/v6"]] as [string,string][]).map(([lbl,href]) => (
                lbl === "V6"
                  ? <span key={lbl} className="text-[10px] font-mono px-3 py-1.5 rounded-full font-bold text-white" style={{ background: INK }}>{lbl}</span>
                  : <Link key={lbl} href={href} className="text-[10px] font-mono px-3 py-1.5 rounded-full transition-colors" style={{ color:"rgba(10,10,10,0.35)", textDecoration:"none" }}>{lbl}</Link>
              ))}
            </div>
            <a href="#contact" className="font-bold text-[12px] px-4 py-2 rounded-full text-white" style={{ background: INK, textDecoration:"none" }}>
              Partner with us
            </a>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="relative min-h-screen flex flex-col justify-center items-center text-center px-8 pb-10" style={{ paddingTop:"120px" }}>
        <div className="max-w-5xl mx-auto">
          <Fade delay={0.1}>
            <div className="flex items-center justify-center gap-3 mb-10">
              <div className="h-px w-16" style={{ background: GOLD }} />
              <p className="font-mono text-[10px] tracking-[0.45em] uppercase" style={{ color: GOLD }}>Autonomous Retail Network</p>
              <div className="h-px w-16" style={{ background: GOLD }} />
            </div>
          </Fade>
          <Fade delay={0.2}>
            <h1 className="font-black leading-[1.0] tracking-tight mb-8" style={{ fontSize:"clamp(3.5rem,10vw,9rem)", color: INK }}>
              The store<br />knows you.
            </h1>
          </Fade>
          <Fade delay={0.35}>
            <p className="text-lg leading-relaxed max-w-[480px] mx-auto mb-12" style={{ color:`${INK}70` }}>
              Walk up. Get recognized. Walk out. No card, no app, no queue. The future of retail — operating in Israel today.
            </p>
          </Fade>
          <Fade delay={0.45}>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="#system" className="inline-flex items-center gap-2 font-bold text-sm px-8 py-4 rounded-full text-white" style={{ background: INK, textDecoration:"none" }}>
                Explore the system
                <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7"/></svg>
              </a>
              <a href="#hardware" className="inline-flex items-center gap-2 font-semibold text-sm px-8 py-4 rounded-full" style={{ border:`1px solid rgba(10,10,10,0.2)`, color:`${INK}bb`, textDecoration:"none" }}>
                See the hardware
              </a>
            </div>
          </Fade>
        </div>
        {/* Decorative gold line down */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-px h-16" style={{ background:`linear-gradient(to bottom, ${GOLD}80, transparent)` }} />
      </section>

      {/* MANIFESTO — dark inset block */}
      <section style={{ background: INK, padding:"5rem 2rem" }}>
        <div className="max-w-4xl mx-auto">
          <Fade>
            <div className="h-px mb-14" style={{ background:"rgba(245,242,237,0.07)" }} />
          </Fade>
          <Fade delay={0.1}>
            <blockquote className="font-black leading-[1.1] tracking-tight text-white" style={{ fontSize:"clamp(2rem,5vw,4.5rem)", margin:0 }}>
              "The checkout is gone. The queue is over. The camera remembers."
            </blockquote>
          </Fade>
          <Fade delay={0.25}>
            <div className="mt-12 flex items-center gap-4">
              <div className="h-px flex-1" style={{ background:"rgba(245,242,237,0.07)" }} />
              <span className="font-mono text-[11px] tracking-[0.25em] uppercase" style={{ color:"rgba(245,242,237,0.25)" }}>INSHOP · Autonomous Retail · Est. 2024</span>
            </div>
          </Fade>
        </div>
      </section>

      {/* SYSTEM — editorial 3-column grid */}
      <section id="system" className="py-28 px-8" style={{ background: CREAM }}>
        <div className="max-w-[1280px] mx-auto">
          <Fade>
            <div className="flex items-center gap-4 mb-12">
              <div className="h-px w-10" style={{ background: GOLD }} />
              <p className="font-mono text-[10px] tracking-[0.4em] uppercase" style={{ color: GOLD }}>The System</p>
            </div>
          </Fade>
          <Fade delay={0.1}>
            <h2 className="font-black tracking-tight mb-16 leading-[1.05]" style={{ fontSize:"clamp(2rem,5vw,4rem)", color: INK }}>
              Six technologies.<br /><span style={{ color:`${INK}25` }}>One unit.</span>
            </h2>
          </Fade>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3" style={{ borderTop:`1px solid rgba(10,10,10,0.1)` }}>
            {CAPS.map((cap, i) => (
              <Fade key={cap.num} delay={i * 0.07}>
                <div className="p-8 group hover:bg-white transition-colors duration-300" style={{
                  borderRight:`1px solid rgba(10,10,10,0.1)`,
                  borderBottom:`1px solid rgba(10,10,10,0.1)`,
                }}>
                  <div className="font-black mb-5 leading-none transition-colors duration-300 group-hover:text-[#b8912f]" style={{ fontSize:"2.5rem", letterSpacing:"-0.04em", color:"rgba(184,145,47,0.18)" }}>{cap.num}</div>
                  <h3 className="font-black text-lg mb-3 tracking-tight" style={{ color: INK }}>{cap.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color:`${INK}65` }}>{cap.body}</p>
                </div>
              </Fade>
            ))}
          </div>
        </div>
      </section>

      {/* HARDWARE — editorial */}
      <section id="hardware" className="py-28 px-8" style={{ background:"#eee9e0" }}>
        <div className="max-w-[1280px] mx-auto">
          <Fade>
            <div className="flex items-center gap-4 mb-12">
              <div className="h-px w-10" style={{ background: GOLD }} />
              <p className="font-mono text-[10px] tracking-[0.4em] uppercase" style={{ color: GOLD }}>The Hardware</p>
            </div>
          </Fade>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
            <div>
              <Fade delay={0.1}>
                <h2 className="font-black tracking-tight mb-8 leading-[1.05]" style={{ fontSize:"clamp(2rem,4vw,4rem)", color: INK }}>
                  One unit.<br />A complete system.
                </h2>
              </Fade>
              <Fade delay={0.2}>
                <p className="text-base leading-relaxed mb-10" style={{ color:`${INK}60`, maxWidth:"420px" }}>
                  Each INSHOP unit contains a face recognition camera, a personalized display screen, real-time inventory sensors, and the full INSHOP operating system — in one elegantly designed cabinet.
                </p>
              </Fade>
              <Fade delay={0.3}>
                <div>
                  <div className="h-px mb-8" style={{ background:"rgba(10,10,10,0.1)" }} />
                  {[["Face Recognition","AI camera identifies any registered customer in under one second."],["Smart Display","Personalized screen with name, offers, and promotions — rebuilt in real time."],["Live Inventory","Weight sensors track every product continuously. Auto-reorder when stock drops."],["INSHOP OS","The full operating system. Runs everything — hardware, logistics, and people."]].map(([title, body], i) => (
                    <Fade key={title} delay={0.3 + i * 0.07}>
                      <div className="pb-6 mb-6" style={{ borderBottom:"1px solid rgba(10,10,10,0.08)" }}>
                        <div className="flex justify-between items-start gap-4">
                          <div>
                            <div className="font-bold text-sm mb-1" style={{ color: INK }}>{title}</div>
                            <div className="text-sm" style={{ color:`${INK}55` }}>{body}</div>
                          </div>
                          <span className="font-mono text-[10px] mt-0.5 shrink-0" style={{ color: GOLD }}>{String(i+1).padStart(2,"0")}</span>
                        </div>
                      </div>
                    </Fade>
                  ))}
                </div>
              </Fade>
            </div>
            {/* Editorial machine image — grayscale in a black mat frame */}
            <Fade delay={0.15}>
              <div>
                <div className="relative" style={{ border:`1px solid rgba(10,10,10,0.18)`, padding:"3px", background: INK }}>
                  <img src="/machine.jpg" alt="INSHOP Unit" className="w-full h-auto block" style={{ filter:"saturate(0) contrast(1.05)" }} />
                  <div className="absolute inset-0 pointer-events-none" style={{ boxShadow:"inset 0 0 50px 15px rgba(238,233,224,0.35)" }} />
                </div>
                <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-center mt-4" style={{ color:`${INK}35` }}>INSHOP Unit — Retail Series 1</p>
              </div>
            </Fade>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="px-8" style={{ background: CREAM, borderTop:`1px solid rgba(10,10,10,0.08)` }}>
        <div className="max-w-[1280px] mx-auto grid grid-cols-2 md:grid-cols-4" style={{ borderTop:`1px solid rgba(10,10,10,0.1)` }}>
          {([["10","Live Locations"],["₪20K+","Monthly / Unit"],["<1s","Recognition Time"],["24/7","Always Operating"]] as [string,string][]).map(([num, label], i) => (
            <Fade key={label} delay={i * 0.08}>
              <div className="py-10 px-8" style={{ borderRight:`1px solid rgba(10,10,10,0.08)` }}>
                <div className="font-black leading-none mb-2 tracking-tight" style={{ fontSize:"clamp(2rem,4vw,3.5rem)", color: INK }}>{num}</div>
                <div className="font-mono text-[11px] tracking-[0.2em] uppercase" style={{ color:`${INK}45` }}>{label}</div>
              </div>
            </Fade>
          ))}
        </div>
      </section>

      {/* LIVE */}
      <section id="live" className="py-28 px-8" style={{ background: CREAM }}>
        <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <Fade>
              <div className="flex items-center gap-4 mb-8">
                <div className="h-px w-10" style={{ background: GOLD }} />
                <p className="font-mono text-[10px] tracking-[0.4em] uppercase" style={{ color: GOLD }}>Already Deployed</p>
              </div>
            </Fade>
            <Fade delay={0.1}>
              <h2 className="font-black tracking-tight mb-6 leading-[1.05]" style={{ fontSize:"clamp(2rem,5vw,4rem)", color: INK }}>
                Not a pilot.<br />Operating now.
              </h2>
            </Fade>
            <Fade delay={0.2}>
              <p className="text-base leading-relaxed" style={{ color:`${INK}60`, maxWidth:"380px" }}>
                10 fully operational units across Israel. Real customers, real purchases, measurable results — every day.
              </p>
            </Fade>
          </div>
          <div>
            <Fade delay={0.15}>
              <p className="font-mono text-[11px] tracking-[0.2em] uppercase mb-6" style={{ color:`${INK}45` }}>Active Locations</p>
            </Fade>
            <div>
              {LOCS.map((loc, i) => (
                <Fade key={loc} delay={i * 0.04}>
                  <div className="flex justify-between items-center py-3" style={{ borderBottom:`1px solid rgba(10,10,10,0.08)` }}>
                    <span className="text-sm" style={{ color:`${INK}70` }}>{loc}</span>
                    <span className="w-[7px] h-[7px] rounded-full inline-block" style={{ background: GOLD }} />
                  </div>
                </Fade>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA — FULL BLACK (signature V6 element — the only dark section) */}
      <section id="contact" className="py-32 px-8" style={{ background: INK }}>
        <div className="max-w-3xl mx-auto text-center">
          <Fade>
            <div className="flex items-center justify-center gap-4 mb-10">
              <div className="h-px w-14" style={{ background:`${GOLD}60` }} />
              <p className="font-mono text-[10px] tracking-[0.45em] uppercase" style={{ color:`${GOLD}90` }}>Let's Build Together</p>
              <div className="h-px w-14" style={{ background:`${GOLD}60` }} />
            </div>
          </Fade>
          <Fade delay={0.1}>
            <h2 className="font-black tracking-tight leading-[1.0] text-white mb-6" style={{ fontSize:"clamp(2.5rem,7vw,6rem)" }}>
              Bring INSHOP<br />to your location.
            </h2>
          </Fade>
          <Fade delay={0.2}>
            <p className="text-lg leading-relaxed max-w-md mx-auto mb-10" style={{ color:"rgba(245,242,237,0.4)" }}>
              We handle installation, software, and ongoing operations. You get a live revenue-generating unit from day one.
            </p>
          </Fade>
          <Fade delay={0.3}>
            <a href="mailto:info@inshop.io" className="inline-flex items-center gap-3 font-bold text-[15px] px-10 py-5 rounded-full" style={{ background: CREAM, color: INK, textDecoration:"none" }}>
              Get in Touch
              <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 7l-10 10M7 7h10v10"/></svg>
            </a>
          </Fade>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-8 px-8 flex justify-between items-center flex-wrap gap-4" style={{ background: CREAM, borderTop:`1px solid rgba(10,10,10,0.09)` }}>
        <span className="font-mono text-[11px] tracking-[0.15em] uppercase" style={{ color:`${INK}35` }}>© 2026 INSHOP — Autonomous Retail Network</span>
        <div className="flex gap-4">
          {([["V1","/"],["V2","/v2"],["V3","/v3"],["V5","/v5"]] as [string,string][]).map(([lbl,href]) => (
            <Link key={lbl} href={href} className="font-mono text-[11px] transition-opacity hover:opacity-70" style={{ color:`${INK}35`, textDecoration:"none" }}>{lbl}</Link>
          ))}
        </div>
      </footer>
    </div>
  );
}
