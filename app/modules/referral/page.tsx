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
          <span>11:02</span>
          <span className="font-bold tracking-widest">INSHOP</span>
          <span>●●●</span>
        </div>
        {children}
      </div>
      <div className="absolute bottom-2.5 left-1/2 -translate-x-1/2 w-16 h-1 bg-white/15 rounded-full" />
    </div>
  );
}

function QRCode() {
  const cells: number[][] = [
    [1,1,1,1,1,1,1,0,1,1,0,1,1,0,1,1,1,1,1,1,1],
    [1,0,0,0,0,0,1,0,0,1,0,1,0,0,1,0,0,0,0,0,1],
    [1,0,1,1,1,0,1,0,1,0,1,0,1,0,1,0,1,1,1,0,1],
    [1,0,1,1,1,0,1,0,0,1,1,1,0,0,1,0,1,1,1,0,1],
    [1,0,1,1,1,0,1,0,1,0,1,0,1,0,1,0,1,1,1,0,1],
    [1,0,0,0,0,0,1,0,0,1,0,1,0,0,1,0,0,0,0,0,1],
    [1,1,1,1,1,1,1,0,1,0,1,0,1,0,1,1,1,1,1,1,1],
    [0,0,0,0,0,0,0,0,1,1,0,1,1,0,0,0,0,0,0,0,0],
    [1,0,1,1,0,1,1,1,0,1,1,0,1,1,1,0,1,1,0,1,1],
    [0,1,0,0,1,0,0,0,1,0,0,1,0,0,0,1,0,0,1,0,0],
    [1,1,0,1,1,0,1,0,1,1,0,0,1,0,1,0,1,0,1,1,0],
    [0,0,1,0,0,1,0,0,0,1,1,0,0,1,0,0,0,1,0,0,1],
    [1,0,1,0,1,0,1,1,0,0,1,1,0,1,1,1,0,0,1,0,1],
    [0,0,0,0,0,0,0,0,1,0,0,1,1,0,0,1,1,0,0,1,0],
    [1,1,1,1,1,1,1,0,0,1,0,0,1,0,1,0,0,1,1,0,1],
    [1,0,0,0,0,0,1,0,1,0,1,1,0,1,0,0,1,0,0,1,0],
    [1,0,1,1,1,0,1,0,0,1,1,0,1,0,1,1,0,1,1,0,1],
    [1,0,1,1,1,0,1,0,1,0,0,1,0,1,0,0,1,0,0,1,1],
    [1,0,1,1,1,0,1,0,0,1,1,0,1,1,0,1,1,0,1,0,0],
    [1,0,0,0,0,0,1,0,1,1,0,0,1,0,1,0,0,1,0,1,0],
    [1,1,1,1,1,1,1,0,0,0,1,1,0,0,0,1,0,0,1,0,1],
  ];
  return (
    <div className="inline-grid gap-px" style={{ gridTemplateColumns: `repeat(21, 1fr)`, width: "100%", aspectRatio: "1" }}>
      {cells.flat().map((on, idx) => (
        <div key={idx} className={on ? "bg-white rounded-[1px]" : "bg-transparent"} />
      ))}
    </div>
  );
}

function Screen0() {
  return (
    <div className="flex-1 p-4 flex flex-col overflow-hidden">
      <div className="text-white font-bold text-sm mb-1">Your Referral</div>
      <div className="text-gray-600 text-[10px] mb-4">Share with clients to earn commission</div>
      <div className="bg-[#141414] rounded-2xl p-4 mb-3 flex flex-col items-center">
        <div className="w-28 mb-3">
          <QRCode />
        </div>
        <div className="text-white font-mono text-xs tracking-widest">ILAN-PRO</div>
        <div className="text-gray-600 text-[9px] mt-1">Personal referral code</div>
      </div>
      <div className="grid grid-cols-2 gap-2 mt-auto">
        <div className="bg-[#0d0d0d] border border-white/5 rounded-xl p-3 text-center">
          <div className="text-orange-400 font-black text-base">12</div>
          <div className="text-gray-700 text-[9px]">Referrals</div>
        </div>
        <div className="bg-[#0d0d0d] border border-white/5 rounded-xl p-3 text-center">
          <div className="text-green-400 font-black text-base">₪840</div>
          <div className="text-gray-700 text-[9px]">Earned</div>
        </div>
      </div>
    </div>
  );
}

function Screen1() {
  return (
    <div className="flex-1 p-4 flex flex-col overflow-hidden">
      <div className="text-white font-bold text-sm mb-4">Terminal Scan</div>
      <div className="bg-[#0d0d0d] border border-white/5 rounded-2xl p-4 mb-3">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-8 h-8 rounded-full bg-orange-500/20 flex items-center justify-center text-orange-400 text-base">👤</div>
          <div>
            <div className="text-white text-xs font-bold">Yael Cohen</div>
            <div className="text-gray-600 text-[9px]">New member · 1st purchase</div>
          </div>
        </div>
        <div className="border-t border-white/5 pt-3">
          <div className="flex justify-between text-[10px] mb-1.5">
            <span className="text-gray-600">Referrer</span>
            <span className="text-orange-400 font-bold">ILAN-PRO</span>
          </div>
          <div className="flex justify-between text-[10px]">
            <span className="text-gray-600">Purchase</span>
            <span className="text-white">₪ 65.00</span>
          </div>
        </div>
      </div>
      <div className="bg-green-500/10 border border-green-500/20 rounded-xl p-3 flex items-center gap-2.5">
        <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center shrink-0">
          <span className="text-white text-[10px]">✓</span>
        </div>
        <div>
          <div className="text-green-400 text-[10px] font-bold">Code applied</div>
          <div className="text-gray-600 text-[9px]">₪5 discount granted</div>
        </div>
      </div>
      <div className="mt-auto text-center text-[9px] text-gray-700">Commission pending for Ilan</div>
    </div>
  );
}

function Screen2() {
  return (
    <div className="flex-1 p-4 flex flex-col overflow-hidden">
      <div className="text-white font-bold text-sm mb-1">Earnings</div>
      <div className="text-gray-600 text-[10px] mb-4">This month</div>
      <div className="space-y-2 mb-4">
        {[
          { name: "Yael Cohen", amount: "₪6.50", time: "Today 11:02" },
          { name: "Rotem Levi", amount: "₪4.80", time: "Yesterday" },
          { name: "Noa Bar", amount: "₪7.20", time: "Mon 09:44" },
        ].map(r => (
          <div key={r.name} className="flex items-center justify-between bg-[#141414] rounded-xl p-3">
            <div>
              <div className="text-white text-[10px] font-bold">{r.name}</div>
              <div className="text-gray-700 text-[9px]">{r.time}</div>
            </div>
            <div className="text-green-400 font-black text-xs">+{r.amount}</div>
          </div>
        ))}
      </div>
      <div className="mt-auto bg-[#141414] rounded-2xl p-4">
        <div className="text-gray-600 text-[10px] mb-1">Total this month</div>
        <div className="text-green-400 font-black text-2xl">₪ 214.50</div>
        <div className="text-gray-700 text-[9px] mt-1">Paid out every Sunday</div>
      </div>
    </div>
  );
}

const SCREENS = [<Screen0 key={0} />, <Screen1 key={1} />, <Screen2 key={2} />];

const steps = [
  {
    step: "01", phase: "Share",
    title: "Share a QR Code",
    detail: "Every trainer, gym staff member, or promoter gets a personal referral code — and a QR code they can show on-screen or print. No app to download, no links to manage. Scan, and the code is associated with every purchase that follows.",
    tech: ["Personal QR + code", "No setup required", "Shareable anywhere"],
  },
  {
    step: "02", phase: "Redemption",
    title: "Customer Redeems at Terminal",
    detail: "The customer scans the referrer's code at the INSHOP terminal before buying. The system instantly identifies the referral, applies any discount or incentive, and logs the association. Everything is automatic — no cashier, no manual entry.",
    tech: ["Terminal scan at checkout", "Auto-discount applied", "Referral logged instantly"],
  },
  {
    step: "03", phase: "Earnings",
    title: "Earnings Dashboard",
    detail: "Referrers see every commission earned — who bought, when, and how much they made. Payouts happen automatically on a fixed cycle. No spreadsheets, no chasing. Just a growing number in the app that arrives in their account.",
    tech: ["Live commission feed", "Automatic payouts", "Full purchase history"],
  },
];

export default function ReferralModule() {
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
            <Link href="/modules/fillers" className="hover:text-white transition-colors">Fillers</Link>
            <Link href="/modules/referral" className="text-orange-500 font-bold">Referral</Link>
          </div>
          <Link href="/" className="border border-white/8 hover:border-white/20 text-xs font-semibold px-4 py-2 rounded-full transition-all">← Back</Link>
        </div>
      </nav>

      <section className="pt-32 pb-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="inline-flex items-center gap-2 border border-orange-500/20 bg-orange-500/5 text-orange-400 text-xs font-bold px-4 py-2 rounded-full mb-8 uppercase tracking-widest">
            🔗 Module 03
          </div>
          <h1 className="text-[clamp(3rem,8vw,6rem)] font-black leading-[0.9] tracking-tight mb-6">
            Referral<br /><span className="text-orange-500">Module</span>
          </h1>
          <p className="text-gray-500 text-xl max-w-2xl leading-relaxed mb-8">
            Trainers, staff, and promoters become a performance-driven sales channel — earning commission on every purchase they drive, automatically.
          </p>
          <div className="inline-flex items-center gap-3 border border-white/8 rounded-full px-5 py-2">
            <span className="text-orange-500 font-bold text-sm">One loop:</span>
            <span className="text-gray-500 text-sm">Share · Scan · Earn</span>
          </div>
        </div>
      </section>

      <section className="pb-24 px-6">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs text-gray-600 font-bold uppercase tracking-[0.2em] mb-16">How Referrals Work</p>
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
          <p className="text-xs text-gray-600 font-bold uppercase tracking-[0.2em] mb-12">Why It Drives Growth</p>
          <div className="grid md:grid-cols-3 gap-5">
            {[
              { icon: "💡", title: "Zero Marketing Spend", body: "Every trainer who earns from referrals becomes an unpaid advocate. The incentive is built in — no campaigns, no ads, no management overhead." },
              { icon: "📊", title: "Performance is Measurable", body: "Every referral is tracked to the purchase. Operators see exactly who drives the most sales, and can run targeted incentive programs from that data." },
              { icon: "🔁", title: "It Compounds", body: "A referred customer becomes a regular. Regulars who become trainers bring their own clients. The referral network grows without any active management." },
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
          <Link href="/modules/fillers" className="group bg-[#0d0d0d] border border-white/4 hover:border-white/10 rounded-2xl p-6 transition-all">
            <p className="text-gray-700 text-xs uppercase tracking-widest mb-2">← Previous Module</p>
            <p className="font-bold text-white group-hover:text-orange-400 transition-colors">Fillers Module</p>
          </Link>
          <Link href="/" className="group bg-[#0d0d0d] border border-white/4 hover:border-orange-500/20 rounded-2xl p-6 transition-all text-right">
            <p className="text-gray-700 text-xs uppercase tracking-widest mb-2">Back to →</p>
            <p className="font-bold text-white group-hover:text-orange-400 transition-colors">Home</p>
          </Link>
        </div>
      </div>
    </div>
  );
}
