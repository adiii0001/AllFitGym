"use client";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { MapPin, Phone, Clock, Send, MessageCircle, Mail } from "lucide-react";

export default function Contact() {
  const ref = useRef(null);
  const inview = useInView(ref, { once: true, margin: "-80px" });
  const [form, setForm] = useState({ name: "", phone: "", message: "" });

  const submit = (e) => {
    e.preventDefault();
    const text = `Hi! I'm ${form.name}. ${form.message} Phone: ${form.phone}`;
    window.open(`https://wa.me/919667949344?text=${encodeURIComponent(text)}`, "_blank");
  };

  return (
    <section id="contact" ref={ref} className="py-20 lg:py-[120px] bg-dark-100">
      <div className="container-premium">
        <div className="text-center mb-16">
          <div className="label-pill mx-auto w-fit">
            <div className="dot" />
            <span>Get In Touch</span>
          </div>
          <h2 className="section-title">
            Visit <span className="gradient-text">ALL FIT GYM</span>
          </h2>
          <p className="section-desc mx-auto text-center">
            Ready to start your fitness journey? Get in touch with us today.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            animate={inview ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-6"
          >
            <div className="glass rounded-2xl p-10 lg:p-12">
              <h3 className="text-xl font-display font-bold text-white mb-8">ALL FIT GYM</h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-purple/10 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-purple-light" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-white mb-1">Address</div>
                    <div className="text-sm text-zinc-500 leading-relaxed">
                      2935, Block C, Sushant Lok Phase I, Sector 43,<br />
                      Gurugram, Haryana 122009
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-purple/10 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-purple-light" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-white mb-1">Phone</div>
                    <a href="tel:+919667949344" className="text-sm text-zinc-500 hover:text-purple-light transition-colors">
                      +91 96679 49344
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-purple/10 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-purple-light" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-white mb-1">Email</div>
                    <a href="mailto:info@allfitgym.com" className="text-sm text-zinc-500 hover:text-purple-light transition-colors">
                      info@allfitgym.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-purple/10 flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5 text-purple-light" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-white mb-1">Timings</div>
                    <div className="text-sm text-zinc-500">
                      Mon - Sat: 5:30 AM - 10:00 PM<br />
                      Sunday: 7:00 AM - 9:00 PM
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex gap-3 mt-8">
                <a
                  href="https://wa.me/919667949344?text=Hi!%20I%20want%20to%20know%20more%20about%20ALL%20FIT%20GYM"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold py-3.5 rounded-xl transition-all duration-300 text-sm"
                >
                  <MessageCircle className="w-4 h-4" />
                  WhatsApp
                </a>
                <a
                  href="tel:+919667949344"
                  className="flex-1 btn-outline !py-3.5 !text-sm"
                >
                  <Phone className="w-4 h-4" />
                  Call Now
                </a>
              </div>
            </div>

            <div className="glass rounded-2xl overflow-hidden h-40">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3507.664534498457!2d77.0449863150815!3d28.45209498248698!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d19c8e5e9e1e1%3A0x1234567890abcdef!2sSushant%20Lok%20Phase%20I%2C%20Gurugram%2C%20Haryana!5e0!3m2!1sen!2sin!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0, filter: "grayscale(0.6) brightness(0.75) contrast(1.1)" }}
                allowFullScreen=""
                loading="lazy"
                title="ALL FIT GYM Location"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 32 }}
            animate={inview ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="glass rounded-2xl p-10 lg:p-12">
              <h3 className="text-xl font-display font-bold text-white mb-2">Send Us a Message</h3>
              <p className="text-sm text-zinc-500 mb-8">
                Fill out the form and we&apos;ll get back to you via WhatsApp.
              </p>

              <form onSubmit={submit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-zinc-400 mb-2">Your Name</label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full bg-white/[0.03] border border-white/[0.06] rounded-xl px-4 py-3.5 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-purple/30 transition-colors"
                    placeholder="Enter your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-zinc-400 mb-2">Phone Number</label>
                  <input
                    type="tel"
                    required
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className="w-full bg-white/[0.03] border border-white/[0.06] rounded-xl px-4 py-3.5 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-purple/30 transition-colors"
                    placeholder="+91 XXXXX XXXXX"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-zinc-400 mb-2">Your Message</label>
                  <textarea
                    rows={4}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full bg-white/[0.03] border border-white/[0.06] rounded-xl px-4 py-3.5 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-purple/30 transition-colors resize-none"
                    placeholder="Tell us about your fitness goals..."
                  />
                </div>
                <button type="submit" className="btn-primary w-full !py-3.5">
                  <Send className="w-4 h-4" />
                  Send via WhatsApp
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
