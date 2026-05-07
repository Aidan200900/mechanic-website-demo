const reasons = [
  {
    icon: "✅",
    title: "Licensed & Insured",
    desc: "TX Lic. #ELEC-00123456. Full liability coverage on every job.",
  },
  {
    icon: "🕐",
    title: "24/7 Emergency",
    desc: "We answer the phone at 2am. Electrical emergencies don't wait.",
  },
  {
    icon: "💰",
    title: "Free Estimates",
    desc: "Transparent, itemized quotes before any work begins. No surprises.",
  },
  {
    icon: "🏆",
    title: "10+ Years Experience",
    desc: "Thousands of completed jobs across Austin and surrounding areas.",
  },
];

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="bg-amber-400 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-amber-900 font-semibold text-sm uppercase tracking-widest mb-3">
            Why VoltPro
          </p>
          <h2 className="text-4xl sm:text-5xl font-display text-slate-900 mb-4">
            The VoltPro Difference
          </h2>
          <div className="w-16 h-1 bg-slate-900 mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((r) => (
            <div key={r.title} className="text-center">
              <div className="text-5xl mb-4">{r.icon}</div>
              <h3 className="text-slate-900 font-bold text-xl mb-2">
                {r.title}
              </h3>
              <p className="text-amber-900/80 text-sm leading-relaxed">
                {r.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
