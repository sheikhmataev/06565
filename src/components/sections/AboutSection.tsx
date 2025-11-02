'use client';

import Image from 'next/image';
import { getImagePath } from '@/lib/utils';
import { motion, useScroll, useTransform, useSpring, AnimatePresence } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { Shield, Clock, MapPin, Car, Calendar, Award, Users, Building2, Phone, Bus } from 'lucide-react';
import Link from 'next/link';
import dynamic from 'next/dynamic';

const Counter3D = dynamic(() => import('../3d/Counter3D'), {
  ssr: false,
  loading: () => <span className="text-6xl font-bold text-accent-2">0</span>,
});

export default function AboutSection() {
  const currentYear = new Date().getFullYear();
  const yearsInBusiness = currentYear - 1998; // Started in 1998
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end end']
  });

  return (
    <div ref={sectionRef} className="relative bg-white">
      {/* Hero Identity Section - Full Viewport */}
      <HeroIdentity yearsInBusiness={yearsInBusiness} scrollProgress={scrollYProgress} />

      {/* Founding Story Section - Full Viewport */}
      <FoundingStory yearsInBusiness={yearsInBusiness} />

      {/* Fleet Reveal Section - Full Viewport */}
      <FleetSection />

      {/* Coverage Areas Section - Full Viewport */}
      <CoverageSection />

      {/* Timeline / Milestones Section - Full Viewport */}
      <TimelineSection yearsInBusiness={yearsInBusiness} />

      {/* CTA Final Section */}
      <CTASection />
    </div>
  );
}

// Hero Identity - Full Viewport Section
function HeroIdentity({ yearsInBusiness, scrollProgress }: { yearsInBusiness: number; scrollProgress: any }) {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  // Smoother spring-based transforms for cinematic feel
  const smoothOpacity = useSpring(useTransform(scrollProgress, [0, 0.15, 0.3], [1, 1, 0]), {
    stiffness: 50,
    damping: 20,
    mass: 0.5
  });
  
  const smoothScale = useSpring(useTransform(scrollProgress, [0, 0.2, 0.4], [1, 0.95, 0.75]), {
    stiffness: 60,
    damping: 25
  });
  
  const smoothY = useSpring(useTransform(scrollProgress, [0, 0.3], [0, -150]), {
    stiffness: 40,
    damping: 20
  });

  // Background parallax layers
  const bgParallax = useTransform(scrollProgress, [0, 0.5], [0, -50]);
  const gradientParallax = useTransform(scrollProgress, [0, 0.5], [0, 30]);

  return (
    <motion.section
      ref={sectionRef}
      className="h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-primary-1 via-primary-2 to-primary-1"
      style={{ 
        opacity: smoothOpacity, 
        scale: smoothScale, 
        y: smoothY 
      }}
    >
      {/* Animated background layers for depth */}
      <motion.div 
        className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-accent-2/20 via-transparent to-transparent"
        style={{ y: gradientParallax }}
      />
      <motion.div 
        className="absolute inset-0 bg-gradient-to-br from-accent-3/10 via-transparent to-accent-2/10"
        style={{ y: bgParallax }}
      />
      
      <motion.div 
        className="text-center relative z-10 px-4"
        initial={{ opacity: 0, y: 50, filter: 'blur(10px)' }}
        animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
        transition={{ 
          duration: 1.2, 
          ease: [0.16, 1, 0.3, 1], // Custom cubic bezier for smooth cinematic feel
          type: 'spring',
          stiffness: 60,
          damping: 20
        }}
      >
        <motion.div
          className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-md rounded-full mb-8 border border-white/30"
          initial={{ opacity: 0, y: 30, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ 
            duration: 1,
            delay: 0.3,
            type: 'spring',
            stiffness: 100,
            damping: 15
          }}
        >
          <motion.div
            initial={{ rotate: -180, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5, ease: [0.34, 1.56, 0.64, 1] }}
          >
            <Calendar className="w-4 h-4 text-white" />
          </motion.div>
          <span className="text-sm font-semibold text-white">Siden 1998</span>
        </motion.div>
        
        <motion.h1 
          className="text-7xl md:text-9xl lg:text-[12rem] font-bold text-white mb-6 leading-none tracking-tight"
          initial={{ opacity: 0, scale: 0.7, filter: 'blur(20px)' }}
          animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
          transition={{ 
            duration: 1.5,
            delay: 0.5,
            ease: [0.16, 1, 0.3, 1],
            type: 'spring',
            stiffness: 50,
            damping: 20
          }}
        >
          06565
        </motion.h1>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 1,
            delay: 1,
            ease: [0.25, 0.46, 0.45, 0.94]
          }}
        >
          <motion.p 
            className="text-2xl md:text-3xl text-white/90 font-light mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 1.2 }}
          >
            Lillehammer Taxi
          </motion.p>
          <motion.p 
            className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.4, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            Din pålitelige transportpartner i {yearsInBusiness}+ år
          </motion.p>
        </motion.div>
      </motion.div>
      
      {/* Enhanced Scroll Indicator with smoother animation */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.8 }}
      >
        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ 
            duration: 2.5, 
            repeat: Infinity,
            ease: [0.4, 0, 0.6, 1]
          }}
          className="w-6 h-10 border-2 border-white/60 rounded-full flex items-start justify-center p-2 backdrop-blur-sm bg-white/5"
        >
          <motion.div
            animate={{ y: [0, 14, 0], opacity: [0.5, 1, 0.5] }}
            transition={{ 
              duration: 2.5, 
              repeat: Infinity,
              ease: [0.4, 0, 0.6, 1]
            }}
            className="w-1.5 h-4 bg-white rounded-full"
          />
        </motion.div>
      </motion.div>
    </motion.section>
  );
}

// Founding Story Section
function FoundingStory({ yearsInBusiness }: { yearsInBusiness: number }) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start']
  });

  // Enhanced parallax with different speeds for depth
  const smoothImageY = useSpring(useTransform(scrollYProgress, [0, 1], ['0%', '35%']), {
    stiffness: 30,
    damping: 15
  });
  
  const smoothImageScale = useSpring(useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.05, 1.1]), {
    stiffness: 40,
    damping: 20
  });
  
  const smoothImageOpacity = useSpring(useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0.8]), {
    stiffness: 50,
    damping: 25
  });

  const textOpacity = useSpring(useTransform(scrollYProgress, [0, 0.2, 0.7, 1], [0, 1, 1, 0]), {
    stiffness: 60,
    damping: 25
  });
  
  const textY = useSpring(useTransform(scrollYProgress, [0, 0.3], ['120px', '0px']), {
    stiffness: 50,
    damping: 20
  });
  
  const textBlur = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], ['10px', '0px', '0px', '5px']);

  return (
    <section ref={sectionRef} className="h-screen flex items-center justify-center relative bg-gradient-to-b from-primary-1 via-white/50 to-white overflow-hidden">
      {/* Subtle background animation */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-r from-accent-2/5 via-transparent to-accent-3/5"
        style={{
          opacity: useTransform(scrollYProgress, [0, 1], [0, 0.3]),
          y: useTransform(scrollYProgress, [0, 1], [0, -20])
        }}
      />
      
      <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div 
          className="relative z-10"
          style={{ 
            opacity: textOpacity, 
            y: textY,
            filter: `blur(${textBlur})`
          }}
        >
          <motion.div 
            className="inline-block mb-4"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <span className="text-sm font-semibold text-accent-2 uppercase tracking-wider">Vår historie</span>
          </motion.div>
          
          <motion.h2 
            className="text-5xl md:text-6xl font-bold text-primary-1 mb-6 leading-tight"
            initial={{ opacity: 0, y: 40, filter: 'blur(10px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ 
              duration: 1,
              delay: 0.2,
              ease: [0.16, 1, 0.3, 1],
              type: 'spring',
              stiffness: 60,
              damping: 20
            }}
          >
            Etablert i 1998<br />med visjon om trygg transport
          </motion.h2>
          
          <motion.div 
            className="space-y-4 text-lg text-gray-700 leading-relaxed max-w-2xl"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1, delay: 0.4, staggerChildren: 0.15 }}
          >
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              06565 er en døgnbemannet driftssentral for drosjene i <strong className="text-primary-1">Lillehammer, Øyer og Tretten</strong>. Vi er stolte av å tilby et meget stort og variert tilbud av persontransport, og fungerer også som bookingsentral for Øyer og Tretten Drosjesentral.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              Fra våre første dager har vi satt kundetilfredshet og trygghet i fokus. Vårt mål er å levere en rask, trygg og tilgjengelig transporttjeneste for alle våre kunder, 24 timer i døgnet, hele året.
            </motion.p>
          </motion.div>
        </motion.div>
        
        <motion.div 
          className="relative"
          style={{ 
            y: smoothImageY,
            scale: smoothImageScale,
            opacity: smoothImageOpacity
          }}
        >
          <motion.div 
            className="relative rounded-2xl overflow-hidden shadow-2xl"
            initial={{ opacity: 0, scale: 0.9, rotateY: -15 }}
            whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ 
              duration: 1.2,
              ease: [0.16, 1, 0.3, 1],
              type: 'spring',
              stiffness: 50,
              damping: 20
            }}
          >
            <Image 
              src={getImagePath("/assets/taxi-image.png")}
              alt="06565 Taxi bilpark" 
              width={800} 
              height={600}
              className="w-full h-auto object-cover"
              priority
            />
            {/* Subtle gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent pointer-events-none" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

// Fleet Reveal Section
function FleetSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start']
  });

  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsInView(entry.isIntersecting),
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  // Smooth spring-based transforms
  const smoothOpacity = useSpring(useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]), {
    stiffness: 50,
    damping: 25
  });

  return (
    <section 
      ref={sectionRef} 
      className="h-screen flex items-center justify-center bg-white relative overflow-hidden"
    >
      <motion.div 
        className="container mx-auto px-4 relative z-10"
        style={{ opacity: smoothOpacity }}
      >
        {/* Header with large number */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40, filter: 'blur(10px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ 
            duration: 1,
            ease: [0.16, 1, 0.3, 1],
            type: 'spring',
            stiffness: 60,
            damping: 20
          }}
        >
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-primary-1 mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Vår bilpark
          </motion.h2>
          
          <motion.div 
            className="mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ 
              duration: 1.2,
              delay: 0.4,
              ease: [0.16, 1, 0.3, 1],
              type: 'spring',
              stiffness: 60,
              damping: 20
            }}
          >
            <div className="flex items-center justify-center gap-3">
              <div className="text-7xl md:text-9xl font-bold text-accent-2 leading-none">
                {isInView && <Counter3D value={40} suffix="+" />}
              </div>
              <span className="text-2xl md:text-3xl font-semibold text-gray-700">biler</span>
            </div>
          </motion.div>

          <motion.p 
            className="text-base md:text-lg text-gray-500 max-w-xl mx-auto"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Moderne, velvedlikeholdte kjøretøy fordelt på tre kategorier
          </motion.p>
        </motion.div>

        {/* Fleet categories - clean cards */}
        <motion.div 
          className="max-w-6xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1, delay: 0.6, staggerChildren: 0.15 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                title: 'Stor kapasitet',
                seats: '16',
                seatsLabel: 'setere',
                label: 'Grupper & charter', 
                desc: 'Perfekt for større selskap og arrangementer',
                icon: Bus,
                gradient: 'from-accent-2/10 to-accent-3/10'
              },
              { 
                title: 'Mellomstor',
                seats: '8',
                seatsLabel: 'setere',
                label: 'Minibusser', 
                desc: 'Maxi-taxier og minibusser for mellomstor gruppe',
                icon: Users,
                gradient: 'from-accent-3/10 to-accent-2/10'
              },
              { 
                title: 'Standard',
                seats: '4',
                seatsLabel: 'setere',
                label: 'Individuell transport', 
                desc: 'Komfortable standardtaxier for private turer',
                icon: Car,
                gradient: 'from-accent-2/10 to-accent-3/10'
              },
            ].map((item, index) => {
              const IconComponent = item.icon;
              return (
                <motion.div
                  key={item.title}
                  className="relative group"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ 
                    duration: 0.7,
                    delay: index * 0.15 + 0.7,
                    ease: [0.25, 0.46, 0.45, 0.94]
                  }}
                  whileHover={{ y: -8 }}
                >
                  <div className="bg-white rounded-xl p-8 border border-gray-100 hover:border-accent-2/40 transition-all duration-300 h-full flex flex-col group-hover:shadow-xl relative overflow-hidden">
                    {/* Hover gradient background */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                    
                    <div className="relative z-10 flex flex-col h-full">
                      {/* Icon */}
                      <motion.div
                        className="mb-6"
                        initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
                        whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                        viewport={{ once: true }}
                        transition={{ 
                          duration: 0.6, 
                          delay: index * 0.15 + 0.8,
                          ease: [0.34, 1.56, 0.64, 1]
                        }}
                      >
                        <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-accent-2/10 to-accent-3/10 flex items-center justify-center group-hover:from-accent-2/20 group-hover:to-accent-3/20 transition-all duration-300">
                          <IconComponent className="w-7 h-7 text-accent-2" />
                        </div>
                      </motion.div>
                      
                      {/* Title and seats */}
                      <div className="flex-1 mb-4">
                        <h3 className="text-xl font-bold text-primary-1 mb-4">{item.title}</h3>
                        <div className="mb-4">
                          <div className="flex items-baseline gap-2 mb-2">
                            <span className="text-5xl md:text-6xl font-bold text-accent-2 leading-none">{item.seats}</span>
                            <span className="text-base font-medium text-gray-400">{item.seatsLabel}</span>
                          </div>
                          <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider">{item.label}</p>
                        </div>
                      </div>
                      
                      {/* Description */}
                      <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

// Coverage Areas Section
function CoverageSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start']
  });

  const smoothOpacity = useSpring(useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]), {
    stiffness: 50,
    damping: 25
  });

  const bgScale = useTransform(scrollYProgress, [0, 1], [1.1, 1]);
  const bgOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.5, 1, 0.8]);

  return (
    <section 
      ref={sectionRef} 
      className="h-screen flex items-center justify-center bg-gradient-to-br from-primary-1 to-primary-2 text-white relative overflow-hidden"
    >
      {/* Animated background */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-br from-primary-1 via-primary-2 to-primary-1"
        style={{ scale: bgScale, opacity: bgOpacity }}
      />
      <motion.div 
        className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/10 via-transparent to-accent-3/20"
        style={{ opacity: useTransform(scrollYProgress, [0, 1], [0, 0.6]) }}
      />
      
      <motion.div 
        className="container mx-auto px-4 text-center relative z-10"
        style={{ opacity: smoothOpacity }}
      >
        <motion.div
          className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-md rounded-full mb-8 border border-white/30"
          initial={{ opacity: 0, y: 30, scale: 0.8 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ 
            duration: 0.8,
            ease: [0.16, 1, 0.3, 1],
            type: 'spring',
            stiffness: 80,
            damping: 15
          }}
        >
          <motion.div
            initial={{ rotate: -180, opacity: 0 }}
            whileInView={{ rotate: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.34, 1.56, 0.64, 1] }}
          >
            <MapPin className="w-4 h-4" />
          </motion.div>
          <span className="text-sm font-semibold">Våre dekningsområder</span>
        </motion.div>
        
        <motion.h2 
          className="text-5xl md:text-6xl font-bold mb-4"
          initial={{ opacity: 0, y: 40, filter: 'blur(10px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ 
            duration: 1,
            ease: [0.16, 1, 0.3, 1],
            type: 'spring',
            stiffness: 60,
            damping: 20
          }}
        >
          Vi dekker hele regionen
        </motion.h2>
        
        <motion.p 
          className="text-xl text-white/90 mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          Døgnbemannet driftssentral for 3 kommuner
        </motion.p>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1, delay: 0.4, staggerChildren: 0.12 }}
        >
          {['Lillehammer', 'Øyer', 'Tretten'].map((area, index) => (
            <motion.div
              key={area}
              className="bg-white/10 backdrop-blur-md rounded-xl p-8 text-center border border-white/20 hover:bg-white/20 transition-all duration-500 relative overflow-hidden group"
              initial={{ opacity: 0, scale: 0.7, rotateY: -45, filter: 'blur(10px)' }}
              whileInView={{ opacity: 1, scale: 1, rotateY: 0, filter: 'blur(0px)' }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ 
                duration: 0.8,
                delay: index * 0.12,
                ease: [0.16, 1, 0.3, 1],
                type: 'spring',
                stiffness: 70,
                damping: 20
              }}
              whileHover={{ scale: 1.1, y: -10, rotateY: 5 }}
            >
              {/* Hover gradient effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-accent-3/20 to-accent-2/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              />
              
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                whileInView={{ scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.12 + 0.2, ease: [0.34, 1.56, 0.64, 1] }}
                className="relative z-10"
              >
                <MapPin className="w-8 h-8 mx-auto mb-4 text-accent-3" />
              </motion.div>
              <motion.div 
                className="font-bold text-xl relative z-10"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.12 + 0.4 }}
              >
                {area}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}

// Timeline / Milestones Section
function TimelineSection({ yearsInBusiness }: { yearsInBusiness: number }) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start']
  });

  const milestones = [
    { year: '1998', title: 'Etablert', description: '06565 Lillehammer Taxi ble grunnlagt med visjon om trygg transport' },
    { year: '2015', title: 'Ekspansjon', description: 'Utvidet til Øyer og Tretten som bookingsentral' },
    { year: '2020', title: 'Moderne bilpark', description: 'Over 40 moderne biler i flåten' },
    { year: 'Nå', title: 'Fremtidsrettet', description: `${yearsInBusiness}+ års erfaring og døgnbemannet driftssentral` },
  ];

  const smoothOpacity = useSpring(useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]), {
    stiffness: 50,
    damping: 25
  });

  // Animated timeline line progress
  const lineProgress = useTransform(scrollYProgress, [0, 0.8], [0, 1]);

  return (
    <section 
      ref={sectionRef} 
      className="h-screen flex items-center justify-center bg-gradient-to-b from-primary-2 to-white overflow-hidden relative"
    >
      {/* Subtle background animation */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-br from-accent-2/5 via-transparent to-accent-3/5"
        style={{ opacity: useTransform(scrollYProgress, [0, 1], [0, 0.3]) }}
      />
      
      <motion.div 
        className="container mx-auto px-4 relative z-10"
        style={{ opacity: smoothOpacity }}
      >
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40, filter: 'blur(10px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ 
            duration: 1,
            ease: [0.16, 1, 0.3, 1],
            type: 'spring',
            stiffness: 60,
            damping: 20
          }}
        >
          <h2 className="text-5xl md:text-6xl font-bold text-primary-1 mb-4">Vår reise</h2>
          <p className="text-xl text-gray-600">Viktige milepæler i vår historie</p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Animated Timeline Line */}
          <motion.div 
            className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gray-200"
            style={{ opacity: 0.3 }}
          />
          <motion.div 
            className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-accent-2 to-accent-3 origin-top"
            style={{ 
              scaleY: lineProgress,
              opacity: useTransform(lineProgress, [0, 0.1, 1], [0, 0.5, 1])
            }}
          />

          <motion.div 
            className="space-y-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1, staggerChildren: 0.2 }}
          >
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.year}
                className={`flex items-center gap-8 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                initial={{ opacity: 0, x: index % 2 === 0 ? -80 : 80, scale: 0.8 }}
                whileInView={{ opacity: 1, x: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ 
                  duration: 0.8,
                  delay: index * 0.15,
                  ease: [0.16, 1, 0.3, 1],
                  type: 'spring',
                  stiffness: 70,
                  damping: 20
                }}
              >
                <motion.div 
                  className={`flex-1 ${index % 2 === 0 ? 'text-right' : 'text-left'}`}
                  initial={{ opacity: 0, filter: 'blur(10px)' }}
                  whileInView={{ opacity: 1, filter: 'blur(0px)' }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.15 + 0.2 }}
                >
                  <motion.div 
                    className="text-4xl font-bold text-accent-2 mb-2"
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.15 + 0.3, ease: [0.34, 1.56, 0.64, 1] }}
                  >
                    {milestone.year}
                  </motion.div>
                  <motion.div 
                    className="text-xl font-semibold text-primary-1 mb-2"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.15 + 0.4 }}
                  >
                    {milestone.title}
                  </motion.div>
                  <motion.p 
                    className="text-gray-600"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.15 + 0.5 }}
                  >
                    {milestone.description}
                  </motion.p>
                </motion.div>
                <motion.div 
                  className="w-5 h-5 bg-accent-2 rounded-full border-4 border-white shadow-xl relative z-10"
                  initial={{ scale: 0, rotate: -180 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ 
                    duration: 0.8, 
                    delay: index * 0.15 + 0.3,
                    ease: [0.34, 1.56, 0.64, 1],
                    type: 'spring',
                    stiffness: 100,
                    damping: 15
                  }}
                />
                <div className="flex-1"></div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

// CTA Final Section
function CTASection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start']
  });

  const smoothOpacity = useSpring(useTransform(scrollYProgress, [0, 0.3, 1], [0, 1, 1]), {
    stiffness: 50,
    damping: 25
  });

  const bgOpacity = useTransform(scrollYProgress, [0, 1], [0, 0.3]);
  const bgScale = useTransform(scrollYProgress, [0, 1], [1.05, 1]);

  return (
    <motion.section 
      ref={sectionRef} 
      className="min-h-screen flex items-center justify-center bg-gradient-to-r from-accent-2/10 via-accent-3/10 to-accent-2/10 relative overflow-hidden"
      style={{ opacity: smoothOpacity }}
    >
      {/* Animated background */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-br from-accent-2/20 via-accent-3/20 to-accent-2/20"
        style={{ opacity: bgOpacity, scale: bgScale }}
      />
      <motion.div 
        className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-accent-2/30 via-transparent to-accent-3/30"
        style={{ opacity: useTransform(scrollYProgress, [0, 1], [0, 0.5]) }}
      />
      
      <div className="container mx-auto px-4 text-center py-20 relative z-10">
        <motion.h2 
          className="text-5xl md:text-6xl font-bold text-primary-1 mb-6"
          initial={{ opacity: 0, y: 40, filter: 'blur(10px)', scale: 0.9 }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)', scale: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ 
            duration: 1,
            ease: [0.16, 1, 0.3, 1],
            type: 'spring',
            stiffness: 60,
            damping: 20
          }}
        >
          Klar for din neste tur?
        </motion.h2>
        <motion.p 
          className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ 
            duration: 0.8, 
            delay: 0.2,
            ease: [0.25, 0.46, 0.45, 0.94]
          }}
        >
          Bestill raskt og enkelt via vår booking, eller ring oss direkte på 06565
        </motion.p>
        <motion.div 
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ 
            duration: 0.8, 
            delay: 0.4,
            staggerChildren: 0.1,
            ease: [0.25, 0.46, 0.45, 0.94]
          }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8, x: -30 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ 
              duration: 0.6,
              delay: 0.5,
              ease: [0.16, 1, 0.3, 1],
              type: 'spring',
              stiffness: 80,
              damping: 20
            }}
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              href="/bestill"
              className="px-8 py-4 bg-gradient-to-r from-accent-2 to-accent-3 text-white font-bold rounded-xl hover:shadow-xl transition-all duration-300 inline-block"
            >
              Bestill taxi nå
            </Link>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8, x: 30 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ 
              duration: 0.6,
              delay: 0.6,
              ease: [0.16, 1, 0.3, 1],
              type: 'spring',
              stiffness: 80,
              damping: 20
            }}
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95 }}
          >
            <a
              href="tel:06565"
              className="px-8 py-4 bg-white text-primary-1 font-semibold rounded-xl border-2 border-primary-1 hover:bg-primary-1 hover:text-white transition-all duration-300 flex items-center gap-2"
            >
              <Phone className="w-5 h-5" />
              Ring 06565
            </a>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}
