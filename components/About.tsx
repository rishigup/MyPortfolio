
import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Code, Server, Shield, Brain } from 'lucide-react';

const StatCounter = ({ value, label, suffix = "" }: { value: number, label: string, suffix?: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = value;
      const duration = 2000;
      const increment = end / (duration / 16);
      
      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);
      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return (
    <div ref={ref} className="text-center p-6 glass rounded-2xl hover:bg-gray-100 dark:hover:bg-white/5 transition-colors border border-black/5 dark:border-white/5 shadow-sm">
      <h3 className="text-4xl font-bold font-heading text-primary">{count}{suffix}</h3>
      <p className="text-gray-500 dark:text-gray-400 mt-2 text-sm uppercase tracking-widest">{label}</p>
    </div>
  );
};

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden bg-gray-50 dark:bg-deep transition-colors duration-300">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center mb-20"
        >
          <h2 className="text-sm uppercase tracking-[0.4em] text-primary mb-4">Discovery</h2>
          <h2 className="text-4xl md:text-5xl font-bold font-heading mb-6 text-gray-900 dark:text-white">About Me</h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
            I'm a B.Tech Computer Science student specializing in Cyber Security at GEC West Champaran. 
            With a CGPA of 8.16 and a diverse portfolio of 6+ internships, I bridge the gap between AI engineering 
            and scalable full-stack applications. My passion lies in building secure, intelligent systems that 
            solve real-world problems.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          <StatCounter value={6} label="Internships" suffix="+" />
          <StatCounter value={15} label="Projects" suffix="+" />
          <StatCounter value={94} label="AI Accuracy" suffix="%" />
          <StatCounter value={2000} label="Users Impacted" suffix="+" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            {
              title: "AI & ML Engineer",
              desc: "Deep expertise in NLP, RAG systems, and LLMs using LangChain and PyTorch. Building intelligent solutions with 94%+ accuracy.",
              icon: Brain,
              color: "primary"
            },
            {
              title: "Full Stack Developer",
              desc: "Engineering scalable MERN and Next.js applications. Optimized APIs reducing latency by 65%.",
              icon: Code,
              color: "secondary"
            },
            {
              title: "Cyber Security",
              desc: "Focused on secure architectures, JWT authentication, and RBAC systems to protect data at scale.",
              icon: Shield,
              color: "accent"
            },
            {
              title: "Data Analytics",
              desc: "Processed 50,000+ data points for demand forecasting and created ETL pipelines handling 10GB+ daily data.",
              icon: Server,
              color: "primary"
            }
          ].map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ y: -10 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="glass p-8 rounded-3xl group border border-black/5 dark:border-white/5 hover:border-primary/20 transition-all duration-300 shadow-xl"
            >
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 bg-${item.color}/10 text-${item.color} group-hover:scale-110 transition-transform`}>
                <item.icon size={28} />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">{item.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
