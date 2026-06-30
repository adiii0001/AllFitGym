"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, TrendingDown, TrendingUp, Clock, Target } from "lucide-react";

const transformations = [
  { name: "Rahul M.", goal: "Weight Loss", result: "Lost 15 kg", timeline: "12 Weeks", before: "Struggled with obesity and low confidence. Unhealthy lifestyle with no workout routine.", after: "Completely transformed physique with visible muscle definition and improved stamina.", img: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=600&q=85", change: "-15 kg", type: "loss" },
  { name: "Sneha K.", goal: "Lean Muscle", result: "Gained 5 kg Lean Mass", timeline: "8 Weeks", before: "Struggled with low muscle mass and inconsistent training routine.", after: "Achieved 5 kg lean muscle gain with improved strength and energy levels.", img: "https://images.unsplash.com/photo-1548690312-e3b507d8c110?w=600&q=85", change: "+5 kg", type: "gain" },
  { name: "Vikram S.", goal: "Weight Loss", result: "Lost 20 kg", timeline: "16 Weeks", before: "Faced obesity and related health issues with low confidence.", after: "Lost 20 kg, reversed health markers, and gained a new lease on life.", img: "https://images.unsplash.com/photo-1567013127542-490d757e51fc?w=600&q=85", change: "-20 kg", type: "loss" },
  { name: "Ananya R.", goal: "Recomposition", result: "Body Recomposition", timeline: "10 Weeks", before: "Post-pregnancy weight and muscle loss with low energy levels.", after: "Full body recomposition with improved strength, posture, and daily energy.", img: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=600&q=85", change: "Recomp", type: "gain" },
];

export default function Transformations() {
  const ref = useRef(null);
  const inview = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="transformations" ref={ref} className="py-20 lg:py-[120px] bg-dark-100">
      <div className="container-premium">
        <div className="text-center mb-16">
          <div className="label-pill mx-auto w-fit">
            <div className="dot" />
            <span>Results</span>
          </div>
          <h2 className="section-title">
            Real Results. <span className="gradient-text">Real Transformations.</span>
          </h2>
          <p className="section-desc mx-auto text-center">
            See the incredible transformations our members have achieved with dedication and expert guidance.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          {transformations.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              animate={inview ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              className="group glass rounded-2xl overflow-hidden transition-all duration-500 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/20"
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <img
                  src={t.img}
                  alt={t.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark/90 via-dark/20 to-transparent" />

                <div className="absolute top-4 left-4 glass rounded-lg px-3 py-1.5">
                  <span className="text-xs font-medium text-purple-light">{t.goal}</span>
                </div>

                <div className={`absolute top-4 right-4 rounded-lg px-3 py-1.5 flex items-center gap-1.5 ${
                  t.type === "loss" ? "bg-emerald-500/20 text-emerald-400" : "bg-purple/20 text-purple-light"
                }`}>
                  {t.type === "loss" ? <TrendingDown className="w-3.5 h-3.5" /> : <TrendingUp className="w-3.5 h-3.5" />}
                  <span className="text-xs font-bold">{t.change}</span>
                </div>
              </div>

              <div className="p-6 lg:p-7">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-base font-display font-bold text-white">{t.name}</h3>
                  <div className="flex items-center gap-1.5 text-xs text-zinc-500">
                    <Clock className="w-3.5 h-3.5" />
                    {t.timeline}
                  </div>
                </div>

                <div className="space-y-2 mb-4">
                  <div className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-1.5 shrink-0" />
                    <p className="text-xs text-zinc-500 leading-relaxed">{t.before}</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-1.5 shrink-0" />
                    <p className="text-xs text-zinc-500 leading-relaxed">{t.after}</p>
                  </div>
                </div>

                <div className="flex items-center gap-2 pt-3 border-t border-white/[0.04]">
                  <Target className="w-3.5 h-3.5 text-purple-light/60" />
                  <span className="text-xs font-medium text-purple-light/60">{t.result}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inview ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-14"
        >
          <a href="#pricing" className="btn-primary">
            Start Your Transformation
            <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
