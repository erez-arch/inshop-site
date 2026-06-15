import Link from "next/link";

export const metadata = { title: "Fillers Module — INSHOP", description: "How INSHOP dispatches nearby fillers with AI-verified restocking." };

export default function FillersModule() {
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

      <div className="pt-28 pb-24 px-6">
        <div className="max-w-5xl mx-auto">

          <div className="mb-24">
            <div className="inline-flex items-center gap-2 border border-orange-500/20 bg-orange-500/5 text-orange-400 text-xs font-bold px-4 py-2 rounded-full mb-8 uppercase tracking-widest">
              ♻️ Module 02
            </div>
            <h1 className="text-[clamp(3rem,8vw,6rem)] font-black leading-[0.9] tracking-tight mb-8">
              Fillers<br />
              <span className="text-orange-500">Module</span>
            </h1>
            <p className="text-gray-500 text-xl max-w-2xl leading-relaxed">
              When a terminal needs restocking, it dispatches nearby fillers in real time. No scheduler, no manager needed. The first available filler wins the job — and gets paid only when AI confirms the work is done.
            </p>
            <div className="mt-10 inline-flex items-center gap-3 border border-white/8 rounded-full px-5 py-2">
              <span className="text-orange-500 font-bold text-sm">Principle:</span>
              <span className="text-gray-500 text-sm">Flexible operations. Available stock. Pay only for completed work.</span>
            </div>
          </div>

          {/* The Pantry Concept */}
          <div className="mb-16 bg-[#0d0d0d] border border-orange-500/15 rounded-3xl p-8">
            <div className="flex items-start gap-5">
              <div className="w-12 h-12 rounded-2xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-2xl shrink-0">📦</div>
              <div>
                <h3 className="font-black text-white text-xl mb-2">The Pantry</h3>
                <p className="text-gray-500 leading-relaxed">
                  Every INSHOP unit has a pantry — a stock buffer installed directly above the terminal. It holds surplus inventory at the location itself, allowing fillers to restock without waiting for a delivery. The pantry turns every refill into an instant, local operation.
                </p>
              </div>
            </div>
          </div>

          {/* Flow */}
          <div className="mb-24">
            <p className="text-xs text-gray-600 font-bold uppercase tracking-[0.2em] mb-12">The Dispatch Flow</p>
            <div className="space-y-4">
              {[
                {
                  step: "01",
                  phase: "Detection",
                  title: "Terminal Sends a Refill Alert",
                  detail: "When product quantity inside the terminal drops below a set threshold, the INSHOP OS generates a refill request automatically. This request is broadcast to all registered fillers within a defined geographic radius of the unit — without any human decision involved.",
                  tech: ["Geo-radius filler matching", "Automatic threshold trigger", "Push notification via INSHOP app"],
                },
                {
                  step: "02",
                  phase: "Dispatch",
                  title: "First Filler Wins",
                  detail: "Fillers receive the alert on their INSHOP app and can accept the job instantly. The first available filler to accept claims the task. This creates a fast, competitive dispatch model — no waiting lists, no scheduling overhead. Fillers are motivated to respond quickly because they earn only when they complete the work.",
                  tech: ["First-accept assignment model", "Real-time availability status", "No manual scheduling required"],
                },
                {
                  step: "03",
                  phase: "Restocking",
                  title: "Refill from the Pantry",
                  detail: "The filler goes to the terminal and accesses the pantry above it. They pull the required products and stock the shelves inside the unit. The INSHOP app guides them: which products, how many units, and exactly which shelf each item belongs to. There is no ambiguity.",
                  tech: ["In-app guided restocking", "Per-shelf product mapping", "Pantry access tracking"],
                },
                {
                  step: "04",
                  phase: "Verification",
                  title: "Photo + AI Approval",
                  detail: "After stocking, the filler photographs the shelves using the INSHOP app. The image is immediately analyzed by the AI verification engine, which checks: correct product placement, shelf facing (label orientation), quantity per slot, and overall completeness. Only if the AI approves does the restock get logged — and only then does the filler get paid. If the photo fails verification, they are prompted to fix and re-photograph.",
                  tech: ["Computer vision shelf analysis", "Label & facing verification", "Quantity count validation", "Conditional payment release"],
                },
              ].map((item, i) => (
                <div key={item.step} className="group bg-[#0d0d0d] hover:bg-[#0f0f0f] border border-white/4 hover:border-orange-500/15 rounded-3xl p-8 transition-all">
                  <div className="flex items-start gap-6 mb-6">
                    <div className="flex flex-col items-center gap-2 shrink-0">
                      <div className="w-12 h-12 rounded-2xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-500 font-black text-sm">{item.step}</div>
                      {i < 3 && <div className="w-px h-6 bg-orange-500/20" />}
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

          {/* Why it works */}
          <div className="mb-24">
            <p className="text-xs text-gray-600 font-bold uppercase tracking-[0.2em] mb-12">Why This Model Works</p>
            <div className="grid md:grid-cols-3 gap-5">
              {[
                { icon: "⚡", title: "Speed Without Overhead", body: "No scheduler, no manager, no coordinator. The terminal dispatches itself. Fillers respond in real time. The fastest operation wins the job." },
                { icon: "🤖", title: "Zero Trust, AI-Enforced", body: "Fillers are paid only after AI verifies the shelf photo. This removes the need for supervisors and eliminates the risk of incomplete or incorrect restocking." },
                { icon: "🗺️", title: "Hyper-Local Logistics", body: "Because each unit has a pantry on-site, the filler never needs to travel to a warehouse. Every restock is a short, local task — fast and low-cost." },
              ].map(c => (
                <div key={c.title} className="bg-[#0d0d0d] border border-white/4 rounded-3xl p-7">
                  <div className="text-3xl mb-5">{c.icon}</div>
                  <h3 className="font-black text-white text-xl mb-3">{c.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{c.body}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4 border-t border-white/5 pt-12">
            <Link href="/modules/supplier" className="group bg-[#0d0d0d] border border-white/4 hover:border-orange-500/20 rounded-2xl p-6 transition-all">
              <p className="text-gray-700 text-xs uppercase tracking-widest mb-2">← Previous</p>
              <p className="font-bold text-white group-hover:text-orange-400 transition-colors">Supplier Module</p>
            </Link>
            <Link href="/modules/referral" className="group bg-[#0d0d0d] border border-white/4 hover:border-orange-500/20 rounded-2xl p-6 transition-all text-right">
              <p className="text-gray-700 text-xs uppercase tracking-widest mb-2">Next Module →</p>
              <p className="font-bold text-white group-hover:text-orange-400 transition-colors">Referral Module</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
