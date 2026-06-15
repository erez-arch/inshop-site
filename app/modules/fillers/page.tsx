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
          <span>09:14</span>
          <span className="font-bold tracking-widest">INSHOP</span>
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
      <div className="flex items-center gap-2 mb-5">
        <div className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
        <span className="text-orange-400 text-[10px] font-bold uppercase tracking-wider">New Job Alert</span>
      </div>
      <div className="bg-orange-500/10 border border-orange-500/20 rounded-2xl p-4 mb-4">
        <div className="text-white font-bold text-sm mb-1">Protein Bar Shelf</div>
        <div className="text-gray-500 text-[10px] mb-3">Profit Gym · Holon Branch</div>
        <div className="flex justify-between text-[10px] mb-2">
          <span className="text-gray-600">Items to restock</span>
          <span className="text-orange-400 font-bold">3 SKUs</span>
        </div>
        <div className="flex justify-between text-[10px]">
          <span className="text-gray-600">Est. time</span>
          <span className="text-white">~15 min</span>
        </div>
      </div>
      <div className="flex justify-between text-[10px] bg-[#141414] rounded-xl p-3 mb-3">
        <span className="text-gray-600">Payout</span>
        <span className="text-green-400 font-bold">₪ 28.00</span>
      </div>
      <div className="space-y-2 mt-auto">
        <button className="w-full bg-orange-500 text-white text-xs font-black py-3 rounded-xl">ACCEPT JOB</button>
        <button className="w-full bg-[#1a1a1a] text-gray-600 text-xs py-2.5 rounded-xl">Skip</button>
      </div>
    </div>
  );
}

function Screen1() {
  return (
    <div className="flex-1 p-4 flex flex-col overflow-hidden">
      <div className="text-white font-bold text-sm mb-4">Navigation</div>
      <div className="bg-[#141414] rounded-2xl p-3 mb-3 relative overflow-hidden" style={{ height: "130px" }}>
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: "linear-gradient(rgba(249,115,22,0.3) 1px,transparent 1px),linear-gradient(90deg,rgba(249,115,22,0.3) 1px,transparent 1px)",
          backgroundSize: "18px 18px"
        }} />
        <div className="relative z-10 flex items-end justify-between h-full">
          <div className="space-y-1 text-[9px] text-gray-600">
            <div>■ Weizmann St</div>
            <div>■ Ha&apos;Atzmaut Ave</div>
          </div>
          <div className="text-center">
            <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center text-white text-base mx-auto mb-1">📍</div>
            <div className="text-orange-400 text-[9px] font-bold">12 min</div>
          </div>
        </div>
      </div>
      <div className="bg-[#0d0d0d] border border-white/5 rounded-xl p-3 text-[10px] space-y-1.5">
        <div className="flex justify-between">
          <span className="text-gray-600">Destination</span>
          <span className="text-white">Profit Gym, Holon</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-600">Distance</span>
          <span className="text-white">3.4 km</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-600">ETA</span>
          <span className="text-green-400 font-bold">09:26</span>
        </div>
      </div>
    </div>
  );
}

function Screen2() {
  const items = [
    { name: "Protein Bar 500g", target: 24, filled: 24, done: true },
    { name: "Creatine 50g", target: 12, filled: 7, done: false },
    { name: "Energy Drink 330ml", target: 18, filled: 0, done: false },
  ];
  return (
    <div className="flex-1 p-4 flex flex-col overflow-hidden">
      <div className="text-white font-bold text-sm mb-1">Guided Restock</div>
      <div className="text-gray-700 text-[10px] mb-4">Follow instructions per item</div>
      <div className="space-y-2.5 flex-1">
        {items.map(item => (
          <div key={item.name} className={`rounded-xl p-3 border ${item.done ? "border-green-500/20 bg-green-500/5" : "border-white/5 bg-[#141414]"}`}>
            <div className="flex justify-between items-start mb-2">
              <span className="text-white text-[10px] font-bold pr-2 leading-tight">{item.name}</span>
              {item.done && <span className="text-green-400 text-[10px] shrink-0">✓ Done</span>}
            </div>
            <div className="flex items-center gap-2">
              <div className="flex-1 h-1 bg-[#2a2a2a] rounded-full">
                <div className={`h-1 rounded-full ${item.done ? "bg-green-500" : "bg-orange-500"}`} style={{ width: `${(item.filled / item.target) * 100}%` }} />
              </div>
              <span className="text-gray-600 text-[9px] shrink-0">{item.filled}/{item.target}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function Screen3() {
  return (
    <div className="flex-1 p-4 flex flex-col overflow-hidden">
      <div className="text-white font-bold text-sm mb-1">Photo Required</div>
      <div className="text-gray-600 text-[10px] mb-4">AI will verify restock quality</div>
      <div className="bg-[#141414] rounded-xl flex items-center justify-center mb-3 relative overflow-hidden shrink-0" style={{ height: "110px" }}>
        <div className="absolute inset-0" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.03) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.03) 1px,transparent 1px)", backgroundSize: "15% 15%" }} />
        <span className="text-3xl relative z-10">📸</span>
        <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-orange-500/60 rounded-tl" />
        <div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-orange-500/60 rounded-tr" />
        <div className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-orange-500/60 rounded-bl" />
        <div className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-orange-500/60 rounded-br" />
        <div className="absolute bottom-1.5 text-[9px] text-orange-400">Hold steady…</div>
      </div>
      <div className="space-y-1.5 mb-3">
        {["Shelf fully stocked", "Labels facing forward", "No gaps visible"].map(c => (
          <div key={c} className="flex items-center gap-2 bg-green-500/8 rounded-lg px-3 py-2">
            <div className="w-3 h-3 rounded-full bg-green-500 flex items-center justify-center shrink-0">
              <span className="text-white text-[7px]">✓</span>
            </div>
            <span className="text-gray-300 text-[10px]">{c}</span>
          </div>
        ))}
      </div>
      <div className="mt-auto bg-green-500 rounded-xl p-3 text-center">
        <div className="text-white font-black text-xs">APPROVED — ₪28 Released</div>
        <div className="text-white/70 text-[9px]">Payout scheduled for tonight</div>
      </div>
    </div>
  );
}

const SCREENS = [<Screen0 key={0} />, <Screen1 key={1} />, <Screen2 key={2} />, <Screen3 key={3} />];

const steps = [
  {
    step: "01", phase: "Alert",
    title: "Refill Alert Sent",
    detail: "When INSHOP OS detects that a unit needs restocking, it immediately pushes a job notification to available fillers nearby. The job card shows location, items needed, estimated time, and exact payout — before they even accept.",
    tech: ["Real-time push notification", "Geo-filtered to nearby fillers", "Instant payout preview"],
  },
  {
    step: "02", phase: "Navigation",
    title: "Job Accepted + Route",
    detail: "Once a filler accepts the job, the app opens turn-by-turn navigation to the unit. No separate maps app, no guessing. The filler's ETA is tracked by the OS and visible on the operator dashboard in real time.",
    tech: ["In-app navigation", "Live ETA tracking", "Operator dashboard visibility"],
  },
  {
    step: "03", phase: "Restock",
    title: "Guided Restock Checklist",
    detail: "On arrival, the filler follows a step-by-step item list built automatically from the shortage data. Each item shows exactly how many units to place. Items are checked off as they're filled, preventing skipped SKUs or quantity errors.",
    tech: ["Item-by-item guidance", "Quantity enforcement", "No manual counting"],
  },
  {
    step: "04", phase: "Verification",
    title: "AI Photo Approval",
    detail: "When all items are done, the filler photographs the stocked shelf. AI checks placement, label facing, and that every slot is filled. Only a passing photo triggers payout. No shortcuts, no guesswork — quality is built into the process.",
    tech: ["Automated shelf analysis", "Label & placement checks", "Payout on approval only"],
  },
];

export default function FillersModule() {
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
            <Link href="/modules/supplier" className="hover:text-white transition-colors">Supplier</Link>
            <Link href="/modules/fillers" className="text-orange-500 font-bold">Fillers</Link>
            <Link href="/modules/referral" className="hover:text-white transition-colors">Referral</Link>
          </div>
          <Link href="/" className="border border-white/8 hover:border-white/20 text-xs font-semibold px-4 py-2 rounded-full transition-all">← Back</Link>
        </div>
      </nav>

      <section className="pt-32 pb-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="inline-flex items-center gap-2 border border-orange-500/20 bg-orange-500/5 text-orange-400 text-xs font-bold px-4 py-2 rounded-full mb-8 uppercase tracking-widest">
            🔄 Module 02
          </div>
          <h1 className="text-[clamp(3rem,8vw,6rem)] font-black leading-[0.9] tracking-tight mb-6">
            Fillers<br /><span className="text-orange-500">Module</span>
          </h1>
          <p className="text-gray-500 text-xl max-w-2xl leading-relaxed mb-8">
            A distributed workforce of on-demand fillers — notified, routed, guided, and paid automatically. No scheduler. No calls. No uncertainty.
          </p>
          <div className="inline-flex items-center gap-3 border border-white/8 rounded-full px-5 py-2">
            <span className="text-orange-500 font-bold text-sm">One flow:</span>
            <span className="text-gray-500 text-sm">Alert · Navigate · Restock · Approve</span>
          </div>
        </div>
      </section>

      <section className="pb-24 px-6">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs text-gray-600 font-bold uppercase tracking-[0.2em] mb-16">The Filler Journey</p>
          <div className="flex gap-8 lg:gap-20">
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

            <div className="hidden lg:block w-[280px] shrink-0">
              <div className="sticky top-0 h-screen flex items-center">
                <div className="relative">
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

      <section className="py-24 px-6 bg-[#080808]">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs text-gray-600 font-bold uppercase tracking-[0.2em] mb-12">Why It Works</p>
          <div className="grid md:grid-cols-3 gap-5">
            {[
              { icon: "⚡", title: "On-Demand, Not Scheduled", body: "Fillers are dispatched exactly when and where needed. No wasted shifts, no idle staff, no shortage windows waiting for a scheduled employee." },
              { icon: "📍", title: "Proximity-Based Routing", body: "Jobs go to the nearest available filler first. The closer the filler, the faster the unit is restocked — and the better the experience for the customer." },
              { icon: "✅", title: "Pay Only for Quality", body: "Fillers are paid only after AI verifies the shelf. This creates a natural incentive for careful, correct restocking — without any inspection overhead." },
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
          <Link href="/modules/supplier" className="group bg-[#0d0d0d] border border-white/4 hover:border-white/10 rounded-2xl p-6 transition-all">
            <p className="text-gray-700 text-xs uppercase tracking-widest mb-2">← Previous Module</p>
            <p className="font-bold text-white group-hover:text-orange-400 transition-colors">Supplier Module</p>
          </Link>
          <Link href="/modules/referral" className="group bg-[#0d0d0d] border border-white/4 hover:border-orange-500/20 rounded-2xl p-6 transition-all text-right">
            <p className="text-gray-700 text-xs uppercase tracking-widest mb-2">Next Module →</p>
            <p className="font-bold text-white group-hover:text-orange-400 transition-colors">Referral Module</p>
          </Link>
        </div>
      </div>
    </div>
  );
}
