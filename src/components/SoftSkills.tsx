import React from 'react';
import { motion } from 'framer-motion';

const softSkills = [
  {
    title: 'Problem Solving',
    description: 'Analytical thinking with ability to break down complex problems into manageable solutions.',
    color: '#444444',
    icon: <path fill="#444444" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>,
  },
  {
    title: 'Teamwork',
    description: 'Collaborative mindset with focus on team success and shared achievements.',
    color: '#555555',
    icon: <path fill="#555555" d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>,
  },
  {
    title: 'Communication',
    description: 'Clear and effective communication across technical and non-technical audiences.',
    color: '#666666',
    icon: <path fill="#666666" d="M9 21c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1H9v1zm3-19C8.14 2 5 5.14 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.86-3.14-7-7-7z"/>,
  },
  {
    title: 'Adaptability',
    description: 'Quick to learn and adjust to new technologies, frameworks, and challenges.',
    color: '#333333',
    icon: <path fill="#333333" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z"/>,
  },
  {
    title: 'Time Management',
    description: 'Consistently prioritizing tasks and meeting deadlines under pressure.',
    color: '#444444',
    icon: <path fill="#444444" d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"/>,
  },
  {
    title: 'Leadership',
    description: 'Demonstrates drive to achieve results and enable team success.',
    color: '#555555',
    icon: <path fill="#555555" d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z"/>,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1 },
};

const SoftSkills: React.FC = () => {
  return (
    <section id="soft-skills" className="py-20 px-4 bg-gray-100/50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full badge-gradient text-sm font-medium mb-4">
            <svg className="w-4 h-4 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            Personal Strengths
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Soft Skills
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Interpersonal skills that drive professional success
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {softSkills.map((skill) => (
            <motion.div
              key={skill.title}
              variants={itemVariants}
              className="glass-card rounded-2xl p-6 card-hover group"
            >
              <div className="flex items-start gap-4">
                <div 
                  className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: `${skill.color}15` }}
                >
                  <svg className="w-6 h-6" viewBox="0 0 24 24">{skill.icon}</svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-gray-900 transition-colors">
                    {skill.title}
                  </h3>
                  <p className="text-sm text-gray-600">{skill.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mt-12 glass rounded-2xl p-8"
        >
          <h3 className="text-xl font-bold text-gray-800 mb-6 text-center">Key Attributes</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {['Positive Attitude', 'Critical Thinking', 'Resilience', 'Initiative'].map((attr) => (
              <div key={attr} className="flex items-center gap-3 p-3 rounded-xl bg-white/50">
                <svg className="w-5 h-5 text-gray-600" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                <span className="text-sm font-medium text-gray-700">{attr}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SoftSkills;