import React from 'react';
import { motion } from 'framer-motion';

const educationList = [
  {
    degree: 'Master of Computer Applications (MCA)',
    school: 'Chandigarh University (CU)',
    year: '2025',
    status: 'Ongoing',
    description: 'Advanced studies in software development, algorithms, and system design.',
    color: '#444444',
  },
  {
    degree: 'Diploma in Software Engineering',
    school: 'NavGurukul (Residential)',
    year: '2024',
    status: 'Completed',
    description: 'Intensive residential program focused on full-stack development.',
    color: '#555555',
  },
  {
    degree: 'Bachelor of Commerce (B.Com)',
    school: 'University of Delhi - Maharaja Agrasen College',
    year: '2022',
    status: 'Completed',
    description: 'Undergraduate degree in Commerce with focus on business fundamentals.',
    color: '#666666',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0 },
};

const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 px-4 bg-gray-100/50">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full badge-gradient text-sm font-medium mb-4">
            <svg className="w-4 h-4 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" /></svg>
            Academics
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Education
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Academic journey and qualifications
          </p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-8 md:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-gray-700 via-gray-400 to-gray-200"></div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-8"
          >
            {educationList.map((edu) => (
              <motion.div
                key={edu.degree}
                variants={itemVariants}
                className="relative flex items-start gap-6"
              >
                <div className="absolute left-8 w-4 h-4 rounded-full bg-gradient-to-br from-gray-700 to-gray-900 border-4 border-white shadow-lg transform -translate-x-1/2 z-10"></div>
                
                <div 
                  className="ml-16 md:ml-0 w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: `${edu.color}15` }}
                >
                  <svg className="w-6 h-6" fill={edu.color} viewBox="0 0 24 24"><path d="M12 3L1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9L12 3zm6.82 6L12 12.72 5.18 9 12 5.28 18.82 9zM17 15.99l-5 2.73-5-2.73v-3.72L12 15l5-2.73v3.72z"/></svg>
                </div>

                <div className="flex-1 glass-card rounded-2xl p-6 card-hover">
                  <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                    <div>
                      <h3 className="text-lg font-bold text-gray-800">{edu.degree}</h3>
                      <p className="text-sm font-semibold text-gray-600">{edu.school}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="px-3 py-1 rounded-full bg-gray-200 text-gray-700 text-xs font-semibold">
                        {edu.year}
                      </span>
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        edu.status === 'Ongoing' 
                          ? 'bg-gray-300 text-gray-800' 
                          : 'bg-gray-100 text-gray-600'
                      }`}>
                        {edu.status}
                      </span>
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm">{edu.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Education;