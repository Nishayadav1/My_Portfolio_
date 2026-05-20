import React from 'react';
import { FaReact, FaNodeJs, FaJs, FaHtml5, FaCss3Alt, FaDatabase, FaPython } from 'react-icons/fa';
import { SiTypescript, SiNextdotjs, SiRedux, SiMongodb, SiMysql, SiFirebase, SiTailwindcss, SiGraphql, SiExpress, SiSocketdotio, SiSass } from 'react-icons/si';
import { motion } from 'framer-motion';

const skillCategories = [
  {
    title: 'Frontend Core',
    color: '#2563eb',
    skills: [
      { name: 'React', icon: <FaReact className="text-sky-500" /> },
      { name: 'React.js', icon: <FaReact className="text-sky-500" /> },
      { name: 'Next.js', icon: <SiNextdotjs className="text-black" /> },
      { name: 'TypeScript', icon: <SiTypescript className="text-blue-600" /> },
      { name: 'JavaScript', icon: <FaJs className="text-yellow-400" /> },
      { name: 'HTML5', icon: <FaHtml5 className="text-orange-600" /> },
      { name: 'CSS3', icon: <FaCss3Alt className="text-blue-500" /> },
      { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-cyan-400" /> },
      { name: 'SASS', icon: <SiSass className="text-pink-500" /> },
    ],
  },
  {
    title: 'State & UI Architecture',
    color: '#7c3aed',
    skills: [
      { name: 'Redux Toolkit', icon: <SiRedux className="text-purple-500" /> },
      { name: 'Redux', icon: <SiRedux className="text-purple-500" /> },
      { name: 'Context API', icon: <FaReact className="text-sky-500" /> },
      { name: 'React Query', icon: <FaReact className="text-cyan-500" /> },
      { name: 'React Router', icon: <FaReact className="text-red-500" /> },
      { name: 'Component Libraries', icon: <FaReact className="text-sky-500" /> },
      { name: 'Design Systems', icon: <FaReact className="text-indigo-500" /> },
      { name: 'Responsive Design', icon: <FaCss3Alt className="text-blue-500" /> },
      { name: 'Accessibility', icon: <FaReact className="text-emerald-500" /> },
    ],
  },
  {
    title: 'Libraries & Integrations',
    color: '#0f766e',
    skills: [
      { name: 'Mantine', icon: <FaReact className="text-blue-500" /> },
      { name: 'Chart.js', icon: <FaReact className="text-orange-500" /> },
      { name: 'Recharts', icon: <FaReact className="text-red-500" /> },
      { name: 'jsPDF', icon: <FaDatabase className="text-gray-600" /> },
      { name: 'html2canvas', icon: <FaDatabase className="text-gray-600" /> },
      { name: 'Firebase', icon: <SiFirebase className="text-amber-500" /> },
      { name: 'REST APIs', icon: <FaDatabase className="text-gray-600" /> },
      { name: 'GraphQL', icon: <SiGraphql className="text-pink-600" /> },
      { name: 'Socket.io', icon: <SiSocketdotio className="text-gray-800" /> },
    ],
  },
  {
    title: 'Backend & Data',
    color: '#0f766e',
    skills: [
      { name: 'Node.js', icon: <FaNodeJs className="text-green-600" /> },
      { name: 'Express', icon: <SiExpress className="text-gray-700" /> },
      { name: 'MongoDB', icon: <SiMongodb className="text-green-600" /> },
      { name: 'MySQL', icon: <SiMysql className="text-sky-700" /> },
      { name: 'Python', icon: <FaPython className="text-yellow-500" /> },
    ],
  },
  
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 px-4 bg-gray-100/50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full badge-gradient text-sm font-medium mb-4">
            <svg className="w-4 h-4 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
            Technical Expertise
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Full Frontend Skill Set
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            A complete overview of the technologies used across this portfolio, from frontend UI work to backend and collaboration tools.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {skillCategories.map((category) => (
            <motion.div
              key={category.title}
              variants={itemVariants}
              className="glass-card rounded-2xl p-6 card-hover group"
            >
              <div className="flex items-center gap-3 mb-6">
                <div 
                  className="w-12 h-12 rounded-xl flex items-center justify-center"
                  style={{ backgroundColor: `${category.color}15` }}
                >
                  <svg className="w-6 h-6" fill={category.color} viewBox="0 0 24 24">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-800">{category.title}</h3>
              </div>

              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <span
                    key={skill.name}
                    className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-gray-100 text-gray-800 font-medium text-sm shadow-sm border border-gray-200"
                  >
                    <span className="text-lg">{skill.icon}</span>
                    {skill.name}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-12 text-center"
        >
          <p className="text-gray-600 mb-4 font-medium">Additional skills and tools:</p>
          <div className="flex flex-wrap justify-center gap-3">
            {['Redux Toolkit', 'React Query', 'Context API', 'React Router', 'REST APIs', 'GraphQL', 'Socket.io', 'Responsive Design', 'Accessibility', 'Chart.js', 'Mantine', 'Recharts', 'jsPDF', 'html2canvas', 'Docker', 'AWS', 'Git', 'GitHub', 'Jira', 'Figma', 'Linux', 'NPM', 'Agile'].map((skill) => (
              <span 
                key={skill}
                className="skill-badge"
              >
                {skill}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;