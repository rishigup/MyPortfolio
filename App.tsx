
import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import CursorGlow from './components/CursorGlow';
import Loader from './components/Loader';

const App: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    // Theme initialization
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark');
    } else {
      setIsDarkMode(false);
      document.documentElement.classList.remove('dark');
      if (!savedTheme) localStorage.setItem('theme', 'light');
    }

    // Loader timeout
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2800); // Slightly longer than the loader animation cycle

    return () => clearTimeout(timer);
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDarkMode;
    setIsDarkMode(newTheme);
    if (newTheme) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  return (
    <div className="relative min-h-screen bg-white dark:bg-deep text-gray-900 dark:text-white selection:bg-primary selection:text-deep transition-colors duration-300 overflow-x-hidden">
      <AnimatePresence mode="wait">
        {loading && <Loader key="loader" />}
      </AnimatePresence>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: loading ? 0 : 1 }}
        transition={{ duration: 0.8 }}
      >
        <CursorGlow isDarkMode={isDarkMode} />
        <Navbar isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
        
        {/* Scroll Progress Bar */}
        <motion.div 
          className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-secondary to-accent z-[100] origin-left"
          style={{ scaleX }}
        />

        <main>
          <Hero />
          <About />
          <Experience />
          <Skills />
          <Projects />
          <Achievements />
          <Contact />
        </main>

        <footer className="py-12 border-t border-black/5 dark:border-white/5 relative overflow-hidden bg-gray-50 dark:bg-transparent transition-colors">
          <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
            <div>
              <h2 className="text-2xl font-bold font-heading bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                Rishabh Kumar Gupta
              </h2>
              <p className="text-gray-500 dark:text-gray-400 mt-2">Built with passion & precision.</p>
            </div>
            <div className="flex gap-6 text-gray-500 dark:text-gray-400 text-sm">
              <a href="https://github.com/rishabhgupta841437" target="_blank" className="hover:text-primary transition-colors">GitHub</a>
              <a href="#" target="_blank" className="hover:text-primary transition-colors">LinkedIn</a>
              <a href="mailto:rishabhgupta841437@gmail.com" className="hover:text-primary transition-colors">Email</a>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-primary via-secondary to-accent opacity-30" />
        </footer>
      </motion.div>
    </div>
  );
};

export default App;
