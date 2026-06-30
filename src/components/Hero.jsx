"use client";
import { motion } from "framer-motion";
import { Star, ArrowRight, Play } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-20 overflow-hidden"
    >
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1920&q=85"
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-dark/95 via-dark/85 to-dark" />
        <div className="absolute inset-0 bg-gradient-to-r from-purple/[0.06] to-transparent" />
      </div>

      <div className="absolute top-1/4 left-[5%] w-[500px] h-[500px] bg-purple/10 rounded-full blur-[200px]" />
      <div className="absolute bottom-1/4 right-[5%] w-[600px] h-[600px] bg-purple-dark/[0.06] rounded-full blur-[220px]" />

      <div className="relative z-10 container-premium pb-20">
        <div className="max-w-[650px]">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 mb-12"
          >
            <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
            <span className="text-xs font-medium text-zinc-300">
              4.9 Rated Gym in Gurgaon &bull; 146+ Reviews
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-[clamp(3rem,6vw,5.5rem)] font-black leading-[0.93] tracking-[-0.03em] mb-10"
          >
            <span className="text-white block">Transform</span>
            <span className="text-white block">Your Body.</span>
            <span className="gradient-text block">Transform Your Life.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg text-zinc-400 max-w-[520px] mb-14 leading-relaxed"
          >
            Gurgaon&apos;s Premium Fitness Destination with Expert Trainers,
            Modern Equipment, Personal Training &amp; Rehab Programs.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 mb-24"
          >
            <a href="#pricing" className="btn-primary !py-4 !px-8 text-sm">
              Book Free Trial
              <ArrowRight className="w-4 h-4" />
            </a>
            <a href="#pricing" className="btn-outline !py-4 !px-8 text-sm">
              <Play className="w-4 h-4" />
              View Membership Plans
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="grid grid-cols-2 sm:grid-cols-4 gap-4"
          >
            {[
              { icon: Star, value: "4.9", label: "Star Rating", color: "text-amber-400" },
              { icon: Star, value: "146+", label: "Google Reviews", color: "text-purple-light" },
              { icon: Star, value: "50+", label: "Modern Machines", color: "text-purple-300" },
              { icon: Star, value: "1000+", label: "Members", color: "text-zinc-300" },
            ].map((s, i) => (
              <div
                key={i}
                className="glass glass-hover rounded-2xl px-6 py-6 transition-all duration-300"
              >
                <s.icon className={`w-5 h-5 ${s.color} mb-3`} />
                <div className="text-xl font-display font-bold text-white">{s.value}</div>
                <div className="text-[0.7rem] text-zinc-500 mt-0.5">{s.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-5 h-8 rounded-full border border-white/10 flex items-start justify-center pt-1.5"
        >
          <div className="w-1 h-1.5 rounded-full bg-purple-light/40" />
        </motion.div>
      </div>
    </section>
  );
}
