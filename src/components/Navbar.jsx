"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Dumbbell } from "lucide-react";

const links = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Facilities", href: "#facilities" },
  { name: "Trainers", href: "#trainers" },
  { name: "Membership", href: "#pricing" },
  { name: "Reviews", href: "#testimonials" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });

    const sections = links.map((l) => document.getElementById(l.href.slice(1))).filter(Boolean);
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        }
      },
      { rootMargin: "-50% 0px -50% 0px" }
    );
    sections.forEach((s) => observer.observe(s));

    return () => {
      window.removeEventListener("scroll", onScroll);
      sections.forEach((s) => observer.unobserve(s));
    };
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 flex items-center transition-all duration-300 ${
        scrolled ? "h-18" : "h-[88px]"
      }`}
      style={{ background: "rgba(10,10,10,0.75)", backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)", borderBottom: "1px solid rgba(255,255,255,0.08)" }}
    >
      <div className="max-w-7xl mx-auto px-8 lg:px-12 flex items-center justify-between w-full">
        <a href="#home" className="flex items-center gap-3 shrink-0 group">
          <div className={`rounded-2xl bg-white/[0.06] backdrop-blur-xl border border-white/[0.08] flex items-center justify-center transition-all duration-300 ${
            scrolled ? "w-11 h-11" : "w-12 h-12"
          }`}>
            <Dumbbell className={`text-white transition-all duration-300 ${
              scrolled ? "w-5 h-5" : "w-[22px] h-[22px]"
            }`} />
          </div>
          <span className={`font-display font-bold tracking-tight text-white transition-all duration-300 ${
            scrolled ? "text-lg" : "text-xl"
          }`}>
            ALL FIT <span className="gradient-text">GYM</span>
          </span>
        </a>

        <div className="hidden lg:flex items-center justify-center flex-1 px-12">
          {links.map((l) => {
            const isActive = active === l.href.slice(1);
            return (
              <a
                key={l.name}
                href={l.href}
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector(l.href)?.scrollIntoView({ behavior: "smooth" });
                  setActive(l.href.slice(1));
                }}
                className="relative px-5 py-2 text-[15px] font-medium transition-all duration-300 group/link"
                style={{ color: isActive ? "white" : "rgba(255,255,255,0.75)" }}
              >
                {l.name}
                <span
                  className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-[2px] rounded-full transition-all duration-300 ${
                    isActive ? "w-5 bg-purple" : "w-0 bg-white/40 group-hover/link:w-5"
                  }`}
                />
              </a>
            );
          })}
        </div>

        <div className="hidden lg:flex items-center shrink-0">
          <a
            href="#pricing"
            className="inline-flex items-center justify-center gap-2 font-semibold text-sm text-white rounded-xl transition-all duration-300 hover:scale-[1.03] hover:shadow-lg hover:shadow-purple/25"
            style={{
              height: "48px",
              padding: "0 32px",
              background: "linear-gradient(135deg, #7C3AED, #A855F7)",
              borderRadius: "14px",
            }}
          >
            Book Free Trial
          </a>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden p-2 text-zinc-400 hover:text-white transition-colors"
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="fixed left-0 right-0 lg:hidden overflow-hidden"
            style={{ top: scrolled ? "72px" : "88px", background: "rgba(10,10,10,0.95)", backdropFilter: "blur(16px)", WebkitBackdropFilter: "blur(16px)", borderBottom: "1px solid rgba(255,255,255,0.08)" }}
          >
            <div className="max-w-7xl mx-auto px-8 lg:px-12 py-6 space-y-1">
              {links.map((l) => {
                const isActive = active === l.href.slice(1);
                return (
                  <a
                    key={l.name}
                    href={l.href}
                    onClick={() => {
                      setOpen(false);
                      setActive(l.href.slice(1));
                    }}
                    className="block px-4 py-3.5 text-sm font-medium rounded-xl transition-all"
                    style={{ color: isActive ? "white" : "rgba(255,255,255,0.6)", background: isActive ? "rgba(124,58,237,0.1)" : "transparent" }}
                  >
                    {l.name}
                  </a>
                );
              })}
              <a
                href="#pricing"
                onClick={() => setOpen(false)}
                className="block text-center font-semibold text-sm text-white rounded-xl mt-5 py-3.5"
                style={{ background: "linear-gradient(135deg, #7C3AED, #A855F7)" }}
              >
                Book Free Trial
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
