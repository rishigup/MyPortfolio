
import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowRight, Sparkles, ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-24 lg:pt-0 overflow-hidden bg-white dark:bg-deep transition-colors duration-300">
      {/* Immersive Background Decorations */}
      <div className="absolute top-[10%] left-[-5%] w-[400px] md:w-[600px] h-[400px] md:h-[600px] bg-primary/10 rounded-full blur-[100px] md:blur-[150px] -z-10 opacity-30 dark:opacity-60 animate-pulse-slow" />
      <div className="absolute bottom-[10%] right-[-5%] w-[400px] md:w-[600px] h-[400px] md:h-[600px] bg-secondary/10 rounded-full blur-[100px] md:blur-[150px] -z-10 opacity-30 dark:opacity-60 animate-pulse-slow" />
      
      {/* Subtle Grainy Texture Overlay */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10 text-center">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
              className="inline-flex items-center gap-2 px-6 py-2 rounded-full border border-black/5 dark:border-white/10 glass mb-10 text-[10px] md:text-xs font-black tracking-[0.4em] uppercase text-gray-500 dark:text-gray-400"
            >
              <Sparkles size={14} className="text-primary" />
              Digital Architect & AI Strategist
            </motion.div>
            
            <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-[10rem] font-black font-heading leading-[0.85] text-gray-900 dark:text-white tracking-tighter mb-8">
              RISHABH <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-accent">
                KUMAR GUPTA.
              </span>
            </h1>

            <p className="text-lg md:text-2xl text-gray-500 dark:text-gray-400 max-w-3xl mx-auto font-medium leading-relaxed mb-12">
              Building next-generation intelligent systems and hyper-secure enterprise architectures. 
              Bridging the gap between <span className="text-primary">Human Logic</span> and <span className="text-secondary">Machine Intelligence</span>.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto px-12 py-5 bg-gray-900 dark:bg-primary text-white dark:text-deep font-black rounded-2xl flex items-center justify-center gap-4 group shadow-[0_20px_40px_rgba(0,0,0,0.1)] dark:shadow-[0_20px_40px_rgba(0,245,255,0.2)] transition-all text-sm uppercase tracking-[0.3em]"
              >
                Launch Portfolio
                <ArrowRight className="group-hover:translate-x-2 transition-transform duration-300" size={20} />
              </motion.a>
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto px-12 py-5 border border-black/10 dark:border-white/10 hover:border-primary/50 text-gray-900 dark:text-white font-black rounded-2xl flex items-center justify-center gap-3 transition-all glass text-sm uppercase tracking-[0.3em]"
              >
                Inquire Now
              </motion.a>
            </div>

            <div className="flex justify-center gap-10 mt-20">
              {[
                { icon: Github, link: 'https://github.com/rishabhgupta841437', label: 'GitHub' },
                { icon: Linkedin, link: '#', label: 'LinkedIn' },
                { icon: Mail, link: 'mailto:rishabhgupta841437@gmail.com', label: 'Email' },
              ].map((item, idx) => (
                <motion.a
                  key={idx}
                  href={item.link}
                  target="_blank"
                  rel="noreferrer"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1 + idx * 0.1 }}
                  whileHover={{ y: -8, scale: 1.1 }}
                  className="text-gray-400 hover:text-primary transition-all p-3 rounded-2xl glass border border-transparent hover:border-primary/20 shadow-lg group"
                  title={item.label}
                >
                  <item.icon size={24} />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 cursor-pointer hover:opacity-100 transition-opacity"
        onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
      >
        <span className="text-[10px] uppercase tracking-[0.5em] font-black text-gray-400">Scroll Down</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown size={24} className="text-primary" />
        </motion.div>
      </motion.div>

      {/* Vertical Side Lines */}
      <div className="absolute left-10 bottom-0 h-48 w-[1px] bg-gradient-to-t from-primary/30 to-transparent hidden xl:block" />
      <div className="absolute right-10 bottom-0 h-48 w-[1px] bg-gradient-to-t from-secondary/30 to-transparent hidden xl:block" />
    </section>
  );
};

export default Hero;
