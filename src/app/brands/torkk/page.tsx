"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { staggerContainer, fadeInUp } from "@/lib/animations";
import { Battery, ShieldCheck, Zap, Activity } from "lucide-react";
import Link from "next/link";

export default function TorkkBrand() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 bg-brand-dark-grey z-0" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,_var(--tw-gradient-stops))] from-white/10 to-transparent z-0 opacity-50" />
        
        <Container className="relative z-10 flex flex-col items-center text-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-4xl"
          >
            <motion.h1 variants={fadeInUp} className="text-6xl md:text-8xl font-bold tracking-tighter mb-6 uppercase">
              Torkk
            </motion.h1>
            <motion.p variants={fadeInUp} className="text-2xl text-white/90 font-medium mb-4">
              Smart. Electric. Sustainable.
            </motion.p>
            <motion.p variants={fadeInUp} className="text-lg text-brand-light-grey/70 max-w-2xl mx-auto mb-10">
              Explore the future of urban mobility. Torkk designs premium electric two-wheelers that combine breathtaking performance with zero emissions.
            </motion.p>
            <motion.div variants={fadeInUp}>
              <Button size="lg" variant="primary">
                Explore Torkk Models
              </Button>
            </motion.div>
          </motion.div>
        </Container>

        {/* Abstract Scooter Silhouette placeholder */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-64 md:h-96 opacity-20 pointer-events-none">
          <svg viewBox="0 0 800 400" className="w-full h-full" preserveAspectRatio="xMidYMax meet">
            <path d="M 200 350 C 200 350, 300 250, 400 250 C 500 250, 600 350, 600 350" fill="none" stroke="currentColor" strokeWidth="4" />
            <circle cx="200" cy="350" r="40" fill="none" stroke="currentColor" strokeWidth="8" />
            <circle cx="600" cy="350" r="40" fill="none" stroke="currentColor" strokeWidth="8" />
            <path d="M 300 250 L 350 150 L 450 150" fill="none" stroke="currentColor" strokeWidth="4" />
          </svg>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 bg-brand-black">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 border-t border-white/10 pt-16">
            {[
              { icon: Zap, title: "Smart Technology", desc: "AI-driven battery management and connected app." },
              { icon: ShieldCheck, title: "Premium Design", desc: "Aerodynamic chassis built with aerospace-grade alloys." },
              { icon: Activity, title: "Great Performance", desc: "Instant torque and segment-leading top speed." },
              { icon: Battery, title: "Sustainable Future", desc: "100% electric, zero emissions, recyclable components." }
            ].map((feature, i) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex flex-col items-center text-center p-6"
              >
                <feature.icon className="w-10 h-10 mb-6 text-white" strokeWidth={1} />
                <h4 className="text-xl font-semibold mb-3">{feature.title}</h4>
                <p className="text-brand-light-grey/60 text-sm leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Product Vision */}
      <section className="py-24 border-t border-white/5 overflow-hidden">
        <Container>
          <div className="flex flex-col md:flex-row items-center gap-16">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="flex-1"
            >
              <h2 className="text-4xl font-bold mb-6 tracking-tight">The Torkk Vision</h2>
              <p className="text-brand-light-grey/80 text-lg leading-relaxed mb-6">
                We believe that the transition to electric mobility shouldn't mean a compromise on design, performance, or thrill. Torkk was born out of the desire to build the ultimate urban commuter.
              </p>
              <p className="text-brand-light-grey/80 text-lg leading-relaxed">
                By integrating proprietary battery technology with a rider-first ergonomic design, we are setting a new standard for two-wheelers globally.
              </p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="flex-1 w-full relative h-[400px] rounded-3xl overflow-hidden bg-brand-dark-grey border border-white/10 flex items-center justify-center"
            >
               <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.05)_50%,transparent_75%,transparent_100%)] bg-[length:250%_250%] animate-[gradient_3s_linear_infinite]" />
               <p className="text-white/30 uppercase tracking-[0.3em] font-light">Vision Render</p>
            </motion.div>
          </div>
        </Container>
      </section>
      
      {/* CTA */}
      <section className="py-32 bg-white text-brand-black text-center">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-6">Experience the Ride</h2>
            <p className="text-brand-dark-grey/80 text-xl mb-10">
              Join the waitlist to be among the first to test ride a Torkk.
            </p>
            <Button size="lg" className="bg-brand-black text-white hover:bg-gray-800">
              Join Waitlist
            </Button>
          </motion.div>
        </Container>
      </section>
    </div>
  );
}
