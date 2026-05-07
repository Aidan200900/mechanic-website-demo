const serviceLinks = [
  { label: "Residential Wiring", href: "#services" },
  { label: "Panel Upgrades", href: "#services" },
  { label: "EV Charging", href: "#services" },
  { label: "Emergency Service", href: "#services" },
  { label: "Commercial", href: "#services" },
  { label: "Lighting", href: "#services" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand column */}
          <div>
            <a href="#" className="flex items-center gap-2 mb-4">
              <svg className="w-7 h-7 text-amber-400" viewBox="0 0 24 24" fill="currentColor">
                <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
              </svg>
              <span className="font-display text-lg text-white">
                Volt<span className="text-amber-400">Pro</span> Electric
              </span>
            </a>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              Austin&apos;s trusted licensed electricians for residential,
              commercial, and emergency electrical services.
            </p>
            <div className="flex gap-3">
              {/* Google Reviews */}
              <a
                href="#"
                aria-label="Google Reviews"
                className="w-9 h-9 bg-slate-800 hover:bg-amber-400 hover:text-slate-900 text-slate-400 rounded-full flex items-center justify-center transition-colors"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12.545 10.239v3.821h5.445c-.712 2.315-2.647 3.972-5.445 3.972a6.033 6.033 0 110-12.064 5.963 5.963 0 014.123 1.632l2.914-2.914A9.969 9.969 0 0012.545 2C7.021 2 2.543 6.477 2.543 12s4.478 10 10.002 10c8.396 0 10.249-7.85 9.426-11.748l-9.426-.013z" />
                </svg>
              </a>
              {/* Facebook */}
              <a
                href="#"
                aria-label="Facebook"
                className="w-9 h-9 bg-slate-800 hover:bg-amber-400 hover:text-slate-900 text-slate-400 rounded-full flex items-center justify-center transition-colors"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Services column */}
          <div>
            <h4 className="text-white font-bold mb-5 text-sm uppercase tracking-wider">
              Services
            </h4>
            <ul className="space-y-3">
              {serviceLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-slate-400 hover:text-amber-400 text-sm transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact column */}
          <div>
            <h4 className="text-white font-bold mb-5 text-sm uppercase tracking-wider">
              Contact
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <svg className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z" />
                </svg>
                <a href="tel:+15551234567" className="text-slate-400 hover:text-amber-400 text-sm transition-colors">
                  (555) 123-4567
                </a>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                </svg>
                <a href="mailto:info@voltproelectric.com" className="text-slate-400 hover:text-amber-400 text-sm transition-colors">
                  info@voltproelectric.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                </svg>
                <span className="text-slate-400 text-sm">
                  Austin, TX 78701
                </span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2a10 10 0 100 20A10 10 0 0012 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" />
                </svg>
                <span className="text-slate-400 text-sm">
                  TX Lic. #ELEC-00123456
                </span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z" />
                </svg>
                <span className="text-slate-400 text-sm">
                  Mon–Fri 7am–7pm<br />
                  Sat 8am–5pm<br />
                  <span className="text-amber-400 font-medium">24/7 Emergency</span>
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-slate-800 py-5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-slate-500 text-xs">
            © {year} VoltPro Electric. All rights reserved.
          </p>
          <p className="text-slate-600 text-xs">
            Serving Greater Austin Since 2014
          </p>
        </div>
      </div>
    </footer>
  );
}
