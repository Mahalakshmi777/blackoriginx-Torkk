"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { staggerContainer, fadeInUp } from "@/lib/animations";
import { Target, Eye, Lightbulb, Shield, Leaf, Rocket } from "lucide-react";

export default function About() {
  return (
    <div className="flex flex-col min-h-screen pt-32 pb-24">
      <Container>
        {/* Header */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="max-w-3xl mb-24"
        >
          <motion.h1 variants={fadeInUp} className="text-4xl md:text-6xl font-bold tracking-tighter mb-6">
            About BlackOriginX
          </motion.h1>
          <motion.p variants={fadeInUp} className="text-xl text-brand-light-grey/80 leading-relaxed font-light">
            BlackOriginX is a holding company building and scaling technology-driven brands for the future. 
            We focus on intersectional innovation where deep tech meets real-world applications.
          </motion.p>
        </motion.div>

        {/* Vision & Mission */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="p-8 rounded-3xl border border-white/10 bg-white/5"
          >
            <Eye className="w-10 h-10 mb-6 text-brand-light-grey" />
            <h3 className="text-2xl font-bold mb-4 uppercase tracking-wider text-white/90">Our Vision</h3>
            <p className="text-brand-light-grey/70 leading-relaxed">
              To become a global ecosystem of impactful brands that redefine the future. We envision a world where technology seamlessly integrates with human needs, creating sustainable and intelligent ecosystems.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="p-8 rounded-3xl border border-white/10 bg-white/5"
          >
            <Target className="w-10 h-10 mb-6 text-brand-light-grey" />
            <h3 className="text-2xl font-bold mb-4 uppercase tracking-wider text-white/90">Our Mission</h3>
            <p className="text-brand-light-grey/70 leading-relaxed">
              To build, invest, and empower brands that solve real problems with technology and purpose. We are committed to fostering innovation that drives progress without compromising our planet's future.
            </p>
          </motion.div>
        </div>

        {/* Values */}
        <div className="mb-24">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Values</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Lightbulb, title: "Innovation", desc: "Pushing boundaries to create what's next." },
              { icon: Shield, title: "Integrity", desc: "Doing the right thing, always." },
              { icon: Rocket, title: "Impact", desc: "Creating measurable value." },
              { icon: Leaf, title: "Sustainability", desc: "Building for a better tomorrow." }
            ].map((value, i) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex flex-col items-center text-center p-6 border-b border-white/5"
              >
                <value.icon className="w-8 h-8 mb-4 text-brand-light-grey/80" />
                <h4 className="text-lg font-semibold mb-2">{value.title}</h4>
                <p className="text-sm text-brand-light-grey/50">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Journey Timeline */}
        <div className="border-t border-white/10 pt-24">
          <h2 className="text-3xl font-bold mb-16 text-center">Our Journey</h2>
          
          <div className="relative max-w-4xl mx-auto">
            {/* Timeline Line */}
            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-px bg-white/10 hidden md:block" />
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10">
              {[
                { year: "2025", title: "BlackOriginX Founded", desc: "The vision takes shape with the establishment of the holding company." },
                { year: "2026", title: "Torkk Launched", desc: "Our flagship EV mobility brand enters the market." },
                { year: "2027+", title: "Future Ventures", desc: "Expanding the ecosystem into new deep-tech verticals." }
              ].map((step, i) => (
                <motion.div
                  key={step.year}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.2 }}
                  className="flex flex-col items-center text-center"
                >
                  <div className="w-4 h-4 rounded-full bg-brand-white mb-6 relative">
                    <div className="absolute inset-0 bg-brand-white rounded-full animate-ping opacity-20" />
                  </div>
                  <h4 className="text-2xl font-bold mb-2">{step.year}</h4>
                  <h5 className="text-lg font-medium text-brand-light-grey mb-3">{step.title}</h5>
                  <p className="text-sm text-brand-light-grey/60 max-w-xs">{step.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
