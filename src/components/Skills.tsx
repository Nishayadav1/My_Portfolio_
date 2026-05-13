import React from 'react';
import { FaReact, FaNodeJs, FaJs, FaHtml5, FaCss3Alt, FaGitAlt, FaGithub, FaAws, FaDocker, FaDatabase, FaFigma, FaPython, FaLinux, FaJira, FaNpm } from 'react-icons/fa';
import { SiTypescript, SiNextdotjs, SiRedux, SiMongodb, SiPostgresql, SiFirebase, SiTailwindcss, SiGraphql, SiJest, SiVercel, SiNetlify, SiExpress, SiSocketdotio, SiCypress, SiTestinglibrary, SiSass } from 'react-icons/si';
import { motion } from 'framer-motion';

const skillCategories = [
  {
    title: 'Frontend',
    color: '#666666',
    skills: [
      { name: 'React', icon: <FaReact className="text-sky-500" /> },
      { name: 'Next.js', icon: <SiNextdotjs className="text-black" /> },
      { name: 'TypeScript', icon: <SiTypescript className="text-blue-600" /> },
      { name: 'JavaScript', icon: <FaJs className="text-yellow-400" /> },
      { name: 'HTML5', icon: <FaHtml5 className="text-orange-600" /> },
      { name: 'CSS3', icon: <FaCss3Alt className="text-blue-500" /> },
      { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-cyan-400" /> },
      { name: 'Redux', icon: <SiRedux className="text-purple-500" /> },
      // { name: 'Material UI', icon: <SiMaterialui className="text-blue-500" /> }, // Removed: No such icon in react-icons/si
    ],
  },
  {
    title: 'Backend & APIs',
    color: '#444444',
    skills: [
      { name: 'Node.js', icon: <FaNodeJs className="text-green-600" /> },
      { name: 'Express.js', icon: <SiExpress className="text-black" /> },
      { name: 'REST APIs', icon: <FaNpm className="text-red-500" /> },
      { name: 'JWT/Auth', icon: <FaReact className="text-gray-500" /> },    ],
  },
  {
    title: 'Database & Cloud',
    color: '#2d6a4f',
    skills: [
      { name: 'MongoDB', icon: <SiMongodb className="text-green-700" /> },
      { name: 'MySQL', icon: <FaDatabase className="text-blue-400" /> },
      { name: 'Vercel', icon: <SiVercel className="text-black" /> },
      { name: 'Netlify', icon: <SiNetlify className="text-green-400" /> },
    ],
  },
  {
    title: 'DevOps & Tools',
    color: '#555555',
    skills: [
      { name: 'Git', icon: <FaGitAlt className="text-orange-500" /> },
      { name: 'GitHub', icon: <FaGithub className="text-black" /> },
      { name: 'Linux', icon: <FaLinux className="text-black" /> },
      { name: 'Jira', icon: <FaJira className="text-blue-500" /> },
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
            Skills & Technologies
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            A comprehensive toolkit built for modern web development challenges
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
          <p className="text-gray-600 mb-4 font-medium">Also proficient in:</p>
          <div className="flex flex-wrap justify-center gap-3">
            {['Redux Toolkit', 'React Query', 'Context API', 'REST APIs', 'Responsive Design', 'Docker', 'AWS', 'Jira', 'Figma', 'Linux'].map((skill) => (
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