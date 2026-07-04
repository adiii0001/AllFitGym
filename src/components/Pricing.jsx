"use client";
import { AnimatePresence, motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Check, Crown, ArrowRight, X } from "lucide-react";

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
  const [selectedPlan, setSelectedPlan] = useState(null);

  useEffect(() => {
    if (!selectedPlan) return undefined;
    const handleKeyDown = (event) => {
      if (event.key === "Escape") setSelectedPlan(null);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedPlan]);

  return (
    <section id="pricing" ref={ref} className="py-24 lg:py-[120px] bg-dark-100">
      <div className="premium-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inview ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="section-label mx-auto w-fit">
            <div className="dot" />
            <span>Membership Plans</span>
          </div>
          <h2 className="section-heading">
            Choose Your <span className="gradient-text">Fitness Plan</span>
          </h2>
          <p
            className="section-subtext"
            style={{
              textAlign: "center",
              marginLeft: "auto",
              marginRight: "auto",
              display: "block",
              marginTop: "16px",
              marginBottom: "32px",
            }}
          >
            Flexible plans designed to fit your goals and budget.
          </p>
        </motion.div>

        <div
          className="flex w-full snap-x snap-mandatory items-stretch justify-start gap-6 overflow-x-auto pb-8 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden sm:gap-8 xl:justify-center"
          style={{ touchAction: "pan-x pan-y", paddingTop: "28px" }}
          onWheel={(event) => {
            if (Math.abs(event.deltaY) > Math.abs(event.deltaX)) {
              event.preventDefault();
              window.scrollBy({ top: event.deltaY, behavior: "auto" });
            }
          }}
        >
          {plans.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 28 }}
              animate={inview ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className={`relative w-[calc(100vw-4rem)] shrink-0 snap-center rounded-3xl transition-all duration-500 sm:w-[350px] ${
                p.popular
                  ? "bg-gradient-to-b from-dark-300 to-dark-200 border border-purple/[0.12] shadow-xl shadow-purple/[0.05] xl:scale-[1.03]"
                  : "glass hover:bg-white/[0.03]"
              }`}
              style={{ display: "flex", flexDirection: "column" }}
            >
              {p.popular && (
                <div
                  className="absolute left-1/2 -translate-x-1/2 bg-gradient-to-r from-purple to-purple-hover text-white text-xs font-bold rounded-full flex items-center gap-1.5 shadow-lg shadow-purple/20 whitespace-nowrap"
                  style={{
                    padding: "10px 24px",
                    top: "-20px",
                  }}
                >
                  <Crown className="w-3.5 h-3.5" />
                  Recommended
                </div>
              )}

              <div
                className="text-center flex-1 flex flex-col justify-between"
                style={{ padding: "48px 36px" }}
              >
                <div>
                  <div className="text-xs font-semibold text-purple uppercase tracking-[0.15em] mb-4">
                    {p.tagline}
                  </div>
                  <h3 className="text-2xl font-display font-bold text-white mb-7">{p.name}</h3>

                  <div className="flex items-baseline justify-center gap-1.5 mb-12">
                    <span className="text-lg text-text-muted font-medium">₹</span>
                    <span className="text-5xl lg:text-6xl font-display font-bold text-white tracking-tight">{p.price}</span>
                    <span className="text-base text-text-muted">/mo</span>
                  </div>

                </div>

                <div className="mt-auto" style={{ paddingTop: "36px" }}>
                  <button
                    type="button"
                    onClick={() => setSelectedPlan(p)}
                    className="inline-flex w-full items-center justify-center border border-purple/25 bg-purple/[0.07] text-sm font-semibold text-purple-hover transition-all hover:border-purple/50 hover:bg-purple/[0.12] hover:text-white"
                    style={{
                      padding: "14px 28px",
                      marginBottom: "14px",
                      borderRadius: "14px",
                    }}
                    aria-label={`Explore ${p.name} plan features`}
                  >
                    Explore Features
                  </button>
                  <a
                    href="https://wa.me/919667949344?text=Hi!%20I%20want%20to%20join%20ALL%20FIT%20GYM"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full text-center ${
                      p.popular ? "btn-premium !w-full" : "btn-outline-premium !w-full"
                    }`}
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      gap: "10px",
                      padding: "14px 28px",
                      borderRadius: "14px",
                    }}
                  >
                    Get Started
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedPlan && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/75 p-5 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onMouseDown={(event) => {
              if (event.target === event.currentTarget) setSelectedPlan(null);
            }}
            role="presentation"
          >
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-labelledby="plan-modal-title"
              initial={{ opacity: 0, scale: 0.94, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 12 }}
              transition={{ duration: 0.22, ease: "easeOut" }}
              className="relative w-full max-w-md overflow-hidden rounded-3xl border border-white/[0.1] bg-dark-200 shadow-2xl shadow-black/60"
            >
              <div
                className="border-b border-white/[0.07]"
                style={{ padding: "32px 36px 28px" }}
              >
                <button
                  type="button"
                  onClick={() => setSelectedPlan(null)}
                  className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full border border-white/[0.08] text-text-muted transition-colors hover:bg-white/[0.05] hover:text-white"
                  aria-label="Close plan details"
                >
                  <X className="h-4 w-4" />
                </button>
                <div
                  className="text-xs font-semibold uppercase tracking-[0.15em] text-purple"
                  style={{ paddingRight: "56px", marginBottom: "10px" }}
                >
                  {selectedPlan.tagline}
                </div>
                <h3 id="plan-modal-title" className="font-display text-3xl font-bold leading-tight text-white">
                  {selectedPlan.name} Plan
                </h3>
                <div className="flex items-baseline gap-1.5" style={{ marginTop: "18px" }}>
                  <span className="text-base text-text-muted">₹</span>
                  <span className="font-display text-4xl font-bold text-white">{selectedPlan.price}</span>
                  <span className="text-sm text-text-muted">/mo</span>
                </div>
              </div>

              <div style={{ padding: "28px 36px 36px" }}>
                <p className="text-sm font-semibold text-white" style={{ marginBottom: "22px" }}>Everything included</p>
                <ul style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
                  {selectedPlan.features.map((feature) => (
                    <li key={feature} className="flex items-start text-sm leading-6 text-text-secondary" style={{ gap: "14px" }}>
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-purple/15">
                        <Check className="h-3 w-3 text-purple" />
                      </span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="https://wa.me/919667949344?text=Hi!%20I%20want%20to%20join%20ALL%20FIT%20GYM"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-premium !w-full"
                  style={{ marginTop: "32px", padding: "15px 28px" }}
                >
                  Choose {selectedPlan.name}
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
