
import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, ExternalLink } from 'lucide-react';

const experiences = [
  {
    role: "Software Engineering Intern",
    company: "Govt. of Bihar",
    period: "Dec 2025 - Present",
    location: "Patna, India",
    points: [
      "Driving digital transformation for 500+ officials.",
      "Architected secure backend APIs reducing manual work by 45%.",
      "Ensuring compliance with government data security standards."
    ]
  },
  {
    role: "Data Analytics Intern",
    company: "Amdox Technologies",
    period: "Oct 2025 - Dec 2025",
    location: "Remote",
    points: [
      "Identified bottlenecks leading to 30% improvement in efficiency.",
      "Developed ML models with 87% forecasting accuracy.",
      "Automated ETL pipelines processing 10GB+ daily data."
    ]
  },
  {
    role: "Full Stack Intern",
    company: "DevStreak",
    period: "June 2025 - Present",
    location: "Remote",
    points: [
      "Engineered MERN applications for 2,000+ users.",
      "Optimized queries, cutting response times by 65%.",
      "Implemented test suites with 85%+ coverage."
    ]
  }
];

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-32 bg-white dark:bg-zinc-950 transition-colors duration-700 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="flex flex-col items-center text-center mb-24"
        >
          <h2 className="text-xs uppercase tracking-[0.5em] text-primary font-bold mb-6">Career Path</h2>
          <h2 className="text-5xl md:text-6xl font-black font-heading text-gray-900 dark:text-white">Experience</h2>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-12">
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.8 }}
              className="group glass p-10 rounded-[2.5rem] border border-black/5 dark:border-white/5 hover:border-primary/20 transition-all flex flex-col md:flex-row gap-8 shadow-xl"
            >
              <div className="md:w-1/3">
                <div className="flex items-center gap-3 text-primary mb-2">
                  <Briefcase size={16} className="shrink-0" />
                  <span className="font-black text-sm uppercase tracking-widest">{exp.company}</span>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">{exp.role}</h3>
                <div className="flex flex-col gap-2 text-gray-500 dark:text-gray-400 text-xs font-medium">
                  <span className="flex items-center gap-2"><Calendar size={12} /> {exp.period}</span>
                  <span className="flex items-center gap-2"><MapPin size={12} /> {exp.location}</span>
                </div>
              </div>
              
              <div className="md:w-2/3 border-l border-black/5 dark:border-white/10 md:pl-8 space-y-4">
                <ul className="space-y-4">
                  {exp.points.map((point, i) => (
                    <li key={i} className="text-gray-600 dark:text-gray-300 flex gap-4 text-base leading-relaxed">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 shrink-0 shadow-[0_0_8px_rgba(0,245,255,0.6)]" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
