const cities = [
  "Austin",
  "Round Rock",
  "Cedar Park",
  "Georgetown",
  "Pflugerville",
  "Kyle",
  "Buda",
  "Manor",
  "Leander",
  "Liberty Hill",
  "Hutto",
  "Taylor",
];

export default function ServiceArea() {
  return (
    <section className="bg-slate-900 py-20 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-amber-400 font-semibold text-sm uppercase tracking-widest mb-3">
              Service Area
            </p>
            <h2 className="text-4xl font-display text-white mb-4">
              Serving Greater Austin
            </h2>
            <div className="w-16 h-1 bg-amber-400 rounded-full mb-6" />
            <p className="text-slate-400 leading-relaxed mb-4">
              VoltPro Electric proudly serves homeowners and businesses
              throughout the Austin metro and surrounding communities. If
              you&apos;re within 40 miles of Austin, we&apos;ve got you covered.
            </p>
            <p className="text-slate-400 leading-relaxed">
              Not sure if we serve your area?{" "}
              <a
                href="tel:+15551234567"
                className="text-amber-400 hover:underline font-medium"
              >
                Give us a call
              </a>{" "}
              and we&apos;ll let you know right away.
            </p>
          </div>

          <div>
            <div className="flex flex-wrap gap-2">
              {cities.map((city) => (
                <span
                  key={city}
                  className="flex items-center gap-1.5 bg-slate-800 border border-slate-700 text-slate-300 text-sm px-4 py-2 rounded-full"
                >
                  <svg
                    className="w-3 h-3 text-amber-400"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  {city}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
