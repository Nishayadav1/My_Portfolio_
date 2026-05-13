import React from 'react';
import { motion } from 'framer-motion';

const certifications = [
  { 
    name: 'AWS Certified Solutions Architect', 
    issuer: 'Amazon Web Services', 
    year: '2024',
    color: '#666666',
    description: 'Cloud architecture and design patterns',
  },
  { 
    name: 'Cloud Fundamentals', 
    issuer: 'AWS', 
    year: '2023',
    color: '#666666',
    description: 'Core cloud computing concepts',
  },
  { 
    name: 'Service Desk Course', 
    issuer: 'Google', 
    year: '2023',
    color: '#444444',
    description: 'IT service management and support',
  },
  { 
    name: 'Software Development', 
    issuer: 'Coursera', 
    year: '2022',
    color: '#444444',
    description: 'Full-stack development fundamentals',
  },
  { 
    name: 'Problem Solving Certification', 
    issuer: 'Code.org', 
    year: '2022',
    color: '#444444',
    description: 'Computational thinking and algorithms',
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
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const Certifications: React.FC = () => {
  return (
    <section id="certifications" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full badge-gradient text-sm font-medium mb-4">
            <svg className="w-4 h-4 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" /></svg>
            Credentials
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Certifications
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Industry-recognized credentials validating expertise
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {certifications.map((cert) => (
            <motion.div
              key={cert.name}
              variants={itemVariants}
              className="glass-card rounded-xl p-5 card-hover group cursor-pointer"
            >
              <div className="flex items-start gap-4">
                <div 
                  className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: `${cert.color}15` }}
                >
                  <svg className="w-6 h-6" fill={cert.color} viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-base font-bold text-gray-800 mb-1 group-hover:text-gray-900 transition-colors truncate">
                    {cert.name}
                  </h3>
                  <p className="text-sm text-gray-600 mb-2">{cert.description}</p>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-semibold text-gray-700">{cert.issuer}</span>
                    <span className="text-xs text-gray-400">•</span>
                    <span className="text-xs text-gray-500">{cert.year}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;