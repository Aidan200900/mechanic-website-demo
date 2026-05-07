const testimonials = [
  {
    name: "Sarah M.",
    location: "Austin, TX",
    service: "Panel Upgrade",
    rating: 5,
    text: "VoltPro upgraded our 100-amp panel to 200-amp in a single day. Professional, clean, and the inspector passed it first try. Highly recommend!",
  },
  {
    name: "James R.",
    location: "Round Rock, TX",
    service: "Emergency Repair",
    rating: 5,
    text: "Called at 11pm when half my house lost power. They were here within 45 minutes and had it fixed by midnight. Lifesavers. Worth every penny.",
  },
  {
    name: "Linda K.",
    location: "Cedar Park, TX",
    service: "EV Charger Install",
    rating: 5,
    text: "Got a Level 2 charger installed for my Tesla. The team was knowledgeable about the rebate program and helped me save $500. Super smooth process.",
  },
];

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} className="w-4 h-4 text-amber-400" viewBox="0 0 20 20" fill="currentColor">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-slate-950 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-amber-400 font-semibold text-sm uppercase tracking-widest mb-3">
            Reviews
          </p>
          <h2 className="text-4xl sm:text-5xl font-display text-white mb-4">
            What Our Customers Say
          </h2>
          <div className="w-16 h-1 bg-amber-400 mx-auto rounded-full" />
          <p className="text-slate-400 mt-6">
            ⭐ 4.9/5 average across 200+ Google reviews
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-slate-800 border border-slate-700 rounded-2xl p-7 relative"
            >
              {/* Quote mark */}
              <div className="absolute top-5 right-6 text-slate-600 text-6xl font-serif leading-none select-none">
                &ldquo;
              </div>

              <Stars count={t.rating} />
              <p className="text-slate-300 text-sm leading-relaxed mt-4 mb-6">
                {t.text}
              </p>
              <div className="border-t border-slate-700 pt-4">
                <p className="text-white font-semibold text-sm">{t.name}</p>
                <p className="text-slate-500 text-xs">
                  {t.location} · {t.service}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
