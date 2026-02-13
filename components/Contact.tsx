
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Mail, MapPin, Phone, Copy, Check, ExternalLink, Globe, MessageSquare } from 'lucide-react';

const ContactCard = ({ icon: Icon, label, value, href }: { icon: any, label: string, value: string, href?: string }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(value);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <motion.div 
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.02, x: 10 }}
      className="group relative p-8 glass rounded-[2.5rem] border border-black/5 dark:border-white/10 overflow-hidden transition-all duration-300 shadow-xl hover:shadow-primary/5"
    >
      <div className="relative z-10 flex items-center gap-8">
        <div className="w-16 h-16 shrink-0 rounded-[1.5rem] bg-gray-50 dark:bg-zinc-900 flex items-center justify-center text-primary group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 border border-black/5 dark:border-white/10 shadow-lg">
          <Icon size={28} />
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-[10px] uppercase tracking-[0.3em] text-gray-400 dark:text-gray-500 font-black mb-1.5">{label}</p>
          <p className="text-gray-900 dark:text-white font-bold truncate text-xl tracking-tight">{value}</p>
        </div>
        <div className="flex gap-3">
          {href && (
            <a 
              href={href} 
              className="p-3.5 rounded-2xl glass border border-black/5 dark:border-white/10 text-gray-400 hover:text-primary hover:bg-white dark:hover:bg-zinc-800 transition-all shadow-md"
              title={`Open ${label}`}
            >
              <ExternalLink size={20} />
            </a>
          )}
          <button 
            onClick={handleCopy}
            className="p-3.5 rounded-2xl glass border border-black/5 dark:border-white/10 text-gray-400 hover:text-primary hover:bg-white dark:hover:bg-zinc-800 transition-all shadow-md"
            title="Copy to clipboard"
          >
            {copied ? <Check size={20} className="text-green-500" /> : <Copy size={20} />}
          </button>
        </div>
      </div>
      
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-secondary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
    </motion.div>
  );
};

const Contact: React.FC = () => {
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'sent'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('submitting');
    setTimeout(() => {
      setFormState('sent');
      setTimeout(() => setFormState('idle'), 3000);
    }, 2000);
  };

  return (
    <section id="contact" className="py-32 md:py-48 relative overflow-hidden bg-white dark:bg-deep transition-colors duration-700">
      {/* High-end Background Elements */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[radial-gradient(circle_at_70%_30%,rgba(0,245,255,0.05)_0%,transparent_70%)] pointer-events-none" />
      <div className="absolute -bottom-[10%] -left-[10%] w-[800px] h-[800px] bg-[radial-gradient(circle_at_20%_80%,rgba(123,47,247,0.05)_0%,transparent_70%)] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-black/5 dark:via-white/5 to-transparent" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-start">
            
            {/* Left Content: The "Vision" Side */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-5"
            >
              <div className="mb-16">
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: "80px" }}
                  transition={{ duration: 1, delay: 0.5 }}
                  className="h-1 bg-primary mb-8"
                />
                <h2 className="text-6xl md:text-8xl font-black font-heading text-gray-900 dark:text-white leading-[0.95] tracking-tighter mb-10">
                  LET'S <br />
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-accent">CONNECT</span> <br />
                  VOICE.
                </h2>
                <p className="text-gray-500 dark:text-gray-400 text-xl leading-relaxed max-w-md font-medium">
                  Have a groundbreaking idea? Let's engineer it into reality with AI-driven precision and full-stack scale.
                </p>
              </div>

              <div className="space-y-6">
                <ContactCard 
                  icon={Mail} 
                  label="Inquiries" 
                  value="rishabhgupta841437@gmail.com" 
                  href="mailto:rishabhgupta841437@gmail.com"
                />
                <ContactCard 
                  icon={Phone} 
                  label="Direct Line" 
                  value="+91 7209680508" 
                  href="tel:+917209680508"
                />
                <ContactCard 
                  icon={MessageSquare} 
                  label="Availability" 
                  value="Ready for Global Remote" 
                />
              </div>

              <div className="mt-16 flex items-center gap-6 opacity-40 hover:opacity-100 transition-opacity">
                <span className="text-[10px] font-black uppercase tracking-[0.5em] text-gray-500">Bihar, IN</span>
                <div className="w-12 h-[1px] bg-gray-300 dark:bg-zinc-800" />
                <Globe size={16} className="text-primary animate-spin-slow" />
              </div>
            </motion.div>

            {/* Right Content: The "Transmission" Side */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-7"
            >
              <div className="relative glass p-10 md:p-16 rounded-[3.5rem] border border-black/5 dark:border-white/10 shadow-[0_40px_100px_rgba(0,0,0,0.08)] dark:shadow-[0_40px_100px_rgba(0,0,0,0.4)] overflow-hidden group bg-white/40 dark:bg-zinc-950/40">
                {/* Visual Depth Accents */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 blur-3xl rounded-full" />
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-secondary/5 blur-3xl rounded-full" />

                <form className="relative z-10 space-y-10" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div className="space-y-4">
                      <label className="text-[10px] uppercase tracking-[0.4em] text-gray-400 dark:text-gray-500 font-black ml-4">Identifier</label>
                      <input 
                        required
                        type="text" 
                        placeholder="Your Name" 
                        className="w-full px-8 py-6 rounded-[1.5rem] bg-gray-50/50 dark:bg-white/5 border border-black/5 dark:border-white/10 focus:border-primary focus:ring-8 focus:ring-primary/5 outline-none text-gray-900 dark:text-white transition-all placeholder:text-gray-300 dark:placeholder:text-white/10 text-lg font-bold"
                      />
                    </div>
                    <div className="space-y-4">
                      <label className="text-[10px] uppercase tracking-[0.4em] text-gray-400 dark:text-gray-500 font-black ml-4">Terminal</label>
                      <input 
                        required
                        type="email" 
                        placeholder="Your Email" 
                        className="w-full px-8 py-6 rounded-[1.5rem] bg-gray-50/50 dark:bg-white/5 border border-black/5 dark:border-white/10 focus:border-primary focus:ring-8 focus:ring-primary/5 outline-none text-gray-900 dark:text-white transition-all placeholder:text-gray-300 dark:placeholder:text-white/10 text-lg font-bold"
                      />
                    </div>
                  </div>

                  <div className="space-y-4">
                    <label className="text-[10px] uppercase tracking-[0.4em] text-gray-400 dark:text-gray-500 font-black ml-4">Manifesto</label>
                    <textarea 
                      required
                      rows={6} 
                      placeholder="Describe your vision..." 
                      className="w-full px-8 py-6 rounded-[2rem] bg-gray-50/50 dark:bg-white/5 border border-black/5 dark:border-white/10 focus:border-primary focus:ring-8 focus:ring-primary/5 outline-none text-gray-900 dark:text-white transition-all placeholder:text-gray-300 dark:placeholder:text-white/10 resize-none text-lg font-bold leading-relaxed"
                    />
                  </div>

                  <motion.button
                    disabled={formState !== 'idle'}
                    whileHover={{ scale: 1.02, y: -5 }}
                    whileTap={{ scale: 0.98 }}
                    className={`w-full py-8 rounded-[2rem] font-black text-xl uppercase tracking-[0.5em] flex items-center justify-center gap-6 transition-all duration-500 relative overflow-hidden group/btn ${
                      formState === 'sent' 
                        ? 'bg-green-500 text-white shadow-green-500/20' 
                        : 'bg-gray-900 dark:bg-primary text-white dark:text-deep shadow-2xl shadow-primary/20 hover:shadow-primary/40'
                    }`}
                  >
                    <AnimatePresence mode="wait">
                      {formState === 'idle' && (
                        <motion.div 
                          key="idle"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          className="flex items-center gap-4"
                        >
                          Send Message
                          <Send size={24} className="group-hover/btn:translate-x-2 group-hover/btn:-translate-y-2 transition-transform duration-500" />
                        </motion.div>
                      )}
                      {formState === 'submitting' && (
                        <motion.div 
                          key="submitting"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          className="flex items-center gap-4"
                        >
                          <div className="w-6 h-6 border-[3px] border-current border-t-transparent rounded-full animate-spin" />
                          Transmitting...
                        </motion.div>
                      )}
                      {formState === 'sent' && (
                        <motion.div 
                          key="sent"
                          initial={{ scale: 0.8, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          className="flex items-center gap-4"
                        >
                          <Check size={28} strokeWidth={3} />
                          Payload Received
                        </motion.div>
                      )}
                    </AnimatePresence>
                    
                    {/* Magnetic shine effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover/btn:animate-[shimmer_1.5s_infinite] pointer-events-none" />
                  </motion.button>
                </form>
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
