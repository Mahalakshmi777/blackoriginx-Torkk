"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { slideInRight, staggerContainer, fadeInUp, fadeIn } from "@/lib/animations";
import { ArrowRight, Zap, Cpu, Leaf, Users } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-gray-800/20 via-brand-black to-brand-black z-0" />
        
        <Container className="relative z-10 flex flex-col items-center text-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-4xl flex flex-col items-center"
          >
            <motion.div variants={fadeInUp} className="mb-6">
              <span className="px-4 py-2 rounded-full border border-white/10 text-xs font-semibold tracking-widest text-brand-light-grey uppercase bg-white/5 backdrop-blur-sm">
                Building the Future
              </span>
            </motion.div>
            
            <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-8 leading-[1.1]">
              Building the <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">
                Future of Mobility
              </span>
            </motion.h1>
            
            <motion.p variants={fadeInUp} className="text-lg md:text-xl text-brand-light-grey/80 mb-12 max-w-2xl font-light">
              BlackOriginX is a technology-driven holding company building and scaling next-generation brands that move the world forward.
            </motion.p>
            
            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <Button size="lg" className="gap-2" asChild>
                <Link href="/brands">
                  Explore Our Brands <ArrowRight size={18} />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/contact">Partner With Us</Link>
              </Button>
            </motion.div>
          </motion.div>
        </Container>
      </section>

      {/* Ecosystem Section */}
      <section className="py-24 bg-brand-dark-grey/30 border-t border-white/5">
        <Container>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="flex flex-col items-center mb-16 text-center"
          >
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              Our Ecosystem
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-brand-light-grey/70 max-w-2xl mx-auto">
              A portfolio of brands solving real world problems through innovation and sustainability.
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Torkk Highlight */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="group relative overflow-hidden rounded-3xl bg-gradient-to-b from-white/10 to-transparent border border-white/10 p-8 md:p-12 flex flex-col justify-between h-[400px]"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -mr-20 -mt-20 transition-transform group-hover:scale-150 duration-700" />
              
              <div className="relative z-10">
                <h3 className="text-4xl font-bold tracking-tighter mb-4">TORKK</h3>
                <p className="text-xl font-medium text-brand-light-grey mb-4">Smart. Connected. Sustainable.</p>
                <p className="text-brand-light-grey/60 max-w-sm">
                  Torkk is our flagship mobility brand on a mission to redefine urban transport.
                </p>
              </div>

              <div className="relative z-10 mt-8">
                <Button variant="outline" className="gap-2" asChild>
                  <Link href="/brands/torkk">
                    Visit Torkk <ArrowRight size={16} />
                  </Link>
                </Button>
              </div>
            </motion.div>

            {/* Future Brands Placeholder */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="rounded-3xl border border-white/5 border-dashed flex flex-col items-center justify-center h-[400px] text-center p-8 relative overflow-hidden"
            >
              <div className="w-16 h-16 rounded-full border border-white/20 flex items-center justify-center mb-6">
                <span className="text-2xl font-light">+</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Future Brands</h3>
              <p className="text-brand-light-grey/40">Coming Soon to the BlackOriginX Ecosystem</p>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Focus Areas */}
      <section className="py-24 border-t border-white/5">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">What We Focus On</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Zap, title: "Mobility", desc: "Building intelligent and sustainable mobility solutions for a better tomorrow." },
              { icon: Cpu, title: "Technology", desc: "Leveraging deep tech and innovation to create future-ready products." },
              { icon: Leaf, title: "Sustainability", desc: "Committed to a cleaner planet through responsible innovation." },
              { icon: Users, title: "Impact", desc: "Creating long-term value for communities, partners and the planet." }
            ].map((feature, i) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex flex-col items-center text-center p-6"
              >
                <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center mb-6 text-white border border-white/10">
                  <feature.icon size={24} strokeWidth={1.5} />
                </div>
                <h4 className="text-xl font-semibold mb-3">{feature.title}</h4>
                <p className="text-brand-light-grey/60 text-sm leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-32 relative overflow-hidden border-t border-white/5">
        <div className="absolute inset-0 bg-brand-white text-brand-black" />
        <Container className="relative z-10 text-brand-black flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="max-w-2xl text-center md:text-left">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-6">Let's build the future together.</h2>
            <p className="text-lg text-brand-dark-grey/80 mb-8 max-w-xl">
              We collaborate with partners, talents and investors to create impact at scale.
            </p>
            <Button variant="secondary" size="lg" asChild>
              <Link href="/contact">Partner With Us</Link>
            </Button>
          </div>
          
          {/* Abstract Graphic */}
          <div className="hidden lg:block">
             <div className="flex gap-4">
               {[1, 2, 3, 4].map((i) => (
                 <motion.div 
                   key={i}
                   initial={{ height: 40 }}
                   whileInView={{ height: 40 + i * 40 }}
                   viewport={{ once: true }}
                   transition={{ duration: 1, delay: i * 0.2, ease: "easeOut" }}
                   className="w-16 bg-brand-black rounded-t-xl opacity-90"
                 />
               ))}
             </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
