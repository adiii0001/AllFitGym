"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Award, Clock, Star, MapPin } from "lucide-react";

const trainers = [
  {
    name: "Rajesh Kumar",
    spec: "Strength & Conditioning",
    exp: "8+ Years Experience",
    bio: "Expert in powerlifting, bodybuilding, and strength programming for all levels. Certified NSCA-CPT with a track record of 200+ success stories.",
    img: "https://images.unsplash.com/photo-1567013127542-490d757e51fc?w=600&q=85",
    cert: "NSCA-CPT",
    rating: 4.9,
  },
  {
    name: "Priya Sharma",
    spec: "Weight Loss & Functional",
    exp: "6+ Years Experience",
    bio: "Specializes in functional training, weight management, and women's fitness. ACE-CPT certified with expertise in nutrition counseling.",
    img: "https://images.unsplash.com/photo-1548690312-e3b507d8c110?w=600&q=85",
    cert: "ACE-CPT",
    rating: 4.8,
  },
  {
    name: "Amit Patel",
    spec: "Rehab & Recovery",
    exp: "10+ Years Experience",
    bio: "Clinical exercise specialist focusing on injury recovery and pain management. NASM-CES certified with a holistic approach to fitness.",
    img: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=600&q=85",
    cert: "NASM-CES",
    rating: 4.9,
  },
  {
    name: "Neha Gupta",
    spec: "Yoga & Flexibility",
    exp: "7+ Years Experience",
    bio: "Certified yoga instructor specializing in flexibility, mobility, and mindful training. RYT-500 certified with expertise in therapeutic yoga.",
    img: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=600&q=85",
    cert: "RYT-500",
    rating: 4.7,
  },
];

export default function Trainers() {
  const ref = useRef(null);
  const inview = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="trainers" ref={ref} className="py-20 lg:py-[120px] bg-dark">
      <div className="container-premium">
        <div className="text-center mb-16">
          <div className="label-pill mx-auto w-fit">
            <div className="dot" />
            <span>Our Team</span>
          </div>
          <h2 className="section-title">
            Meet Our <span className="gradient-text">Expert Trainers</span>
          </h2>
          <p className="section-desc mx-auto text-center">
            Certified professionals dedicated to helping you reach your fitness goals.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          {trainers.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              animate={inview ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              className="group relative rounded-2xl overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-black/30"
            >
              <div className="relative aspect-[3/4] overflow-hidden">
                <img
                  src={t.img}
                  alt={t.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark/90 via-dark/30 to-transparent" />

                <div className="absolute top-4 right-4 bg-white/10 backdrop-blur-xl rounded-lg px-3 py-1.5 flex items-center gap-1.5 text-xs border border-white/10">
                  <Star className="w-3 h-3 text-amber-400 fill-amber-400" />
                  <span className="font-medium text-zinc-200">{t.rating}</span>
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-dark/95 via-dark/60 to-transparent">
                  <h3 className="text-lg font-display font-bold text-white mb-1">{t.name}</h3>
                  <div className="flex items-center gap-1.5 mb-1">
                    <MapPin className="w-3.5 h-3.5 text-purple-light/60" />
                    <span className="text-xs text-zinc-400">{t.spec}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Award className="w-3.5 h-3.5 text-purple-light/60" />
                    <span className="text-xs text-purple-light font-medium">{t.cert}</span>
                  </div>
                </div>
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-dark via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="bg-white/5 backdrop-blur-2xl rounded-xl p-5 border border-white/10">
                    <div className="flex items-center gap-2 mb-3">
                      <Clock className="w-3.5 h-3.5 text-purple-light" />
                      <span className="text-xs text-zinc-300">{t.exp}</span>
                    </div>
                    <p className="text-xs text-zinc-400 leading-relaxed">{t.bio}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
