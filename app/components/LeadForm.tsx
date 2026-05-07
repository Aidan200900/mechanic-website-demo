"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";

interface LeadFormData {
  name: string;
  phone: string;
  email: string;
  serviceType: string;
  message?: string;
}

const serviceOptions = [
  "Residential Wiring",
  "Panel Upgrade",
  "EV Charging Station",
  "Emergency Service",
  "Commercial Electrical",
  "Lighting & Fixtures",
  "Other",
];

const inputClass =
  "w-full bg-slate-700 border border-slate-600 text-white placeholder-slate-400 rounded-lg px-4 py-3 focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 transition-colors text-sm";

const errorClass = "text-red-400 text-xs mt-1";

export default function LeadForm() {
  const [submitting, setSubmitting] = useState(false);
  const [submitResult, setSubmitResult] = useState<"idle" | "success" | "error">("idle");
  const [submittedName, setSubmittedName] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LeadFormData>();

  const onSubmit = async (data: LeadFormData) => {
    setSubmitting(true);
    setSubmittedName(data.name.split(" ")[0]);
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json();
      setSubmitResult(json.success ? "success" : "error");
    } catch {
      setSubmitResult("error");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="bg-slate-900 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section heading */}
        <div className="text-center mb-16">
          <p className="text-amber-400 font-semibold text-sm uppercase tracking-widest mb-3">
            Free Quote
          </p>
          <h2 className="text-4xl sm:text-5xl font-display text-white mb-4">
            Get Your Free Estimate
          </h2>
          <div className="w-16 h-1 bg-amber-400 mx-auto rounded-full" />
          <p className="text-slate-400 mt-6 max-w-xl mx-auto">
            Fill out the form and we&apos;ll contact you within 2 hours to
            discuss your project.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Trust column */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-white">
              Why Request a Quote?
            </h3>
            <ul className="space-y-4">
              {[
                "100% free, no-obligation estimate",
                "Response within 2 hours during business hours",
                "Emergency requests answered within 30 minutes",
                "Fixed-price quotes — no hidden fees",
                "Work guaranteed for 1 year",
                "Financing available on jobs over $500",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <svg
                    className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-slate-300 text-sm">{item}</span>
                </li>
              ))}
            </ul>

            {/* Emergency CTA */}
            <div className="bg-red-900/30 border border-red-700/50 rounded-xl p-5 mt-4">
              <p className="text-red-300 font-semibold mb-1">
                🚨 Electrical Emergency?
              </p>
              <p className="text-red-400/80 text-sm mb-3">
                Don&apos;t fill out the form — call us directly for immediate
                response.
              </p>
              <a
                href="tel:+15551234567"
                className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-bold px-5 py-2.5 rounded-full text-sm transition-colors"
              >
                Call Now — (555) 123-4567
              </a>
            </div>
          </div>

          {/* Form card */}
          <div className="bg-slate-800 border border-slate-700 rounded-2xl p-8">
            {submitResult === "success" ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-green-500/20 border border-green-500/30 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-8 h-8 text-green-400"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">
                  Thanks, {submittedName}!
                </h3>
                <p className="text-slate-300 text-sm">
                  Your request is in. We&apos;ll call or text you within{" "}
                  <strong className="text-amber-400">2 hours</strong> to discuss
                  your project.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5">
                {submitResult === "error" && (
                  <div className="bg-red-900/30 border border-red-700/50 text-red-300 rounded-lg px-4 py-3 text-sm">
                    Something went wrong. Please{" "}
                    <a href="tel:+15551234567" className="underline font-semibold">
                      call us directly
                    </a>{" "}
                    at (555) 123-4567.
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-slate-300 text-sm font-medium mb-1.5">
                      Full Name <span className="text-amber-400">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="John Smith"
                      className={inputClass}
                      {...register("name", { required: "Name is required" })}
                    />
                    {errors.name && <p className={errorClass}>{errors.name.message}</p>}
                  </div>
                  <div>
                    <label className="block text-slate-300 text-sm font-medium mb-1.5">
                      Phone Number <span className="text-amber-400">*</span>
                    </label>
                    <input
                      type="tel"
                      placeholder="(555) 000-0000"
                      className={inputClass}
                      {...register("phone", {
                        required: "Phone is required",
                        pattern: {
                          value: /^[\d\s\-()+]+$/,
                          message: "Enter a valid phone number",
                        },
                      })}
                    />
                    {errors.phone && <p className={errorClass}>{errors.phone.message}</p>}
                  </div>
                </div>

                <div>
                  <label className="block text-slate-300 text-sm font-medium mb-1.5">
                    Email Address <span className="text-amber-400">*</span>
                  </label>
                  <input
                    type="email"
                    placeholder="john@example.com"
                    className={inputClass}
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                        message: "Enter a valid email address",
                      },
                    })}
                  />
                  {errors.email && <p className={errorClass}>{errors.email.message}</p>}
                </div>

                <div>
                  <label className="block text-slate-300 text-sm font-medium mb-1.5">
                    Service Type <span className="text-amber-400">*</span>
                  </label>
                  <select
                    className={`${inputClass} cursor-pointer`}
                    {...register("serviceType", { required: "Please select a service" })}
                  >
                    <option value="">Select a service...</option>
                    {serviceOptions.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                  {errors.serviceType && (
                    <p className={errorClass}>{errors.serviceType.message}</p>
                  )}
                </div>

                <div>
                  <label className="block text-slate-300 text-sm font-medium mb-1.5">
                    Describe Your Project{" "}
                    <span className="text-slate-500">(optional)</span>
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Tell us about your electrical project or issue..."
                    className={`${inputClass} resize-none`}
                    {...register("message")}
                  />
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full bg-amber-400 hover:bg-amber-500 disabled:bg-amber-400/50 text-slate-900 font-bold py-4 rounded-xl text-base transition-all duration-200 flex items-center justify-center gap-2 shadow-glow-amber hover:shadow-glow-amber-lg"
                >
                  {submitting ? (
                    <>
                      <svg className="w-5 h-5 animate-spin" viewBox="0 0 24 24" fill="none">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send My Free Quote Request
                      <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </>
                  )}
                </button>

                <p className="text-slate-500 text-xs text-center">
                  By submitting, you agree to be contacted by VoltPro Electric. We never spam.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
