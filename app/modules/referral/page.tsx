import Link from "next/link";

export const metadata = { title: "Referral Module — INSHOP", description: "How INSHOP turns trainers and promoters into a performance-driven sales channel." };

export default function ReferralModule() {
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

      <div className="pt-28 pb-24 px-6">
        <div className="max-w-5xl mx-auto">

          <div className="mb-24">
            <div className="inline-flex items-center gap-2 border border-orange-500/20 bg-orange-500/5 text-orange-400 text-xs font-bold px-4 py-2 rounded-full mb-8 uppercase tracking-widest">
              🤝 Module 03
            </div>
            <h1 className="text-[clamp(3rem,8vw,6rem)] font-black leading-[0.9] tracking-tight mb-8">
              Referral<br />
              <span className="text-orange-500">Module</span>
            </h1>
            <p className="text-gray-500 text-xl max-w-2xl leading-relaxed">
              INSHOP turns gym trainers, staff, and promoters into an organic sales force. They share digital coupons. Their customers buy at the terminal. They earn — but only when a real purchase happens.
            </p>
            <div className="mt-10 inline-flex items-center gap-3 border border-white/8 rounded-full px-5 py-2">
              <span className="text-orange-500 font-bold text-sm">Principle:</span>
              <span className="text-gray-500 text-sm">Drives conversion at the point of sale. Rewards only real purchases.</span>
            </div>
          </div>

          {/* Who are the referrers */}
          <div className="mb-16 grid md:grid-cols-3 gap-4">
            {[
              { icon: "🏋️", title: "Personal Trainers", desc: "Recommend products to clients mid-session. A coupon shared while training converts at the unit right after the workout." },
              { icon: "🏃", title: "Gym Staff", desc: "Receptionists, floor staff, and gym employees who interact with members daily become natural product ambassadors." },
              { icon: "📣", title: "Promoters", desc: "External promoters or brand ambassadors who drive traffic to specific units, earning per sale rather than per lead." },
            ].map(r => (
              <div key={r.title} className="bg-[#0d0d0d] border border-white/4 rounded-2xl p-6">
                <div className="text-3xl mb-4">{r.icon}</div>
                <h3 className="font-bold text-white text-lg mb-2">{r.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{r.desc}</p>
              </div>
            ))}
          </div>

          {/* Flow */}
          <div className="mb-24">
            <p className="text-xs text-gray-600 font-bold uppercase tracking-[0.2em] mb-12">The Referral Flow</p>
            <div className="space-y-4">
              {[
                {
                  step: "01",
                  phase: "Share",
                  title: "Share a Digital Coupon",
                  detail: "Every registered referrer has a unique digital coupon — a QR code or link they can share via WhatsApp, in-person, or through any digital channel. The coupon is tracked to their identity, so every redemption is attributed precisely. There is no generic discount code; every coupon is personalized and accountable.",
                  tech: ["Unique per-referrer coupon", "QR code + shareable link", "WhatsApp & digital sharing", "Full attribution tracking"],
                },
                {
                  step: "02",
                  phase: "Redeem",
                  title: "Customer Redeems at the Terminal",
                  detail: "When the customer approaches an INSHOP terminal, they present or scan the coupon. The terminal recognizes it, applies the discount to the purchase, and links the transaction to the referrer. The customer experiences a seamless, discounted purchase — the referrer's code works without any friction at the point of sale.",
                  tech: ["Terminal coupon scanning", "Instant discount application", "Referrer attribution logged", "Seamless customer experience"],
                },
                {
                  step: "03",
                  phase: "Earn",
                  title: "Reward Paid on Completed Purchase",
                  detail: "The referrer earns a commission only when a real, completed purchase is confirmed by the system. There is no payout for clicks, scans, or partial interactions. The INSHOP OS tracks every transaction and credits the referrer's account automatically. Referrers see their earnings in real time through the app — including which coupons are performing and how much they've earned this month.",
                  tech: ["Pay-per-purchase only", "Real-time earnings dashboard", "Per-coupon performance data", "Automatic commission credit"],
                },
              ].map((item, i) => (
                <div key={item.step} className="group bg-[#0d0d0d] hover:bg-[#0f0f0f] border border-white/4 hover:border-orange-500/15 rounded-3xl p-8 transition-all">
                  <div className="flex items-start gap-6">
                    <div className="flex flex-col items-center gap-2 shrink-0">
                      <div className="w-12 h-12 rounded-2xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-500 font-black text-sm">{item.step}</div>
                      {i < 2 && <div className="w-px h-6 bg-orange-500/20" />}
                    </div>
                    <div className="flex-1">
                      <span className="text-xs text-orange-500/60 font-bold uppercase tracking-widest block mb-2">{item.phase}</span>
                      <h3 className="text-2xl font-black text-white mb-4">{item.title}</h3>
                      <p className="text-gray-500 leading-relaxed mb-6">{item.detail}</p>
                      <div className="flex flex-wrap gap-2">
                        {item.tech.map(t => (
                          <span key={t} className="text-xs bg-[#1a1a1a] border border-white/5 text-gray-500 px-3 py-1.5 rounded-full">{t}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Why it matters */}
          <div className="mb-24">
            <p className="text-xs text-gray-600 font-bold uppercase tracking-[0.2em] mb-12">Why This Channel Is Powerful</p>
            <div className="grid md:grid-cols-3 gap-5">
              {[
                { icon: "🎯", title: "Zero-Waste Marketing", body: "Every coupon is linked to a real person. Every commission is tied to a real purchase. There is no spend on impressions, clicks, or awareness — only on proven conversions." },
                { icon: "📍", title: "Converts at the Point of Sale", body: "The coupon drives the customer to the physical terminal — right where INSHOP is. This is not online traffic. It is direct, in-gym conversion happening meters from the unit." },
                { icon: "📊", title: "Full Visibility", body: "Operators see which referrers are performing, which coupons are converting, and what the ROI is per referrer — in real time. The referrer sees their own earnings dashboard, creating natural accountability and motivation." },
              ].map(c => (
                <div key={c.title} className="bg-[#0d0d0d] border border-white/4 rounded-3xl p-7">
                  <div className="text-3xl mb-5">{c.icon}</div>
                  <h3 className="font-black text-white text-xl mb-3">{c.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{c.body}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="bg-[#0d0d0d] border border-orange-500/15 rounded-3xl p-10 text-center mb-12">
            <h3 className="text-3xl font-black mb-4">Want to deploy INSHOP<br /><span className="text-orange-500">in your gym?</span></h3>
            <p className="text-gray-600 mb-8">Every module — Supplier, Fillers, and Referral — comes built in. One unit. One OS. Everything connected.</p>
            <a href="mailto:info@inshop.io" className="inline-flex items-center gap-3 bg-orange-500 hover:bg-orange-600 font-bold px-8 py-4 rounded-full transition-all hover:scale-105">
              Get in Touch
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 7l-10 10M7 7h10v10" /></svg>
            </a>
          </div>

          <div className="grid md:grid-cols-2 gap-4 border-t border-white/5 pt-12">
            <Link href="/modules/fillers" className="group bg-[#0d0d0d] border border-white/4 hover:border-orange-500/20 rounded-2xl p-6 transition-all">
              <p className="text-gray-700 text-xs uppercase tracking-widest mb-2">← Previous</p>
              <p className="font-bold text-white group-hover:text-orange-400 transition-colors">Fillers Module</p>
            </Link>
            <Link href="/" className="group bg-[#0d0d0d] border border-white/4 hover:border-white/10 rounded-2xl p-6 transition-all text-right">
              <p className="text-gray-700 text-xs uppercase tracking-widest mb-2">Done</p>
              <p className="font-bold text-white">Back to Home</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
