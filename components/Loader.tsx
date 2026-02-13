
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const greetings = [
  "Hello",
  "नमस्ते",
  "Bonjour",
  "Hola",
  "Ciao",
  "こんにちは",
  "Rishabh"
];

const Loader: React.FC = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < greetings.length - 1) {
      const timer = setTimeout(() => {
        setIndex(prev => prev + 1);
      }, 350);
      return () => clearTimeout(timer);
    }
  }, [index]);

  return (
    <motion.div
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="fixed inset-0 z-[1000] bg-deep flex flex-col items-center justify-center overflow-hidden"
    >
      <div className="relative h-20 flex items-center justify-center overflow-hidden w-full">
        <AnimatePresence mode="wait">
          <motion.h1
            key={index}
            initial={{ y: 80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -80, opacity: 0 }}
            transition={{ duration: 0.4, ease: "backOut" }}
            className={`text-4xl md:text-7xl font-bold font-heading text-white text-center ${index === greetings.length - 1 ? 'bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-accent' : ''}`}
          >
            {greetings[index]}
          </motion.h1>
        </AnimatePresence>
      </div>

      <motion.div 
        initial={{ width: 0 }}
        animate={{ width: "200px" }}
        transition={{ duration: 2.5, ease: "linear" }}
        className="h-[1px] bg-primary mt-12 relative shadow-[0_0_10px_rgba(0,255,156,0.8)]"
      >
        <motion.div 
          className="absolute inset-0 bg-primary blur-sm"
        />
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        className="absolute bottom-12 uppercase tracking-[0.8em] text-white text-[10px] font-medium"
      >
        Initializing Core System
      </motion.p>
      
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] bg-[radial-gradient(circle_at_center,rgba(0,255,156,0.1)_0%,transparent_70%)]" />
      </div>
    </motion.div>
  );
};

export default Loader;
