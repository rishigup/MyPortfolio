
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sun, Moon } from 'lucide-react';

interface NavbarProps {
  isDarkMode: boolean;
  toggleTheme: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ isDarkMode, toggleTheme }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'py-4' : 'py-8'}`}>
      <div className="container mx-auto px-6">
        <div className={`mx-auto max-w-5xl flex items-center justify-between px-8 py-3 rounded-full transition-all border ${scrolled ? 'glass border-black/5 dark:border-white/10 shadow-2xl backdrop-blur-md' : 'border-transparent'}`}>
          <a href="#" className="text-2xl font-bold font-heading bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
            RKG
          </a>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-gray-500 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
              </a>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={toggleTheme}
              className="p-2 rounded-full glass border border-black/10 dark:border-white/10 text-gray-600 dark:text-gray-300 hover:text-primary transition-colors"
              aria-label="Toggle Theme"
            >
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </motion.button>
            
            <div className="hidden md:block">
              <a 
                href="#contact" 
                className="px-6 py-2 bg-gray-900 dark:bg-white/10 hover:bg-gray-800 dark:hover:bg-white/20 text-white dark:text-white border border-transparent dark:border-white/20 rounded-full text-sm font-bold transition-all shadow-lg"
              >
                Let's Talk
              </a>
            </div>

            {/* Mobile Menu Toggle */}
            <button 
              className="md:hidden text-gray-900 dark:text-white" 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-24 left-6 right-6 glass p-8 rounded-[32px] border border-black/10 dark:border-white/10 md:hidden flex flex-col items-center gap-6 shadow-2xl"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-lg font-medium text-gray-900 dark:text-white hover:text-primary transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a 
              href="#contact" 
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-3 bg-primary text-deep font-bold rounded-xl"
            >
              Hire Me
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
