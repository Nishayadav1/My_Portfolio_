import React from 'react';
import { motion } from 'framer-motion';

const experiences = [
  {
    role: 'Fullstack Developer',
    company: 'Sparquer Pvt. Ltd.',
    period: 'Jun 2025 – Present',
    type: 'Full-time',
    description: 'Leading frontend development for enterprise applications with focus on performance and scalability.',
    highlights: [
      'Developed ALMS (Arms License Management System) using Next.js with TypeScript',
      'Implemented Redux Toolkit, Context API, and React Query for state management',
      'Built responsive UI using TailwindCSS and Mantine components',
      'Engineered complex multi-step forms with hierarchical mappings',
      'Added secure file upload, PDF export using jspdf and html2canvas',
      'Designed analytics dashboards with Chart.js and Recharts',
    ],
    tech: ['Next.js', 'TypeScript', 'Redux Toolkit', 'React Query', 'TailwindCSS', 'Mantine', 'Chart.js', 'Jest', 'Git'],
  },
  {
    role: 'Frontend Developer',
    company: 'Yahweh Software Solutions',
    period: 'Feb 2025 – Jun 2025',
    type: 'Full-time',
    description: 'Built scalable learning management system with focus on user experience.',
    highlights: [
      'Developed reusable UI components for LMS using React.js',
      'Integrated REST APIs for authentication and course modules',
      'Enhanced performance with optimized rendering techniques',
      'Implemented role-based access control and error handling',
      'Collaborated in Agile sprints using Git/GitHub',
    ],
    tech: ['React.js', 'React Router', 'Context API', 'TailwindCSS', 'REST APIs', 'Git', 'Agile'],
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

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full badge-gradient text-sm font-medium mb-4">
            <svg className="w-4 h-4 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
            Career Journey
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Work Experience
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Building impactful solutions through modern technologies
          </p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-gray-700 via-gray-400 to-gray-200"></div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-10"
          >
            {experiences.map((exp, index) => {
              const isLeft = index % 2 === 0;
              return (
                <motion.div
                  key={exp.role}
                  variants={itemVariants}
                  className={`relative flex items-center ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                >
                  <div className="absolute left-8 md:left-1/2 w-4 h-4 rounded-full bg-gradient-to-br from-gray-700 to-gray-900 border-4 border-white shadow-lg z-10 transform -translate-x-1/2"></div>

                  <div className={`ml-16 md:ml-0 md:w-[calc(50%-2rem)] ${isLeft ? 'md:mr-auto' : 'md:ml-auto'}`}>
                    <div className="glass-card rounded-2xl p-6 card-hover group">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-gray-100">
                            <svg className="w-6 h-6" fill="#666666" viewBox="0 0 24 24"><path d="M12 10.11c1.03 0 1.87.84 1.87 1.89 0 1-.84 1.85-1.87 1.85-1.03 0-1.87-.85-1.87-1.85 0-1.05.84-1.89 1.87-1.89M7.37 20c.63.38 2.01-.2 3.6-1.7 1.59-1.5 2.25-3.03 2.05-3.6-.22-.6-.91-.79-1.42-.55-.51.25-.79.79-.7 1.28.13.72-.36 1.44-1.42 1.31-1.06-.13-1.59-.93-1.42-1.71.17-.77.76-1.25 1.33-1.08.57.17.87.73.73 1.28-.09.36-.38.68-.76.77-.25-1.67-1.1-2.9-2.01-2.88-.65.02-1.12.58-1.26 1.23-.16.78-.39 1.95.28 3.09.7 1.19 1.77 1.62 2.54 1.22m1.66-11.95c.46-.46 1.17-.35 1.64.11.47.46.35 1.17-.11 1.64-.46.47-1.17.35-1.64-.11-.47-.46-.35-1.17.11-1.64M16 4.67c.64.52 1.15 1.28 1.41 2.22.27 1.02.12 1.85-.42 2.3-.54.45-1.26.33-1.79-.12-.53-.46-.73-1.13-.58-1.76.16-.65.71-1.32 1.38-1.24M12 5.14c.7.58 1.37 1.44 1.77 2.4.43 1.04.25 1.91-.47 2.37-.72.46-1.62.16-2.23-.57-.61-.73-.71-1.6-.34-2.17.38-.57 1.13-.92 1.27-.03"/></svg>
                          </div>
                          <div>
                            <h3 className="text-lg font-bold text-gray-800">{exp.role}</h3>
                            <p className="text-sm font-semibold text-gray-600">{exp.company}</p>
                          </div>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-2 mb-4">
                        <span className="px-3 py-1 rounded-full bg-gray-200 text-gray-700 text-xs font-semibold">
                          {exp.period}
                        </span>
                        <span className="px-3 py-1 rounded-full bg-gray-100 text-gray-600 text-xs font-medium">
                          {exp.type}
                        </span>
                      </div>

                      <p className="text-gray-600 text-sm mb-4">{exp.description}</p>

                      <ul className="space-y-2 mb-4">
                        {exp.highlights.slice(0, 3).map((highlight, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                            <span className="w-1.5 h-1.5 rounded-full bg-gray-600 mt-1.5 flex-shrink-0"></span>
                            {highlight}
                          </li>
                        ))}
                      </ul>

                      <div className="flex flex-wrap gap-2 pt-3 border-t border-gray-100">
                        {exp.tech.map((tech) => (
                          <span 
                            key={tech}
                            className="skill-badge bg-gray-50 border border-gray-200 text-gray-700"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;