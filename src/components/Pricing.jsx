"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Check, Crown, ArrowRight, Sparkles } from "lucide-react";

const plans = [
  {
    name: "Basic",
    tagline: "Essential Access",
    price: "1,499",
    features: ["Full Gym Access", "Cardio Zone", "Strength Area", "Locker Facility", "Free Wi-Fi"],
    popular: false,
  },
  {
    name: "Pro",
    tagline: "Most Popular",
    price: "2,499",
    features: ["Everything in Basic", "Functional Training", "Diet Guidance", "Group Classes", "Steam Room Access", "Progress Tracking"],
    popular: true,
  },
  {
    name: "Elite",
    tagline: "Premium Experience",
    price: "4,999",
    features: ["Everything in Pro", "Personal Trainer", "Customized Fitness Plan", "Rehab Programs", "Priority Booking", "Monthly Body Analysis", "Premium Locker"],
    popular: false,
  },
];

export default function Pricing() {
  const ref = useRef(null);
  const inview = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="pricing" ref={ref} className="py-20 lg:py-[120px] bg-dark">
      <div className="container-premium">
        <div className="text-center mb-16">
          <div className="label-pill mx-auto w-fit">
            <div className="dot" />
            <span>Membership Plans</span>
          </div>
          <h2 className="section-title">
            Choose Your <span className="gradient-text">Fitness Plan</span>
          </h2>
          <p className="section-desc mx-auto text-center">
            Flexible plans designed to fit your goals and budget.
          </p>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8 lg:gap-10 max-w-6xl mx-auto items-start">
          {plans.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 28 }}
              animate={inview ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.45, delay: i * 0.1 }}
              className={`relative rounded-2xl transition-all duration-300 ${
                p.popular
                  ? "bg-gradient-to-b from-white/[0.06] to-dark-200 border border-white/[0.08] shadow-xl shadow-black/20 xl:scale-[1.03] xl:-my-2"
                  : "glass hover:bg-white/[0.04]"
              }`}
            >
              {p.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-purple to-purple-dark text-white text-xs font-bold px-5 py-1.5 rounded-full flex items-center gap-1.5 shadow-lg shadow-purple/20">
                  <Sparkles className="w-3.5 h-3.5" />
                  Most Popular
                </div>
              )}

              <div className="p-10 lg:p-12">
                <div className="text-xs font-medium text-purple-light uppercase tracking-[0.15em] mb-1.5">
                  {p.tagline}
                </div>
                <h3 className="text-2xl font-display font-bold text-white mb-6">{p.name}</h3>

                <div className="flex items-baseline gap-1 mb-10">
                  <span className="text-lg text-zinc-500 font-medium">₹</span>
                  <span className="text-6xl lg:text-7xl font-display font-bold text-white tracking-tight">{p.price}</span>
                  <span className="text-base text-zinc-500">/mo</span>
                </div>

                <ul className="space-y-4 mb-10">
                  {p.features.map((f, j) => (
                    <li key={j} className="flex items-center gap-3">
                      <div className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 ${
                        p.popular ? "bg-purple/15" : "bg-white/5"
                      }`}>
                        <Check className={`w-3 h-3 ${p.popular ? "text-purple-light" : "text-zinc-500"}`} />
                      </div>
                      <span className="text-sm text-zinc-400">{f}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="https://wa.me/919667949344?text=Hi!%20I%20want%20to%20join%20ALL%20FIT%20GYM"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full ${p.popular ? "btn-primary" : "btn-outline"} !w-full text-center`}
                >
                  Get Started
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
