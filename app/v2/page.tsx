"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";

// ── Cursor glow ───────────────────────────────────────────────────────────────
function CursorGlow() {
  const [pos, setPos] = useState({ x: -1000, y: -1000 });
  useEffect(() => {
    const fn = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", fn);
    return () => window.removeEventListener("mousemove", fn);
  }, []);
  return (
    <div className="pointer-events-none fixed inset-0 z-0" aria-hidden>
      <div className="absolute inset-0"
        style={{ background: `radial-gradient(700px circle at ${pos.x}px ${pos.y}px, rgba(0,161,224,0.07) 0%, transparent 60%)` }} />
    </div>
  );
}

// ── Clip reveal (text slides up from behind a cut line) ───────────────────────
function R({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
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
    <div ref={ref} className={className} style={{ overflow: "hidden" }}>
      <div style={{
        transform: !m || on ? "translateY(0)" : "translateY(105%)",
        opacity: !m || on ? 1 : 0,
        transition: m ? `transform 0.9s cubic-bezier(0.16,1,0.3,1) ${delay}s, opacity 0.5s ease ${delay}s` : "none",
      }}>
        {children}
      </div>
    </div>
  );
}

// ── Capabilities data ─────────────────────────────────────────────────────────
const CAPS = [
  { num:"01", label:"IDENTITY",        title:"Face Recognition",    desc:"Proprietary AI identifies every customer in under one second. Register once — recognized everywhere, forever. No card. No phone. No tap.",  col:"#00A1E0" },
  { num:"02", label:"PERSONALIZATION", title:"Smart Display",        desc:"The moment your face is scanned, the terminal rebuilds a screen just for you — your name, your offers, your promotions. Real-time, every visit.", col:"#06AED5" },
  { num:"03", label:"INVENTORY",       title:"Live Stock Tracking",  desc:"Every product on every shelf tracked continuously across all units. Drop below threshold — order fires automatically. No human check required.", col:"#00C7B1" },
  { num:"04", label:"AI VERIFY",       title:"Shelf Verification",   desc:"After every restock, filler photographs the shelf. AI validates placement, label facing, and quantity. Payment releases only when all checks pass.", col:"#5C67F2" },
  { num:"05", label:"CHECKOUT",        title:"Door-Close Payment",   desc:"Close the door. That's checkout. System tracked what you took, charged your stored payment, sent an SMS receipt. Nothing else needed.",          col:"#1589EE" },
  { num:"06", label:"OS",              title:"INSHOP Operating System","desc":"Suppliers, fillers, customers, and every live unit in one OS. One dashboard. One source of truth. No calls, no sheets, no guesses.",          col:"#0070D2" },
];

const LOCATIONS = ["Profit Holon","Profit Shoham","Profit Kiryat Ono","Profit Modi'in","Profit Yokneam","Profit Petah Tikva","Profit Kiryat Yam","Profit Rosh HaAyin","Profit Yavne","Lazuz Petah Tikva"];

// ── Page ──────────────────────────────────────────────────────────────────────
export default function V2() {
  const [hovered, setHovered] = useState<number | null>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <div className="bg-[#04070d] text-[#e2e8f0] overflow-x-hidden" style={{ fontFamily: "var(--font-geist-sans), sans-serif" }}>
      <CursorGlow />

      {/* ── NAV ── */}
      <nav className={`fixed top-0 inset-x-0 z-40 transition-all duration-500 ${scrolled ? "border-b border-white/[0.06] bg-[#04070d]/80 backdrop-blur-xl" : ""}`}>
        <div className="max-w-[1400px] mx-auto px-8 h-[60px] flex items-center justify-between">
          <Link href="/" className="text-sm font-black tracking-tight">
            in<span style={{ color:"#00A1E0" }}>S</span>hop
            <span className="ml-2 font-mono text-[9px] tracking-[0.25em] text-white/20 uppercase">v2</span>
          </Link>
          <div className="hidden md:flex items-center gap-10 font-mono text-[10px] tracking-[0.2em] uppercase text-white/30">
            <a href="#system" className="hover:text-white/70 transition-colors">System</a>
            <a href="#hardware" className="hover:text-white/70 transition-colors">Hardware</a>
            <a href="#live" className="hover:text-white/70 transition-colors">Live</a>
          </div>
          <div className="flex items-center gap-3">
            <div className="hidden md:flex items-center gap-0.5 rounded-full p-0.5" style={{ background:"rgba(255,255,255,0.04)", border:"1px solid rgba(255,255,255,0.07)" }}>
              {([["V1","/"],["V2","/v2"],["V3","/v3"],["V5","/v5"],["V6","/v6"]] as [string,string][]).map(([lbl,href]) => (
                lbl === "V2"
                  ? <span key={lbl} className="text-[10px] font-mono px-2.5 py-1.5 rounded-full font-bold text-[#00A1E0]" style={{ background:"rgba(0,161,224,0.12)" }}>{lbl}</span>
                  : <Link key={lbl} href={href} className="text-[10px] font-mono px-2.5 py-1.5 rounded-full text-white/25 hover:text-white/70 transition-colors">{lbl}</Link>
              ))}
            </div>
            <a href="#contact" className="font-mono text-[10px] tracking-[0.2em] uppercase border border-white/15 hover:border-[#00A1E0]/50 hover:text-[#00A1E0] text-white/40 px-5 py-2.5 transition-all">
              Partner
            </a>
          </div>
        </div>
      </nav>

      {/* ── HERO ── */}
      <section className="relative min-h-screen flex flex-col justify-between pt-[60px] pb-16 px-8 overflow-hidden">
        {/* Background grid */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.025]"
          style={{ backgroundImage:"linear-gradient(#fff 1px,transparent 1px),linear-gradient(90deg,#fff 1px,transparent 1px)", backgroundSize:"90px 90px" }} />
        {/* Accent blob */}
        <div className="absolute top-1/2 right-[-200px] -translate-y-1/2 w-[900px] h-[900px] rounded-full pointer-events-none"
          style={{ background:"radial-gradient(circle, rgba(0,161,224,0.05) 0%, transparent 65%)" }} />

        <div className="relative z-10 max-w-[1400px] mx-auto w-full pt-20">
          <div style={{ animation:"rise 1s cubic-bezier(0.16,1,0.3,1) 0.15s both" }}>
            <p className="font-mono text-[10px] tracking-[0.45em] text-white/25 uppercase mb-16">
              Autonomous Retail — Est. 2024
            </p>
          </div>
          <div>
            <h1 className="font-black leading-[0.82] tracking-tight select-none"
                style={{ fontSize:"clamp(4.5rem,14vw,15rem)", animation:"rise 1.1s cubic-bezier(0.16,1,0.3,1) 0.28s both" }}>
              The store<br />
              <em className="not-italic" style={{ color:"#00A1E0" }}>remembers</em><br />
              <span className="text-outline">you.</span>
            </h1>
          </div>
        </div>

        <div className="relative z-10 max-w-[1400px] mx-auto w-full flex items-end justify-between gap-8"
             style={{ animation:"rise 1s cubic-bezier(0.16,1,0.3,1) 0.5s both" }}>
          <p className="text-white/35 text-lg leading-relaxed max-w-xs">
            Walk up. Get recognized.<br />Walk out — no card, no app, no queue.
          </p>
          <a href="#system" className="group flex items-center gap-3 font-mono text-xs uppercase tracking-[0.25em] text-white/30 hover:text-white/70 transition-colors pb-1 border-b border-white/10 hover:border-white/30">
            Explore the system
            <span className="group-hover:translate-x-2 transition-transform duration-300 inline-block">→</span>
          </a>
        </div>

        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-transparent to-white/[0.08]" />
      </section>

      {/* ── STATS STRIP ── */}
      <div className="border-y border-white/[0.06]">
        <div className="max-w-[1400px] mx-auto px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/[0.06]">
            {[
              { val:"< 1s",  label:"Recognition time" },
              { val:"10",    label:"Live locations"   },
              { val:"₪20K+", label:"Monthly / unit"   },
              { val:"0",     label:"Queues. Ever."    },
            ].map((s) => (
              <div key={s.label} className="px-10 py-12 first:pl-0">
                <div className="font-black leading-none text-white mb-3" style={{ fontSize:"clamp(2.5rem,5vw,5rem)" }}>
                  {s.val}
                </div>
                <div className="font-mono text-[10px] tracking-[0.25em] uppercase text-white/25">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── MANIFESTO ── */}
      <section className="py-36 px-8 border-b border-white/[0.06]">
        <div className="max-w-[1400px] mx-auto">
          <R>
            <p className="font-black leading-[1.05]" style={{ fontSize:"clamp(2rem,5.5vw,6rem)" }}>
              The checkout is gone.<br />
              The queue is over.<br />
              <span className="text-white/18">The camera remembers.</span>
            </p>
          </R>
        </div>
      </section>

      {/* ── CAPABILITY ROWS ── */}
      <section id="system">
        <div className="max-w-[1400px] mx-auto px-8">
          <div className="py-12 flex items-center justify-between border-b border-white/[0.06]">
            <span className="font-mono text-[10px] tracking-[0.4em] uppercase text-white/20">The System</span>
            <span className="font-mono text-[10px] text-white/15">06 Capabilities</span>
          </div>
          {CAPS.map((cap, i) => (
            <div key={cap.num}
              className="border-b border-white/[0.06] transition-colors duration-400 cursor-default"
              style={{ backgroundColor: hovered === i ? `${cap.col}08` : "transparent" }}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}>
              <R delay={i * 0.05}>
                <div className="py-7 grid grid-cols-12 gap-4 items-center">
                  <div className="col-span-1 font-mono text-[11px] text-white/20">{cap.num}</div>
                  <div className="col-span-3">
                    <span className="font-mono text-[9px] tracking-[0.35em] uppercase transition-colors duration-300"
                      style={{ color: hovered === i ? cap.col : "rgba(226,232,240,0.25)" }}>
                      {cap.label}
                    </span>
                  </div>
                  <div className="col-span-4">
                    <h3 className="font-black text-2xl md:text-3xl transition-colors duration-300"
                      style={{ color: hovered === i ? "#fff" : "rgba(226,232,240,0.6)" }}>
                      {cap.title}
                    </h3>
                  </div>
                  <div className="col-span-4">
                    <p className="text-sm leading-relaxed transition-colors duration-300"
                      style={{ color: hovered === i ? "rgba(226,232,240,0.5)" : "rgba(226,232,240,0.18)" }}>
                      {cap.desc}
                    </p>
                  </div>
                </div>
              </R>
            </div>
          ))}
        </div>
      </section>

      {/* ── MACHINE ── */}
      <section id="hardware" className="py-36 border-y border-white/[0.06]">
        <div className="max-w-[1400px] mx-auto px-8">
          <div className="grid lg:grid-cols-[5fr_4fr] gap-20 items-center">

            {/* Image */}
            <div className="relative overflow-hidden bg-[#04070d]" style={{ filter:"saturate(0.65) contrast(1.08)" }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/machine.jpg" alt="INSHOP Unit" className="w-full h-auto block" />
              <div className="absolute inset-0 pointer-events-none" style={{ boxShadow:"inset 0 0 80px 50px #04070d" }} />
            </div>

            {/* Copy */}
            <div>
              <R>
                <span className="font-mono text-[10px] tracking-[0.4em] uppercase text-white/20 block mb-10">The Hardware</span>
              </R>
              <R delay={0.1}>
                <h2 className="font-black leading-[0.88] mb-10" style={{ fontSize:"clamp(3rem,6vw,6.5rem)" }}>
                  One unit.<br />
                  <span className="text-white/20">Six systems.</span><br />
                  One OS.
                </h2>
              </R>
              <R delay={0.2}>
                <p className="text-white/35 text-lg leading-relaxed mb-12 max-w-sm">
                  Face recognition. Smart display. Live inventory. AI shelf verification. Frictionless checkout. Full operating system — all in a single unit.
                </p>
              </R>
              <R delay={0.3}>
                <div className="space-y-3">
                  {["Face AI Engine","Smart Terminal","Live Inventory","AI Shelf Check","Auto Checkout","Supplier OS"].map((f, i) => (
                    <div key={f} className="flex items-center gap-4 py-3 border-b border-white/[0.05] group">
                      <span className="font-mono text-[10px] text-white/20 w-6">{String(i+1).padStart(2,"0")}</span>
                      <span className="font-mono text-xs tracking-widest uppercase text-white/35 group-hover:text-white/60 transition-colors">{f}</span>
                    </div>
                  ))}
                </div>
              </R>
            </div>
          </div>
        </div>
      </section>

      {/* ── LIVE ── */}
      <section id="live" className="py-36 border-b border-white/[0.06]">
        <div className="max-w-[1400px] mx-auto px-8">
          <div className="grid lg:grid-cols-[1fr_2fr] gap-20 items-start">
            <div>
              <R>
                <span className="font-mono text-[10px] tracking-[0.4em] uppercase text-white/20 block mb-8">Already live</span>
              </R>
              <R delay={0.1}>
                <h2 className="font-black leading-[0.85]" style={{ fontSize:"clamp(4rem,8vw,8rem)" }}>
                  Not a<br />demo.
                </h2>
              </R>
              <R delay={0.2}>
                <p className="text-white/30 text-base mt-8 leading-relaxed max-w-xs">
                  10 fully operational units. Real customers. Real purchases. Every day.
                </p>
              </R>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 pt-2">
              {LOCATIONS.map((loc, i) => (
                <R key={loc} delay={i * 0.04}>
                  <div className="flex items-center gap-4 py-4 border-b border-white/[0.05] group">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#00A1E0] shrink-0 group-hover:shadow-[0_0_10px_rgba(0,161,224,0.8)] transition-all" />
                    <span className="font-mono text-xs text-white/25 group-hover:text-white/55 transition-colors tracking-wide">{loc}</span>
                  </div>
                </R>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── MODULES ── */}
      <section className="py-36 border-b border-white/[0.06]">
        <div className="max-w-[1400px] mx-auto px-8">
          <div className="mb-20">
            <R>
              <h2 className="font-black leading-[0.88]" style={{ fontSize:"clamp(3rem,7vw,7rem)" }}>
                Three modules.<br />
                <span className="text-white/15">One network.</span>
              </h2>
            </R>
          </div>
          <div className="grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/[0.06]">
            {[
              { num:"01", icon:"📦", title:"Supplier",  line:"Detect. Order. Deliver. Refill.", href:"/modules/supplier", col:"#00C7B1" },
              { num:"02", icon:"♻️", title:"Fillers",   line:"Alert. Accept. Restock. Verify.", href:"/modules/fillers",  col:"#1589EE" },
              { num:"03", icon:"🤝", title:"Referral",  line:"Share. Redeem. Earn.", href:"/modules/referral", col:"#00A1E0" },
            ].map((m, i) => (
              <R key={m.num} delay={i * 0.1}>
                <Link href={m.href} className="block px-10 first:pl-0 last:pr-0 py-10 md:py-0 group">
                  <div className="flex items-baseline justify-between mb-14">
                    <span className="font-mono text-[10px] text-white/15">{m.num}</span>
                    <span className="font-mono text-xs text-white/10 group-hover:text-white/40 group-hover:translate-x-1 transition-all">→</span>
                  </div>
                  <div className="text-4xl mb-8">{m.icon}</div>
                  <h3 className="font-black text-4xl mb-4 text-white/55 group-hover:text-white transition-colors duration-300">{m.title}</h3>
                  <p className="font-mono text-[11px] tracking-[0.15em] uppercase leading-relaxed text-white/20 group-hover:text-white/40 transition-colors duration-300">{m.line}</p>
                </Link>
              </R>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section id="contact" className="py-52 px-8">
        <div className="max-w-[1400px] mx-auto">
          <R>
            <span className="font-mono text-[10px] tracking-[0.45em] uppercase text-white/20 block mb-10">Get in touch</span>
          </R>
          <R delay={0.08}>
            <h2 className="font-black leading-[0.82] mb-16" style={{ fontSize:"clamp(4rem,11vw,11rem)" }}>
              Bring INSHOP<br />
              <span className="text-white/12">to your</span><br />
              <em className="not-italic" style={{ color:"#00A1E0" }}>location.</em>
            </h2>
          </R>
          <R delay={0.18}>
            <a href="mailto:info@inshop.io"
               className="inline-flex items-center gap-5 font-mono text-sm uppercase tracking-[0.2em] text-white/30 hover:text-white/70 border-b border-white/10 hover:border-white/35 pb-2 transition-all duration-300">
              info@inshop.io
              <span className="group-hover:translate-x-2 transition-transform">→</span>
            </a>
          </R>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="border-t border-white/[0.06] py-8 px-8">
        <div className="max-w-[1400px] mx-auto flex items-center justify-between">
          <span className="font-black text-sm">in<span style={{ color:"#00A1E0" }}>S</span>hop</span>
          <span className="font-mono text-[10px] text-white/20 uppercase tracking-widest">© 2026 Autonomous Retail</span>
          <Link href="/" className="font-mono text-[10px] text-white/20 hover:text-white/50 transition-colors uppercase tracking-widest">
            ← V1 Classic
          </Link>
        </div>
      </footer>

      <style>{`
        @keyframes rise {
          from { opacity:0; transform:translateY(40px); }
          to   { opacity:1; transform:none; }
        }
        .text-outline {
          -webkit-text-stroke: 1px rgba(226,232,240,0.3);
          color: transparent;
        }
        .text-white\/18 { color: rgba(255,255,255,0.18); }
        .text-white\/12 { color: rgba(255,255,255,0.12); }
      `}</style>
    </div>
  );
}
