"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";

function PhoneFrame({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative w-[240px] h-[490px] mx-auto select-none">
      <div className="absolute inset-0 bg-gradient-to-b from-[#2a2a2a] to-[#1a1a1a] rounded-[38px] border border-white/10 shadow-[0_30px_80px_rgba(0,0,0,0.9)]" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-6 bg-[#111] rounded-b-2xl z-10" />
      <div className="absolute inset-[10px] top-[8px] rounded-[30px] overflow-hidden bg-[#080808] flex flex-col">
        <div className="flex justify-between items-center px-4 pt-8 pb-2 text-[9px] text-white/30 shrink-0">
          <span>14:32</span>
          <span className="font-bold tracking-widest">INSHOP OS</span>
          <span>●●●</span>
        </div>
        {children}
      </div>
      <div className="absolute bottom-2.5 left-1/2 -translate-x-1/2 w-16 h-1 bg-white/15 rounded-full" />
    </div>
  );
}

function Screen0() {
  return (
    <div className="flex-1 p-4 flex flex-col overflow-hidden">
      <div className="text-orange-500 text-[9px] font-bold uppercase tracking-widest mb-3">Inventory Monitor</div>
      <div className="space-y-2.5 mb-4">
        {[
          { name: "Protein Bar 500g", pct: 12, low: true },
          { name: "Energy Drink 330ml", pct: 71 },
          { name: "Pre-Workout 40g", pct: 48 },
        ].map(item => (
          <div key={item.name} className="bg-[#141414] rounded-xl p-3">
            <div className="flex justify-between text-[10px] mb-1.5">
              <span className="text-gray-300 truncate pr-2">{item.name}</span>
              <span className={item.low ? "text-red-400 font-black shrink-0" : "text-gray-600"}>{item.low ? "LOW" : `${item.pct}%`}</span>
            </div>
            <div className="h-1 bg-[#2a2a2a] rounded-full">
              <div className={`h-1 rounded-full ${item.low ? "bg-red-500" : "bg-orange-500/50"}`} style={{ width: `${item.pct}%` }} />
            </div>
          </div>
        ))}
      </div>
      <div className="mt-auto bg-red-500/10 border border-red-500/25 rounded-xl p-3 flex items-center gap-2.5">
        <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse shrink-0" />
        <div>
          <div className="text-red-400 text-[10px] font-bold">SHORTAGE DETECTED</div>
          <div className="text-gray-600 text-[9px]">Triggering auto-order…</div>
        </div>
      </div>
    </div>
  );
}

function Screen1() {
  return (
    <div className="flex-1 p-4 flex flex-col overflow-hidden">
      <div className="flex items-center gap-2 mb-4">
        <div className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center shrink-0">
          <span className="text-white text-[9px]">✓</span>
        </div>
        <span className="text-green-400 text-sm font-bold">Order Sent</span>
      </div>
      <div className="bg-[#141414] rounded-xl p-3.5 space-y-2.5 text-[10px]">
        <div className="flex justify-between">
          <span className="text-gray-500">Order</span>
          <span className="text-white font-mono">#INS-4821</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-500">Supplier</span>
          <span className="text-white">SupplyPro Ltd</span>
        </div>
        <div className="border-t border-white/5 pt-2.5">
          <div className="text-gray-600 text-[9px] mb-1.5">ITEMS</div>
          <div className="flex justify-between">
            <span className="text-gray-300">Protein Bar 500g</span>
            <span className="text-white font-bold">× 24</span>
          </div>
        </div>
        <div className="border-t border-white/5 pt-2.5 flex justify-between">
          <span className="text-gray-500">Sent at</span>
          <span className="text-green-400 font-mono">14:32:07</span>
        </div>
      </div>
      <div className="mt-auto text-center text-[9px] text-gray-700 py-3">No human action required</div>
    </div>
  );
}

function Screen2() {
  return (
    <div className="flex-1 p-4 flex flex-col overflow-hidden">
      <div className="bg-[#141414] rounded-xl p-4 mb-3">
        <div className="flex items-start gap-3 mb-3">
          <span className="text-2xl">🚚</span>
          <div>
            <div className="text-white font-bold text-sm">Delivery Arrived</div>
            <div className="text-gray-500 text-[10px]">Order #INS-4821</div>
          </div>
        </div>
        <div className="text-gray-600 text-[10px] font-mono">Profit Gym · Holon · 15:48</div>
      </div>
      <div className="bg-orange-500/10 border border-orange-500/20 rounded-xl p-3">
        <div className="text-orange-500 text-[9px] font-bold uppercase tracking-widest mb-2">Refiller Dispatched</div>
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-full bg-orange-500 flex items-center justify-center text-white text-sm font-black shrink-0">A</div>
          <div>
            <div className="text-white text-xs font-bold">Adi Ben-David</div>
            <div className="flex items-center gap-1 text-[9px] text-gray-500">
              <div className="w-1.5 h-1.5 rounded-full bg-green-400" />
              <span>12 min away</span>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-auto flex items-center gap-1.5 text-[9px] text-gray-700">
        <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
        Auto-logged to OS
      </div>
    </div>
  );
}

function Screen3() {
  return (
    <div className="flex-1 p-4 flex flex-col overflow-hidden">
      <div className="mb-3">
        <div className="text-white font-bold text-sm">AI Shelf Review</div>
        <div className="text-gray-500 text-[10px]">Protein Bar shelf · Unit A</div>
      </div>
      <div className="bg-[#141414] rounded-xl h-24 flex items-center justify-center mb-3 relative overflow-hidden shrink-0">
        <div className="absolute inset-0" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.03) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.03) 1px,transparent 1px)", backgroundSize: "20% 20%" }} />
        <span className="text-3xl relative z-10">📸</span>
        <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-green-400/60 rounded-tl" />
        <div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-green-400/60 rounded-tr" />
        <div className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-green-400/60 rounded-bl" />
        <div className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-green-400/60 rounded-br" />
        <div className="absolute bottom-1.5 left-0 right-0 text-center text-[9px] text-green-400">Analyzing…</div>
      </div>
      <div className="space-y-1.5 mb-3">
        {["Placement correct", "Labels facing out", "Qty: 24 / 24", "Shelf complete"].map(c => (
          <div key={c} className="flex items-center gap-2 bg-green-500/8 rounded-lg p-2">
            <div className="w-3.5 h-3.5 rounded-full bg-green-500 flex items-center justify-center shrink-0">
              <span className="text-white text-[7px]">✓</span>
            </div>
            <span className="text-gray-300 text-[10px]">{c}</span>
          </div>
        ))}
      </div>
      <div className="mt-auto bg-green-500 rounded-xl p-2.5 text-center">
        <div className="text-white font-black text-xs">RESTOCK APPROVED</div>
        <div className="text-white/70 text-[9px]">Payment released to filler</div>
      </div>
    </div>
  );
}

const SCREENS = [<Screen0 key={0} />, <Screen1 key={1} />, <Screen2 key={2} />, <Screen3 key={3} />];

const steps = [
  {
    step: "01", phase: "Detection",
    title: "Shortage Detected",
    detail: "The INSHOP OS monitors real-time inventory inside every unit. The moment a product drops below its minimum threshold — a predefined level set per SKU — the system flags it automatically. No employee checks, counts, or reports.",
    tech: ["Real-time shelf sensors", "Per-SKU thresholds", "24/7 monitoring"],
  },
  {
    step: "02", phase: "Ordering",
    title: "Auto Order Placed",
    detail: "The instant a shortage is flagged, the system generates and dispatches a purchase order to the relevant supplier. Product details, quantities, and delivery location included. The operator gets a notification for visibility — not action.",
    tech: ["Auto-generated POs", "Supplier app notification", "Operator dashboard alert"],
  },
  {
    step: "03", phase: "Delivery",
    title: "Supplier Delivers",
    detail: "The supplier brings goods to the gym. Upon arrival, the system notifies the assigned refiller — the person responsible for that unit. Delivery is timestamped and logged automatically in the OS.",
    tech: ["Delivery confirmation", "Push to refiller app", "Timestamped log"],
  },
  {
    step: "04", phase: "Verification",
    title: "Restocked & AI-Verified",
    detail: "The refiller stocks the shelves, then photographs them using the INSHOP app. AI checks placement, label facing, and quantity. Only when every check passes does the restock count — and only then is payment released.",
    tech: ["AI shelf-photo analysis", "Placement enforcement", "Pay on verified completion"],
  },
];

export default function SupplierModule() {
  const [activeStep, setActiveStep] = useState(0);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      const vh = window.innerHeight;
      let current = 0;
      stepRefs.current.forEach((ref, i) => {
        if (!ref) return;
        const rect = ref.getBoundingClientRect();
        if (rect.top <= vh * 0.55) current = i;
      });
      setActiveStep(current);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="bg-[#060606] text-white min-h-screen">
      <nav className="fixed top-0 inset-x-0 z-50 bg-black/50 backdrop-blur-2xl border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-between">
          <Link href="/" className="text-lg font-black">in<span className="text-orange-500">S</span>hop</Link>
          <div className="flex items-center gap-6 text-xs text-gray-500">
            <Link href="/modules/supplier" className="text-orange-500 font-bold">Supplier</Link>
            <Link href="/modules/fillers" className="hover:text-white transition-colors">Fillers</Link>
            <Link href="/modules/referral" className="hover:text-white transition-colors">Referral</Link>
          </div>
          <Link href="/" className="border border-white/8 hover:border-white/20 text-xs font-semibold px-4 py-2 rounded-full transition-all">← Back</Link>
        </div>
      </nav>

      {/* HERO */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="inline-flex items-center gap-2 border border-orange-500/20 bg-orange-500/5 text-orange-400 text-xs font-bold px-4 py-2 rounded-full mb-8 uppercase tracking-widest">
            📦 Module 01
          </div>
          <h1 className="text-[clamp(3rem,8vw,6rem)] font-black leading-[0.9] tracking-tight mb-6">
            Supplier<br /><span className="text-orange-500">Module</span>
          </h1>
          <p className="text-gray-500 text-xl max-w-2xl leading-relaxed mb-8">
            From the moment stock drops below threshold to the moment the shelf is full — the entire supply chain runs automatically, without a single phone call.
          </p>
          <div className="inline-flex items-center gap-3 border border-white/8 rounded-full px-5 py-2">
            <span className="text-orange-500 font-bold text-sm">One connected flow:</span>
            <span className="text-gray-500 text-sm">Detect · Order · Deliver · Refill</span>
          </div>
        </div>
      </section>

      {/* SCROLL STORY */}
      <section className="pb-24 px-6">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs text-gray-600 font-bold uppercase tracking-[0.2em] mb-16">The Automated Flow</p>
          <div className="flex gap-8 lg:gap-20">
            {/* Steps */}
            <div className="flex-1 min-w-0">
              {steps.map((item, i) => (
                <div
                  key={item.step}
                  ref={el => { stepRefs.current[i] = el; }}
                  className="min-h-[80vh] flex items-center py-16"
                >
                  <div className="max-w-lg">
                    <div className="flex items-center gap-3 mb-5">
                      <div className={`w-10 h-10 rounded-2xl flex items-center justify-center text-sm font-black transition-all duration-500 ${activeStep === i ? "bg-orange-500 text-white shadow-[0_0_20px_rgba(249,115,22,0.4)]" : "bg-orange-500/10 border border-orange-500/20 text-orange-500/40"}`}>
                        {item.step}
                      </div>
                      <span className="text-xs text-orange-500/60 font-bold uppercase tracking-widest">{item.phase}</span>
                    </div>
                    <h3 className="text-3xl lg:text-4xl font-black text-white mb-4 leading-tight">{item.title}</h3>
                    <p className="text-gray-500 leading-relaxed mb-6 text-lg">{item.detail}</p>
                    <div className="flex flex-wrap gap-2">
                      {item.tech.map(t => (
                        <span key={t} className="text-xs bg-[#1a1a1a] border border-white/5 text-gray-500 px-3 py-1.5 rounded-full">{t}</span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Sticky phone */}
            <div className="hidden lg:block w-[280px] shrink-0">
              <div className="sticky top-0 h-screen flex items-center">
                <div className="relative">
                  {/* Step dots */}
                  <div className="absolute -left-8 top-1/2 -translate-y-1/2 flex flex-col gap-2.5">
                    {steps.map((_, i) => (
                      <div key={i} className={`rounded-full transition-all duration-500 ${activeStep === i ? "w-1.5 h-8 bg-orange-500" : "w-1.5 h-1.5 bg-white/10"}`} />
                    ))}
                  </div>
                  <PhoneFrame>
                    <div className="flex-1 relative overflow-hidden">
                      {SCREENS.map((screen, i) => (
                        <div
                          key={i}
                          className="absolute inset-0 transition-all duration-500"
                          style={{
                            opacity: activeStep === i ? 1 : 0,
                            transform: activeStep === i ? "translateY(0)" : activeStep > i ? "translateY(-12px)" : "translateY(12px)",
                            pointerEvents: activeStep === i ? "auto" : "none",
                          }}
                        >
                          {screen}
                        </div>
                      ))}
                    </div>
                  </PhoneFrame>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRINCIPLES */}
      <section className="py-24 px-6 bg-[#080808]">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs text-gray-600 font-bold uppercase tracking-[0.2em] mb-12">Design Principles</p>
          <div className="grid md:grid-cols-3 gap-5">
            {[
              { icon: "🔄", title: "Fully Automated", body: "From detection to delivery confirmation — no human decision required at any stage of the ordering process." },
              { icon: "🔍", title: "AI-Verified Restocks", body: "No stock is marked available until AI confirms the shelf photo. This prevents ghost inventory and customer disappointment." },
              { icon: "🔔", title: "Transparent at Every Step", body: "Operators see every event in real time — shortage flags, orders placed, deliveries, and restocks — all in one dashboard." },
            ].map(c => (
              <div key={c.title} className="bg-[#0d0d0d] border border-white/4 rounded-3xl p-7">
                <div className="text-3xl mb-5">{c.icon}</div>
                <h3 className="font-black text-white text-xl mb-3">{c.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{c.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="px-6 py-16">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-4">
          <Link href="/" className="group bg-[#0d0d0d] border border-white/4 hover:border-white/10 rounded-2xl p-6 transition-all">
            <p className="text-gray-700 text-xs uppercase tracking-widest mb-2">← Back</p>
            <p className="font-bold text-white">Home</p>
          </Link>
          <Link href="/modules/fillers" className="group bg-[#0d0d0d] border border-white/4 hover:border-orange-500/20 rounded-2xl p-6 transition-all text-right">
            <p className="text-gray-700 text-xs uppercase tracking-widest mb-2">Next Module →</p>
            <p className="font-bold text-white group-hover:text-orange-400 transition-colors">Fillers Module</p>
          </Link>
        </div>
      </div>
    </div>
  );
}
