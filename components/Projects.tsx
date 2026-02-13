
import React, { useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ExternalLink, Github, Zap, Target, Database, Cpu, Globe } from 'lucide-react';

const projects = [
  {
    title: "RailMadad",
    subtitle: "AI Complaint System",
    desc: "AI-powered grievance system for Indian Railways. Implemented NLP routing that manages 5k+ complaints monthly.",
    tech: ["Python", "NLP", "FastAPI", "PostgreSQL"],
    metrics: ["92% Accuracy", "60% Faster Resolution"],
    link: "#",
    github: "https://github.com/rishabhgupta841437",
    image: "https://images.unsplash.com/photo-1474487548417-781cb71495f3?auto=format&fit=crop&q=80&w=1200",
    icon: Target,
    color: "#00FF9C"
  },
  {
    title: "Enterprise RAG",
    subtitle: "Knowledge Intelligence",
    desc: "Hyper-efficient RAG system processing 10k+ enterprise documents with sub-200ms semantic search latency.",
    tech: ["LangChain", "OpenAI", "Pinecone", "FastAPI"],
    metrics: ["94% Precision", "50M+ Embeddings"],
    link: "#",
    github: "https://github.com/rishabhgupta841437",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1200",
    icon: Database,
    color: "#7B2FF7"
  },
  {
    title: "FrooteX",
    subtitle: "Agri-Tech Platform",
    desc: "A scalable MERN marketplace connecting farmers with enterprise buyers. Features role-based dashboards.",
    tech: ["React.js", "Node.js", "Firebase", "Stripe"],
    metrics: ["2k+ Active Users", "Secure Payments"],
    link: "#",
    github: "https://github.com/rishabhgupta841437",
    image: "https://images.unsplash.com/photo-1595089051834-0ed07869689c?auto=format&fit=crop&q=80&w=1200",
    icon: Globe,
    color: "#FF0080"
  },
  {
    title: "SmartGrow",
    subtitle: "IoT Agri-Monitoring",
    desc: "Precision agriculture dashboard for real-time crop health visualization using IoT sensor integration.",
    tech: ["React.js", "IoT", "Vercel", "Tailwind"],
    metrics: ["Real-time Data", "Precision Farming"],
    link: "#",
    github: "https://github.com/rishabhgupta841437",
    image: "https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?auto=format&fit=crop&q=80&w=1200",
    icon: Zap,
    color: "#00FF9C"
  }
];

const ProjectCard: React.FC<{ project: typeof projects[0]; idx: number }> = ({ project, idx }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 20 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["5deg", "-5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-5deg", "5deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current || window.innerWidth < 1024) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateY,
        rotateX,
        transformStyle: "preserve-3d",
      }}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: idx * 0.1, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      viewport={{ once: true }}
      className="group relative w-full min-h-[500px] lg:h-[600px] rounded-[2rem] lg:rounded-[2.5rem] bg-gray-50 dark:bg-zinc-900 border border-black/5 dark:border-white/5 overflow-hidden shadow-2xl hover:shadow-primary/5 transition-all"
    >
      {/* Background Image Container */}
      <div className="absolute inset-0 z-0 h-full w-full pointer-events-none">
        <motion.div 
          className="h-full w-full"
          style={{
            scale: 1.1,
            x: useTransform(mouseXSpring, [-0.5, 0.5], [10, -10]),
            y: useTransform(mouseYSpring, [-0.5, 0.5], [10, -10]),
          }}
        >
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-full object-cover opacity-30 dark:opacity-20 group-hover:opacity-50 dark:group-hover:opacity-40 transition-opacity duration-700 grayscale group-hover:grayscale-0" 
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-t from-white via-white/90 to-transparent dark:from-zinc-950 dark:via-zinc-950/90 transition-colors" />
      </div>

      {/* Spotlight Effect - Hidden on small screens for performance */}
      <motion.div
        className="absolute inset-0 z-10 pointer-events-none opacity-0 lg:group-hover:opacity-100 transition-opacity duration-500 hidden lg:block"
        style={{
          background: useTransform(
            [mouseXSpring, mouseYSpring],
            ([mx, my]) => `radial-gradient(600px circle at ${(mx as number + 0.5) * 100}% ${(my as number + 0.5) * 100}%, ${project.color}15, transparent 80%)`
          )
        }}
      />

      {/* Content Container */}
      <div className="relative z-20 p-6 sm:p-8 lg:p-10 h-full flex flex-col justify-end">
        <div 
          style={{ transform: "translateZ(30px)" }}
          className="mb-auto"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl glass border border-black/5 dark:border-white/10 mb-4 sm:mb-6">
            <project.icon size={16} className="text-primary" />
            <span className="text-[9px] sm:text-[10px] font-black uppercase tracking-[0.2em] text-gray-500 dark:text-gray-400">
              {project.subtitle}
            </span>
          </div>
        </div>

        <div style={{ transform: "translateZ(50px)" }}>
          <h3 className="text-3xl sm:text-4xl lg:text-5xl font-black font-heading mb-4 sm:mb-6 text-gray-900 dark:text-white group-hover:text-primary transition-colors leading-tight">
            {project.title}
          </h3>
          
          <p className="text-sm sm:text-base lg:text-lg text-gray-600 dark:text-gray-400 mb-6 sm:mb-8 max-w-sm line-clamp-3 leading-relaxed font-medium">
            {project.desc}
          </p>

          <div className="flex flex-wrap gap-2 mb-6 sm:mb-10">
            {project.tech.map((t) => (
              <span key={t} className="px-3 py-1 rounded-full glass border border-black/5 dark:border-white/10 text-[9px] sm:text-[10px] font-bold uppercase tracking-widest text-gray-700 dark:text-gray-300">
                {t}
              </span>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center justify-between border-t border-black/5 dark:border-white/10 pt-6 sm:pt-8 gap-6">
            <div className="flex gap-6 sm:gap-8">
              {project.metrics.map((m) => (
                <div key={m} className="flex flex-col">
                  <span className="text-[9px] uppercase tracking-widest text-primary font-black mb-1">Performance</span>
                  <span className="text-xs sm:text-sm font-bold text-gray-900 dark:text-white">{m}</span>
                </div>
              ))}
            </div>
            
            <div className="flex gap-4">
              <motion.a 
                href={project.github}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="p-3 sm:p-4 rounded-xl sm:rounded-2xl glass border border-black/5 dark:border-white/10 text-gray-600 dark:text-gray-400 transition-all shadow-lg hover:text-primary"
              >
                <Github size={20} />
              </motion.a>
              <motion.a 
                href={project.link}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-primary text-deep shadow-xl shadow-primary/20 transition-all"
              >
                <ExternalLink size={20} />
              </motion.a>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24 md:py-32 relative bg-white dark:bg-deep transition-colors duration-500 overflow-hidden">
      {/* Decorative Blur */}
      <div className="absolute top-1/2 left-0 w-64 md:w-[500px] h-64 md:h-[500px] bg-primary/5 rounded-full blur-[100px] md:blur-[150px] -z-10" />
      <div className="absolute bottom-0 right-0 w-64 md:w-[500px] h-64 md:h-[500px] bg-secondary/5 rounded-full blur-[100px] md:blur-[150px] -z-10" />

      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-10 mb-16 md:mb-24">
          <div className="max-w-3xl">
            <motion.span 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-primary font-bold uppercase tracking-[0.4em] text-[10px] md:text-xs mb-4 block"
            >
              Masterpieces
            </motion.span>
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black font-heading text-gray-900 dark:text-white leading-[1.1]">
              FEATURED <br />
              <span className="text-primary italic">WORK.</span>
            </h2>
          </div>
          <div className="flex flex-col items-start lg:items-end gap-6 max-w-sm">
            <p className="text-base sm:text-lg text-gray-500 dark:text-gray-400 leading-relaxed lg:text-right">
              Exploring the frontiers of AI intelligence and secure enterprise architectures.
            </p>
            <motion.a 
              href="https://github.com/rishabhgupta841437" 
              target="_blank"
              whileHover={{ x: 5, color: '#00FF9C' }}
              className="group flex items-center gap-3 text-gray-900 dark:text-white font-black uppercase tracking-widest text-[10px] transition-colors"
            >
              View More 20+ Repos
              <Globe size={16} className="group-hover:rotate-12 transition-transform" />
            </motion.a>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          {projects.map((project, idx) => (
            <ProjectCard key={idx} project={project} idx={idx} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
