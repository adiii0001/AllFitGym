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
    <section id="about" ref={ref} className="py-20 lg:py-[120px] bg-dark">
      <div className="container-premium">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            animate={inview ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="label-pill">
              <div className="dot" />
              <span>About Us</span>
            </div>

            <h2 className="section-title">
              Why <span className="gradient-text">ALL FIT GYM</span>?
            </h2>

            <p className="section-desc mb-10 max-w-[460px]">
              ALL FIT GYM is one of the highest-rated fitness centers in Gurgaon.
              Known for its clean environment, premium equipment, certified trainers,
              and motivating community, we help members achieve real fitness
              transformations.
            </p>

            <div className="grid grid-cols-2 gap-4">
              {features.map((f, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 12 }}
                  animate={inview ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.3, delay: 0.15 + i * 0.05 }}
                  className="flex items-center gap-3 glass rounded-xl px-5 py-4 transition-all duration-200 hover:bg-white/[0.04]"
                >
                  <div className="w-9 h-9 rounded-lg bg-purple/10 flex items-center justify-center shrink-0">
                    <f.icon className="w-4 h-4 text-purple-light" />
                  </div>
                  <span className="text-sm font-medium text-zinc-300">{f.label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 32 }}
            animate={inview ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden w-[70%] mx-auto lg:mx-0 lg:ml-auto">
              <img
                src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&q=85"
                alt=""
                className="w-full aspect-[4/5] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark/60 via-transparent to-transparent" />
            </div>

            <div className="absolute bottom-6 left-4 lg:left-6 glass rounded-2xl px-5 py-4 flex items-center gap-3 animate-float shadow-xl shadow-black/20">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple to-purple-dark flex items-center justify-center">
                <Flame className="w-5 h-5 text-white" />
              </div>
              <div>
                <div className="text-lg font-display font-bold text-white">1000+</div>
                <div className="text-[0.7rem] text-zinc-400">Members Transformed</div>
              </div>
            </div>

            <div className="absolute top-6 right-4 lg:right-4 glass rounded-2xl px-5 py-4 flex items-center gap-3 animate-float shadow-xl shadow-black/20" style={{ animationDelay: "2.5s" }}>
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-400 to-amber-500 flex items-center justify-center">
                <Target className="w-5 h-5 text-dark" />
              </div>
              <div>
                <div className="text-lg font-display font-bold text-white">10+</div>
                <div className="text-[0.7rem] text-zinc-400">Years Experience</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
