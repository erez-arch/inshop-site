"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";

// ── Aurora blobs ──────────────────────────────────────────────────────────────
function Aurora() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      <div className="absolute rounded-full"
        style={{ width:900, height:900, top:"-30%", right:"-15%", background:"radial-gradient(circle, rgba(92,103,242,0.35) 0%, transparent 65%)", filter:"blur(90px)", animation:"blobA 22s ease-in-out infinite" }} />
      <div className="absolute rounded-full"
        style={{ width:700, height:700, bottom:"-20%", left:"-10%", background:"radial-gradient(circle, rgba(0,161,224,0.28) 0%, transparent 65%)", filter:"blur(80px)", animation:"blobB 28s ease-in-out infinite" }} />
      <div className="absolute rounded-full"
        style={{ width:500, height:500, top:"45%", left:"35%", background:"radial-gradient(circle, rgba(0,199,177,0.2) 0%, transparent 65%)", filter:"blur(70px)", animation:"blobC 19s ease-in-out infinite" }} />
      <div className="absolute inset-0" style={{ background:"rgba(6,2,18,0.65)", backdropFilter:"none" }} />
    </div>
  );
}

// ── Glass card ────────────────────────────────────────────────────────────────
function Glass({ children, className = "", hover = false, style = {} }:
  { children: React.ReactNode; className?: string; hover?: boolean; style?: React.CSSProperties }) {
  return (
    <div
      className={`rounded-2xl border border-white/[0.08] transition-all duration-500 ${hover ? "hover:border-white/20 hover:bg-white/[0.07]" : ""} ${className}`}
      style={{ background:"rgba(255,255,255,0.04)", backdropFilter:"blur(24px)", WebkitBackdropFilter:"blur(24px)", ...style }}>
      {children}
    </div>
  );
}

// ── Scroll reveal ─────────────────────────────────────────────────────────────
function Fade({ children, className = "", delay = 0 }:
  { children: React.ReactNode; className?: string; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [on, setOn] = useState(false);
  const [m, setM] = useState(false);
  useEffect(() => { setM(true); }, []);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setOn(true); obs.disconnect(); } }, { threshold: 0.06 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return (
    <div ref={ref} className={className} style={{
      opacity: !m || on ? 1 : 0,
      transform: !m || on ? "none" : "translateY(32px)",
      transition: m ? `opacity 0.8s ease ${delay}s, transform 0.8s cubic-bezier(0.16,1,0.3,1) ${delay}s` : "none",
    }}>{children}</div>
  );
}

// ── Data ──────────────────────────────────────────────────────────────────────
const CAPS = [
  { icon:"👁️", label:"Identity",        title:"Face Recognition",   body:"Proprietary AI identifies every customer in under one second. Register once — recognized everywhere, forever. No card, no phone, no friction.", col:"#00A1E0", glow:"rgba(0,161,224,0.3)" },
  { icon:"📲", label:"Personalization",  title:"Smart Display",      body:"The moment you're recognized, the terminal rebuilds its screen for you — your name, your offers, real-time every visit.",                       col:"#5C67F2", glow:"rgba(92,103,242,0.3)" },
  { icon:"📦", label:"Inventory",        title:"Live Stock",         body:"Every product tracked continuously. Drop below threshold — automatic order fires. No human check needed.",                                       col:"#00C7B1", glow:"rgba(0,199,177,0.3)" },
  { icon:"🤖", label:"AI Verify",        title:"Shelf Check",        body:"After every restock, AI validates placement, label facing, and quantity. Payment releases only when all checks pass.",                          col:"#5C67F2", glow:"rgba(92,103,242,0.3)" },
  { icon:"⚡", label:"Checkout",         title:"Door-Close Pay",     body:"Close the door. That's checkout. System tracked what you took, charged your stored payment, sent an SMS receipt.",                             col:"#00A1E0", glow:"rgba(0,161,224,0.3)" },
  { icon:"🔗", label:"OS",              title:"INSHOP OS",          body:"Suppliers, fillers, customers, every unit — one operating system. One dashboard. One source of truth.",                                         col:"#06AED5", glow:"rgba(6,174,213,0.3)" },
];

const LOCATIONS = ["Profit Holon","Profit Shoham","Profit Kiryat Ono","Profit Modi'in","Profit Yokneam","Profit Petah Tikva","Profit Kiryat Yam","Profit Rosh HaAyin","Profit Yavne","Lazuz Petah Tikva"];

// ── Page ──────────────────────────────────────────────────────────────────────
export default function V3() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <div className="bg-[#060212] text-white min-h-screen overflow-x-hidden" style={{ fontFamily:"var(--font-geist-sans),sans-serif" }}>
      <Aurora />

      {/* ── NAV ── */}
      <nav className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${scrolled ? "border-b border-white/[0.07]" : ""}`}
        style={scrolled ? { background:"rgba(6,2,18,0.7)", backdropFilter:"blur(20px)" } : {}}>
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="font-black text-lg tracking-tight">
            in<span style={{ background:"linear-gradient(135deg,#00A1E0,#5C67F2)", WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent" }}>S</span>hop
            <span className="ml-2 text-[9px] font-mono tracking-[0.25em] text-white/20 uppercase">v3</span>
          </Link>
          <div className="hidden md:flex items-center gap-8 text-sm text-white/40">
            <a href="#features" className="hover:text-white/80 transition-colors">System</a>
            <a href="#hardware" className="hover:text-white/80 transition-colors">Hardware</a>
            <a href="#live" className="hover:text-white/80 transition-colors">Live</a>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-0.5 rounded-full p-0.5" style={{ background:"rgba(255,255,255,0.05)", border:"1px solid rgba(255,255,255,0.08)" }}>
              <Link href="/"   className="text-[10px] font-mono px-2.5 py-1.5 rounded-full text-white/30 hover:text-white/60 transition-colors">V1</Link>
              <Link href="/v2" className="text-[10px] font-mono px-2.5 py-1.5 rounded-full text-white/30 hover:text-white/60 transition-colors">V2</Link>
              <span className="text-[10px] font-mono px-2.5 py-1.5 rounded-full font-bold text-white" style={{ background:"linear-gradient(135deg,#5C67F2,#00A1E0)" }}>V3</span>
              <Link href="/v5" className="text-[10px] font-mono px-2.5 py-1.5 rounded-full text-white/30 hover:text-white/60 transition-colors">V5</Link>
              <Link href="/v6" className="text-[10px] font-mono px-2.5 py-1.5 rounded-full text-white/30 hover:text-white/60 transition-colors">V6</Link>
            </div>
            <a href="#contact" className="text-sm font-semibold px-5 py-2 rounded-full transition-all"
              style={{ background:"linear-gradient(135deg,#5C67F2,#00A1E0)", boxShadow:"0 0 24px rgba(92,103,242,0.4)" }}>
              Partner
            </a>
          </div>
        </div>
      </nav>

      {/* ── HERO ── */}
      <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 pt-16 overflow-hidden z-10">
        <Fade>
          <div className="inline-flex items-center gap-2 rounded-full px-4 py-2 mb-10 text-xs font-mono tracking-widest uppercase"
            style={{ background:"rgba(92,103,242,0.12)", border:"1px solid rgba(92,103,242,0.3)", color:"rgba(160,160,255,0.9)" }}>
            <span className="w-1.5 h-1.5 rounded-full bg-[#5C67F2] animate-pulse" />
            10 Live Locations — Israel
          </div>
        </Fade>
        <Fade delay={0.1}>
          <h1 className="font-black leading-[0.85] tracking-tight mb-8 max-w-4xl"
            style={{ fontSize:"clamp(3.5rem,10vw,9rem)" }}>
            <span style={{ background:"linear-gradient(135deg,#fff 30%,rgba(255,255,255,0.45))", WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent" }}>
              The store
            </span>
            <br />
            <span style={{ background:"linear-gradient(135deg,#00A1E0,#5C67F2,#00C7B1)", WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent" }}>
              knows you.
            </span>
          </h1>
        </Fade>
        <Fade delay={0.2}>
          <p className="text-white/40 text-xl max-w-md mx-auto leading-relaxed mb-14">
            Walk up. Get recognized. Walk out.<br />No card. No app. No queue.
          </p>
        </Fade>
        <Fade delay={0.3}>
          <div className="flex items-center gap-4 flex-wrap justify-center">
            <a href="#features" className="font-semibold px-8 py-3.5 rounded-full text-white text-sm transition-all hover:scale-105"
              style={{ background:"linear-gradient(135deg,#5C67F2,#00A1E0)", boxShadow:"0 0 40px rgba(92,103,242,0.5)" }}>
              Explore the system
            </a>
            <a href="#hardware" className="font-medium px-8 py-3.5 rounded-full text-white/60 text-sm transition-all hover:text-white"
              style={{ border:"1px solid rgba(255,255,255,0.12)" }}>
              See the hardware
            </a>
          </div>
        </Fade>

        {/* Floating stat pills */}
        <div className="absolute left-8 top-1/3 hidden lg:block" style={{ animation:"floatA 6s ease-in-out infinite" }}>
          <Glass className="px-5 py-3">
            <div className="text-2xl font-black text-white">{"< 1s"}</div>
            <div className="text-[10px] font-mono text-white/30 uppercase tracking-widest mt-0.5">Recognition</div>
          </Glass>
        </div>
        <div className="absolute right-8 top-1/2 hidden lg:block" style={{ animation:"floatB 7s ease-in-out infinite" }}>
          <Glass className="px-5 py-3">
            <div className="text-2xl font-black text-white">₪20K<span style={{ background:"linear-gradient(135deg,#00A1E0,#5C67F2)", WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent" }}>+</span></div>
            <div className="text-[10px] font-mono text-white/30 uppercase tracking-widest mt-0.5">Monthly / unit</div>
          </Glass>
        </div>
        <div className="absolute left-16 bottom-1/4 hidden lg:block" style={{ animation:"floatC 8s ease-in-out infinite" }}>
          <Glass className="px-5 py-3">
            <div className="text-2xl font-black text-white">10</div>
            <div className="text-[10px] font-mono text-white/30 uppercase tracking-widest mt-0.5">Live locations</div>
          </Glass>
        </div>
      </section>

      {/* ── BENTO FEATURES ── */}
      <section id="features" className="relative z-10 py-28 px-6">
        <div className="max-w-6xl mx-auto">
          <Fade className="text-center mb-16">
            <p className="font-mono text-[11px] tracking-[0.4em] uppercase text-white/25 mb-4">The System</p>
            <h2 className="font-black" style={{ fontSize:"clamp(2.5rem,6vw,5rem)", background:"linear-gradient(135deg,#fff,rgba(255,255,255,0.5))", WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent" }}>
              Six capabilities.<br />One unit.
            </h2>
          </Fade>

          {/* Bento grid */}
          <div className="grid grid-cols-3 grid-rows-3 gap-4 auto-rows-[220px]">

            {/* Face Recognition — big (col 1-2, row 1-2) */}
            <Fade className="col-span-2 row-span-2" delay={0}>
              <Glass hover className="h-full p-8 flex flex-col justify-between group cursor-default"
                style={{ boxShadow:`0 0 60px ${CAPS[0].glow}` }}>
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <span className="text-3xl">{CAPS[0].icon}</span>
                    <span className="font-mono text-[10px] tracking-[0.3em] uppercase" style={{ color: CAPS[0].col }}>{CAPS[0].label}</span>
                  </div>
                  <h3 className="font-black text-4xl mb-4 text-white">{CAPS[0].title}</h3>
                  <p className="text-white/40 text-base leading-relaxed max-w-sm">{CAPS[0].body}</p>
                </div>
                <div className="flex items-center gap-3 mt-6">
                  {["< 1 second","No device","Forever"].map(t => (
                    <span key={t} className="text-xs px-3 py-1.5 rounded-full font-mono" style={{ background:`${CAPS[0].col}15`, border:`1px solid ${CAPS[0].col}30`, color:CAPS[0].col }}>{t}</span>
                  ))}
                </div>
              </Glass>
            </Fade>

            {/* Smart Display — (col 3, row 1) */}
            <Fade delay={0.06}>
              <Glass hover className="h-full p-6 flex flex-col justify-between cursor-default">
                <div>
                  <span className="text-2xl block mb-3">{CAPS[1].icon}</span>
                  <span className="font-mono text-[9px] tracking-[0.3em] uppercase block mb-2" style={{ color:CAPS[1].col }}>{CAPS[1].label}</span>
                  <h3 className="font-black text-xl text-white">{CAPS[1].title}</h3>
                </div>
                <p className="text-white/30 text-xs leading-relaxed">{CAPS[1].body}</p>
              </Glass>
            </Fade>

            {/* Live Stock — (col 3, row 2) */}
            <Fade delay={0.1}>
              <Glass hover className="h-full p-6 flex flex-col justify-between cursor-default">
                <div>
                  <span className="text-2xl block mb-3">{CAPS[2].icon}</span>
                  <span className="font-mono text-[9px] tracking-[0.3em] uppercase block mb-2" style={{ color:CAPS[2].col }}>{CAPS[2].label}</span>
                  <h3 className="font-black text-xl text-white">{CAPS[2].title}</h3>
                </div>
                <p className="text-white/30 text-xs leading-relaxed">{CAPS[2].body}</p>
              </Glass>
            </Fade>

            {/* AI Verify — (col 1, row 3) */}
            <Fade delay={0.08}>
              <Glass hover className="h-full p-6 flex flex-col justify-between cursor-default">
                <div>
                  <span className="text-2xl block mb-3">{CAPS[3].icon}</span>
                  <span className="font-mono text-[9px] tracking-[0.3em] uppercase block mb-2" style={{ color:CAPS[3].col }}>{CAPS[3].label}</span>
                  <h3 className="font-black text-xl text-white">{CAPS[3].title}</h3>
                </div>
                <p className="text-white/30 text-xs leading-relaxed">{CAPS[3].body}</p>
              </Glass>
            </Fade>

            {/* Checkout — (col 2-3, row 3) */}
            <Fade className="col-span-2" delay={0.12}>
              <Glass hover className="h-full p-6 flex items-center gap-8 cursor-default"
                style={{ boxShadow:`0 0 40px ${CAPS[4].glow}` }}>
                <span className="text-5xl shrink-0">{CAPS[4].icon}</span>
                <div>
                  <span className="font-mono text-[9px] tracking-[0.3em] uppercase block mb-2" style={{ color:CAPS[4].col }}>{CAPS[4].label}</span>
                  <h3 className="font-black text-2xl text-white mb-2">{CAPS[4].title}</h3>
                  <p className="text-white/35 text-sm leading-relaxed">{CAPS[4].body}</p>
                </div>
              </Glass>
            </Fade>

          </div>

          {/* OS — full width below grid */}
          <Fade delay={0.15} className="mt-4">
            <Glass hover className="p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 cursor-default"
              style={{ boxShadow:`0 0 50px ${CAPS[5].glow}` }}>
              <div className="flex items-center gap-6">
                <span className="text-4xl">{CAPS[5].icon}</span>
                <div>
                  <span className="font-mono text-[9px] tracking-[0.3em] uppercase block mb-1" style={{ color:CAPS[5].col }}>{CAPS[5].label}</span>
                  <h3 className="font-black text-2xl text-white">{CAPS[5].title}</h3>
                </div>
              </div>
              <p className="text-white/35 text-sm leading-relaxed max-w-lg">{CAPS[5].body}</p>
              <div className="flex gap-2 shrink-0">
                {["Suppliers","Fillers","Units","Customers"].map(tag => (
                  <span key={tag} className="text-xs px-3 py-1.5 rounded-full font-mono" style={{ background:`${CAPS[5].col}12`, border:`1px solid ${CAPS[5].col}25`, color:CAPS[5].col }}>{tag}</span>
                ))}
              </div>
            </Glass>
          </Fade>
        </div>
      </section>

      {/* ── MACHINE ── */}
      <section id="hardware" className="relative z-10 py-28 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <Fade>
              <div className="relative rounded-3xl overflow-hidden bg-[#060212]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/machine.jpg" alt="INSHOP Unit" className="w-full h-auto block" style={{ filter:"saturate(0.5) contrast(1.1)" }} />
                <div className="absolute inset-0 pointer-events-none" style={{ boxShadow:"inset 0 0 80px 50px #060212" }} />
                <div className="absolute inset-0 pointer-events-none" style={{ background:"linear-gradient(135deg,rgba(92,103,242,0.08),rgba(0,161,224,0.06))" }} />
              </div>
            </Fade>
            <div>
              <Fade delay={0.1}>
                <span className="font-mono text-[10px] tracking-[0.4em] uppercase text-white/25 block mb-6">Hardware</span>
                <h2 className="font-black leading-[0.88] mb-6" style={{ fontSize:"clamp(3rem,6vw,5.5rem)", background:"linear-gradient(135deg,#fff,rgba(255,255,255,0.5))", WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent" }}>
                  One unit.<br />Six systems.
                </h2>
                <p className="text-white/35 text-lg leading-relaxed mb-10">
                  Face AI. Smart terminal. Live inventory. Shelf verification. Auto checkout. Full OS — all in one unit, deployed in 48 hours.
                </p>
              </Fade>
              <Fade delay={0.2}>
                <div className="grid grid-cols-2 gap-3">
                  {CAPS.map((c) => (
                    <Glass key={c.label} className="flex items-center gap-3 px-4 py-3">
                      <span className="text-lg">{c.icon}</span>
                      <span className="text-xs font-mono text-white/40 tracking-wide">{c.title}</span>
                    </Glass>
                  ))}
                </div>
              </Fade>
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS ── */}
      <section className="relative z-10 py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <Fade>
            <Glass className="p-2">
              <div className="grid grid-cols-2 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-white/[0.06]">
                {[
                  { v:"< 1s",   l:"Recognition time" },
                  { v:"10",     l:"Live locations"    },
                  { v:"₪20K+",  l:"Monthly / unit"   },
                  { v:"0",      l:"Queues. Ever."     },
                ].map((s) => (
                  <div key={s.l} className="px-10 py-8 text-center">
                    <div className="font-black leading-none mb-2" style={{ fontSize:"clamp(2.5rem,5vw,4rem)", background:"linear-gradient(135deg,#fff,rgba(255,255,255,0.6))", WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent" }}>
                      {s.v}
                    </div>
                    <div className="font-mono text-[10px] tracking-[0.25em] uppercase text-white/25">{s.l}</div>
                  </div>
                ))}
              </div>
            </Glass>
          </Fade>
        </div>
      </section>

      {/* ── LIVE ── */}
      <section id="live" className="relative z-10 py-28 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-[5fr_7fr] gap-16 items-start">
            <Fade>
              <span className="font-mono text-[10px] tracking-[0.4em] uppercase text-white/25 block mb-6">Already live</span>
              <h2 className="font-black leading-[0.88] mb-6" style={{ fontSize:"clamp(3rem,7vw,6rem)", background:"linear-gradient(135deg,#fff,rgba(255,255,255,0.45))", WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent" }}>
                Not a<br />demo.
              </h2>
              <p className="text-white/30 leading-relaxed">
                10 fully operational units across Israel. Real customers, real purchases, measurable results — every day.
              </p>
            </Fade>
            <div className="grid grid-cols-2 gap-2">
              {LOCATIONS.map((loc, i) => (
                <Fade key={loc} delay={i * 0.04}>
                  <Glass className="flex items-center gap-3 px-4 py-3 group cursor-default hover:border-[#00A1E0]/20 transition-all">
                    <div className="w-1.5 h-1.5 rounded-full shrink-0 group-hover:shadow-[0_0_10px_rgba(0,161,224,0.9)] transition-all" style={{ background:"#00A1E0" }} />
                    <span className="text-sm text-white/35 group-hover:text-white/65 transition-colors font-mono text-xs tracking-wide">{loc}</span>
                  </Glass>
                </Fade>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── MODULES ── */}
      <section className="relative z-10 py-28 px-6">
        <div className="max-w-6xl mx-auto">
          <Fade className="text-center mb-16">
            <p className="font-mono text-[11px] tracking-[0.4em] uppercase text-white/25 mb-4">Built-in Intelligence</p>
            <h2 className="font-black" style={{ fontSize:"clamp(2.5rem,6vw,5rem)", background:"linear-gradient(135deg,#fff,rgba(255,255,255,0.5))", WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent" }}>
              Three modules. One network.
            </h2>
          </Fade>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              { num:"01", icon:"📦", title:"Supplier",   line:"Detect shortage. Auto-order. Deliver.", href:"/modules/supplier", col:"#00C7B1", glow:"rgba(0,199,177,0.25)" },
              { num:"02", icon:"♻️", title:"Fillers",    line:"Alert. Restock. AI-verify. Get paid.", href:"/modules/fillers",  col:"#1589EE", glow:"rgba(21,137,238,0.25)" },
              { num:"03", icon:"🤝", title:"Referral",   line:"Share. Redeem. Earn commission.",       href:"/modules/referral", col:"#5C67F2", glow:"rgba(92,103,242,0.25)" },
            ].map((m, i) => (
              <Fade key={m.num} delay={i * 0.1}>
                <Link href={m.href}>
                  <Glass hover className="p-8 h-full flex flex-col gap-6 cursor-pointer group"
                    style={{ boxShadow:`0 0 40px ${m.glow}` }}>
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-[10px] text-white/20">{m.num}</span>
                      <span className="text-white/15 group-hover:text-white/50 group-hover:translate-x-1 transition-all font-mono text-xs">→</span>
                    </div>
                    <div className="text-4xl">{m.icon}</div>
                    <div>
                      <h3 className="font-black text-2xl text-white/70 group-hover:text-white mb-2 transition-colors">{m.title}</h3>
                      <p className="font-mono text-[11px] text-white/25 tracking-wide leading-relaxed group-hover:text-white/40 transition-colors">{m.line}</p>
                    </div>
                    <div className="mt-auto">
                      <div className="h-px w-full transition-all duration-500" style={{ background:`linear-gradient(90deg,${m.col}00,${m.col},${m.col}00)`, opacity: 0.4 }} />
                    </div>
                  </Glass>
                </Link>
              </Fade>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section id="contact" className="relative z-10 py-40 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <Fade>
            <span className="font-mono text-[10px] tracking-[0.4em] uppercase text-white/20 block mb-8">Get in touch</span>
          </Fade>
          <Fade delay={0.1}>
            <h2 className="font-black leading-[0.85] mb-12" style={{ fontSize:"clamp(3.5rem,9vw,9rem)", background:"linear-gradient(135deg,#fff 20%,rgba(255,255,255,0.35))", WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent" }}>
              Bring INSHOP<br />
              <span style={{ background:"linear-gradient(135deg,#00A1E0,#5C67F2,#00C7B1)", WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent" }}>to your location.</span>
            </h2>
          </Fade>
          <Fade delay={0.2}>
            <a href="mailto:info@inshop.io"
               className="inline-flex items-center gap-4 font-semibold text-lg px-10 py-5 rounded-full text-white transition-all hover:scale-105"
               style={{ background:"linear-gradient(135deg,#5C67F2,#00A1E0)", boxShadow:"0 0 60px rgba(92,103,242,0.5), 0 0 120px rgba(0,161,224,0.2)" }}>
              Get in Touch
              <span>→</span>
            </a>
          </Fade>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="relative z-10 border-t border-white/[0.06] py-8 px-6">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <span className="font-black">in<span style={{ background:"linear-gradient(135deg,#00A1E0,#5C67F2)", WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent" }}>S</span>hop</span>
          <span className="font-mono text-[10px] text-white/20 uppercase tracking-widest">© 2026 Autonomous Retail</span>
          <Link href="/" className="font-mono text-[10px] text-white/20 hover:text-white/50 transition-colors uppercase tracking-widest">← V1 Classic</Link>
        </div>
      </footer>

      <style>{`
        @keyframes blobA { 0%,100%{transform:translate(0,0) scale(1)} 33%{transform:translate(-80px,60px) scale(1.1)} 66%{transform:translate(60px,-40px) scale(0.95)} }
        @keyframes blobB { 0%,100%{transform:translate(0,0) scale(1)} 33%{transform:translate(70px,-50px) scale(1.05)} 66%{transform:translate(-60px,80px) scale(0.9)} }
        @keyframes blobC { 0%,100%{transform:translate(0,0) scale(1)} 50%{transform:translate(-40px,-60px) scale(1.15)} }
        @keyframes floatA { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-16px)} }
        @keyframes floatB { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-12px)} }
        @keyframes floatC { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-20px)} }
      `}</style>
    </div>
  );
}
