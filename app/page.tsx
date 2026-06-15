"use client";

import { useState, useEffect, useRef } from "react";

function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true); }, { threshold });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, inView };
}

function FadeIn({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const { ref, inView } = useInView();
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(40px)",
        transition: `opacity 0.8s ease ${delay}s, transform 0.8s ease ${delay}s`,
      }}
    >
      {children}
    </div>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="bg-[#080808] text-white overflow-x-hidden">

      {/* NAV */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "bg-black/80 backdrop-blur-xl border-b border-white/5" : ""}`}>
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-18 py-4">
          <a href="#" className="text-2xl font-black tracking-tight select-none">
            in<span className="text-orange-500">S</span>hop
          </a>
          <div className="hidden md:flex items-center gap-8">
            {[["Experience", "#experience"], ["Technology", "#technology"], ["The Unit", "#unit"], ["Live Now", "#live"], ["Contact", "#contact"]].map(([label, href]) => (
              <a key={href} href={href} className="text-sm text-gray-400 hover:text-white transition-colors">{label}</a>
            ))}
          </div>
          <a href="#contact" className="hidden md:inline-flex items-center gap-2 border border-orange-500/50 hover:bg-orange-500 hover:border-orange-500 text-white text-sm font-bold px-5 py-2.5 rounded-full transition-all duration-300">
            Get in Touch
          </a>
          <button className="md:hidden text-gray-400 hover:text-white" onClick={() => setMenuOpen(!menuOpen)}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {menuOpen ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /> : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}
            </svg>
          </button>
        </div>
        {menuOpen && (
          <div className="md:hidden bg-black/95 backdrop-blur-xl px-6 pb-6 flex flex-col gap-5 border-b border-white/5">
            {[["Experience", "#experience"], ["Technology", "#technology"], ["The Unit", "#unit"], ["Live Now", "#live"], ["Contact", "#contact"]].map(([label, href]) => (
              <a key={href} href={href} onClick={() => setMenuOpen(false)} className="text-gray-300 hover:text-white transition-colors">{label}
              </a>
            ))}
          </div>
        )}
      </nav>

      {/* HERO */}
      <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 pt-24 pb-16">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_60%,rgba(249,115,22,0.08),transparent)]" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-orange-500/30 to-transparent" />

        <div className="relative z-10 max-w-5xl mx-auto">
          <div
            style={{ opacity: 1, animation: "fadeUp 1s ease 0.2s both" }}
            className="inline-flex items-center gap-2 text-orange-400 text-xs font-bold uppercase tracking-[0.2em] mb-8 border border-orange-500/20 bg-orange-500/5 px-5 py-2 rounded-full"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse" />
            Autonomous Retail — Live Now
          </div>

          <h1
            style={{ animation: "fadeUp 1s ease 0.4s both" }}
            className="text-6xl md:text-8xl font-black leading-[0.95] tracking-tight mb-8"
          >
            Walk in.
            <br />
            <span className="text-orange-500">Grab it.</span>
            <br />
            Walk out.
          </h1>

          <p
            style={{ animation: "fadeUp 1s ease 0.6s both" }}
            className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto mb-12 leading-relaxed"
          >
            No cashier. No card. No queue.
            <br />
            INSHOP recognizes your face and handles the rest.
          </p>

          <div style={{ animation: "fadeUp 1s ease 0.8s both" }} className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#experience" className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-4 rounded-full text-lg transition-all hover:scale-105 hover:shadow-[0_0_40px_rgba(249,115,22,0.4)]">
              See the Experience
            </a>
            <a href="#unit" className="border border-white/10 hover:border-white/30 text-white font-semibold px-8 py-4 rounded-full text-lg transition-all hover:bg-white/5">
              The Technology
            </a>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
          <span className="text-xs text-gray-500 uppercase tracking-widest">Scroll</span>
          <div className="w-px h-10 bg-gradient-to-b from-gray-500 to-transparent" />
        </div>

        <style>{`
          @keyframes fadeUp {
            from { opacity: 0; transform: translateY(30px); }
            to { opacity: 1; transform: translateY(0); }
          }
        `}</style>
      </section>

      {/* TAGLINE STRIP */}
      <section className="border-y border-white/5 py-6 overflow-hidden bg-[#0a0a0a]">
        <div className="flex gap-16 whitespace-nowrap animate-[marquee_20s_linear_infinite]">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="flex gap-16 shrink-0">
              {["Train Smart", "Supplement Smart", "Shop Smart", "Face Recognition", "Zero Friction", "24/7 Access", "Autonomous Retail"].map((t) => (
                <span key={t} className="text-sm font-semibold text-gray-600 uppercase tracking-widest">
                  {t} <span className="text-orange-500 mx-6">·</span>
                </span>
              ))}
            </div>
          ))}
        </div>
        <style>{`
          @keyframes marquee { from { transform: translateX(0); } to { transform: translateX(-33.333%); } }
        `}</style>
      </section>

      {/* EXPERIENCE */}
      <section id="experience" className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <FadeIn className="text-center mb-20">
            <span className="text-orange-500 text-xs font-bold uppercase tracking-[0.2em]">The Experience</span>
            <h2 className="text-5xl md:text-6xl font-black mt-4 mb-6">
              Six seconds.<br />
              <span className="text-gray-500">That&apos;s all it takes.</span>
            </h2>
            <p className="text-gray-500 text-lg max-w-xl mx-auto">One-time registration — only once in your life. After that, just show up.</p>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-8 items-start">
            <div className="space-y-3">
              {[
                { n: "01", title: "Approach the unit", sub: "Your face is your key", icon: "🚶" },
                { n: "02", title: "Face recognition", sub: "Instant identity — no app, no card", icon: "📷" },
                { n: "03", title: "Door unlocks", sub: "Access in under a second", icon: "🔓" },
                { n: "04", title: "Take what you need", sub: "Natural shopping — grab and go", icon: "🛒" },
                { n: "05", title: "Close the door", sub: "The system does the rest", icon: "✅" },
                { n: "06", title: "Receipt by SMS", sub: "Payment processed automatically", icon: "📱" },
              ].map((item, i) => (
                <FadeIn key={item.n} delay={i * 0.08}>
                  <div className="group flex items-center gap-5 bg-[#0f0f0f] hover:bg-[#141414] border border-white/5 hover:border-orange-500/20 rounded-2xl px-6 py-5 transition-all cursor-default">
                    <div className="text-xs font-black text-orange-500/50 group-hover:text-orange-500 transition-colors w-8 shrink-0">{item.n}</div>
                    <span className="text-2xl">{item.icon}</span>
                    <div className="flex-1">
                      <div className="font-bold text-white text-base">{item.title}</div>
                      <div className="text-sm text-gray-600 mt-0.5">{item.sub}</div>
                    </div>
                    <div className="w-1 h-8 rounded-full bg-orange-500/0 group-hover:bg-orange-500/60 transition-all" />
                  </div>
                </FadeIn>
              ))}
            </div>

            <FadeIn delay={0.3} className="sticky top-24">
              <div className="rounded-3xl overflow-hidden border border-white/8 shadow-[0_0_80px_rgba(249,115,22,0.1)]">
                <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
                  <iframe
                    src="https://www.youtube.com/embed/i6EquE3bQE8?autoplay=0&rel=0&modestbranding=1"
                    title="INSHOP — The Experience"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="absolute inset-0 w-full h-full"
                  />
                </div>
                <div className="bg-[#0f0f0f] border-t border-white/5 px-6 py-4">
                  <p className="text-sm text-gray-500">Watch the full experience in action</p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* TECHNOLOGY */}
      <section id="technology" className="py-32 px-6 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto">
          <FadeIn className="text-center mb-20">
            <span className="text-orange-500 text-xs font-bold uppercase tracking-[0.2em]">Under the Hood</span>
            <h2 className="text-5xl md:text-6xl font-black mt-4">
              Built on <span className="text-orange-500">intelligence</span>
            </h2>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: "🧠",
                title: "Face Recognition",
                desc: "Proprietary AI identifies registered users in under a second. No phone. No card. No PIN. Your face is your access.",
                tag: "Identity Layer",
              },
              {
                icon: "👁️",
                title: "Smart Inventory",
                desc: "The unit tracks every product in real time. When stock drops, an automatic order fires — detect, order, deliver, refill, all without human intervention.",
                tag: "Operations Layer",
              },
              {
                icon: "⚡",
                title: "Frictionless Payment",
                desc: "Payment tokens registered once. Every purchase is charged automatically the moment the door closes. A receipt arrives by SMS.",
                tag: "Commerce Layer",
              },
              {
                icon: "📊",
                title: "Real-Time Dashboard",
                desc: "Every unit reports live — sales, stock, user activity, and performance data visible across the entire network in one OS.",
                tag: "Data Layer",
              },
              {
                icon: "🤖",
                title: "AI Shelf Verification",
                desc: "When fillers restock the unit, AI analyzes a photo of the shelf to verify correct placement before approving any payment.",
                tag: "Quality Layer",
              },
              {
                icon: "📲",
                title: "Personalized Screen",
                desc: "Each unit displays personalized content — the customer's name, targeted offers, and promotions tailored to their profile.",
                tag: "Marketing Layer",
              },
            ].map((item, i) => (
              <FadeIn key={item.title} delay={i * 0.08}>
                <div className="group h-full bg-[#0f0f0f] hover:bg-[#131313] border border-white/5 hover:border-orange-500/20 rounded-3xl p-7 transition-all">
                  <div className="text-4xl mb-5">{item.icon}</div>
                  <div className="text-xs text-orange-500/60 font-bold uppercase tracking-widest mb-3">{item.tag}</div>
                  <h3 className="text-xl font-black text-white mb-3">{item.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* THE UNIT */}
      <section id="unit" className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <FadeIn>
              <span className="text-orange-500 text-xs font-bold uppercase tracking-[0.2em]">The Hardware</span>
              <h2 className="text-5xl md:text-6xl font-black mt-4 mb-6 leading-tight">
                One OS.<br />
                <span className="text-orange-500">Every Layer.</span>
              </h2>
              <p className="text-gray-400 text-lg mb-10 leading-relaxed">
                INSHOP OS connects the entire operation in one system — suppliers, inventory, refillers, retail units, and customers. Nothing operates in isolation.
              </p>
              <div className="space-y-4">
                {[
                  { icon: "📦", label: "Suppliers", desc: "Auto-ordering when stock drops below threshold" },
                  { icon: "🗃️", label: "Inventory", desc: "Real-time tracking across all units" },
                  { icon: "♻️", label: "Refillers", desc: "Smart dispatch with AI verification" },
                  { icon: "🏪", label: "Smart Retail Units", desc: "The physical terminals — face ID enabled" },
                  { icon: "👥", label: "Customers", desc: "Registered, recognized, rewarded" },
                ].map((item) => (
                  <div key={item.label} className="flex items-center gap-4 group">
                    <div className="w-10 h-10 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-lg group-hover:bg-orange-500/20 transition-all">
                      {item.icon}
                    </div>
                    <div>
                      <span className="font-bold text-white">{item.label}</span>
                      <span className="text-gray-600 text-sm ml-3">{item.desc}</span>
                    </div>
                  </div>
                ))}
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="relative">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(249,115,22,0.15),transparent_70%)]" />
                <div className="relative bg-[#0f0f0f] border border-orange-500/20 rounded-3xl p-10 shadow-[0_0_80px_rgba(249,115,22,0.12)]">
                  <div className="text-center mb-8">
                    <div className="inline-flex items-center gap-2 text-xs text-orange-400 font-bold uppercase tracking-widest bg-orange-500/10 border border-orange-500/20 px-4 py-2 rounded-full">
                      <span className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse" />
                      INSHOP OS — Connected
                    </div>
                  </div>
                  <div className="relative flex items-center justify-center py-8">
                    <div className="w-28 h-28 rounded-full bg-orange-500/15 border-2 border-orange-500/60 flex items-center justify-center shadow-[0_0_40px_rgba(249,115,22,0.25)] relative z-10">
                      <div className="text-center">
                        <div className="text-white font-black text-base leading-tight">INSHOP</div>
                        <div className="text-orange-500 font-black text-base">OS</div>
                      </div>
                    </div>
                    <div className="absolute w-52 h-52 rounded-full border border-orange-500/15 animate-[spin_20s_linear_infinite]" />
                    <div className="absolute w-72 h-72 rounded-full border border-orange-500/8 animate-[spin_30s_linear_infinite_reverse]" />
                    {[
                      { angle: -90, icon: "📦", label: "Suppliers" },
                      { angle: -18, icon: "🗃️", label: "Inventory" },
                      { angle: 54, icon: "♻️", label: "Refillers" },
                      { angle: 126, icon: "🏪", label: "Units" },
                      { angle: 198, icon: "👥", label: "Customers" },
                    ].map((node) => {
                      const r = 120;
                      const rad = (node.angle * Math.PI) / 180;
                      return (
                        <div
                          key={node.label}
                          className="absolute"
                          style={{ transform: `translate(${Math.cos(rad) * r}px, ${Math.sin(rad) * r}px)` }}
                        >
                          <div className="bg-[#1a1a1a] border border-orange-500/30 rounded-xl px-3 py-2 text-center min-w-[68px]">
                            <div className="text-lg">{node.icon}</div>
                            <div className="text-xs text-white font-semibold mt-1">{node.label}</div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                  <p className="text-center text-xs text-gray-600 mt-8 uppercase tracking-widest">Suppliers · Inventory · Refillers · Units · Customers</p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* FOR GYMS */}
      <section className="py-32 px-6 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto">
          <FadeIn className="text-center mb-20">
            <span className="text-orange-500 text-xs font-bold uppercase tracking-[0.2em]">For Gym Owners</span>
            <h2 className="text-5xl md:text-6xl font-black mt-4">
              Every unit launches<br />
              <span className="text-orange-500">ready to sell.</span>
            </h2>
            <p className="text-gray-500 text-lg mt-6 max-w-xl mx-auto">
              We build the gym management software. So when an INSHOP unit arrives, your members are already registered.
            </p>
          </FadeIn>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
            {[
              { num: "01", icon: "🖥️", title: "Gym Software", sub: "We build and provide it" },
              { num: "02", icon: "🗄️", title: "Member Data", sub: "Name · Mobile · Payment token" },
              { num: "03", icon: "👥", title: "Registered Users", sub: "Thousands from day one" },
              { num: "04", icon: "🛒", title: "Live Retail Unit", sub: "Ready-to-buy on arrival" },
            ].map((item, i) => (
              <FadeIn key={item.num} delay={i * 0.1}>
                <div className="relative bg-[#0f0f0f] border border-white/5 hover:border-orange-500/20 rounded-2xl p-6 text-center transition-all h-full">
                  {i < 3 && <div className="hidden md:block absolute -right-2 top-1/2 -translate-y-1/2 z-10 text-orange-500/40 text-lg">→</div>}
                  <div className="text-xs text-orange-500/50 font-black mb-4">{item.num}</div>
                  <div className="text-3xl mb-3">{item.icon}</div>
                  <div className="font-bold text-white text-sm">{item.title}</div>
                  <div className="text-xs text-gray-600 mt-1">{item.sub}</div>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn>
            <div className="bg-[#0f0f0f] border border-orange-500/20 rounded-2xl p-6 text-center">
              <p className="text-white text-lg font-bold">
                More units &nbsp;·&nbsp; <span className="text-orange-500">More users</span> &nbsp;·&nbsp; More repeat purchases
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* LIVE NOW */}
      <section id="live" className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <FadeIn>
              <span className="text-orange-500 text-xs font-bold uppercase tracking-[0.2em]">Proof of Execution</span>
              <h2 className="text-5xl md:text-6xl font-black mt-4 mb-6">
                Not a concept.<br />
                <span className="text-orange-500">Already live.</span>
              </h2>
              <p className="text-gray-500 text-lg mb-10">
                10 fully operational units across Israel — real customers, real purchases, real results.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-[#0f0f0f] border border-orange-500/20 rounded-2xl p-6">
                  <div className="text-5xl font-black text-orange-500">10</div>
                  <div className="text-white font-bold mt-1">Live Locations</div>
                  <div className="text-gray-600 text-sm mt-1">Across Israel</div>
                </div>
                <div className="bg-[#0f0f0f] border border-orange-500/20 rounded-2xl p-6">
                  <div className="text-4xl font-black text-orange-500">₪20K+</div>
                  <div className="text-white font-bold mt-1">Monthly Sales</div>
                  <div className="text-gray-600 text-sm mt-1">Per mature unit</div>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="bg-[#0f0f0f] border border-white/5 rounded-3xl p-8">
                <p className="text-xs text-gray-600 uppercase tracking-widest mb-6">Active Locations</p>
                <div className="flex flex-wrap gap-3">
                  {[
                    "Profit Holon", "Profit Shoham", "Profit Kiryat Ono", "Profit Modi'in",
                    "Profit Yokneam", "Profit Petah Tikva", "Profit Kiryat Yam",
                    "Profit Rosh HaAyin", "Profit Yavne", "Lazuz Petah Tikva",
                  ].map((loc) => (
                    <div key={loc} className="flex items-center gap-2 bg-[#141414] border border-white/5 hover:border-orange-500/20 text-gray-400 hover:text-white text-xs px-3 py-2 rounded-full transition-all">
                      <span className="w-1.5 h-1.5 rounded-full bg-orange-500 shrink-0" />
                      {loc}
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* VISION */}
      <section className="py-32 px-6 bg-[#0a0a0a]">
        <div className="max-w-5xl mx-auto text-center">
          <FadeIn>
            <span className="text-orange-500 text-xs font-bold uppercase tracking-[0.2em]">The Vision</span>
            <h2 className="text-5xl md:text-7xl font-black mt-4 mb-6 leading-tight">
              Built in Israel.<br />
              <span className="text-orange-500">Designed for</span><br />
              the world.
            </h2>
            <p className="text-gray-500 text-xl max-w-2xl mx-auto mb-16">
              Starting with 800 gyms in Israel. Scaling to 20,000+ fitness locations worldwide. Then beyond — into street retail and global autonomous commerce.
            </p>
          </FadeIn>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { step: "Phase 01", title: "Win Israel", icon: "📍", detail: "800 target gyms · Build density & registered users" },
              { step: "Phase 02", title: "Scale Through Gyms", icon: "🌍", detail: "20,000+ gyms worldwide · Replicate the model globally" },
              { step: "Phase 03", title: "Beyond Gyms", icon: "🏙️", detail: "Street retail · Autonomous stores everywhere" },
            ].map((item, i) => (
              <FadeIn key={item.step} delay={i * 0.15}>
                <div className="bg-[#0f0f0f] border border-white/5 hover:border-orange-500/20 rounded-3xl p-8 text-center h-full transition-all group">
                  <div className="text-xs text-orange-500/50 font-black uppercase tracking-widest mb-4 group-hover:text-orange-500 transition-colors">{item.step}</div>
                  <div className="text-5xl mb-5">{item.icon}</div>
                  <h3 className="text-xl font-black text-white mb-3">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.detail}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="py-32 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn>
            <div className="relative rounded-3xl overflow-hidden border border-orange-500/20 p-1">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(249,115,22,0.12),transparent_70%)]" />
              <div className="relative bg-[#0f0f0f] rounded-[20px] px-8 md:px-16 py-16 text-center">
                <div className="text-5xl mb-6">🤝</div>
                <h2 className="text-4xl md:text-5xl font-black mb-4">
                  Bring INSHOP<br />
                  <span className="text-orange-500">to your location.</span>
                </h2>
                <p className="text-gray-500 text-lg mb-10 max-w-lg mx-auto">
                  Partner with us. No setup complexity — we handle installation, software, and operations. You earn from day one.
                </p>
                <a
                  href="mailto:info@inshop.io"
                  className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-black px-10 py-5 rounded-full text-xl transition-all hover:scale-105 hover:shadow-[0_0_50px_rgba(249,115,22,0.5)]"
                >
                  Get in Touch
                </a>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/5 py-10 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="text-2xl font-black">in<span className="text-orange-500">S</span>hop</span>
          <p className="text-gray-700 text-sm">© 2026 INSHOP — Autonomous Retail Network</p>
          <div className="flex gap-6">
            {[["Experience", "#experience"], ["Technology", "#technology"], ["Live Now", "#live"]].map(([l, h]) => (
              <a key={h} href={h} className="text-sm text-gray-700 hover:text-white transition-colors">{l}</a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
