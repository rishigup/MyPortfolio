
import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Code2, BrainCircuit, Layout, Terminal, Sparkles, Binary } from 'lucide-react';

const skillsData = [
  {
    category: "Languages",
    subtitle: "Syntax & Logic",
    icon: Binary,
    color: "#00FF9C",
    skills: ["Python", "JavaScript", "TypeScript", "C/C++", "Java", "Go", "SQL"]
  },
  {
    category: "AI & Data",
    subtitle: "Intelligence Layer",
    icon: BrainCircuit,
    color: "#7B2FF7",
    skills: ["PyTorch", "TensorFlow", "NLP", "LLMs", "LangChain", "RAG", "OpenAI"]
  },
  {
    category: "Frameworks",
    subtitle: "App Ecosystem",
    icon: Layout,
    color: "#FF0080",
    skills: ["React", "Next.js", "FastAPI", "Node.js", "MongoDB", "Tailwind", "Three.js"]
  },
  {
    category: "DevOps",
    subtitle: "Infrastructure",
    icon: Terminal,
    color: "#00FF9C",
    skills: ["Docker", "Kubernetes", "Git", "CI/CD", "Vercel", "n8n", "PostgreSQL"]
  }
];

const SkillCard = ({ cat, idx }: { cat: typeof skillsData[0], idx: number }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

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
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: idx * 0.1, duration: 0.8 }}
      viewport={{ once: true }}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className="group relative p-6 sm:p-8 rounded-[2rem] bg-gray-50/50 dark:bg-zinc-900/50 border border-black/5 dark:border-white/5 overflow-hidden transition-all duration-500 shadow-xl"
    >
      {/* Dynamic Background Glow - Hidden on mobile */}
      <motion.div
        className="absolute inset-0 z-0 pointer-events-none opacity-0 lg:group-hover:opacity-100 transition-opacity duration-500 hidden lg:block"
        style={{
          background: useTransform(
            [mouseXSpring, mouseYSpring],
            ([mx, my]) => `radial-gradient(400px circle at ${(mx as number + 0.5) * 100}% ${(my as number + 0.5) * 100}%, ${cat.color}10, transparent 80%)`
          )
        }}
      />

      <div className="relative z-10">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-12 h-12 rounded-xl bg-white dark:bg-zinc-800 flex items-center justify-center text-primary shadow-lg border border-black/5 dark:border-white/5 group-hover:scale-110 transition-all duration-500">
            <cat.icon size={24} />
          </div>
          <div>
            <p className="text-[9px] font-black uppercase tracking-[0.2em] text-gray-400 dark:text-gray-500 mb-0.5">{cat.subtitle}</p>
            <h3 className="text-lg font-black text-gray-900 dark:text-white uppercase tracking-tighter">
              {cat.category}
            </h3>
          </div>
        </div>

        <div className="flex flex-wrap gap-2">
          {cat.skills.map((skill, i) => (
            <motion.span
              key={i}
              whileHover={{ scale: 1.05, y: -2 }}
              className="px-3 py-1.5 bg-white dark:bg-zinc-800/50 border border-black/5 dark:border-white/10 rounded-lg text-[10px] sm:text-xs font-bold text-gray-600 dark:text-gray-400 hover:text-primary transition-all cursor-default shadow-sm"
            >
              {skill}
            </motion.span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-24 md:py-32 relative bg-white dark:bg-deep transition-colors duration-700 overflow-hidden">
      <div className="absolute top-1/4 -right-20 w-64 md:w-96 h-64 md:h-96 bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 -left-20 w-64 md:w-96 h-64 md:h-96 bg-secondary/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center text-center mb-16 md:mb-24">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/20 text-primary bg-primary/5 mb-6 md:mb-8 text-[9px] font-black tracking-[0.3em] uppercase"
          >
            <Sparkles size={12} />
            Tech Stack
          </motion.div>
          
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black font-heading text-gray-900 dark:text-white leading-tight">
            CORE <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-accent">CAPABILITIES.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 max-w-7xl mx-auto">
          {skillsData.map((cat, idx) => (
            <SkillCard key={idx} cat={cat} idx={idx} />
          ))}
        </div>

        <div className="mt-20 md:mt-32 relative flex flex-wrap justify-center items-center gap-x-8 md:gap-x-16 gap-y-6 md:gap-y-10 opacity-20">
          <div className="absolute inset-0 bg-gradient-to-r from-white via-transparent to-white dark:from-deep dark:via-transparent dark:to-deep pointer-events-none z-10" />
          {['PyTorch', 'React', 'FastAPI', 'Next.js', 'PostgreSQL', 'Docker', 'OpenAI', 'LangChain', 'MongoDB'].map((tech, i) => (
            <motion.span 
              key={tech} 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: i * 0.05 }}
              className="text-xl md:text-3xl font-black font-heading text-gray-300 dark:text-zinc-800"
            >
              {tech}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
