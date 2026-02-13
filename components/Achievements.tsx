
import React from 'react';
import { motion } from 'framer-motion';
import { Award, BookOpen, CheckCircle2 } from 'lucide-react';

const achievements = [
  {
    title: "Research Publication",
    desc: "Intrusion Detection Strategies using Artificial Immune Systems in Cybersecurity",
    icon: BookOpen,
    tag: "Published"
  },
  {
    title: "Salesforce Certified Developer",
    desc: "Platform Developer certifications & expertise in CRM architecture.",
    icon: Award,
    tag: "Certification"
  },
  {
    title: "CCNA - Cisco",
    desc: "Enterprise Security, Networking, Switching, and Automation.",
    icon: CheckCircle2,
    tag: "Certification"
  },
  {
    title: "IIT Bombay & Roorkee",
    desc: "Python Programming & Machine Learning Data Science certifications.",
    icon: Award,
    tag: "Educational"
  }
];

const Achievements: React.FC = () => {
  return (
    <section id="achievements" className="py-24 relative overflow-hidden bg-navy/10">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold font-heading">Achievements</h2>
          <p className="text-gray-400 mt-4">Recognition and professional certifications</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {achievements.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="group glass p-8 rounded-3xl border border-white/5 hover:border-accent/40 transition-all flex items-start gap-6"
            >
              <div className="w-16 h-16 shrink-0 rounded-2xl bg-accent/10 text-accent flex items-center justify-center group-hover:scale-110 transition-transform">
                <item.icon size={32} />
              </div>
              <div>
                <span className="text-[10px] uppercase tracking-widest text-accent font-bold mb-2 block">{item.tag}</span>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
