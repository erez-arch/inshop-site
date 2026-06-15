"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";

// ── Translations ──────────────────────────────────────────────────────────────
type Lang = "en" | "he";

const T = {
  en: {
    dir: "ltr" as "ltr" | "rtl",
    nav_experience: "Experience", nav_technology: "Technology", nav_live: "Live",
    nav_cta: "Partner with us",
    hero_tag: "Autonomous Retail Network",
    hero_h1a: "The store", hero_h1b: "knows you.",
    hero_sub: "Walk up. Get recognized. Walk out.\nNo card. No app. No queue.",
    hero_btn1: "See it in action", hero_btn2: "The technology",
    marquee: ["Face Recognition","Frictionless Checkout","Zero Queue","24/7 Access","Smart Inventory","AI-Verified Refills","One-Time Registration"],
    machine_tag: "The Hardware", machine_h2a: "One unit.", machine_h2b: "Six technologies.",
    caps: [
      { label:"Identity", title:"Face Recognition", detail:"Proprietary AI identifies every customer in under one second. No card. No phone. No tap. Register once at any INSHOP unit — recognized everywhere, forever.", tags:["< 1 second ID","No device needed","Lifetime access"] },
      { label:"Personalization", title:"Smart Display", detail:"The moment your face is recognized, the terminal shows your name, personal offers, and targeted promotions. Every customer gets a different screen — built in real time.", tags:["Name greeting","Custom offers","Targeted promos"] },
      { label:"Inventory", title:"Live Stock Tracking", detail:"Every product on every shelf tracked in real time across all units. The moment stock drops below threshold, an automatic order fires to the supplier. No one needs to check.", tags:["Real-time tracking","Auto reorder","Zero stockouts"] },
      { label:"AI Verify", title:"AI Shelf Verification", detail:"After every restock, the filler photographs the shelf. AI analyzes placement, label direction, and quantity. Payment only releases when every single check passes.", tags:["Photo analysis","Label detection","Pay on approval"] },
      { label:"Checkout", title:"Door-Close Checkout", detail:"Close the door. That's it. The system tracked what you took, charged your stored payment, and sent a receipt by SMS. No scan, no queue, no interaction.", tags:["Door = checkout","Auto-charge","SMS receipt"] },
      { label:"OS", title:"INSHOP Operating System", detail:"Suppliers, fillers, customers, and every live unit connected to one OS. One dashboard. One source of truth. No phone calls, no spreadsheets, no guesswork — ever.", tags:["Full-stack OS","All locations","Real-time sync"] },
    ],
    exp_tag: "The Experience", exp_h2a: "Six steps.", exp_h2b: "Feels like nothing.",
    steps: [
      { title:"Approach the unit", body:"Walk up to any INSHOP terminal. No interaction needed yet." },
      { title:"Face recognition", body:"Proprietary AI identifies you in under one second. No card. No phone." },
      { title:"Door unlocks", body:"Access granted the moment you're recognized. Instant." },
      { title:"Take your products", body:"Shop naturally. Grab what you need, browse freely — no rush." },
      { title:"Close the door", body:"That's checkout. The system has already tracked everything." },
      { title:"Receipt by SMS", body:"Payment processed automatically. Confirmation arrives in seconds." },
    ],
    exp_cta: "Register once. Shop everywhere. Forever.",
    tech_tag: "Under the Hood", tech_h2a: "Every layer", tech_h2b: "connected.",
    tech_sub: "INSHOP OS runs the entire operation — hardware, software, logistics, and people — in one system.",
    tech_cards: [
      { icon:"👁", title:"Face Recognition", body:"One-time registration. After that, you're identified the moment you approach. No friction, ever.", color:"#00A1E0" },
      { icon:"⚡", title:"Frictionless Payment", body:"Payment tokens stored at registration. Every purchase auto-charged when the door closes. Receipt by SMS.", color:"#00C7B1" },
      { icon:"📦", title:"Live Inventory", body:"Every product tracked in real time across all units. When stock drops, automatic orders fire — no human needed.", color:"#06AED5" },
      { icon:"🤖", title:"AI Shelf Verification", body:"Fillers photograph restocked shelves. AI checks placement and facing before approving any payment. Zero guesswork.", color:"#5C67F2" },
      { icon:"📲", title:"Personalized Screen", body:"The terminal shows your name, personalized offers, and targeted promotions the moment you approach.", color:"#1589EE" },
      { icon:"🔗", title:"One OS. Everything.", body:"Suppliers, inventory, refillers, retail units, and customers — all wired into a single operating system.", color:"#0070D2" },
    ],
    mod_tag: "Built-in Intelligence", mod_h2a: "Three modules.", mod_h2b: "One network.",
    modules: [
      { href:"/modules/supplier", num:"01", icon:"📦", title:"Supplier Module", tagline:"Detect. Order. Deliver. Refill.", desc:"The system detects shortage and triggers the entire supply chain automatically — from order placement to shelf restocking.", cta:"Explore module", color:"#00C7B1" },
      { href:"/modules/fillers", num:"02", icon:"♻️", title:"Fillers Module", tagline:"Alert. Accept. Restock. Verify.", desc:"Nearby fillers are dispatched when stock drops. AI verifies the refill before any payment is approved. No shortcuts.", cta:"Explore module", color:"#1589EE" },
      { href:"/modules/referral", num:"03", icon:"🤝", title:"Referral Module", tagline:"Share. Redeem. Earn.", desc:"Trainers and promoters share digital coupons and earn commission only when a real purchase happens at the terminal.", cta:"Explore module", color:"#00A1E0" },
    ],
    live_tag: "Already Deployed", live_h2a: "Not a demo.", live_h2b: "Live now.",
    live_desc: "10 fully operational units across Israel. Real customers. Real purchases. Measurable results — every day.",
    live_stat1: "10", live_label1: "Live Locations",
    live_stat2: "₪20K+", live_label2: "Monthly / Unit",
    vis_tag: "The Vision", vis_h2a: "Built in Israel.", vis_h2b: "Designed for the world.",
    vis_sub: "Starting with gyms. Expanding to 20,000+ locations. Then everywhere.",
    phases: [
      { phase:"Phase 01", title:"Win Israel", stat:"800", label:"target gyms", desc:"Build density and registered users across Israel's fitness scene.", color:"#00C7B1" },
      { phase:"Phase 02", title:"Scale Globally", stat:"20K+", label:"gyms worldwide", desc:"Replicate the proven model across global fitness networks.", color:"#1589EE" },
      { phase:"Phase 03", title:"Beyond Gyms", stat:"∞", label:"autonomous retail", desc:"Street retail, offices, transport hubs — the full autonomous store.", color:"#5C67F2" },
    ],
    cta_tag: "Let's Talk", cta_h2a: "Bring INSHOP", cta_h2b: "to your location.",
    cta_sub: "We handle installation, software, and ongoing operations. You get a live revenue-generating unit from day one.",
    cta_btn: "Get in Touch",
    footer: "© 2026 INSHOP — Autonomous Retail Network",
    mod_links: [["Supplier","/modules/supplier"],["Fillers","/modules/fillers"],["Referral","/modules/referral"]],
  },
  he: {
    dir: "rtl" as "ltr" | "rtl",
    nav_experience: "חוויה", nav_technology: "טכנולוגיה", nav_live: "חי",
    nav_cta: "בואו נדבר",
    hero_tag: "רשת קמעונאות אוטונומית",
    hero_h1a: "החנות", hero_h1b: "מכירה אותכם.",
    hero_sub: "גשו. תזוהו. קחו. צאו.\nבלי כרטיס. בלי אפליקציה. בלי תור.",
    hero_btn1: "תראו איך זה עובד", hero_btn2: "הטכנולוגיה",
    marquee: ["זיהוי פנים","תשלום אוטומטי","אפס תורים","גישה 24/7","מלאי חכם","מילוי מאומת AI","רישום חד-פעמי"],
    machine_tag: "החומרה", machine_h2a: "יחידה אחת.", machine_h2b: "שש טכנולוגיות.",
    caps: [
      { label:"זיהוי", title:"זיהוי פנים", detail:"מנוע AI פנימי מזהה כל לקוח תוך פחות משנייה. בלי כרטיס, בלי טלפון, בלי מגע. נרשמים פעם אחת — ומכאן ואילך הגישה שלכם פתוחה בכל יחידת INSHOP, לנצח.", tags:["פחות משנייה","בלי מכשיר","גישה לכל החיים"] },
      { label:"התאמה", title:"תצוגה חכמה", detail:"ברגע שהמצלמה מזהה אתכם, המסך מציג את שמכם, הצעות אישיות ומבצעים מותאמים. כל לקוח רואה מסך שנבנה עבורו בזמן אמת — לא את אותו מסך גנרי.", tags:["ברכה אישית","הצעות מותאמות","מבצעים ממוקדים"] },
      { label:"מלאי", title:"מלאי חי בכל רגע", detail:"כל מוצר על כל מדף מנוהל ברציפות בכל היחידות. ירדה כמות מתחת לסף? הזמנה יוצאת לספק אוטומטית — בלי שאף אחד צריך לבדוק.", tags:["מעקב רציף","הזמנה אוטומטית","אפס חוסרים"] },
      { label:"אימות AI", title:"בדיקת מדף חכמה", detail:"אחרי כל מילוי, הממלא מצלם את המדף. מנוע ה-AI בודק מיקום, כיוון תווית וכמות מוצרים. התשלום מאושר רק כשהכל תקין — לא לפני.", tags:["ניתוח תמונות","זיהוי תוויות","תשלום רק על אישור"] },
      { label:"קופה", title:"קופה עם סגירת הדלת", detail:"סוגרים את הדלת. זהו. המערכת עקבה אחר כל מה שלקחתם, חייבה אוטומטית ושלחה קבלה ב-SMS. בלי סריקה, בלי תור, בלי מגע.", tags:["דלת = קופה","חיוב אוטומטי","קבלה ב-SMS"] },
      { label:"מערכת", title:"מערכת הפעלה INSHOP", detail:"ספקים, ממלאים, לקוחות וכל יחידה פעילה — מחוברים יחד למערכת הפעלה אחת. לוח בקרה אחד. מקור אמת אחד. בלי שיחות טלפון, בלי גיליונות אקסל, בלי ניחושים.", tags:["מחסנית מלאה","כל המיקומים","סנכרון בזמן אמת"] },
    ],
    exp_tag: "החוויה", exp_h2a: "שישה שלבים.", exp_h2b: "כאילו לא עשיתם כלום.",
    steps: [
      { title:"גשו ליחידה", body:"גשו לכל יחידת INSHOP. אין צורך בשום פעולה מוקדמת." },
      { title:"זיהוי פנים", body:"מנוע ה-AI מזהה אתכם תוך פחות משנייה. בלי כרטיס. בלי טלפון." },
      { title:"הדלת נפתחת", body:"הדלת נפתחת ברגע שהמערכת מזהה אתכם. מיידי, בלי מגע." },
      { title:"קחו מה שצריך", body:"קנו בצורה הכי טבעית שיש. עיינו, החזירו, קחו — בלי לחץ ובלי מהירות." },
      { title:"סגרו את הדלת", body:"זו הקופה. המערכת עקבה אחר כל מה שלקחתם — החיוב כבר מוכן." },
      { title:"קבלה ב-SMS", body:"התשלום מתבצע אוטומטית. קבלה מגיעה ב-SMS תוך שניות." },
    ],
    exp_cta: "נרשמים פעם אחת. קונים בכל מקום. לנצח.",
    tech_tag: "מאחורי הקלעים", tech_h2a: "כל שכבה", tech_h2b: "מחוברת.",
    tech_sub: "INSHOP OS מנהל את כל הפעולה — חומרה, תוכנה, לוגיסטיקה ואנשים — ממקום אחד.",
    tech_cards: [
      { icon:"👁", title:"זיהוי פנים", body:"נרשמים פעם אחת. מכאן ואילך המערכת מזהה אתכם ברגע ההגעה — בלי חיכוך, לנצח.", color:"#00A1E0" },
      { icon:"⚡", title:"תשלום אוטומטי", body:"פרטי התשלום שמורים מרגע הרישום. כל רכישה מחויבת אוטומטית עם סגירת הדלת. קבלה ב-SMS.", color:"#00C7B1" },
      { icon:"📦", title:"מלאי בזמן אמת", body:"כל מוצר בכל יחידה מנוהל ברציפות. ירידה מתחת לסף — הזמנה יוצאת לספק אוטומטית, בלי התערבות אנושית.", color:"#06AED5" },
      { icon:"🤖", title:"בדיקת מדף חכמה", body:"אחרי כל מילוי הממלא מצלם את המדף. מנוע AI בודק מיקום ותקינות לפני שמאושר כל תשלום.", color:"#5C67F2" },
      { icon:"📲", title:"מסך אישי", body:"הטרמינל מציג את שמכם, הצעות מותאמות ומבצעים ממוקדים — ברגע שהמצלמה מזהה אתכם.", color:"#1589EE" },
      { icon:"🔗", title:"מערכת הפעלה אחת.", body:"ספקים, מלאי, ממלאים, יחידות ולקוחות — הכל מחובר למקום אחד, בזמן אמת.", color:"#0070D2" },
    ],
    mod_tag: "מודולים חכמים", mod_h2a: "שלושה מודולים.", mod_h2b: "רשת אחת.",
    modules: [
      { href:"/modules/supplier", num:"01", icon:"📦", title:"מודול ספקים", tagline:"זהה מחסור. הזמן. ספק. מלא.", desc:"המערכת מזהה מחסור ומפעילה את שרשרת האספקה כולה אוטומטית — מהזמנה ועד מילוי המדף.", cta:"לפרטים על המודול", color:"#00C7B1" },
      { href:"/modules/fillers", num:"02", icon:"♻️", title:"מודול ממלאים", tagline:"קבלו התראה. מלאו. קבלו תשלום.", desc:"ממלאים בסביבה מקבלים התראה כשמלאי יורד. AI מאמת את המדף לאחר המילוי — תשלום רק על אישור.", cta:"לפרטים על המודול", color:"#1589EE" },
      { href:"/modules/referral", num:"03", icon:"🤝", title:"מודול שגרירים", tagline:"שתפו. מימשו. הרוויחו.", desc:"מאמנים ומקדמים משתפים קופונים דיגיטליים ומרוויחים עמלה — אך ורק כשרכישה אמיתית מתבצעת בטרמינל.", cta:"לפרטים על המודול", color:"#00A1E0" },
    ],
    live_tag: "כבר בשטח", live_h2a: "לא פיילוט.", live_h2b: "חי ועובד.",
    live_desc: "עשר יחידות פועלות במלואן ברחבי ישראל. לקוחות אמיתיים. רכישות אמיתיות. תוצאות מדידות — כל יום.",
    live_stat1: "10", live_label1: "מיקומים פעילים",
    live_stat2: "₪20K+", live_label2: "בחודש ליחידה",
    vis_tag: "החזון", vis_h2a: "נבנה בישראל.", vis_h2b: "מיועד לעולם.",
    vis_sub: "מתחילים עם חדרי כושר. מגיעים ל-20,000+ מיקומים. ואז — לכל מקום.",
    phases: [
      { phase:"שלב 01", title:"ישראל", stat:"800", label:"חדרי כושר ביעד", desc:"בניית נוכחות מוצקה ובסיס משתמשים רשומים בסצנת הכושר הישראלית.", color:"#00C7B1" },
      { phase:"שלב 02", title:"התרחבות גלובלית", stat:"20K+", label:"חדרי כושר בעולם", desc:"שכפול המודל המוכח לרשתות הכושר המובילות בעולם.", color:"#1589EE" },
      { phase:"שלב 03", title:"מעבר לכושר", stat:"∞", label:"קמעונאות אוטונומית", desc:"רחובות מסחר, משרדים, מרכזי תחבורה — החנות האוטונומית המלאה.", color:"#5C67F2" },
    ],
    cta_tag: "בואו נדבר", cta_h2a: "הביאו INSHOP", cta_h2b: "למיקום שלכם.",
    cta_sub: "אנחנו מטפלים בהתקנה, בתוכנה ובתפעול השוטף. אתם מקבלים יחידה פעילה שמייצרת הכנסה כבר ביום הראשון.",
    cta_btn: "צרו קשר",
    footer: "© 2026 INSHOP — רשת קמעונאות אוטונומית",
    mod_links: [["ספקים","/modules/supplier"],["ממלאים","/modules/fillers"],["שגרירים","/modules/referral"]],
  },
};

// ── Helpers ───────────────────────────────────────────────────────────────────
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
    <div className="relative group bg-[#0a1520] rounded-3xl overflow-hidden border border-[#1c3350]">
      <video ref={videoRef} src="/demo.mp4" className="w-full h-auto block" playsInline muted={muted} />
      <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="px-6 pb-5 space-y-3">
          <div className="cursor-pointer" onClick={seek}>
            <div className="h-1 bg-[#0e1b2a]/30 rounded-full overflow-hidden">
              <div className="h-full bg-[#00A1E0] rounded-full transition-all" style={{ width: `${progress}%` }} />
            </div>
          </div>
          <div className="flex items-center gap-4">
            <button onClick={toggle} className="w-10 h-10 rounded-full bg-[#00A1E0] hover:bg-[#0070D2] flex items-center justify-center transition-colors shrink-0">
              {playing
                ? <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24"><rect x="6" y="4" width="4" height="16"/><rect x="14" y="4" width="4" height="16"/></svg>
                : <svg className="w-4 h-4 text-white translate-x-0.5" fill="currentColor" viewBox="0 0 24 24"><polygon points="5,3 19,12 5,21"/></svg>
              }
            </button>
            <button onClick={() => { setMuted(!muted); if (videoRef.current) videoRef.current.muted = !muted; }} className="text-white/70 hover:text-white transition-colors">
              {muted
                ? <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" /></svg>
                : <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072M12 6v12m0 0l-4-4m4 4l4-4M9 9H5a1 1 0 00-1 1v4a1 1 0 001 1h4l4 4V5l-4 4z" /></svg>
              }
            </button>
            <span className="text-white/50 text-xs ml-auto">INSHOP Demo</span>
          </div>
        </div>
      </div>
      {!playing && (
        <button onClick={toggle} className="absolute inset-0 flex items-center justify-center">
          <div className="w-20 h-20 rounded-full bg-[#0e1b2a]/80 backdrop-blur-md border border-[#00A1E0]/30 flex items-center justify-center hover:bg-[#00A1E0] hover:border-[#00A1E0] transition-all duration-300 group/btn shadow-lg">
            <svg className="w-8 h-8 text-[#00A1E0] group-hover/btn:text-white translate-x-1 transition-colors" fill="currentColor" viewBox="0 0 24 24"><polygon points="5,3 19,12 5,21"/></svg>
          </div>
        </button>
      )}
    </div>
  );
}

// ── Machine Showcase ──────────────────────────────────────────────────────────
const CAP_COLORS = ["#00A1E0","#06AED5","#00C7B1","#5C67F2","#1589EE","#0070D2"];
const CAP_ICONS  = ["👁️","📲","📦","🤖","⚡","🔗"];

function MachineShowcase({ t }: { t: typeof T.en }) {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  useEffect(() => {
    if (paused) return;
    const timer = setTimeout(() => setActive(a => (a + 1) % t.caps.length), 4000);
    return () => clearTimeout(timer);
  }, [active, paused, t.caps.length]);
  const cap = t.caps[active];
  const col = CAP_COLORS[active];
  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <Reveal className="mb-16">
          <p className="text-[#00A1E0] text-xs font-bold uppercase tracking-[0.3em] mb-5">{t.machine_tag}</p>
          <h2 className="text-[clamp(2.5rem,6vw,5rem)] font-black leading-tight max-w-3xl text-white">
            {t.machine_h2a}<br /><span className="text-[#00A1E0]/50">{t.machine_h2b}</span>
          </h2>
        </Reveal>
        <div className="grid lg:grid-cols-[3fr_2fr] gap-12 items-start">
          {/* Machine image */}
          <div className="relative rounded-3xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.6)] bg-[#070c14]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/machine.jpg" alt="INSHOP Unit" className="w-full h-auto block" />
            {/* vignette covers the photo's white studio background at the edges */}
            <div className="absolute inset-0 pointer-events-none" style={{boxShadow:"inset 0 0 60px 30px #070c14"}} />
            <div className="absolute inset-0 bg-gradient-to-b from-[#070c14]/30 via-transparent to-[#070c14]/60 pointer-events-none" />
            <div className="absolute left-0 right-0 h-px pointer-events-none transition-all duration-700 ease-out"
              style={{ top:`${[53,29,63,63,47,86][active]}%`, background:`linear-gradient(90deg,transparent,${col}80 30%,${col} 50%,${col}80 70%,transparent)`, boxShadow:`0 0 12px ${col}60` }} />
            {t.caps.map((c, i) => (
              <button key={i} className="absolute -translate-x-1/2 -translate-y-1/2 z-10"
                style={{ left:`${[48,48,28,73,36,48][i]}%`, top:`${[53,29,63,63,47,86][i]}%` }}
                onClick={() => { setActive(i); setPaused(true); }}
                onMouseEnter={() => { setActive(i); setPaused(true); }}
                onMouseLeave={() => setPaused(false)}>
                {active === i && <>
                  <div className="absolute inset-[-12px] rounded-full border animate-ping pointer-events-none" style={{ borderColor: CAP_COLORS[i] + "60" }} />
                  <div className="absolute inset-[-6px] rounded-full pointer-events-none" style={{ background: CAP_COLORS[i] + "12" }} />
                </>}
                <div className="relative w-7 h-7 rounded-full flex items-center justify-center text-[10px] font-black transition-all duration-300"
                  style={active === i ? { background: CAP_COLORS[i], color:"#fff", transform:"scale(1.25)", boxShadow:`0 0 20px ${CAP_COLORS[i]}90` } : { background:"rgba(255,255,255,0.8)", border:`2px solid ${CAP_COLORS[i]}50`, color: CAP_COLORS[i], backdropFilter:"blur(4px)" }}>
                  {i + 1}
                </div>
                <div className={`absolute bottom-full left-1/2 -translate-x-1/2 mb-2 whitespace-nowrap bg-[#030e1a] text-white text-[9px] font-bold uppercase tracking-widest px-2 py-1 rounded-lg transition-all duration-200 ${active === i ? "opacity-100 translate-y-0" : "opacity-0 translate-y-1 pointer-events-none"}`}>
                  {c.label}
                </div>
              </button>
            ))}
            <div className="absolute bottom-4 left-4 text-white/40 text-[9px] font-black tracking-widest uppercase pointer-events-none select-none">INSHOP Unit — Holon</div>
          </div>

          {/* Capability panel */}
          <div className="lg:sticky lg:top-24" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
            <div className="h-[2px] bg-[#1a2e44] mb-10 rounded-full overflow-hidden">
              <div key={active} className="h-full rounded-full"
                style={{ animation: paused ? "none" : "fillBar 4s linear both", width: paused ? "0" : undefined, background: col }} />
            </div>
            <div key={`cap-${active}`} style={{ animation: "capIn 0.45s cubic-bezier(0.16,1,0.3,1) both" }}>
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl mb-5" style={{ background: col + "18", border:`1px solid ${col}35` }}>{CAP_ICONS[active]}</div>
              <p className="text-[10px] font-black uppercase tracking-[0.25em] mb-3" style={{ color: col }}>{cap.label}</p>
              <h3 className="text-[clamp(1.8rem,3.5vw,2.8rem)] font-black text-white mb-5 leading-tight">{cap.title}</h3>
              <p className="text-[#8ab4cf] text-base lg:text-lg leading-relaxed mb-7">{cap.detail}</p>
              <div className="flex flex-wrap gap-2">
                {cap.tags.map(tag => (
                  <span key={tag} className="text-xs px-3 py-1.5 rounded-full font-semibold" style={{ background: col + "12", border:`1px solid ${col}30`, color: col }}>{tag}</span>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-3 gap-2 mt-10">
              {t.caps.map((c, i) => (
                <button key={i} onClick={() => { setActive(i); setPaused(true); }}
                  className="flex items-center gap-2 px-3 py-2.5 rounded-xl text-xs font-bold transition-all duration-300 text-left bg-[#0e1b2a] border"
                  style={active === i ? { borderColor: CAP_COLORS[i] + "50", background: CAP_COLORS[i] + "12", color: CAP_COLORS[i] } : { borderColor:"#1c3350", color:"#5a8aaa" }}>
                  <span className="shrink-0 text-[9px] font-black w-4 h-4 rounded-full flex items-center justify-center"
                    style={active === i ? { background: CAP_COLORS[i], color:"#fff" } : { background:"#1a2e44", color:"#5a8aaa" }}>
                    {i + 1}
                  </span>
                  <span className="truncate">{c.label}</span>
                </button>
              ))}
            </div>
            <style>{`
              @keyframes fillBar { from { width: 0 } to { width: 100% } }
              @keyframes capIn { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: none; } }
              @keyframes rise { from { opacity:0; transform:translateY(60px) } to { opacity:1; transform:none } }
              @keyframes marquee { from { transform:translateX(0) } to { transform:translateX(-25%) } }
            `}</style>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── Page ──────────────────────────────────────────────────────────────────────
export default function Home() {
  const [lang, setLang] = useState<Lang>("en");
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const t = T[lang];

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <div dir={t.dir} className="bg-[#070c14] text-white overflow-x-hidden selection:bg-[#00A1E0]/20">

      {/* NAV */}
      <nav className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${scrolled ? "bg-[#0e1b2a]/90 backdrop-blur-2xl border-b border-[#1c3350] shadow-[0_2px_20px_rgba(0,100,200,0.06)]" : ""}`}>
        <div className="max-w-7xl mx-auto px-6 md:px-10 h-16 flex items-center justify-between">
          <Link href="/" className="text-xl font-black tracking-tight select-none text-white">in<span className="text-[#00A1E0]">S</span>hop</Link>
          <div className="hidden md:flex items-center gap-8 text-sm">
            {[[t.nav_experience,"#experience"],[t.nav_technology,"#technology"],[t.nav_live,"#live"]].map(([l,h]) => (
              <a key={h} href={h} className="text-[#8ab4cf] hover:text-white transition-colors font-medium">{l}</a>
            ))}
          </div>
          <div className="hidden md:flex items-center gap-3">
            {/* Version switcher */}
            <div className="flex items-center gap-1 border border-[#1c3350] rounded-full p-0.5 bg-[#0a1520]">
              <span className="text-[10px] font-mono px-3 py-1.5 rounded-full bg-[#00A1E0]/15 text-[#00A1E0] font-bold">V1</span>
              <Link href="/v2" className="text-[10px] font-mono px-3 py-1.5 rounded-full text-white/30 hover:text-white/70 transition-colors">V2</Link>
              <Link href="/v3" className="text-[10px] font-mono px-3 py-1.5 rounded-full text-white/30 hover:text-white/70 transition-colors">V3</Link>
            </div>
            {/* Language toggle */}
            <button
              onClick={() => setLang(lang === "en" ? "he" : "en")}
              className="flex items-center gap-2 border border-[#1c3350] hover:border-[#00A1E0]/40 bg-[#0e1b2a] text-xs font-bold px-3 py-2 rounded-full transition-all hover:shadow-sm text-[#8ab4cf]"
            >
              {lang === "en" ? "🇮🇱 עברית" : "🇺🇸 English"}
            </button>
            <a href="#contact" className="bg-[#00A1E0] hover:bg-[#0070D2] text-white text-sm font-semibold px-5 py-2 rounded-full transition-all duration-300 shadow-[0_4px_14px_rgba(0,161,224,0.3)]">
              {t.nav_cta}
            </a>
          </div>
          <button className="md:hidden text-[#8ab4cf]" onClick={() => setMenuOpen(!menuOpen)}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {menuOpen ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" /> : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />}
            </svg>
          </button>
        </div>
        {menuOpen && (
          <div className="md:hidden bg-[#0e1b2a]/95 px-6 py-6 flex flex-col gap-5 text-sm border-b border-[#1c3350]">
            {[[t.nav_experience,"#experience"],[t.nav_technology,"#technology"],[t.nav_live,"#live"],[t.nav_cta,"#contact"]].map(([l,h]) => (
              <a key={h} href={h} onClick={() => setMenuOpen(false)} className="text-[#8ab4cf] hover:text-white">{l}</a>
            ))}
            <button onClick={() => { setLang(lang === "en" ? "he" : "en"); setMenuOpen(false); }} className="text-left text-[#00A1E0] font-bold">
              {lang === "en" ? "🇮🇱 עברית" : "🇺🇸 English"}
            </button>
          </div>
        )}
      </nav>

      {/* HERO */}
      <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 overflow-hidden">
        <div className="absolute inset-0" style={{ background:"radial-gradient(ellipse 70% 60% at 50% 55%, rgba(0,161,224,0.12) 0%, rgba(21,137,238,0.05) 60%, transparent 100%)" }} />
        <div className="absolute top-1/3 left-1/4 w-96 h-96 rounded-full opacity-30" style={{ background:"radial-gradient(circle, rgba(92,103,242,0.12), transparent 70%)" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full border border-[#00A1E0]/10" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] rounded-full border border-[#1589EE]/5" />
        <div className="relative z-10 max-w-5xl mx-auto pt-16">
          <div style={{ animation:"rise 1.2s cubic-bezier(0.16,1,0.3,1) both" }}>
            <p className="text-[#00A1E0] text-xs font-bold uppercase tracking-[0.3em] mb-12">{t.hero_tag}</p>
            <h1 className="text-[clamp(3.5rem,10vw,7rem)] font-black leading-[0.88] tracking-tight mb-8 text-white">
              {t.hero_h1a}<br /><span className="text-[#00A1E0]">{t.hero_h1b}</span>
            </h1>
            <p className="text-[#8ab4cf] text-xl md:text-2xl max-w-xl mx-auto mb-14 leading-relaxed font-light" style={{ whiteSpace:"pre-line" }}>
              {t.hero_sub}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#experience" className="inline-flex items-center gap-3 bg-[#00A1E0] hover:bg-[#0070D2] text-white font-bold px-8 py-4 rounded-full text-base transition-all hover:scale-105 shadow-[0_8px_30px_rgba(0,161,224,0.35)] hover:shadow-[0_8px_40px_rgba(0,161,224,0.5)]">
                {t.hero_btn1}
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7"/></svg>
              </a>
              <a href="#technology" className="inline-flex items-center gap-3 border border-[#00A1E0]/30 hover:border-[#00A1E0] hover:bg-[#00A1E0]/5 font-medium px-8 py-4 rounded-full text-base text-[#00A1E0] transition-all">
                {t.hero_btn2}
              </a>
            </div>
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 opacity-40 animate-bounce">
          <svg className="w-5 h-5 text-[#00A1E0]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7"/></svg>
        </div>
      </section>

      {/* MARQUEE */}
      <div className="border-y border-[#1c3350] py-5 overflow-hidden bg-[#0e1b2a]">
        <div className="flex gap-0 animate-[marquee_18s_linear_infinite] whitespace-nowrap">
          {[...Array(4)].map((_,i) => (
            <div key={i} className="flex shrink-0">
              {t.marquee.map(item => (
                <span key={item} className="text-xs font-semibold text-[#00A1E0]/40 uppercase tracking-[0.2em] px-8">
                  {item}<span className="text-[#00A1E0]/30 ml-8">·</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* MACHINE SHOWCASE */}
      <MachineShowcase t={t} />

      {/* EXPERIENCE */}
      <section id="experience" className="py-36 px-6 bg-[#0e1b2a]">
        <div className="max-w-7xl mx-auto">
          <Reveal className="mb-24">
            <p className="text-[#00A1E0] text-xs font-bold uppercase tracking-[0.3em] mb-5">{t.exp_tag}</p>
            <h2 className="text-[clamp(2.5rem,6vw,5rem)] font-black leading-tight max-w-3xl text-white">
              {t.exp_h2a}<br /><span className="text-[#00A1E0]/40">{t.exp_h2b}</span>
            </h2>
          </Reveal>
          <div className="grid lg:grid-cols-[3fr_2fr] gap-16 items-start">
            <div>
              {t.steps.map((step, i) => (
                <Reveal key={step.title} delay={i * 0.06}>
                  <div className="group flex gap-6 py-6 border-b border-[#e3f0fd] hover:border-[#00A1E0]/30 transition-colors last:border-0">
                    <span className="text-[#00A1E0]/30 font-black text-sm pt-1 w-8 shrink-0 group-hover:text-[#00A1E0]/70 transition-colors">0{i+1}</span>
                    <div>
                      <h3 className="font-bold text-white text-lg mb-1">{step.title}</h3>
                      <p className="text-[#8ab4cf] text-sm leading-relaxed">{step.body}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
              <Reveal delay={0.4}>
                <div className="mt-8 inline-flex items-center gap-3 bg-[#00A1E0]/8 border border-[#00A1E0]/20 rounded-2xl px-6 py-4">
                  <span className="w-2 h-2 rounded-full bg-[#00A1E0] animate-pulse shrink-0" />
                  <p className="text-[#00A1E0] font-semibold">{t.exp_cta}</p>
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
      <section id="technology" className="py-36 px-6 bg-[#0d1825]">
        <div className="max-w-7xl mx-auto">
          <Reveal className="mb-24">
            <p className="text-[#00A1E0] text-xs font-bold uppercase tracking-[0.3em] mb-5">{t.tech_tag}</p>
            <h2 className="text-[clamp(2.5rem,6vw,5rem)] font-black leading-tight max-w-3xl text-white">
              {t.tech_h2a}<br /><span className="text-[#00A1E0]/40">{t.tech_h2b}</span>
            </h2>
            <p className="text-[#8ab4cf] text-lg mt-6 max-w-lg">{t.tech_sub}</p>
          </Reveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {t.tech_cards.map((card, i) => (
              <Reveal key={card.title} delay={i * 0.07}>
                <div className="group h-full bg-[#0e1b2a] border border-[#1c3350] rounded-3xl p-8 transition-all duration-500"
                  onMouseEnter={e => { const el = e.currentTarget as HTMLDivElement; el.style.borderColor = card.color + "60"; el.style.boxShadow = `0 8px 30px ${card.color}18`; }}
                  onMouseLeave={e => { const el = e.currentTarget as HTMLDivElement; el.style.borderColor = ""; el.style.boxShadow = ""; }}>
                  <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl mb-6" style={{ background: card.color + "15", border:`1px solid ${card.color}30` }}>
                    {card.icon}
                  </div>
                  <h3 className="font-black text-white text-xl mb-3">{card.title}</h3>
                  <p className="text-[#8ab4cf] text-sm leading-relaxed">{card.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* MODULES */}
      <section className="py-36 px-6 bg-[#0e1b2a]">
        <div className="max-w-7xl mx-auto">
          <Reveal className="mb-24">
            <p className="text-[#00A1E0] text-xs font-bold uppercase tracking-[0.3em] mb-5">{t.mod_tag}</p>
            <h2 className="text-[clamp(2.5rem,6vw,5rem)] font-black leading-tight max-w-3xl text-white">
              {t.mod_h2a}<br /><span className="text-[#00A1E0]/40">{t.mod_h2b}</span>
            </h2>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-6">
            {t.modules.map((m, i) => (
              <Reveal key={m.href} delay={i * 0.1}>
                <Link href={m.href} className="group h-full flex flex-col bg-[#0e1b2a] border border-[#1c3350] rounded-3xl p-8 transition-all duration-500"
                  onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = m.color + "60"; el.style.boxShadow = `0 8px 40px ${m.color}14`; }}
                  onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = ""; el.style.boxShadow = ""; }}>
                  <div className="flex items-start justify-between mb-10">
                    <span className="font-black text-sm" style={{ color: m.color + "80" }}>{m.num}</span>
                    <div className="w-10 h-10 rounded-full border flex items-center justify-center transition-all group-hover:scale-110" style={{ borderColor: m.color + "40", background: m.color + "08" }}>
                      <svg className="w-4 h-4 -rotate-45" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: m.color }}><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 7l-10 10M7 7h10v10"/></svg>
                    </div>
                  </div>
                  <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl mb-6" style={{ background: m.color + "15", border:`1px solid ${m.color}30` }}>{m.icon}</div>
                  <h3 className="font-black text-white text-2xl mb-2">{m.title}</h3>
                  <p className="text-sm font-semibold mb-4" style={{ color: m.color }}>{m.tagline}</p>
                  <p className="text-[#8ab4cf] text-sm leading-relaxed flex-1">{m.desc}</p>
                  <div className="mt-8 text-xs font-bold uppercase tracking-widest flex items-center gap-2 text-[#8ab4cf] group-hover:text-white transition-colors">
                    {m.cta}
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 7l-10 10M7 7h10v10"/></svg>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* LIVE */}
      <section id="live" className="py-36 px-6 bg-[#0d1825]">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <Reveal>
              <p className="text-[#00A1E0] text-xs font-bold uppercase tracking-[0.3em] mb-5">{t.live_tag}</p>
              <h2 className="text-[clamp(2.5rem,6vw,5rem)] font-black leading-tight mb-6 text-white">
                {t.live_h2a}<br /><span className="text-[#00A1E0]">{t.live_h2b}</span>
              </h2>
              <p className="text-[#8ab4cf] text-lg mb-12 leading-relaxed">{t.live_desc}</p>
              <div className="flex gap-8">
                <div>
                  <div className="text-5xl font-black text-[#00A1E0]">{t.live_stat1}</div>
                  <div className="text-[#8ab4cf] text-sm mt-1 uppercase tracking-wide">{t.live_label1}</div>
                </div>
                <div className="w-px bg-[#c8dff0]" />
                <div>
                  <div className="text-5xl font-black text-[#00A1E0]">{t.live_stat2}<span className="text-[#06AED5]">+</span></div>
                  <div className="text-[#8ab4cf] text-sm mt-1 uppercase tracking-wide">{t.live_label2}</div>
                </div>
              </div>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="grid grid-cols-2 gap-3">
                {["Profit Holon","Profit Shoham","Profit Kiryat Ono","Profit Modi'in","Profit Yokneam","Profit Petah Tikva","Profit Kiryat Yam","Profit Rosh HaAyin","Profit Yavne","Lazuz Petah Tikva"].map(loc => (
                  <div key={loc} className="flex items-center gap-3 bg-[#0e1b2a] border border-[#1c3350] hover:border-[#00A1E0]/40 rounded-xl px-4 py-3 transition-colors group">
                    <span className="w-2 h-2 rounded-full bg-[#00A1E0] shrink-0 group-hover:shadow-[0_0_8px_rgba(0,161,224,0.6)] transition-all" />
                    <span className="text-sm text-[#8ab4cf] group-hover:text-white transition-colors">{loc}</span>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* VISION */}
      <section className="py-36 px-6 bg-[#0e1b2a]">
        <div className="max-w-5xl mx-auto text-center">
          <Reveal>
            <p className="text-[#00A1E0] text-xs font-bold uppercase tracking-[0.3em] mb-5">{t.vis_tag}</p>
            <h2 className="text-[clamp(2.5rem,7vw,6rem)] font-black leading-tight mb-6 text-white">
              {t.vis_h2a}<br /><span className="text-[#00A1E0]">{t.vis_h2b}</span>
            </h2>
            <p className="text-[#8ab4cf] text-xl mb-20 max-w-xl mx-auto">{t.vis_sub}</p>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-5">
            {t.phases.map((p, i) => (
              <Reveal key={p.phase} delay={i * 0.12}>
                <div className="bg-[#0e1b2a] border border-[#1c3350] rounded-3xl p-8 text-left h-full transition-all duration-500"
                  onMouseEnter={e => { const el = e.currentTarget as HTMLDivElement; el.style.borderColor = p.color + "60"; el.style.boxShadow = `0 8px 30px ${p.color}12`; }}
                  onMouseLeave={e => { const el = e.currentTarget as HTMLDivElement; el.style.borderColor = ""; el.style.boxShadow = ""; }}>
                  <p className="text-xs font-black uppercase tracking-widest mb-6" style={{ color: p.color + "90" }}>{p.phase}</p>
                  <div className="text-5xl font-black mb-1" style={{ color: p.color }}>{p.stat}</div>
                  <div className="text-[#8ab4cf] text-sm mb-5">{p.label}</div>
                  <h3 className="font-black text-white text-xl mb-3">{p.title}</h3>
                  <p className="text-[#8ab4cf] text-sm leading-relaxed">{p.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="py-36 px-6 bg-[#030e1a]">
        <div className="max-w-4xl mx-auto">
          <Reveal>
            <div className="relative border border-[#00A1E0]/30 rounded-[2.5rem] p-1 overflow-hidden">
              <div className="absolute inset-0" style={{ background:"radial-gradient(ellipse at center, rgba(0,161,224,0.12), transparent)" }} />
              <div className="relative bg-[#030e1a] rounded-[2rem] px-10 md:px-20 py-20 text-center">
                <p className="text-[#06AED5] text-xs font-bold uppercase tracking-[0.3em] mb-6">{t.cta_tag}</p>
                <h2 className="text-[clamp(2rem,5vw,4rem)] font-black leading-tight mb-6 text-white">
                  {t.cta_h2a}<br /><span className="text-[#00A1E0]">{t.cta_h2b}</span>
                </h2>
                <p className="text-[#8ab4cf] text-lg mb-12 max-w-lg mx-auto">{t.cta_sub}</p>
                <a href="mailto:info@inshop.io" className="inline-flex items-center gap-3 bg-[#00A1E0] hover:bg-[#06AED5] text-white font-black px-10 py-5 rounded-full text-lg transition-all hover:scale-105 shadow-[0_0_60px_rgba(0,161,224,0.4)]">
                  {t.cta_btn}
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 7l-10 10M7 7h10v10"/></svg>
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-[#1c3350] py-10 px-6 bg-[#070c14]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="text-xl font-black text-white">in<span className="text-[#00A1E0]">S</span>hop</span>
          <p className="text-[#8ab4cf] text-xs uppercase tracking-widest">{t.footer}</p>
          <div className="flex items-center gap-6">
            {t.mod_links.map(([label, href]) => (
              <Link key={href} href={href} className="text-xs text-[#8ab4cf] hover:text-[#00A1E0] transition-colors">{label}</Link>
            ))}
            <Link href="/v2" className="text-xs font-mono border border-white/10 hover:border-[#00A1E0]/40 hover:text-[#00A1E0] text-white/25 px-3 py-1.5 transition-all tracking-widest uppercase">
              V2 →
            </Link>
          </div>
        </div>
      </footer>

    </div>
  );
}
