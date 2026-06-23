"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { staggerContainer, fadeInUp } from "@/lib/animations";
import { MapPin, Phone, Mail, CheckCircle2, AlertCircle } from "lucide-react";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch (err) {
      setStatus("error");
    }
  };

  return (
    <div className="flex flex-col min-h-screen pt-32 pb-24">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          
          {/* Contact Info */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.h1 variants={fadeInUp} className="text-4xl md:text-6xl font-bold tracking-tighter mb-6">
              Get In Touch
            </motion.h1>
            <motion.p variants={fadeInUp} className="text-xl text-brand-light-grey/80 mb-12 font-light">
              We'd love to hear from you. Whether it's an investment inquiry, partnership proposal, or media request, our team is ready to connect.
            </motion.p>

            <div className="flex flex-col gap-8 mb-12">
              <motion.div variants={fadeInUp} className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="text-lg font-medium mb-1">Email</h4>
                  <a href="mailto:hello@blackoriginx.com" className="text-brand-light-grey/70 hover:text-white transition-colors">
                    hello@blackoriginx.com
                  </a>
                </div>
              </motion.div>

              <motion.div variants={fadeInUp} className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="text-lg font-medium mb-1">Phone</h4>
                  <a href="tel:+919310519079" className="text-brand-light-grey/70 hover:text-white transition-colors">
                    +91 93105 19079
                  </a>
                </div>
              </motion.div>

              <motion.div variants={fadeInUp} className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="text-lg font-medium mb-1">Headquarters</h4>
                  <p className="text-brand-light-grey/70">
                    Delhi NCR, INDIA
                  </p>
                </div>
              </motion.div>
            </div>
            
            <motion.div variants={fadeInUp} className="w-full h-64 rounded-3xl bg-white/5 border border-white/10 flex items-center justify-center overflow-hidden">
               {/* Map Placeholder */}
               <div className="text-white/20 uppercase tracking-widest text-sm font-semibold">Map Placeholder</div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12">
              <h3 className="text-2xl font-bold mb-8">Send a Message</h3>
              
              {status === "success" ? (
                <div className="flex flex-col items-center justify-center py-12 text-center h-[400px]">
                  <CheckCircle2 className="w-16 h-16 text-green-400 mb-6" />
                  <h4 className="text-2xl font-bold mb-2">Message Sent</h4>
                  <p className="text-brand-light-grey/70 mb-8">Thank you for reaching out. Our team will get back to you shortly.</p>
                  <Button variant="outline" onClick={() => setStatus("idle")}>
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                  {status === "error" && (
                    <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center gap-3 text-red-400 text-sm">
                      <AlertCircle className="w-5 h-5 flex-shrink-0" />
                      <p>Something went wrong. Please try again later.</p>
                    </div>
                  )}
                  
                  <div className="flex flex-col gap-2">
                    <label htmlFor="name" className="text-sm font-medium text-brand-light-grey">Full Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full bg-brand-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-white/20 transition-all"
                      placeholder="John Doe"
                    />
                  </div>
                  
                  <div className="flex flex-col gap-2">
                    <label htmlFor="email" className="text-sm font-medium text-brand-light-grey">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full bg-brand-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-white/20 transition-all"
                      placeholder="john@company.com"
                    />
                  </div>
                  
                  <div className="flex flex-col gap-2">
                    <label htmlFor="inquiryType" className="text-sm font-medium text-brand-light-grey">Inquiry Type</label>
                    <select
                      id="inquiryType"
                      name="inquiryType"
                      className="w-full bg-brand-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-white/20 transition-all appearance-none"
                    >
                      <option value="general">General Inquiry</option>
                      <option value="investment">Investment</option>
                      <option value="partnership">Partnership</option>
                      <option value="media">Media & Press</option>
                    </select>
                  </div>
                  
                  <div className="flex flex-col gap-2">
                    <label htmlFor="message" className="text-sm font-medium text-brand-light-grey">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      className="w-full bg-brand-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-white/20 transition-all resize-none"
                      placeholder="How can we help you?"
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full mt-4" 
                    disabled={status === "submitting"}
                  >
                    {status === "submitting" ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              )}
            </div>
          </motion.div>
          
        </div>
      </Container>
    </div>
  );
}
