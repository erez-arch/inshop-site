"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";

function useInView(threshold = 0.1) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true); }, { threshold });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, inView };
}

function Reveal({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const { ref, inView } = useInView();
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);
  return (
    <div ref={ref} className={className} style={{
      opacity: !mounted || inView ? 1 : 0,
      transform: !mounted || inView ? "none" : "translateY(40px)",
      transition: mounted ? `opacity 0.9s cubic-bezier(0.16,1,0.3,1) ${delay}s, transform 0.9s cubic-bezier(0.16,1,0.3,1) ${delay}s` : "none",
    }}>
      {children}
    </div>
  );
}

function VideoPlayer() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [muted, setMuted] = useState(false);

  const toggle = () => {
    if (!videoRef.current) return;
    if (playing) { videoRef.current.pause(); setPlaying(false); }
    else { videoRef.current.play(); setPlaying(true); }
  };

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    const onTime = () => setProgress((v.currentTime / v.duration) * 100 || 0);
    const onEnd = () => setPlaying(false);
    v.addEventListener("timeupdate", onTime);
    v.addEventListener("ended", onEnd);
    return () => { v.removeEventListener("timeupdate", onTime); v.removeEventListener("ended", onEnd); };
  }, []);

  const seek = (e: React.MouseEvent<HTMLDivElement>) => {
    const v = videoRef.current;
    if (!v) return;
    const rect = e.currentTarget.getBoundingClientRect();
    v.currentTime = ((e.clientX - rect.left) / rect.width) * v.duration;
  };

  return (
    <div className="relative group bg-black rounded-3xl overflow-hidden border border-white/8">
      <video ref={videoRef} src="/demo.mp4" className="w-full h-auto block" playsInline muted={muted} />
      <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="px-6 pb-5 space-y-3">
          <div className="cursor-pointer" onClick={seek}>
            <div className="h-1 bg-white/20 rounded-full overflow-hidden">
              <div className="h-full bg-orange-500 rounded-full transition-all" style={{ width: `${progress}%` }} />
            </div>
          </div>
          <div className="flex items-center gap-4">
            <button onClick={toggle} className="w-10 h-10 rounded-full bg-orange-500 hover:bg-orange-600 flex items-center justify-center transition-colors shrink-0">
              {playing
                ? <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24"><rect x="6" y="4" width="4" height="16"/><rect x="14" y="4" width="4" height="16"/></svg>
                : <svg className="w-4 h-4 text-white translate-x-0.5" fill="currentColor" viewBox="0 0 24 24"><polygon points="5,3 19,12 5,21"/></svg>
              }
            </button>
            <button onClick={() => { setMuted(!muted); if (videoRef.current) videoRef.current.muted = !muted; }} className="text-white/60 hover:text-white transition-colors">
              {muted
                ? <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" /></svg>
                : <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072M12 6v12m0 0l-4-4m4 4l4-4M9 9H5a1 1 0 00-1 1v4a1 1 0 001 1h4l4 4V5l-4 4z" /></svg>
              }
            </button>
            <span className="text-white/40 text-xs ml-auto">INSHOP Demo</span>
          </div>
        </div>
      </div>
      {!playing && (
        <button onClick={toggle} className="absolute inset-0 flex items-center justify-center">
          <div className="w-20 h-20 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center hover:bg-orange-500/80 hover:border-orange-500 transition-all duration-300 group/btn">
            <svg className="w-8 h-8 text-white translate-x-1" fill="currentColor" viewBox="0 0 24 24"><polygon points="5,3 19,12 5,21"/></svg>
          </div>
        </button>
      )}
    </div>
  );
}

const CAPS = [
  {
    x: 48, y: 53,
    icon: "👁️",
    label: "Identity",
    title: "Face Recognition",
    detail: "Proprietary AI identifies every customer in under one second. No card. No phone. No tap. Register once at any INSHOP unit — recognized everywhere, forever.",
    tags: ["< 1 second ID", "No device needed", "Lifetime access"],
    color: "#3b82f6",
  },
  {
    x: 48, y: 29,
    icon: "📲",
    label: "Personalization",
    title: "Smart Display",
    detail: "The moment your face is recognized, the terminal shows your name, personal offers, and targeted promotions. Every customer gets a different screen — built in real time.",
    tags: ["Name greeting", "Custom offers", "Targeted promos"],
    color: "#06b6d4",
  },
  {
    x: 28, y: 63,
    icon: "📦",
    label: "Inventory",
    title: "Live Stock Tracking",
    detail: "Every product on every shelf tracked in real time across all units. The moment stock drops below threshold, an automatic order fires to the supplier. No one needs to check.",
    tags: ["Real-time tracking", "Auto reorder", "Zero stockouts"],
    color: "#22c55e",
  },
  {
    x: 73, y: 63,
    icon: "🤖",
    label: "AI Verify",
    title: "AI Shelf Verification",
    detail: "After every restock, the filler photographs the shelf. AI analyzes placement, label direction, and quantity. Payment only releases when every single check passes.",
    tags: ["Photo analysis", "Label detection", "Pay on approval"],
    color: "#a855f7",
  },
  {
    x: 36, y: 47,
    icon: "⚡",
    label: "Checkout",
    title: "Door-Close Checkout",
    detail: "Close the door. That's it. The system tracked what you took, charged your stored payment, and sent a receipt by SMS. No scan, no queue, no interaction.",
    tags: ["Door = checkout", "Auto-charge", "SMS receipt"],
    color: "#f97316",
  },
  {
    x: 48, y: 86,
    icon: "🔗",
    label: "OS",
    title: "INSHOP Operating System",
    detail: "Suppliers, fillers, customers, and every live unit connected to one OS. One dashboard. One source of truth. No phone calls, no spreadsheets, no guesswork — ever.",
    tags: ["Full-stack OS", "All locations", "Real-time sync"],
    color: "#f59e0b",
  },
];

function MachineShowcase() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const t = setTimeout(() => setActive(a => (a + 1) % CAPS.length), 4000);
    return () => clearTimeout(t);
  }, [active, paused]);

  const cap = CAPS[active];

  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <Reveal className="mb-16">
          <p className="text-orange-500/70 text-xs font-bold uppercase tracking-[0.3em] mb-5">The Hardware</p>
          <h2 className="text-[clamp(2.5rem,6vw,5rem)] font-black leading-tight max-w-3xl">
            One unit.<br />
            <span className="text-gray-600">Six technologies.</span>
          </h2>
        </Reveal>

        <div className="grid lg:grid-cols-[3fr_2fr] gap-12 items-start">
          {/* Machine image with hotspots */}
          <div className="relative rounded-3xl overflow-hidden shadow-[0_30px_80px_rgba(0,0,0,0.8)] border border-white/5">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/machine.jpg" alt="INSHOP Unit" className="w-full h-auto block" />
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60 pointer-events-none" />

            {/* Scan line follows active hotspot */}
            <div
              className="absolute left-0 right-0 h-px pointer-events-none transition-all duration-700 ease-out"
              style={{
                top: `${cap.y}%`,
                background: `linear-gradient(90deg, transparent 0%, ${cap.color}80 30%, ${cap.color} 50%, ${cap.color}80 70%, transparent 100%)`,
                boxShadow: `0 0 12px ${cap.color}50`,
              }}
            />

            {/* Hotspot buttons */}
            {CAPS.map((c, i) => (
              <button
                key={i}
                className="absolute -translate-x-1/2 -translate-y-1/2 z-10"
                style={{ left: `${c.x}%`, top: `${c.y}%` }}
                onClick={() => { setActive(i); setPaused(true); }}
                onMouseEnter={() => { setActive(i); setPaused(true); }}
                onMouseLeave={() => setPaused(false)}
              >
                {active === i && (
                  <>
                    <div className="absolute inset-[-12px] rounded-full border border-orange-500/60 animate-ping pointer-events-none" />
                    <div className="absolute inset-[-6px] rounded-full bg-orange-500/10 pointer-events-none" />
                  </>
                )}
                <div
                  className={`relative w-7 h-7 rounded-full flex items-center justify-center text-[10px] font-black transition-all duration-300 ${active === i ? "scale-125 text-white" : "bg-black/70 border border-white/20 text-white/40 backdrop-blur-sm"}`}
                  style={active === i ? { background: CAPS[i].color, boxShadow: `0 0 20px ${CAPS[i].color}90` } : {}}
                >
                  {i + 1}
                </div>
                <div className={`
                  absolute bottom-full left-1/2 -translate-x-1/2 mb-2 whitespace-nowrap
                  bg-black/90 border border-white/8 text-white text-[9px] font-bold
                  uppercase tracking-widest px-2 py-1 rounded-lg transition-all duration-200
                  ${active === i ? "opacity-100 translate-y-0" : "opacity-0 translate-y-1 pointer-events-none"}
                `}>
                  {c.label}
                </div>
              </button>
            ))}

            <div className="absolute bottom-4 left-4 text-white/15 text-[9px] font-black tracking-widest uppercase pointer-events-none select-none">
              INSHOP Unit — Holon
            </div>
          </div>

          {/* Capability showcase */}
          <div
            className="lg:sticky lg:top-24"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
          >
            {/* Progress bar */}
            <div className="h-[2px] bg-white/5 mb-10 rounded-full overflow-hidden">
              <div
                key={active}
                className="h-full rounded-full"
                style={{ animation: paused ? "none" : "fillBar 4s linear both", width: paused ? "0" : undefined, background: cap.color }}
              />
            </div>

            {/* Animated content */}
            <div key={`cap-${active}`} style={{ animation: "capIn 0.45s cubic-bezier(0.16,1,0.3,1) both" }}>
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl mb-5"
                style={{ background: cap.color + "18", border: `1px solid ${cap.color}35` }}
              >
                {cap.icon}
              </div>
              <p className="text-[10px] font-black uppercase tracking-[0.25em] mb-3" style={{ color: cap.color + "bb" }}>{cap.label}</p>
              <h3 className="text-[clamp(1.8rem,3.5vw,2.8rem)] font-black text-white mb-5 leading-tight">{cap.title}</h3>
              <p className="text-gray-500 text-base lg:text-lg leading-relaxed mb-7">{cap.detail}</p>
              <div className="flex flex-wrap gap-2">
                {cap.tags.map(t => (
                  <span key={t} className="text-xs px-3 py-1.5 rounded-full font-semibold" style={{ background: cap.color + "12", border: `1px solid ${cap.color}30`, color: cap.color }}>
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Tab navigation */}
            <div className="grid grid-cols-3 gap-2 mt-10">
              {CAPS.map((c, i) => (
                <button
                  key={i}
                  onClick={() => { setActive(i); setPaused(true); }}
                  className="flex items-center gap-2 px-3 py-2.5 rounded-xl text-xs font-bold transition-all duration-300 text-left bg-[#0d0d0d] border"
                  style={active === i
                    ? { borderColor: c.color + "50", background: c.color + "12", color: c.color }
                    : { borderColor: "rgba(255,255,255,0.04)", color: "#4b5563" }
                  }
                >
                  <span
                    className="shrink-0 text-[9px] font-black w-4 h-4 rounded-full flex items-center justify-center"
                    style={active === i ? { background: c.color, color: "#fff" } : { background: "#1a1a1a", color: "#374151" }}
                  >
                    {i + 1}
                  </span>
                  <span className="truncate">{c.label}</span>
                </button>
              ))}
            </div>

            <style>{`
              @keyframes fillBar { from { width: 0 } to { width: 100% } }
              @keyframes capIn { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: none; } }
            `}</style>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <div className="bg-[#060606] text-white overflow-x-hidden selection:bg-orange-500/30">

      {/* NAV */}
      <nav className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${scrolled ? "bg-black/70 backdrop-blur-2xl border-b border-white/5" : ""}`}>
        <div className="max-w-7xl mx-auto px-6 md:px-10 h-16 flex items-center justify-between">
          <Link href="/" className="text-xl font-black tracking-tight select-none">in<span className="text-orange-500">S</span>hop</Link>
          <div className="hidden md:flex items-center gap-8 text-sm">
            {[["Experience", "#experience"], ["Technology", "#technology"], ["Live", "#live"]].map(([l, h]) => (
              <a key={h} href={h} className="text-gray-500 hover:text-white transition-colors">{l}</a>
            ))}
          </div>
          <a href="#contact" className="hidden md:inline-flex border border-white/10 hover:border-orange-500/60 hover:bg-orange-500/10 text-sm font-semibold px-5 py-2 rounded-full transition-all duration-300">
            Partner with us
          </a>
          <button className="md:hidden text-gray-400" onClick={() => setMenuOpen(!menuOpen)}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {menuOpen ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" /> : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />}
            </svg>
          </button>
        </div>
        {menuOpen && (
          <div className="md:hidden bg-black/95 px-6 py-6 flex flex-col gap-5 text-sm border-b border-white/5">
            {[["Experience", "#experience"], ["Technology", "#technology"], ["Live", "#live"], ["Contact", "#contact"]].map(([l, h]) => (
              <a key={h} href={h} onClick={() => setMenuOpen(false)} className="text-gray-400 hover:text-white">{l}</a>
            ))}
          </div>
        )}
      </nav>

      {/* HERO */}
      <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 overflow-hidden">
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 70% 60% at 50% 55%, rgba(249,115,22,0.12) 0%, rgba(59,130,246,0.06) 50%, transparent 100%)" }} />
        <div className="absolute top-1/3 left-1/4 w-96 h-96 rounded-full opacity-20" style={{ background: "radial-gradient(circle, rgba(168,85,247,0.15), transparent 70%)" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full border border-orange-500/8" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] rounded-full border border-blue-500/4" />

        <div className="relative z-10 max-w-5xl mx-auto pt-16">
          <div style={{ animation: "rise 1.2s cubic-bezier(0.16,1,0.3,1) both" }}>
            <p className="text-orange-500/80 text-xs font-bold uppercase tracking-[0.3em] mb-12">Autonomous Retail Network</p>
            <h1 className="text-[clamp(3.5rem,10vw,7rem)] font-black leading-[0.88] tracking-tight mb-8">
              The store<br />
              <span className="text-orange-500">knows you.</span>
            </h1>
            <p className="text-gray-500 text-xl md:text-2xl max-w-xl mx-auto mb-14 leading-relaxed font-light">
              Walk up. Get recognized. Walk out.<br />No card. No app. No queue.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#experience" className="inline-flex items-center gap-3 bg-orange-500 hover:bg-orange-600 font-bold px-8 py-4 rounded-full text-base transition-all hover:scale-105 hover:shadow-[0_0_50px_rgba(249,115,22,0.35)]">
                See it in action
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
              </a>
              <a href="#technology" className="inline-flex items-center gap-3 border border-white/8 hover:border-white/20 font-medium px-8 py-4 rounded-full text-base text-gray-400 hover:text-white transition-all">
                The technology
              </a>
            </div>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 opacity-30 animate-bounce">
          <svg className="w-5 h-5 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" /></svg>
        </div>
        <style>{`@keyframes rise{from{opacity:0;transform:translateY(60px)}to{opacity:1;transform:none}}`}</style>
      </section>

      {/* MARQUEE */}
      <div className="border-y border-white/4 py-5 overflow-hidden bg-[#080808]">
        <div className="flex gap-0 animate-[marquee_18s_linear_infinite] whitespace-nowrap">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="flex shrink-0">
              {["Face Recognition", "Frictionless Checkout", "Zero Queue", "24/7 Access", "Smart Inventory", "AI-Verified Refills", "One-Time Registration"].map(t => (
                <span key={t} className="text-xs font-semibold text-white/20 uppercase tracking-[0.2em] px-8">
                  {t}<span className="text-orange-500/40 ml-8">·</span>
                </span>
              ))}
            </div>
          ))}
        </div>
        <style>{`@keyframes marquee{from{transform:translateX(0)}to{transform:translateX(-25%)}}`}</style>
      </div>

      <MachineShowcase />

      {/* EXPERIENCE */}
      <section id="experience" className="py-36 px-6">
        <div className="max-w-7xl mx-auto">
          <Reveal className="mb-24">
            <p className="text-orange-500/70 text-xs font-bold uppercase tracking-[0.3em] mb-5">The Experience</p>
            <h2 className="text-[clamp(2.5rem,6vw,5rem)] font-black leading-tight max-w-3xl">
              Six steps.<br />
              <span className="text-gray-600">Feels like nothing.</span>
            </h2>
          </Reveal>

          <div className="grid lg:grid-cols-[3fr_2fr] gap-16 items-start">
            <div>
              {[
                { n: "01", title: "Approach the unit", body: "Walk up to any INSHOP terminal. No interaction needed yet." },
                { n: "02", title: "Face recognition", body: "Proprietary AI identifies you in under one second. No card. No phone." },
                { n: "03", title: "Door unlocks", body: "Access granted the moment you're recognized. Instant." },
                { n: "04", title: "Take your products", body: "Shop naturally. Grab what you need, browse freely — no rush." },
                { n: "05", title: "Close the door", body: "That's checkout. The system has already tracked everything." },
                { n: "06", title: "Receipt by SMS", body: "Payment processed automatically. Confirmation arrives in seconds." },
              ].map((item, i) => (
                <Reveal key={item.n} delay={i * 0.06}>
                  <div className="group flex gap-6 py-6 border-b border-white/4 hover:border-orange-500/20 transition-colors last:border-0">
                    <span className="text-orange-500/30 font-black text-sm pt-1 w-8 shrink-0 group-hover:text-orange-500/70 transition-colors">{item.n}</span>
                    <div>
                      <h3 className="font-bold text-white text-lg mb-1">{item.title}</h3>
                      <p className="text-gray-600 text-sm leading-relaxed">{item.body}</p>
                    </div>
                  </div>
                </Reveal>
              ))}

              <Reveal delay={0.4}>
                <div className="mt-8 inline-flex items-center gap-3 bg-orange-500/8 border border-orange-500/20 rounded-2xl px-6 py-4">
                  <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse shrink-0" />
                  <p className="text-orange-300 font-semibold">Register once. Shop everywhere. Forever.</p>
                </div>
              </Reveal>
            </div>

            <Reveal delay={0.2} className="lg:sticky lg:top-24">
              <VideoPlayer />
            </Reveal>
          </div>
        </div>
      </section>

      {/* TECHNOLOGY */}
      <section id="technology" className="py-36 px-6 bg-[#080808]">
        <div className="max-w-7xl mx-auto">
          <Reveal className="mb-24">
            <p className="text-orange-500/70 text-xs font-bold uppercase tracking-[0.3em] mb-5">Under the Hood</p>
            <h2 className="text-[clamp(2.5rem,6vw,5rem)] font-black leading-tight max-w-3xl">
              Every layer<br />
              <span className="text-gray-600">connected.</span>
            </h2>
            <p className="text-gray-600 text-lg mt-6 max-w-lg">
              INSHOP OS runs the entire operation — hardware, software, logistics, and people — in one system.
            </p>
          </Reveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { icon: "👁", title: "Face Recognition", body: "One-time registration. After that, you're identified the moment you approach. No friction, ever.", color: "#3b82f6" },
              { icon: "⚡", title: "Frictionless Payment", body: "Payment tokens stored at registration. Every purchase auto-charged when the door closes. Receipt by SMS.", color: "#22c55e" },
              { icon: "📦", title: "Live Inventory", body: "Every product tracked in real time across all units. When stock drops, automatic orders fire — no human needed.", color: "#f97316" },
              { icon: "🤖", title: "AI Shelf Verification", body: "Fillers photograph restocked shelves. AI checks placement and facing before approving any payment. Zero guesswork.", color: "#a855f7" },
              { icon: "📲", title: "Personalized Screen", body: "The terminal shows your name, personalized offers, and targeted promotions the moment you approach.", color: "#06b6d4" },
              { icon: "🔗", title: "One OS. Everything.", body: "Suppliers, inventory, refillers, retail units, and customers — all wired into a single operating system.", color: "#f59e0b" },
            ].map((item, i) => (
              <Reveal key={item.title} delay={i * 0.07}>
                <div
                  className="group h-full bg-[#0d0d0d] border border-white/4 rounded-3xl p-8 transition-all duration-500 hover:bg-[#101010]"
                  style={{ ["--c" as string]: item.color }}
                  onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.borderColor = item.color + "40"; (e.currentTarget as HTMLDivElement).style.boxShadow = `0 0 30px ${item.color}15`; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.borderColor = ""; (e.currentTarget as HTMLDivElement).style.boxShadow = ""; }}
                >
                  <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl mb-6" style={{ background: item.color + "15", border: `1px solid ${item.color}30` }}>
                    {item.icon}
                  </div>
                  <h3 className="font-black text-white text-xl mb-3">{item.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* MODULES */}
      <section className="py-36 px-6">
        <div className="max-w-7xl mx-auto">
          <Reveal className="mb-24">
            <p className="text-orange-500/70 text-xs font-bold uppercase tracking-[0.3em] mb-5">Built-in Intelligence</p>
            <h2 className="text-[clamp(2.5rem,6vw,5rem)] font-black leading-tight max-w-3xl">
              Three modules.<br />
              <span className="text-gray-600">One network.</span>
            </h2>
          </Reveal>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                href: "/modules/supplier",
                num: "01",
                title: "Supplier Module",
                tagline: "Detect. Order. Deliver. Refill.",
                desc: "The system detects shortage and triggers the entire supply chain automatically — from order placement to shelf restocking.",
                icon: "📦",
                color: "#22c55e",
              },
              {
                href: "/modules/fillers",
                num: "02",
                title: "Fillers Module",
                tagline: "Alert. Accept. Restock. Verify.",
                desc: "Nearby fillers are dispatched when stock drops. AI verifies the refill before any payment is approved. No shortcuts.",
                icon: "♻️",
                color: "#3b82f6",
              },
              {
                href: "/modules/referral",
                num: "03",
                title: "Referral Module",
                tagline: "Share. Redeem. Earn.",
                desc: "Trainers and promoters share digital coupons and earn commission only when a real purchase happens at the terminal.",
                icon: "🤝",
                color: "#f97316",
              },
            ].map((m, i) => (
              <Reveal key={m.href} delay={i * 0.1}>
                <Link
                  href={m.href}
                  className="group h-full flex flex-col bg-[#0d0d0d] border border-white/4 rounded-3xl p-8 transition-all duration-500 cursor-pointer"
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = m.color + "40"; (e.currentTarget as HTMLElement).style.boxShadow = `0 0 40px ${m.color}12`; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = ""; (e.currentTarget as HTMLElement).style.boxShadow = ""; }}
                >
                  <div className="flex items-start justify-between mb-10">
                    <span className="font-black text-sm transition-colors" style={{ color: m.color + "60" }}>{m.num}</span>
                    <div className="w-10 h-10 rounded-full border border-white/8 flex items-center justify-center transition-all group-hover:scale-110" style={{ borderColor: m.color + "30" }}>
                      <svg className="w-4 h-4 -rotate-45 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: m.color + "80" }}><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 7l-10 10M7 7h10v10" /></svg>
                    </div>
                  </div>
                  <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl mb-6" style={{ background: m.color + "15", border: `1px solid ${m.color}30` }}>
                    {m.icon}
                  </div>
                  <h3 className="font-black text-white text-2xl mb-2">{m.title}</h3>
                  <p className="text-sm font-semibold mb-4" style={{ color: m.color + "cc" }}>{m.tagline}</p>
                  <p className="text-gray-600 text-sm leading-relaxed flex-1">{m.desc}</p>
                  <div className="mt-8 text-xs font-bold uppercase tracking-widest flex items-center gap-2 transition-colors text-gray-700 group-hover:text-white/70">
                    Explore module
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 7l-10 10M7 7h10v10" /></svg>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* LIVE */}
      <section id="live" className="py-36 px-6 bg-[#080808]">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <Reveal>
              <p className="text-orange-500/70 text-xs font-bold uppercase tracking-[0.3em] mb-5">Already Deployed</p>
              <h2 className="text-[clamp(2.5rem,6vw,5rem)] font-black leading-tight mb-6">
                Not a demo.<br />
                <span className="text-orange-500">Live now.</span>
              </h2>
              <p className="text-gray-600 text-lg mb-12 leading-relaxed">
                10 fully operational units across Israel. Real customers. Real purchases. Measurable results — every day.
              </p>
              <div className="flex gap-8">
                <div>
                  <div className="text-5xl font-black text-white">10</div>
                  <div className="text-gray-600 text-sm mt-1 uppercase tracking-wide">Live Locations</div>
                </div>
                <div className="w-px bg-white/5" />
                <div>
                  <div className="text-5xl font-black text-white">₪20K<span className="text-orange-500">+</span></div>
                  <div className="text-gray-600 text-sm mt-1 uppercase tracking-wide">Monthly / Unit</div>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="grid grid-cols-2 gap-3">
                {["Profit Holon", "Profit Shoham", "Profit Kiryat Ono", "Profit Modi'in", "Profit Yokneam", "Profit Petah Tikva", "Profit Kiryat Yam", "Profit Rosh HaAyin", "Profit Yavne", "Lazuz Petah Tikva"].map((loc) => (
                  <div key={loc} className="flex items-center gap-3 bg-[#0d0d0d] border border-white/4 hover:border-orange-500/15 rounded-xl px-4 py-3 transition-colors group">
                    <span className="w-1.5 h-1.5 rounded-full bg-orange-500 shrink-0 group-hover:shadow-[0_0_6px_rgba(249,115,22,0.8)] transition-all" />
                    <span className="text-sm text-gray-500 group-hover:text-gray-300 transition-colors">{loc}</span>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* VISION */}
      <section className="py-36 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <Reveal>
            <p className="text-orange-500/70 text-xs font-bold uppercase tracking-[0.3em] mb-5">The Vision</p>
            <h2 className="text-[clamp(2.5rem,7vw,6rem)] font-black leading-tight mb-6">
              Built in Israel.<br />
              <span className="text-orange-500">Designed for the world.</span>
            </h2>
            <p className="text-gray-600 text-xl mb-20 max-w-xl mx-auto">
              Starting with gyms. Expanding to 20,000+ locations. Then everywhere.
            </p>
          </Reveal>

          <div className="grid md:grid-cols-3 gap-5">
            {[
              { phase: "Phase 01", title: "Win Israel", stat: "800", label: "target gyms", desc: "Build density and registered users across Israel's fitness scene.", color: "#22c55e" },
              { phase: "Phase 02", title: "Scale Globally", stat: "20K+", label: "gyms worldwide", desc: "Replicate the proven model across global fitness networks.", color: "#3b82f6" },
              { phase: "Phase 03", title: "Beyond Gyms", stat: "∞", label: "autonomous retail", desc: "Street retail, offices, transport hubs — the full autonomous store.", color: "#a855f7" },
            ].map((p, i) => (
              <Reveal key={p.phase} delay={i * 0.12}>
                <div
                  className="bg-[#0d0d0d] border border-white/4 rounded-3xl p-8 text-left h-full transition-all duration-500"
                  onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.borderColor = p.color + "40"; (e.currentTarget as HTMLDivElement).style.boxShadow = `0 0 30px ${p.color}12`; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.borderColor = ""; (e.currentTarget as HTMLDivElement).style.boxShadow = ""; }}
                >
                  <p className="text-xs font-black uppercase tracking-widest mb-6" style={{ color: p.color + "70" }}>{p.phase}</p>
                  <div className="text-5xl font-black mb-1" style={{ color: p.color }}>{p.stat}</div>
                  <div className="text-gray-600 text-sm mb-5">{p.label}</div>
                  <h3 className="font-black text-white text-xl mb-3">{p.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{p.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="py-36 px-6 bg-[#080808]">
        <div className="max-w-4xl mx-auto">
          <Reveal>
            <div className="relative border border-orange-500/15 rounded-[2.5rem] p-1 overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(249,115,22,0.06),transparent)]" />
              <div className="relative bg-[#0d0d0d] rounded-[2rem] px-10 md:px-20 py-20 text-center">
                <p className="text-orange-500/70 text-xs font-bold uppercase tracking-[0.3em] mb-6">Let&apos;s Talk</p>
                <h2 className="text-[clamp(2rem,5vw,4rem)] font-black leading-tight mb-6">
                  Bring INSHOP<br />
                  <span className="text-orange-500">to your location.</span>
                </h2>
                <p className="text-gray-600 text-lg mb-12 max-w-lg mx-auto">
                  We handle installation, software, and ongoing operations. You get a live revenue-generating unit from day one.
                </p>
                <a href="mailto:info@inshop.io" className="inline-flex items-center gap-3 bg-orange-500 hover:bg-orange-600 font-black px-10 py-5 rounded-full text-lg transition-all hover:scale-105 hover:shadow-[0_0_60px_rgba(249,115,22,0.4)]">
                  Get in Touch
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 7l-10 10M7 7h10v10" /></svg>
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/4 py-10 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="text-xl font-black">in<span className="text-orange-500">S</span>hop</span>
          <p className="text-gray-700 text-xs uppercase tracking-widest">© 2026 INSHOP — Autonomous Retail Network</p>
          <div className="flex gap-8">
            {[["Supplier", "/modules/supplier"], ["Fillers", "/modules/fillers"], ["Referral", "/modules/referral"]].map(([l, h]) => (
              <Link key={h} href={h} className="text-xs text-gray-700 hover:text-white transition-colors">{l}</Link>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
