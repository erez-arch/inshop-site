import Link from "next/link";

export const metadata = { title: "Supplier Module — INSHOP", description: "How INSHOP automates the entire supply chain from shortage detection to shelf restocking." };

export default function SupplierModule() {
  return (
    <div className="bg-[#060606] text-white min-h-screen">
      {/* NAV */}
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

      <div className="pt-28 pb-24 px-6">
        <div className="max-w-5xl mx-auto">

          {/* Header */}
          <div className="mb-24">
            <div className="inline-flex items-center gap-2 border border-orange-500/20 bg-orange-500/5 text-orange-400 text-xs font-bold px-4 py-2 rounded-full mb-8 uppercase tracking-widest">
              📦 Module 01
            </div>
            <h1 className="text-[clamp(3rem,8vw,6rem)] font-black leading-[0.9] tracking-tight mb-8">
              Supplier<br />
              <span className="text-orange-500">Module</span>
            </h1>
            <p className="text-gray-500 text-xl max-w-2xl leading-relaxed">
              From the moment stock drops below threshold to the moment the shelf is full — the entire supply chain runs automatically, without a single phone call.
            </p>
            <div className="mt-10 inline-flex items-center gap-3 border border-white/8 rounded-full px-5 py-2">
              <span className="text-orange-500 font-bold text-sm">One connected flow:</span>
              <span className="text-gray-500 text-sm">Detect · Order · Deliver · Refill</span>
            </div>
          </div>

          {/* Flow */}
          <div className="mb-24">
            <p className="text-xs text-gray-600 font-bold uppercase tracking-[0.2em] mb-12">The Automated Flow</p>
            <div className="space-y-4">
              {[
                {
                  step: "01",
                  phase: "Detection",
                  title: "Shortage Detected",
                  detail: "The INSHOP OS monitors real-time inventory levels inside every unit. The moment a product drops below the minimum threshold — a predefined stock level set per SKU — the system flags a shortage automatically. No employee needs to check, count, or report.",
                  tech: ["Real-time shelf weight sensors", "SKU-level threshold settings", "Continuous monitoring 24/7"],
                },
                {
                  step: "02",
                  phase: "Ordering",
                  title: "Automatic Order Placed",
                  detail: "The instant a shortage is flagged, the system generates and dispatches a purchase order to the relevant supplier. The order contains product details, quantities, and delivery location. The operator receives a notification in the INSHOP OS dashboard — for visibility, not action.",
                  tech: ["Auto-generated POs", "Supplier notification via app", "Operator dashboard alert"],
                },
                {
                  step: "03",
                  phase: "Delivery",
                  title: "Supplier Delivers",
                  detail: "The supplier brings the goods to the gym location. Upon arrival, the system sends a delivery notification to the assigned refiller — the staff member responsible for that unit. The delivery is logged in the OS with timestamp and quantity.",
                  tech: ["Delivery confirmation system", "Refiller push notification", "Timestamped delivery log"],
                },
                {
                  step: "04",
                  phase: "Restocking",
                  title: "Unit Restocked & Verified",
                  detail: "The assigned refiller opens the unit and places products on the correct shelves. After restocking, they photograph the shelf using the INSHOP app. The AI module analyzes the photo — checking product placement, shelf facing, and completeness — before logging the restock as complete. No photo approval means no payment.",
                  tech: ["AI shelf-photo verification", "Correct placement enforcement", "Payment only on verified completion"],
                },
              ].map((item, i) => (
                <div key={item.step} className="group bg-[#0d0d0d] hover:bg-[#0f0f0f] border border-white/4 hover:border-orange-500/15 rounded-3xl p-8 transition-all">
                  <div className="flex items-start gap-6 mb-6">
                    <div className="flex flex-col items-center gap-2 shrink-0">
                      <div className="w-12 h-12 rounded-2xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-500 font-black text-sm">
                        {item.step}
                      </div>
                      {i < 3 && <div className="w-px h-6 bg-orange-500/20" />}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-xs text-orange-500/60 font-bold uppercase tracking-widest">{item.phase}</span>
                      </div>
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

          {/* Key Principles */}
          <div className="mb-24">
            <p className="text-xs text-gray-600 font-bold uppercase tracking-[0.2em] mb-12">Design Principles</p>
            <div className="grid md:grid-cols-3 gap-5">
              {[
                { icon: "🔄", title: "Fully Automated", body: "From detection to delivery confirmation — no human decision is required at any stage of the ordering process." },
                { icon: "🔍", title: "AI-Verified Restocks", body: "No stock is marked as available until AI confirms the shelf photo is correct. This prevents ghost inventory and customer disappointment." },
                { icon: "🔔", title: "Transparent at Every Step", body: "Operators see every event in real time — shortage flags, orders placed, deliveries arrived, and restocks verified — all in one dashboard." },
              ].map(c => (
                <div key={c.title} className="bg-[#0d0d0d] border border-white/4 rounded-3xl p-7">
                  <div className="text-3xl mb-5">{c.icon}</div>
                  <h3 className="font-black text-white text-xl mb-3">{c.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{c.body}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation between modules */}
          <div className="grid md:grid-cols-2 gap-4 border-t border-white/5 pt-12">
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
    </div>
  );
}
