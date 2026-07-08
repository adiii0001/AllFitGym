"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { CheckCircle, Flame, Target, HeartPulse, TrendingUp, Dumbbell } from "lucide-react";

const features = [
  { icon: Dumbbell, label: "Personal Training" },
  { icon: Flame, label: "Strength Training" },
  { icon: Target, label: "Functional Training" },
  { icon: HeartPulse, label: "Rehab Programs" },
  { icon: TrendingUp, label: "Weight Loss Programs" },
  { icon: CheckCircle, label: "Muscle Building Programs" },
];

export default function About() {
  const ref = useRef(null);
  const inview = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="about"
      ref={ref}
      className="bg-dark-100"
      style={{
        paddingTop: "clamp(80px, 8vw, 120px)",
        paddingBottom: "clamp(80px, 8vw, 120px)"
      }}
    >
      <div className="premium-container">
        <div className="grid min-w-0 gap-12 lg:grid-cols-2 lg:gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            animate={inview ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="section-label" style={{ marginBottom: "clamp(12px, 1.5vw, 20px)" }}>
              <div className="dot" />
              <span>About Us</span>
            </div>

            <h2 className="section-heading" style={{ marginBottom: "clamp(16px, 2vw, 24px)" }}>
              Why <span className="gradient-text">ALL FIT GYM</span>?
            </h2>

            <p className="section-subtext max-w-[460px]" style={{ marginBottom: "clamp(30px, 4vw, 48px)" }}>
              ALL FIT GYM is one of the highest-rated fitness centers in Gurgaon.
              Known for its clean environment, premium equipment, certified trainers,
              and motivating community, we help members achieve real fitness
              transformations.
            </p>

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {features.map((f, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 12 }}
                  animate={inview ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.3, delay: 0.15 + i * 0.05 }}
                  className="flex min-w-0 items-center gap-3 rounded-xl px-4 py-3.5 transition-all duration-200 hover:bg-white/[0.03] glass"
                >
                  <div className="w-8 h-8 rounded-lg bg-purple/10 flex items-center justify-center shrink-0">
                    <f.icon className="w-3.5 h-3.5 text-purple" />
                  </div>
                  <span className="min-w-0 text-sm font-medium leading-snug text-text-secondary">{f.label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 32 }}
            animate={inview ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative min-w-0"
          >
            <div className="relative rounded-3xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&q=85"
                alt=""
                className="w-full aspect-[4/5] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark/60 via-transparent to-transparent" />
            </div>

            <div className="absolute bottom-3 left-3 flex max-w-[calc(100%-1.5rem)] items-center gap-3 rounded-2xl px-3 py-3 shadow-xl shadow-black/30 sm:bottom-6 sm:left-6 sm:px-5 sm:py-4 glass">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple to-purple-dark flex items-center justify-center">
                <Flame className="w-5 h-5 text-white" />
              </div>
              <div className="min-w-0">
                <div className="text-lg font-display font-bold text-white">1000+</div>
                <div className="text-[0.7rem] text-text-muted">Members Transformed</div>
              </div>
            </div>

            <div className="absolute right-3 top-3 flex max-w-[calc(100%-1.5rem)] items-center gap-3 rounded-2xl px-3 py-3 shadow-xl shadow-black/30 sm:right-6 sm:top-6 sm:px-5 sm:py-4 glass">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-gold to-amber-500 flex items-center justify-center">
                <Target className="w-5 h-5 text-dark" />
              </div>
              <div className="min-w-0">
                <div className="text-lg font-display font-bold text-white">10+</div>
                <div className="text-[0.7rem] text-text-muted">Years Experience</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
