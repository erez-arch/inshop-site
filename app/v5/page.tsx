"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";

const CAPS = [
  { num:"01", title:"Face Recognition",    body:"AI identifies you in under one second. Register once — recognized everywhere, forever. No card, no phone, no tap."   },
  { num:"02", title:"Smart Display",        body:"Your name, your offers, your screen — rebuilt the moment you approach. Every customer gets a different display."       },
  { num:"03", title:"Live Inventory",       body:"Every product tracked in real time. The moment stock drops, an auto-order fires to the supplier. Zero human input."   },
  { num:"04", title:"AI Shelf Verify",      body:"After every restock, AI validates placement, labels, and quantity before any payment releases. Zero guesswork."       },
  { num:"05", title:"Door-Close Checkout",  body:"Close the door. Checkout complete. System tracked what you took, charged your payment, sent an SMS. Nothing else."   },
  { num:"06", title:"INSHOP OS",            body:"Suppliers, fillers, customers, every unit — one operating system. One dashboard. One truth. No spreadsheets ever."   },
];

const LOCS = ["Profit Holon","Profit Shoham","Profit Kiryat Ono","Profit Modi'in","Profit Yokneam","Profit Petah Tikva","Profit Kiryat Yam","Profit Rosh HaAyin","Profit Yavne","Lazuz Petah Tikva"];

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
      transform: !m || on ? "translateY(0)" : "translateY(28px)",
      transition: m ? `opacity 0.7s ease ${delay}s, transform 0.7s cubic-bezier(0.16,1,0.3,1) ${delay}s` : "none",
    }}>
      {children}
    </div>
  );
}

export default function V5() {
  const [scrolled, setScrolled] = useState(false);
  const [hovered, setHovered] = useState<number | null>(null);
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <div className="bg-[#080808] text-white overflow-x-hidden" style={{ fontFamily: "var(--font-geist-sans), sans-serif" }}>
      <style>{`
        @keyframes tickerV5 { from { transform: translateX(0); } to { transform: translateX(-50%); } }
        @keyframes amberDot { 0%,100% { opacity:1; } 50% { opacity:0.3; } }
      `}</style>

      {/* NAV */}
      <nav className={`fixed top-0 inset-x-0 z-40 transition-all duration-400 ${scrolled ? "bg-[#080808]/92 backdrop-blur-xl border-b border-[#F59E0B]/10" : ""}`}>
        <div className="max-w-[1280px] mx-auto px-8 h-[60px] flex items-center justify-between">
          <Link href="/" className="font-black text-[1.1rem] tracking-tight text-white no-underline">
            in<span style={{ color:"#F59E0B" }}>S</span>hop
            <span className="ml-2 font-mono text-[9px] tracking-[0.25em] uppercase" style={{ color:"rgba(245,158,11,0.4)" }}>v5</span>
          </Link>
          <div className="hidden md:flex items-center gap-10">
            {[["System","#system"],["Hardware","#hardware"],["Live","#live"]].map(([l,h]) => (
              <a key={h} href={h} className="font-mono text-[11px] tracking-[0.15em] uppercase text-white/30 hover:text-white/80 transition-colors" style={{ textDecoration:"none" }}>{l}</a>
            ))}
          </div>
          <div className="flex items-center gap-3">
            <div className="hidden md:flex items-center gap-0.5 rounded-full p-0.5" style={{ border:"1px solid rgba(245,158,11,0.15)", background:"rgba(245,158,11,0.03)" }}>
              {([["V1","/"],["V2","/v2"],["V3","/v3"],["V5","/v5"],["V6","/v6"]] as [string,string][]).map(([lbl,href]) => (
                lbl === "V5"
                  ? <span key={lbl} className="text-[10px] font-mono px-3 py-1.5 rounded-full font-bold" style={{ background:"#F59E0B", color:"#080808" }}>{lbl}</span>
                  : <Link key={lbl} href={href} className="text-[10px] font-mono px-3 py-1.5 rounded-full text-white/25 hover:text-white/70 transition-colors" style={{ textDecoration:"none" }}>{lbl}</Link>
              ))}
            </div>
            <a href="#contact" className="font-bold text-[12px] px-4 py-2 rounded-md" style={{ background:"#F59E0B", color:"#080808", textDecoration:"none" }}>
              Partner with us
            </a>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="min-h-screen flex items-center pt-[60px] px-8">
        <div className="max-w-[1280px] mx-auto w-full grid grid-cols-1 lg:grid-cols-[1fr_260px] gap-16 items-center py-24">
          {/* Left: headline */}
          <div>
            <Fade delay={0.1}>
              <p className="font-mono text-[10px] tracking-[0.4em] uppercase mb-6" style={{ color:"rgba(245,158,11,0.6)" }}>◉ Autonomous Retail — Live Now</p>
            </Fade>
            <Fade delay={0.2}>
              <h1 className="font-black leading-[1.0] tracking-tight mb-6" style={{ fontSize:"clamp(3rem,8vw,7rem)" }}>
                The store<br /><span style={{ color:"#F59E0B" }}>knows you.</span>
              </h1>
            </Fade>
            <Fade delay={0.35}>
              <p className="text-lg leading-relaxed mb-10 max-w-[480px]" style={{ color:"rgba(255,255,255,0.45)" }}>
                Walk up. Get recognized. Walk out.<br />No card. No app. No queue.
              </p>
            </Fade>
            <Fade delay={0.45}>
              <div className="flex flex-wrap gap-4">
                <a href="#system" className="inline-flex items-center gap-2 font-bold text-sm px-7 py-3.5 rounded-lg" style={{ background:"#F59E0B", color:"#080808", textDecoration:"none" }}>
                  See how it works
                  <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7"/></svg>
                </a>
                <a href="#hardware" className="inline-flex items-center gap-2 font-semibold text-sm px-7 py-3.5 rounded-lg" style={{ border:"1px solid rgba(245,158,11,0.25)", color:"rgba(245,158,11,0.85)", textDecoration:"none" }}>
                  The hardware
                </a>
              </div>
            </Fade>
          </div>

          {/* Right: amber stats column */}
          <div className="hidden lg:flex flex-col gap-8 pl-10" style={{ borderLeft:"1px solid rgba(245,158,11,0.15)" }}>
            {([["<1s","Recognition time"],["10","Live units"],["24/7","Always open"],["0","Queue length"]] as [string,string][]).map(([num, label], i) => (
              <Fade key={label} delay={0.3 + i * 0.08}>
                <div>
                  <div className="font-black leading-none" style={{ fontSize:"2.5rem", letterSpacing:"-0.04em", color:"#F59E0B" }}>{num}</div>
                  <div className="font-mono text-[11px] tracking-[0.2em] uppercase mt-1" style={{ color:"rgba(255,255,255,0.3)" }}>{label}</div>
                </div>
              </Fade>
            ))}
          </div>
        </div>
      </section>

      {/* AMBER TICKER */}
      <div className="overflow-hidden py-3" style={{ background:"#F59E0B" }}>
        <div style={{ display:"flex", animation:"tickerV5 22s linear infinite", width:"max-content" }}>
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex gap-12 whitespace-nowrap pr-12">
              {["Face Recognition","Frictionless Checkout","Zero Queue","24/7 Access","Smart Inventory","AI-Verified Refills","One-Time Registration"].map(t => (
                <span key={t} className="font-mono font-black text-[11px] tracking-[0.15em] uppercase" style={{ color:"#080808" }}>{t} &nbsp;◈</span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* SYSTEM */}
      <section id="system" className="py-28 px-8">
        <div className="max-w-[1280px] mx-auto">
          <Fade>
            <p className="font-mono text-[10px] tracking-[0.4em] uppercase mb-4" style={{ color:"rgba(245,158,11,0.5)" }}>The System</p>
          </Fade>
          <Fade delay={0.1}>
            <h2 className="font-black tracking-tight mb-16 leading-[1.05]" style={{ fontSize:"clamp(2rem,5vw,4rem)" }}>
              Six technologies.<br /><span style={{ color:"rgba(255,255,255,0.2)" }}>One unit.</span>
            </h2>
          </Fade>
          <div style={{ borderTop:"1px solid rgba(245,158,11,0.1)" }}>
            {CAPS.map((cap, i) => (
              <Fade key={cap.num} delay={i * 0.06}>
                <div
                  onMouseEnter={() => setHovered(i)}
                  onMouseLeave={() => setHovered(null)}
                  className="grid gap-8 transition-all duration-300"
                  style={{
                    gridTemplateColumns:"80px 1fr",
                    padding:"1.75rem 1.5rem",
                    borderBottom:"1px solid rgba(245,158,11,0.08)",
                    borderLeft: hovered === i ? "3px solid #F59E0B" : "3px solid transparent",
                    background: hovered === i ? "rgba(245,158,11,0.05)" : "transparent",
                  }}>
                  <div className="font-mono font-black transition-colors duration-300" style={{ fontSize:"1.8rem", color: hovered === i ? "#F59E0B" : "rgba(245,158,11,0.18)" }}>{cap.num}</div>
                  <div>
                    <h3 className="font-extrabold text-[1.05rem] mb-2 tracking-tight">{cap.title}</h3>
                    <p className="text-sm leading-relaxed" style={{ color:"rgba(255,255,255,0.4)" }}>{cap.body}</p>
                  </div>
                </div>
              </Fade>
            ))}
          </div>
        </div>
      </section>

      {/* HARDWARE */}
      <section id="hardware" className="py-28 px-8" style={{ background:"#0d0c09" }}>
        <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <Fade>
            <div className="relative rounded-2xl overflow-hidden" style={{ background:"#080808" }}>
              <img src="/machine.jpg" alt="INSHOP Unit" className="w-full h-auto block" style={{ filter:"saturate(0.45) contrast(1.15)" }} />
              <div className="absolute inset-0 pointer-events-none" style={{ boxShadow:"inset 0 0 80px 40px #0d0c09" }} />
              <div className="absolute inset-0 pointer-events-none" style={{ background:"radial-gradient(ellipse at center, rgba(245,158,11,0.07) 0%, transparent 65%)" }} />
            </div>
          </Fade>
          <div>
            <Fade delay={0.1}>
              <p className="font-mono text-[10px] tracking-[0.4em] uppercase mb-4" style={{ color:"rgba(245,158,11,0.5)" }}>The Hardware</p>
            </Fade>
            <Fade delay={0.2}>
              <h2 className="font-black tracking-tight mb-6 leading-[1.05]" style={{ fontSize:"clamp(2rem,4vw,3.5rem)" }}>
                One unit.<br />Six technologies.
              </h2>
            </Fade>
            <Fade delay={0.3}>
              <p className="text-base leading-relaxed mb-8" style={{ color:"rgba(255,255,255,0.45)" }}>
                Each INSHOP unit is a complete autonomous retail system. Face recognition camera, smart display, live inventory sensors, and the full INSHOP OS — all in one slim cabinet.
              </p>
            </Fade>
            <Fade delay={0.4}>
              <div className="flex flex-col gap-3">
                {[["◉","Face camera — sub-second recognition"],["◈","Smart screen — personalized in real time"],["◊","Weight sensors — real-time inventory"],["⊕","INSHOP OS — full stack, always on"]].map(([glyph, text]) => (
                  <div key={text} className="flex items-center gap-4">
                    <span style={{ color:"#F59E0B", fontSize:"1.1rem" }}>{glyph}</span>
                    <span className="text-sm" style={{ color:"rgba(255,255,255,0.55)" }}>{text}</span>
                  </div>
                ))}
              </div>
            </Fade>
          </div>
        </div>
      </section>

      {/* LIVE */}
      <section id="live" className="py-28 px-8">
        <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <Fade>
              <p className="font-mono text-[10px] tracking-[0.4em] uppercase mb-4" style={{ color:"rgba(245,158,11,0.5)" }}>Already Deployed</p>
            </Fade>
            <Fade delay={0.1}>
              <h2 className="font-black tracking-tight mb-6 leading-[1.05]" style={{ fontSize:"clamp(2rem,5vw,4rem)" }}>
                Not a demo.<br /><span style={{ color:"#F59E0B" }}>Live now.</span>
              </h2>
            </Fade>
            <Fade delay={0.2}>
              <p className="text-base leading-relaxed mb-10" style={{ color:"rgba(255,255,255,0.45)" }}>
                10 fully operational units across Israel. Real customers. Real purchases. Real revenue — every single day.
              </p>
            </Fade>
            <Fade delay={0.3}>
              <div className="grid grid-cols-2 gap-4">
                {([["10","Live locations"],["₪20K+","Monthly / unit"],["<1s","Recognition"],["0","Queue length"]] as [string,string][]).map(([num, label]) => (
                  <div key={label} className="p-5 rounded-xl" style={{ border:"1px solid rgba(245,158,11,0.12)", background:"rgba(245,158,11,0.03)" }}>
                    <div className="font-black text-3xl leading-none tracking-tight" style={{ color:"#F59E0B" }}>{num}</div>
                    <div className="font-mono text-[10px] tracking-[0.2em] uppercase mt-1" style={{ color:"rgba(255,255,255,0.3)" }}>{label}</div>
                  </div>
                ))}
              </div>
            </Fade>
          </div>
          <div>
            <Fade delay={0.15}>
              <p className="font-mono text-[11px] tracking-[0.2em] uppercase mb-5" style={{ color:"rgba(245,158,11,0.4)" }}>Active Locations</p>
            </Fade>
            <div>
              {LOCS.map((loc, i) => (
                <Fade key={loc} delay={i * 0.04}>
                  <div className="flex justify-between items-center py-3" style={{ borderBottom:"1px solid rgba(245,158,11,0.07)" }}>
                    <span className="text-sm" style={{ color:"rgba(255,255,255,0.55)" }}>{loc}</span>
                    <span className="w-[6px] h-[6px] rounded-full inline-block" style={{ background:"#F59E0B", animation:"amberDot 2s infinite", animationDelay:`${i * 0.18}s` }} />
                  </div>
                </Fade>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA — FULL AMBER (signature V5 element) */}
      <section id="contact" className="py-32 px-8" style={{ background:"#F59E0B" }}>
        <div className="max-w-3xl mx-auto text-center">
          <Fade>
            <p className="font-mono text-[10px] tracking-[0.4em] uppercase mb-5" style={{ color:"rgba(8,8,8,0.4)" }}>Ready to partner</p>
          </Fade>
          <Fade delay={0.1}>
            <h2 className="font-black tracking-tight leading-[1.0] mb-6" style={{ fontSize:"clamp(2.5rem,7vw,6rem)", color:"#080808" }}>
              Bring INSHOP<br />to your location.
            </h2>
          </Fade>
          <Fade delay={0.2}>
            <p className="text-lg leading-relaxed max-w-md mx-auto mb-10" style={{ color:"rgba(8,8,8,0.5)" }}>
              We handle installation, software, and ongoing operations. You get a live revenue-generating unit from day one.
            </p>
          </Fade>
          <Fade delay={0.3}>
            <a href="mailto:info@inshop.io" className="inline-flex items-center gap-3 font-black text-[15px] px-10 py-5 rounded-lg" style={{ background:"#080808", color:"#ffffff", textDecoration:"none" }}>
              Get in Touch
              <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 7l-10 10M7 7h10v10"/></svg>
            </a>
          </Fade>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-8 px-8 flex justify-between items-center flex-wrap gap-4" style={{ background:"#050505", borderTop:"1px solid rgba(245,158,11,0.08)" }}>
        <span className="font-mono text-[11px] tracking-[0.15em] uppercase" style={{ color:"rgba(255,255,255,0.2)" }}>© 2026 INSHOP — Autonomous Retail Network</span>
        <div className="flex gap-4">
          {([["V1","/"],["V2","/v2"],["V3","/v3"],["V6","/v6"]] as [string,string][]).map(([lbl,href]) => (
            <Link key={lbl} href={href} className="font-mono text-[11px] hover:text-white/50 transition-colors" style={{ color:"rgba(255,255,255,0.2)", textDecoration:"none" }}>{lbl}</Link>
          ))}
        </div>
      </footer>
    </div>
  );
}
