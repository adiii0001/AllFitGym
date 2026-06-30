"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Dumbbell, Zap, Target, UserCheck, HeartPulse, Lock } from "lucide-react";

const facilities = [
  { icon: Dumbbell, title: "Strength Zone", desc: "Premium free weights, barbells, and strength machines for serious lifters.", img: "https://images.unsplash.com/photo-1534367610401-9f5ed68180aa?w=800&q=85" },
  { icon: Zap, title: "Cardio Zone", desc: "Latest treadmills, ellipticals, bikes and rowing machines with personal entertainment.", img: "https://images.unsplash.com/photo-1576678927484-cc907957088c?w=800&q=85" },
  { icon: Target, title: "Functional Training", desc: "Dedicated space with kettlebells, TRX, battle ropes and agility equipment.", img: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=800&q=85" },
  { icon: UserCheck, title: "Personal Training", desc: "One-on-one sessions with certified trainers tailored to your specific goals.", img: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&q=85" },
  { icon: HeartPulse, title: "Rehabilitation", desc: "Specialized recovery and rehab programs supervised by experienced experts.", img: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&q=85" },
  { icon: Lock, title: "Locker Facilities", desc: "Secure lockers, clean changing rooms and premium shower facilities.", img: "https://images.unsplash.com/photo-1593079831268-3381b0db4a77?w=800&q=85" },
];

export default function Facilities() {
  const ref = useRef(null);
  const inview = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="facilities" ref={ref} className="py-20 lg:py-[120px] bg-dark-100">
      <div className="container-premium">
        <div className="text-center mb-16">
          <div className="label-pill mx-auto w-fit">
            <div className="dot" />
            <span>Our Facilities</span>
          </div>
          <h2 className="section-title">
            World-Class <span className="gradient-text">Facilities</span>
          </h2>
          <p className="section-desc mx-auto text-center">
            Everything you need for a complete fitness experience, under one roof.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {facilities.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              animate={inview ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              className="group glass rounded-2xl overflow-hidden transition-all duration-500 hover:bg-white/[0.04] hover:-translate-y-1 hover:shadow-xl hover:shadow-black/20"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={f.img}
                  alt={f.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-dark/20 to-transparent" />
                <div className="absolute bottom-4 left-4 w-11 h-11 rounded-xl bg-gradient-to-br from-purple to-purple-dark flex items-center justify-center shadow-lg shadow-purple/20">
                  <f.icon className="w-5 h-5 text-white" />
                </div>
              </div>
              <div className="p-7 lg:p-8">
                <h3 className="text-lg font-display font-bold text-white mb-2 group-hover:text-purple-light transition-colors">
                  {f.title}
                </h3>
                <p className="text-sm text-zinc-500 leading-relaxed">{f.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
