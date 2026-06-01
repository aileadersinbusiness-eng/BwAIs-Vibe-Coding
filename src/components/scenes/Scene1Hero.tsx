'use client';
import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';
import AnimatedLogo from '@/components/ui/AnimatedLogo';
import { GUIDE } from '@/lib/content';

const ReactorCanvas = dynamic(() => import('@/components/reactor/ReactorCanvas'), { ssr: false });

export default function Scene1Hero() {
  return (
    <section id="scene-0" className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ background: 'radial-gradient(ellipse 80% 60% at 50% 40%, rgba(27,108,242,0.12) 0%, transparent 70%), #03030A' }}
    >
      {/* Reactor background */}
      <div className="absolute inset-0 pointer-events-none">
        <ReactorCanvas phase={0.3} className="w-full h-full opacity-35" />
      </div>

      {/* Grid lines */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{ backgroundImage: 'linear-gradient(rgba(0,212,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,212,255,1) 1px, transparent 1px)', backgroundSize: '80px 80px' }}
      />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">

        {/* Logo — untouched */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="mb-10 flex justify-center"
        >
          <AnimatedLogo size={52} />
        </motion.div>

        {/* Text block with dark backdrop for readability */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="rounded-3xl px-8 py-10"
          style={{
            background: 'rgba(3,3,10,0.72)',
            backdropFilter: 'blur(18px)',
            WebkitBackdropFilter: 'blur(18px)',
            border: '1px solid rgba(0,212,255,0.1)',
            boxShadow: '0 8px 60px rgba(0,0,0,0.6)',
          }}
        >
          {/* Eyebrow */}
          <p style={{ fontFamily: 'Inter', fontSize: 12, color: '#8B9CB6', letterSpacing: '0.35em', textTransform: 'uppercase', marginBottom: 16 }}>
            {GUIDE.title}
          </p>

          {/* Main title */}
          <h1
            style={{ fontFamily: 'Outfit', fontWeight: 900, fontSize: 'clamp(56px, 10vw, 120px)', lineHeight: 0.95, letterSpacing: '-0.04em', marginBottom: 20 }}
          >
            <span className="cyan-glow">{GUIDE.titleAccent}</span>
          </h1>

          {/* Subtitle */}
          <p style={{ fontFamily: 'Inter', fontSize: 'clamp(15px, 2vw, 19px)', color: '#C0CCDE', letterSpacing: '0.02em', marginBottom: 12 }}>
            {GUIDE.subtitle}
          </p>

          {/* For line */}
          <p style={{ fontFamily: 'Outfit', fontSize: 'clamp(17px, 2.2vw, 24px)', color: '#F0F4FF', fontWeight: 600, marginBottom: 8 }}>
            {GUIDE.for}
          </p>

          {/* Tagline */}
          <p style={{ fontFamily: 'Inter', fontSize: 15, color: '#8B9CB6', marginBottom: 24 }}>
            {GUIDE.tagline}
          </p>

          {/* Author line */}
          <div className="flex items-center justify-center gap-3">
            <div style={{ width: 1, height: 32, background: 'linear-gradient(to bottom, transparent, #00D4FF, transparent)' }} />
            <div className="text-left">
              <p style={{ fontFamily: 'Outfit', fontSize: 14, color: '#F0F4FF', fontWeight: 500 }}>{GUIDE.authorSub}</p>
              <p style={{ fontFamily: 'Inter', fontSize: 12, color: '#4A5568', marginTop: 2 }}>{GUIDE.edition}</p>
            </div>
          </div>
        </motion.div>

        {/* Scroll cue */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 1.8 }}
          className="mt-12 flex flex-col items-center gap-2"
        >
          <span style={{ fontFamily: 'Inter', fontSize: 11, color: '#4A5568', letterSpacing: '0.2em', textTransform: 'uppercase' }}>
            Scroll to explore
          </span>
          <motion.div
            className="w-[1px] h-10"
            style={{ background: 'linear-gradient(to bottom, #00D4FF, transparent)' }}
            animate={{ scaleY: [0, 1, 0], originY: 0 }}
            transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
          />
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-40 pointer-events-none"
        style={{ background: 'linear-gradient(to bottom, transparent, #03030A)' }}
      />
    </section>
  );
}
