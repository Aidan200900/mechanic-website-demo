const services = [
  {
    icon: "🏠",
    title: "Residential Wiring",
    description:
      "Full home wiring, rewiring, outlets, switches, and code compliance upgrades for homes of all sizes.",
    highlight: false,
  },
  {
    icon: "⚡",
    title: "Panel Upgrades",
    description:
      "Breaker box replacements, capacity upgrades, and sub-panel installations to meet modern power demands.",
    highlight: false,
  },
  {
    icon: "🔌",
    title: "EV Charging Stations",
    description:
      "Level 1 & 2 home charger installation for all major EV brands. Fast, code-compliant, and rebate-ready.",
    highlight: false,
  },
  {
    icon: "🚨",
    title: "Emergency 24/7 Service",
    description:
      "Power outages, sparking wires, tripped breakers — we respond fast, day or night, every day of the year.",
    highlight: true,
  },
  {
    icon: "🏢",
    title: "Commercial Electrical",
    description:
      "Office fit-outs, retail spaces, warehouse lighting, three-phase power, and ongoing maintenance contracts.",
    highlight: false,
  },
  {
    icon: "💡",
    title: "Lighting & Fixtures",
    description:
      "Recessed lighting, ceiling fans, smart switches, outdoor security lighting, and decorative fixture installs.",
    highlight: false,
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-slate-900 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section heading */}
        <div className="text-center mb-16">
          <p className="text-amber-400 font-semibold text-sm uppercase tracking-widest mb-3">
            What We Do
          </p>
          <h2 className="text-4xl sm:text-5xl font-display text-white mb-4">
            Our Services
          </h2>
          <div className="w-16 h-1 bg-amber-400 mx-auto rounded-full" />
          <p className="text-slate-400 mt-6 max-w-xl mx-auto">
            From a single outlet to a full commercial build-out, VoltPro
            Electric handles it all with licensed professionals.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className={`group relative bg-slate-800 rounded-2xl p-7 border transition-all duration-300 cursor-default ${
                service.highlight
                  ? "border-amber-400 shadow-glow-amber"
                  : "border-slate-700 hover:border-amber-400 hover:shadow-glow-amber"
              }`}
            >
              {service.highlight && (
                <span className="absolute top-4 right-4 bg-amber-400 text-slate-900 text-xs font-bold px-2.5 py-1 rounded-full">
                  AVAILABLE NOW
                </span>
              )}
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-white font-bold text-lg mb-2">
                {service.title}
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
