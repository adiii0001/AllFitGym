"use client";
import { Dumbbell, MapPin, Phone, Mail, ArrowRight, Globe } from "lucide-react";

const quickLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Facilities", href: "#facilities" },
  { name: "Trainers", href: "#trainers" },
  { name: "Plans", href: "#pricing" },
  { name: "Contact", href: "#contact" },
];

const socials = [
  { icon: Globe, href: "#", label: "Instagram" },
  { icon: Globe, href: "#", label: "Facebook" },
  { icon: Globe, href: "#", label: "YouTube" },
];

const contactInfo = [
  { icon: MapPin, text: "2935, Block C, Sushant Lok Phase I,\nSector 43, Gurugram, Haryana" },
  { icon: Phone, text: "+91 96679 49344", href: "tel:+919667949344" },
  { icon: Mail, text: "info@allfitgym.com", href: "mailto:info@allfitgym.com" },
];

export default function Footer() {
  return (
    <footer className="bg-dark-100 border-t border-white/[0.04]">
      <div className="container-premium py-16 lg:py-20">
        <div className="grid sm:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-16">
          <div className="sm:col-span-2 lg:col-span-4">
            <a href="#home" className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple to-purple-dark flex items-center justify-center shadow-lg shadow-purple/20">
                <Dumbbell className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-display font-bold text-white">
                ALL FIT<span className="gradient-text ml-0.5">GYM</span>
              </span>
            </a>
            <p className="text-sm text-zinc-500 leading-relaxed mb-8 max-w-sm">
              Train Strong. Live Better. Gurgaon&apos;s premium fitness destination
              dedicated to helping you achieve your fitness goals since 2014.
            </p>
            <div className="flex gap-3">
              {socials.map((s, i) => (
                <a
                  key={i}
                  href={s.href}
                  aria-label={s.label}
                  className="w-10 h-10 rounded-xl glass flex items-center justify-center hover:bg-white/[0.06] hover:text-purple-light transition-all duration-200 text-zinc-500"
                >
                  <s.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-xs font-bold text-zinc-400 uppercase tracking-[0.15em] mb-6">
              Quick Links
            </h4>
            <ul className="space-y-3.5">
              {quickLinks.map((l, i) => (
                <li key={i}>
                  <a href={l.href} className="text-sm text-zinc-500 hover:text-purple-light transition-colors duration-200">
                    {l.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h4 className="text-xs font-bold text-zinc-400 uppercase tracking-[0.15em] mb-6">
              Contact
            </h4>
            <ul className="space-y-4">
              {contactInfo.map((c, i) => (
                <li key={i}>
                  {c.href ? (
                    <a href={c.href} className="flex items-start gap-3 text-sm text-zinc-500 hover:text-purple-light transition-colors">
                      <c.icon className="w-4 h-4 text-purple-light/50 mt-0.5 shrink-0" />
                      <span>{c.text}</span>
                    </a>
                  ) : (
                    <div className="flex items-start gap-3 text-sm text-zinc-500">
                      <c.icon className="w-4 h-4 text-purple-light/50 mt-0.5 shrink-0" />
                      <span className="whitespace-pre-line">{c.text}</span>
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h4 className="text-xs font-bold text-zinc-400 uppercase tracking-[0.15em] mb-6">
              Newsletter
            </h4>
            <p className="text-sm text-zinc-500 mb-5">
              Stay updated with fitness tips and exclusive offers.
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 bg-white/[0.03] border border-white/[0.06] rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-purple/30 transition-colors"
              />
              <button className="w-11 h-11 rounded-xl bg-gradient-to-br from-purple to-purple-dark flex items-center justify-center hover:shadow-lg hover:shadow-purple/20 transition-all shrink-0">
                <ArrowRight className="w-4 h-4 text-white" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/[0.04]">
        <div className="container-premium py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="text-xs text-zinc-600">
            &copy; {new Date().getFullYear()} ALL FIT GYM. All rights reserved.
          </div>
          <div className="text-xs text-zinc-600 font-display tracking-wide">
            Train Strong. Live Better.
          </div>
        </div>
      </div>
    </footer>
  );
}
