"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { staggerContainer, fadeInUp } from "@/lib/animations";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Brands() {
  return (
    <div className="flex flex-col min-h-screen pt-32 pb-24">
      <Container>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <motion.h1 variants={fadeInUp} className="text-4xl md:text-6xl font-bold tracking-tighter mb-6">
            Our Brands
          </motion.h1>
          <motion.p variants={fadeInUp} className="text-xl text-brand-light-grey/80 font-light">
            Discover the brands that are part of the BlackOriginX ecosystem. We build companies that challenge the status quo.
          </motion.p>
        </motion.div>

        <div className="flex flex-col gap-12">
          {/* Torkk Featured */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="group relative overflow-hidden rounded-3xl bg-brand-dark-grey/40 border border-white/10"
          >
            <div className="flex flex-col md:flex-row min-h-[400px]">
              <div className="p-10 md:p-16 flex-1 flex flex-col justify-center">
                <h2 className="text-5xl font-bold tracking-tighter mb-4">TORKK</h2>
                <h3 className="text-xl text-white/90 mb-6">Smart EV Mobility Brand</h3>
                <p className="text-brand-light-grey/70 leading-relaxed mb-8 max-w-lg">
                  Designing intelligent electric vehicles that are reliable, connected, and built for the future. Torkk represents the pinnacle of sustainable urban transport.
                </p>
                <div>
                  <Button variant="primary" asChild className="gap-2">
                    <Link href="/brands/torkk">
                      Visit Torkk <ArrowRight size={16} />
                    </Link>
                  </Button>
                </div>
              </div>
              <div className="w-full md:w-[45%] relative bg-gradient-to-br from-white/5 to-transparent flex items-center justify-center p-12 overflow-hidden">
                 <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/10 to-transparent" />
                 {/* Abstract Torkk Graphic */}
                 <div className="relative z-10 w-48 h-48 rounded-full border-[12px] border-white/10 shadow-[0_0_50px_rgba(255,255,255,0.1)] flex items-center justify-center group-hover:scale-105 transition-transform duration-700">
                    <div className="w-24 h-24 rounded-full border-4 border-white/20 border-t-white animate-spin-slow" style={{ animationDuration: '8s' }} />
                 </div>
              </div>
            </div>
          </motion.div>

          {/* Future Venture Placeholder */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="rounded-3xl border border-white/5 border-dashed flex flex-col items-center justify-center min-h-[300px] text-center p-12 bg-white/[0.02]"
          >
            <div className="w-20 h-20 rounded-full border border-white/20 flex items-center justify-center mb-6 bg-white/5">
              <span className="text-3xl font-light">+</span>
            </div>
            <h3 className="text-2xl font-semibold mb-3">Future Venture</h3>
            <p className="text-brand-light-grey/40 max-w-md">
              We are constantly exploring new frontiers in deep tech. Stay tuned for our next disruptive brand.
            </p>
          </motion.div>
        </div>
      </Container>
    </div>
  );
}
