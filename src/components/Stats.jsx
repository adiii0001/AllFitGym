"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Star, Users, Cog, Award } from "lucide-react";

const items = [
  { icon: Star, value: "4.9", label: "Google Rating", desc: "Consistently top-rated gym in Gurgaon", c: "text-amber-400", bg: "bg-amber-400/10" },
  { icon: Users, value: "146+", label: "Positive Reviews", desc: "Members who love their transformation", c: "text-purple-light", bg: "bg-purple/10" },
  { icon: Cog, value: "50+", label: "Modern Equipment", desc: "Latest machines and free weights", c: "text-purple-300", bg: "bg-purple-400/10" },
  { icon: Award, value: "10+", label: "Certified Trainers", desc: "Professional and experienced coaches", c: "text-emerald-400", bg: "bg-emerald-400/10" },
];

export default function Stats() {
  const ref = useRef(null);
  const inview = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="py-20 lg:py-[120px] bg-dark-100">
      <div className="container-premium">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              animate={inview ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              className="glass glass-hover rounded-2xl p-10 lg:p-12 text-center transition-all duration-300"
            >
              <div className={`w-14 h-14 rounded-2xl ${item.bg} flex items-center justify-center mx-auto mb-6`}>
                <item.icon className={`w-6 h-6 ${item.c}`} />
              </div>
              <div className="text-3xl lg:text-4xl font-display font-bold text-white mb-1">
                {item.value}
              </div>
              <div className="text-sm font-semibold text-zinc-300 mb-1.5">{item.label}</div>
              <div className="text-xs text-zinc-500 leading-relaxed">{item.desc}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
