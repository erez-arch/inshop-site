"use client";

import { useState } from "react";

const NAV_LINKS = [
  { label: "How It Works", href: "#how-it-works" },
  { label: "The Platform", href: "#platform" },
  { label: "INSHOP OS", href: "#os" },
  { label: "Modules", href: "#modules" },
  { label: "Live Now", href: "#proof" },
  { label: "Vision", href: "#vision" },
  { label: "Team", href: "#team" },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="bg-[#0a0a0a] text-white min-h-screen">
      {/* NAV */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a]/90 backdrop-blur-md border-b border-orange-500/20">
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
          <span className="text-2xl font-bold tracking-tight">
            in<span className="text-orange-500">S</span>hop
          </span>
          <div className="hidden md:flex gap-8">
            {NAV_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm text-gray-400 hover:text-orange-500 transition-colors"
              >
                {l.label}
              </a>
            ))}
          </div>
          <a
            href="#contact"
            className="hidden md:block bg-orange-500 hover:bg-orange-600 text-white text-sm font-semibold px-5 py-2 rounded-full transition-colors"
          >
            Get in Touch
          </a>
          <button
            className="md:hidden text-gray-400"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
        {menuOpen && (
          <div className="md:hidden bg-[#111] px-6 pb-4 flex flex-col gap-4">
            {NAV_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setMenuOpen(false)}
                className="text-sm text-gray-400 hover:text-orange-500 transition-colors"
              >
                {l.label}
              </a>
            ))}
          </div>
        )}
      </nav>

      {/* HERO */}
      <section className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(249,115,22,0.12)_0%,_transparent_70%)]" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNDksMTE1LDIyLDAuMDUpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-40" />
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/30 text-orange-400 text-xs font-semibold px-4 py-2 rounded-full mb-8 uppercase tracking-widest">
            Autonomous Retail Network
          </div>
          <h1 className="text-5xl md:text-7xl font-black leading-tight mb-6">
            The Future of
            <br />
            <span className="text-orange-500">Smart Retail</span>
            <br />
            is Already Here
          </h1>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            Face recognition. Frictionless checkout. One OS managing every layer —
            users, inventory, suppliers, and logistics. <strong className="text-white">All in one system.</strong>
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#how-it-works"
              className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-4 rounded-full text-lg transition-all hover:scale-105"
            >
              See How It Works
            </a>
            <a
              href="#contact"
              className="border border-orange-500/40 hover:border-orange-500 text-white font-semibold px-8 py-4 rounded-full text-lg transition-all hover:bg-orange-500/10"
            >
              Get in Touch
            </a>
          </div>
          <div className="mt-16 grid grid-cols-3 gap-8 max-w-lg mx-auto">
            {[
              { value: "10", label: "Live Locations" },
              { value: "23x", label: "More Purchases" },
              { value: "24/7", label: "Autonomous" },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <div className="text-3xl font-black text-orange-500">{s.value}</div>
                <div className="text-xs text-gray-500 mt-1 uppercase tracking-wide">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-orange-500/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how-it-works" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-orange-500 text-sm font-bold uppercase tracking-widest">The Experience</span>
            <h2 className="text-4xl md:text-5xl font-black mt-3">
              How It <span className="text-orange-500">Works</span>
            </h2>
            <p className="text-gray-400 mt-4 text-lg">
              Fast. Seamless. Autonomous. &nbsp;
              <span className="inline-flex items-center gap-1 bg-orange-500/10 border border-orange-500/30 text-orange-400 text-xs px-3 py-1 rounded-full">
                One-time registration — only once in your life
              </span>
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-4">
              {[
                { step: 1, icon: "👤", title: "Approach the unit", desc: "Walk up to any INSHOP terminal" },
                { step: 2, icon: "📷", title: "Face recognition", desc: "The system identifies you instantly" },
                { step: 3, icon: "🔓", title: "Door unlocks", desc: "Access granted — no card, no app, no queue" },
                { step: 4, icon: "🛒", title: "Take products", desc: "Shop naturally, grab what you need" },
                { step: 5, icon: "✅", title: "Close the door", desc: "That's it — no checkout needed" },
                { step: 6, icon: "📱", title: "Receipt by SMS", desc: "Automatic payment confirmation sent to you" },
              ].map((item) => (
                <div
                  key={item.step}
                  className="flex items-center gap-4 bg-[#111] border border-white/5 hover:border-orange-500/30 rounded-2xl p-4 transition-all group"
                >
                  <div className="w-10 h-10 rounded-full bg-orange-500 text-white flex items-center justify-center font-black text-sm shrink-0">
                    {item.step}
                  </div>
                  <span className="text-2xl">{item.icon}</span>
                  <div>
                    <div className="font-bold text-white group-hover:text-orange-400 transition-colors">{item.title}</div>
                    <div className="text-sm text-gray-500">{item.desc}</div>
                  </div>
                </div>
              ))}
              <div className="bg-orange-500/10 border border-orange-500/30 rounded-2xl p-4 text-center text-orange-400 font-bold text-lg mt-4">
                ✓ You&apos;re all set. Just walk in and shop.
              </div>
            </div>
            <div className="rounded-3xl overflow-hidden border border-orange-500/20 shadow-[0_0_40px_rgba(249,115,22,0.15)]">
              <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
                <iframe
                  src="https://www.youtube.com/embed/i6EquE3bQE8"
                  title="INSHOP — How It Works"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PLATFORM */}
      <section id="platform" className="py-24 px-6 bg-[#0d0d0d]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-orange-500 text-sm font-bold uppercase tracking-widest">Our Model</span>
            <h2 className="text-4xl md:text-5xl font-black mt-3">
              Not a hardware company.
              <br />
              <span className="text-orange-500">A platform.</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8 items-stretch">
            <div className="bg-[#111] border border-white/10 rounded-3xl p-8">
              <p className="text-gray-400 text-sm mb-6 uppercase tracking-widest">A technology solution for others</p>
              <h3 className="text-2xl font-bold text-gray-500 mb-6">Limited Value</h3>
              <div className="grid grid-cols-3 gap-4">
                {["Software", "Hardware", "Customer Projects"].map((item) => (
                  <div key={item} className="bg-[#1a1a1a] rounded-xl p-4 text-center text-sm text-gray-500">
                    {item}
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-[#111] border border-orange-500/40 rounded-3xl p-8 shadow-[0_0_30px_rgba(249,115,22,0.1)]">
              <p className="text-gray-400 text-sm mb-2 uppercase tracking-widest">Ownership of technology, users, data, sales, and traffic</p>
              <h3 className="text-3xl font-black text-orange-500 mb-6">Strategic Asset</h3>
              <div className="grid grid-cols-5 gap-3">
                {[
                  { icon: "⚙️", label: "Technology" },
                  { icon: "👥", label: "Users" },
                  { icon: "🗄️", label: "Data" },
                  { icon: "📈", label: "Sales" },
                  { icon: "🌐", label: "Traffic" },
                ].map((item) => (
                  <div key={item.label} className="bg-orange-500/10 border border-orange-500/20 rounded-xl p-3 text-center">
                    <div className="text-2xl mb-1">{item.icon}</div>
                    <div className="text-xs text-orange-300 font-semibold">{item.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="mt-8 bg-[#111] border border-orange-500/30 rounded-2xl p-6 text-center">
            <p className="text-white text-lg">
              <span className="text-orange-500 font-bold">We own</span> the point of sale,{" "}
              <span className="text-orange-500 font-bold">we own</span> the customer,{" "}
              <span className="text-orange-500 font-bold">we partner</span> with gyms to install our stores
            </p>
          </div>
        </div>
      </section>

      {/* REGISTERED USER */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-orange-500 text-sm font-bold uppercase tracking-widest">The Power of Loyalty</span>
              <h2 className="text-4xl md:text-5xl font-black mt-3 mb-6">
                The Power of a
                <br />
                <span className="text-orange-500">Registered User</span>
              </h2>
              <p className="text-gray-400 text-lg mb-8">Register once. Buy again and again.</p>
              <div className="flex items-end gap-4 mb-10">
                <span className="text-8xl font-black text-white leading-none">23x</span>
                <div className="text-gray-400 pb-2">
                  more purchases<br />
                  <span className="text-sm">from registered vs. non-registered users</span>
                </div>
              </div>
              <div className="space-y-3">
                {[
                  { icon: "👤", text: "Feels recognized" },
                  { icon: "💳", text: "No payment friction" },
                  { icon: "🏠", text: "Feels free, just like at home" },
                ].map((item) => (
                  <div key={item.text} className="flex items-center gap-3 bg-[#111] border border-white/5 rounded-xl px-5 py-3">
                    <span className="text-xl">{item.icon}</span>
                    <span className="text-white font-medium">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-[#111] border border-orange-500/30 rounded-3xl p-8 text-center shadow-[0_0_40px_rgba(249,115,22,0.1)]">
              <div className="w-20 h-20 rounded-full bg-orange-500/20 border-2 border-orange-500 flex items-center justify-center text-4xl mx-auto mb-4">
                👩‍💼
              </div>
              <div className="bg-[#1a1a1a] rounded-2xl p-6 text-left mb-6">
                <p className="text-gray-400 text-sm">Hi Maya</p>
                <p className="font-bold text-white text-lg mt-1">Welcome back!</p>
                <p className="text-orange-400 text-sm mt-2">🎁 10% off protein drinks today</p>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                A registered user is an{" "}
                <span className="text-orange-500 font-bold">operational</span>,{" "}
                <span className="text-orange-500 font-bold">marketing</span>, and{" "}
                <span className="text-orange-500 font-bold">commercial</span> asset.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* GYM SOFTWARE */}
      <section className="py-24 px-6 bg-[#0d0d0d]">
        <div className="max-w-7xl mx-auto text-center">
          <span className="text-orange-500 text-sm font-bold uppercase tracking-widest">Instant User Base</span>
          <h2 className="text-4xl md:text-5xl font-black mt-3 mb-4">
            We Build the Gym Software
          </h2>
          <p className="text-orange-500 text-2xl font-bold mb-4">So every unit starts with users</p>
          <p className="text-gray-400 mb-14">Each gym member can instantly become a registered INSHOP user.</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
            {[
              { num: "1", icon: "🖥️", title: "Gym Software", sub: "" },
              { num: "2", icon: "🗄️", title: "Member Data", sub: "Name · Mobile · Payment Token" },
              { num: "3", icon: "👥", title: "Registered Users", sub: "Thousands from day one" },
              { num: "4", icon: "🛒", title: "Retail Unit", sub: "Ready-to-buy users" },
            ].map((item, i) => (
              <div key={item.num} className="relative">
                {i < 3 && (
                  <div className="hidden md:block absolute top-1/2 -right-2 z-10 text-orange-500 text-xl">→</div>
                )}
                <div className="bg-[#111] border border-orange-500/20 rounded-2xl p-6 text-center h-full">
                  <div className="w-8 h-8 rounded-full bg-orange-500 text-white text-sm font-black flex items-center justify-center mx-auto mb-3">
                    {item.num}
                  </div>
                  <div className="text-3xl mb-2">{item.icon}</div>
                  <div className="font-bold text-white">{item.title}</div>
                  {item.sub && <div className="text-xs text-orange-400 mt-1">{item.sub}</div>}
                </div>
              </div>
            ))}
          </div>
          <div className="bg-orange-500/10 border border-orange-500/30 rounded-2xl p-5 inline-flex items-center gap-3">
            <span className="text-2xl">✅</span>
            <p className="text-white font-bold text-lg">Every new unit launches with thousands of registered users.</p>
          </div>
        </div>
      </section>

      {/* INSHOP OS */}
      <section id="os" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-orange-500 text-sm font-bold uppercase tracking-widest">The Operating System</span>
              <h2 className="text-4xl md:text-5xl font-black mt-3 mb-4">
                One OS.
                <br />
                <span className="text-orange-500">Every Layer.</span>
              </h2>
              <p className="text-gray-400 text-lg mb-8">
                INSHOP OS connects the core layers of autonomous retail in one system.
              </p>
              <div className="bg-[#111] border border-orange-500/30 rounded-2xl p-5 flex items-center gap-4">
                <span className="text-2xl">🔗</span>
                <div>
                  <p className="text-orange-500 font-bold">Connected in one system</p>
                  <p className="text-gray-400 text-sm">Suppliers · Inventory · Refillers · Units · Customers</p>
                </div>
              </div>
            </div>
            <div className="relative flex items-center justify-center">
              <div className="w-32 h-32 rounded-full bg-orange-500/20 border-2 border-orange-500 flex items-center justify-center shadow-[0_0_40px_rgba(249,115,22,0.3)] relative z-10">
                <div className="text-center">
                  <div className="text-white font-black text-xl leading-tight">INSHOP</div>
                  <div className="text-orange-500 font-black text-xl">OS</div>
                </div>
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                {[
                  { angle: -90, icon: "📦", label: "Suppliers" },
                  { angle: -18, icon: "🗃️", label: "Inventory" },
                  { angle: 54, icon: "♻️", label: "Refillers" },
                  { angle: 126, icon: "🏪", label: "Retail Units" },
                  { angle: 198, icon: "👥", label: "Customers" },
                ].map((item) => {
                  const r = 140;
                  const rad = (item.angle * Math.PI) / 180;
                  const x = Math.cos(rad) * r;
                  const y = Math.sin(rad) * r;
                  return (
                    <div
                      key={item.label}
                      className="absolute"
                      style={{ transform: `translate(${x}px, ${y}px)` }}
                    >
                      <div className="bg-[#111] border border-orange-500/40 rounded-xl px-3 py-2 text-center min-w-[80px]">
                        <div className="text-xl">{item.icon}</div>
                        <div className="text-xs text-white font-semibold mt-1">{item.label}</div>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-64 h-64 rounded-full border border-orange-500/20" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MODULES */}
      <section id="modules" className="py-24 px-6 bg-[#0d0d0d]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-orange-500 text-sm font-bold uppercase tracking-widest">Built-in Intelligence</span>
            <h2 className="text-4xl md:text-5xl font-black mt-3">
              Every Module. <span className="text-orange-500">Fully Connected.</span>
            </h2>
          </div>

          {/* Supplier Module */}
          <div className="mb-8 bg-[#111] border border-white/5 hover:border-orange-500/20 rounded-3xl p-8 transition-all">
            <h3 className="text-2xl font-black text-orange-500 mb-2">Supplier Module</h3>
            <p className="text-gray-400 mb-8">Detect shortage, order, deliver, receive, refill.</p>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { num: "1", title: "Detect & Order", desc: "The system detects shortage and sends an automatic order." },
                { num: "2", title: "Deliver", desc: "The supplier brings the goods and staff gets notified." },
                { num: "3", title: "Receive & Refill", desc: "The assigned staff member refills the unit." },
              ].map((item) => (
                <div key={item.num} className="bg-[#1a1a1a] rounded-2xl p-5">
                  <div className="text-orange-500 font-black text-sm mb-2">{item.num}.</div>
                  <div className="font-bold text-white mb-2">{item.title}</div>
                  <div className="text-sm text-gray-400">{item.desc}</div>
                </div>
              ))}
            </div>
            <div className="mt-6 bg-orange-500/10 border border-orange-500/20 rounded-xl p-4 text-center">
              <span className="text-orange-400 font-bold">🔗 One connected flow: detect, order, deliver, refill.</span>
            </div>
          </div>

          {/* Fillers Module */}
          <div className="mb-8 bg-[#111] border border-white/5 hover:border-orange-500/20 rounded-3xl p-8 transition-all">
            <h3 className="text-2xl font-black text-orange-500 mb-2">Fillers Module</h3>
            <p className="text-gray-400 mb-8">Nearby fillers keep each terminal stocked from the pantry above the unit.</p>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { num: "1", title: "Refill Alert", desc: "The terminal sends a refill request to nearby fillers.", icon: "🔔" },
                { num: "2", title: "First Filler Wins", desc: "The first available filler accepts, refills from the pantry, and is rewarded for completed work only.", icon: "🎁" },
                { num: "3", title: "Photo + AI Check", desc: "The filler photographs the refill. AI verifies shelf facing and approves the reward.", icon: "📷" },
              ].map((item) => (
                <div key={item.num} className="bg-[#1a1a1a] rounded-2xl p-5">
                  <div className="text-3xl mb-3">{item.icon}</div>
                  <div className="text-orange-500 font-black text-sm mb-2">{item.num}.</div>
                  <div className="font-bold text-white mb-2">{item.title}</div>
                  <div className="text-sm text-gray-400">{item.desc}</div>
                </div>
              ))}
            </div>
            <div className="mt-6 bg-orange-500/10 border border-orange-500/20 rounded-xl p-4 text-center">
              <span className="text-orange-400 font-bold">Flexible operations. Available stock. Reward only for completed work.</span>
            </div>
          </div>

          {/* Referral Module */}
          <div className="bg-[#111] border border-white/5 hover:border-orange-500/20 rounded-3xl p-8 transition-all">
            <h3 className="text-2xl font-black text-orange-500 mb-2">Referral Module</h3>
            <p className="text-gray-400 mb-8">Trainers and promoters share digital coupons and earn only on real purchases.</p>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { num: "1", title: "Share a Digital Coupon", desc: "A referrer shares a digital coupon with a customer.", icon: "📲" },
                { num: "2", title: "Redeem at the Terminal", desc: "The customer redeems it and buys at the terminal.", icon: "🛒" },
                { num: "3", title: "Reward on Real Purchases", desc: "The referrer earns only on completed purchases.", icon: "💰" },
              ].map((item) => (
                <div key={item.num} className="bg-[#1a1a1a] rounded-2xl p-5">
                  <div className="text-3xl mb-3">{item.icon}</div>
                  <div className="text-orange-500 font-black text-sm mb-2">{item.num}.</div>
                  <div className="font-bold text-white mb-2">{item.title}</div>
                  <div className="text-sm text-gray-400">{item.desc}</div>
                </div>
              ))}
            </div>
            <div className="mt-6 bg-orange-500/10 border border-orange-500/20 rounded-xl p-4 text-center">
              <span className="text-orange-400 font-bold">Drives conversion at the point of sale. Rewards only real purchases.</span>
            </div>
          </div>
        </div>
      </section>

      {/* WHY WE'RE DIFFERENT */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-orange-500 text-sm font-bold uppercase tracking-widest">Competitive Edge</span>
            <h2 className="text-4xl md:text-5xl font-black mt-3">
              Why Existing Solutions <span className="text-orange-500">Fall Short</span>
            </h2>
            <p className="text-gray-400 mt-4">Each alternative solves only part of the problem.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
            {[
              { name: "Vending Machines", icon: "🏧", problem: "Limited range. ~10x lower sales than INSHOP" },
              { name: "Amazon Go-Style", icon: "🏬", problem: "Expensive to deploy. Hard to scale." },
              { name: "Self-Checkout Kiosks", icon: "🖨️", problem: "Still friction. Theft remains an issue." },
              { name: "Staffed Stores", icon: "👷", problem: "High labor cost. Operational complexity." },
            ].map((item) => (
              <div key={item.name} className="bg-[#111] border border-white/5 rounded-2xl p-5 text-center">
                <div className="text-4xl mb-3 opacity-40">{item.icon}</div>
                <div className="font-bold text-gray-400 mb-2 text-sm">{item.name}</div>
                <div className="text-xs text-gray-600">{item.problem}</div>
              </div>
            ))}
          </div>
          <div className="bg-orange-500/10 border border-orange-500/40 rounded-2xl p-6 flex items-start gap-4">
            <span className="text-3xl">🏆</span>
            <p className="text-white text-lg leading-relaxed">
              Only INSHOP combines{" "}
              <span className="text-orange-500 font-bold">automation</span>,{" "}
              <span className="text-orange-500 font-bold">low labor</span>,{" "}
              <span className="text-orange-500 font-bold">low theft</span>,{" "}
              <span className="text-orange-500 font-bold">natural shopping</span>, and{" "}
              <span className="text-orange-500 font-bold">one system</span> managing every operational function.
            </p>
          </div>
        </div>
      </section>

      {/* PROOF OF EXECUTION */}
      <section id="proof" className="py-24 px-6 bg-[#0d0d0d]">
        <div className="max-w-7xl mx-auto text-center">
          <span className="text-orange-500 text-sm font-bold uppercase tracking-widest">Already Live</span>
          <h2 className="text-4xl md:text-5xl font-black mt-3 mb-4">Proof of Execution</h2>
          <p className="text-gray-400 mb-6 text-lg">Not a concept. Not a pitch deck.</p>
          <p className="text-gray-500 mb-12">10 live systems across 10 different locations with measurable results.</p>
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-[#111] border border-orange-500/30 rounded-2xl p-8 shadow-[0_0_30px_rgba(249,115,22,0.1)]">
              <div className="text-7xl font-black text-orange-500 mb-2">10</div>
              <div className="text-white font-bold text-xl">Live Locations</div>
            </div>
            <div className="bg-[#111] border border-orange-500/30 rounded-2xl p-8 shadow-[0_0_30px_rgba(249,115,22,0.1)]">
              <div className="text-5xl font-black text-orange-500 mb-2">₪20K+</div>
              <div className="text-white font-bold text-xl">Monthly Sales</div>
              <div className="text-gray-500 text-sm mt-1">at a mature unit</div>
            </div>
            <div className="bg-[#111] border border-orange-500/30 rounded-2xl p-8 shadow-[0_0_30px_rgba(249,115,22,0.1)]">
              <div className="text-4xl mb-2">✅</div>
              <div className="text-white font-bold text-xl">Real Operational Proof</div>
              <div className="text-gray-500 text-sm mt-1">Live deployments, real customers, real purchases</div>
            </div>
          </div>
          <div className="bg-[#111] border border-white/5 rounded-3xl p-8">
            <p className="text-gray-400 text-sm uppercase tracking-widest mb-6">Live Locations</p>
            <div className="flex flex-wrap gap-3 justify-center">
              {[
                "Profit Holon", "Profit Shoham", "Profit Kiryat Ono", "Profit Modi'in",
                "Profit Yokneam", "Profit Petah Tikva", "Profit Kiryat Yam",
                "Profit Rosh HaAyin", "Profit Yavne", "Lazuz Petah Tikva",
              ].map((loc) => (
                <div
                  key={loc}
                  className="flex items-center gap-2 bg-orange-500/10 border border-orange-500/20 text-orange-300 text-sm px-4 py-2 rounded-full"
                >
                  <span>📍</span> {loc}
                </div>
              ))}
            </div>
          </div>
          <div className="mt-8 bg-orange-500/10 border border-orange-500/30 rounded-2xl p-5">
            <p className="text-orange-400 font-bold text-lg">🏆 Real activity in the field. Real results.</p>
          </div>
        </div>
      </section>

      {/* VISION */}
      <section id="vision" className="py-24 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <span className="text-orange-500 text-sm font-bold uppercase tracking-widest">Where We&apos;re Going</span>
          <h2 className="text-4xl md:text-5xl font-black mt-3 mb-4">The Vision</h2>
          <p className="text-gray-400 mb-14 text-xl">
            Start in <span className="text-orange-500 font-bold">Israel.</span> Scale{" "}
            <span className="text-orange-500 font-bold">worldwide.</span>
          </p>
          <div className="grid md:grid-cols-3 gap-6 mb-10">
            {[
              {
                step: "Step 1",
                title: "Win Israel",
                icon: "📍",
                stat: "800",
                statLabel: "target gyms in Israel",
                desc: "Build density, registered users, and repeat purchases.",
              },
              {
                step: "Step 2",
                title: "Scale Through Gyms",
                icon: "🌍",
                stat: "20,000+",
                statLabel: "target gyms worldwide",
                desc: "Replicate the model across global fitness locations.",
              },
              {
                step: "Step 3",
                title: "Beyond Gyms",
                icon: "🏙️",
                stat: "∞",
                statLabel: "street retail & autonomous stores",
                desc: "Turn the network into a global autonomous retail platform.",
              },
            ].map((item) => (
              <div key={item.step} className="bg-[#111] border border-orange-500/20 rounded-3xl p-8 text-center hover:border-orange-500/50 transition-all">
                <div className="text-xs text-orange-500 font-bold uppercase tracking-widest mb-4">{item.step}</div>
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-black text-white mb-4">{item.title}</h3>
                <div className="text-4xl font-black text-orange-500 mb-1">{item.stat}</div>
                <div className="text-sm text-gray-500 mb-4">{item.statLabel}</div>
                <div className="text-sm text-gray-400">{item.desc}</div>
              </div>
            ))}
          </div>
          <div className="bg-orange-500/10 border border-orange-500/30 rounded-2xl p-5">
            <p className="text-white text-xl font-bold">
              🌐 Built in Israel.{" "}
              <span className="text-orange-500">Designed for the world.</span>
            </p>
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section id="team" className="py-24 px-6 bg-[#0d0d0d]">
        <div className="max-w-7xl mx-auto text-center">
          <span className="text-orange-500 text-sm font-bold uppercase tracking-widest">The People</span>
          <h2 className="text-4xl md:text-5xl font-black mt-3 mb-4">The Team</h2>
          <p className="text-gray-400 mb-14">The people turning INSHOP&apos;s vision into execution.</p>
          <p className="text-xs text-orange-500 font-bold uppercase tracking-widest mb-8">Leadership Team</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {[
              { name: "Erez Gur", role: "Founder & CEO", desc: "20+ years in retail technology. Built retail systems and chains from the inside." },
              { name: "Natalie Pe'er", role: "Software Development Lead", desc: "12 years working with Erez. Owns core information systems and financial-process logic." },
              { name: "Raz Kofman", role: "Software Team Lead", desc: "Leads INSHOP's core platform architecture and technical execution." },
              { name: "Maya Shaham", role: "COO", desc: "Drives disciplined field execution, deployments, and day-to-day operations." },
            ].map((person) => (
              <div key={person.name} className="bg-[#111] border border-white/5 hover:border-orange-500/30 rounded-3xl p-6 transition-all">
                <div className="w-16 h-16 rounded-full bg-orange-500/20 border-2 border-orange-500/40 flex items-center justify-center text-2xl mx-auto mb-4">
                  👤
                </div>
                <div className="font-black text-white text-lg">{person.name}</div>
                <div className="text-orange-500 text-sm font-semibold mb-3">{person.role}</div>
                <div className="text-gray-500 text-xs leading-relaxed">{person.desc}</div>
              </div>
            ))}
          </div>
          <p className="text-xs text-orange-500 font-bold uppercase tracking-widest mb-6">Advisory Board</p>
          <div className="max-w-xs mx-auto bg-[#111] border border-white/5 hover:border-orange-500/30 rounded-3xl p-6 transition-all">
            <div className="w-16 h-16 rounded-full bg-orange-500/20 border-2 border-orange-500/40 flex items-center justify-center text-2xl mx-auto mb-4">
              👤
            </div>
            <div className="font-black text-white text-lg">Uri Shomroni</div>
            <div className="text-orange-500 text-sm font-semibold mb-3">Director</div>
            <div className="text-gray-500 text-xs leading-relaxed">Entrepreneur, investor, and mentor bringing business leadership and strategic perspective.</div>
          </div>
          <div className="mt-10 bg-[#111] border border-orange-500/20 rounded-2xl p-5">
            <p className="text-gray-400 text-lg">
              🚀 Not just pitching the future of autonomous retail.{" "}
              <span className="text-white font-bold italic">Actually building it.</span>
            </p>
          </div>
        </div>
      </section>

      {/* CTA / CONTACT */}
      <section id="contact" className="py-24 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <div className="relative bg-[#111] border border-orange-500/30 rounded-3xl p-12 shadow-[0_0_60px_rgba(249,115,22,0.15)]">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(249,115,22,0.08)_0%,_transparent_70%)] rounded-3xl" />
            <div className="relative z-10">
              <div className="text-5xl mb-6">🤝</div>
              <h2 className="text-4xl md:text-5xl font-black mb-4">
                Ready to bring INSHOP
                <br />
                <span className="text-orange-500">to your location?</span>
              </h2>
              <p className="text-gray-400 text-lg mb-8">
                Partner with us. Install a unit. Start generating revenue from day one.
              </p>
              <a
                href="mailto:info@inshop.io"
                className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-bold px-10 py-5 rounded-full text-xl transition-all hover:scale-105 shadow-[0_0_30px_rgba(249,115,22,0.4)]"
              >
                Get in Touch
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/5 py-8 px-6 text-center">
        <div className="text-2xl font-bold mb-2">
          in<span className="text-orange-500">S</span>hop
        </div>
        <p className="text-gray-600 text-sm">© 2026 INSHOP. Autonomous Retail Network.</p>
      </footer>
    </div>
  );
}
