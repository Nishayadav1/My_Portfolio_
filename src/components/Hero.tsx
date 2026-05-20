import React from 'react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <div id="home" className="w-full">
      <div className="flex flex-col-reverse lg:flex-row items-center justify-center gap-16 min-h-[70vh]">
        {/* Left: Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex-1 flex flex-col justify-center gap-8 max-w-xl w-full"
        >
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full badge-gradient text-sm font-medium self-start"
          >
            <span className="w-2 h-2 rounded-full bg-gray-600 animate-pulse"></span>{" "}
            Available for work
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight"
          >
            Hi, I'm <span className="gradient-text">Nisha Yadav</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-xl md:text-2xl font-semibold text-gray-700 mb-2"
          >
            Frontend Developer
          </motion.p>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-base md:text-lg text-gray-600 leading-relaxed max-w-lg mb-4"
          >
            Frontend developer focused on building accessible, performant, and responsive user interfaces with <span className="font-medium">React</span>, <span className="font-medium">TypeScript</span>, and <span className="font-medium">Tailwind CSS</span>. I create component-driven UIs, design systems, and fine-tuned interactions that prioritize performance, accessibility, and a delightful user experience.
          </motion.p>

          {/* Buttons Row */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-wrap gap-4 pt-2 mb-6"
          >
            <a href="#contact" className="btn-primary px-8 py-3 rounded-xl text-white font-semibold shadow-lg flex items-center gap-2">
              <span>Let's Talk</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </a>
            <a href="https://drive.google.com/uc?export=download&id=1rD5Gu3-Z3MZBWPVWdRhB9Ba1d-KXMxX2" target="_blank" rel="noopener noreferrer" className="btn-secondary px-8 py-3 rounded-xl font-semibold flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
              <span>Resume</span>
            </a>
          </motion.div>

          {/* Stats Row (below buttons) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="flex flex-wrap gap-6 pt-2"
          >
            <div className="glass-card px-6 py-4 rounded-2xl flex items-center gap-4 min-w-[150px]">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center">
                  <span className="text-white font-bold text-lg">2+</span>
              </div>
              <div>
                <p className="text-sm text-gray-500">Years</p>
                <p className="text-lg font-bold text-gray-800">Experience</p>
              </div>
            </div>
            <div className="glass-card px-6 py-4 rounded-2xl flex items-center gap-4 min-w-[150px]">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-gray-500 to-gray-700 flex items-center justify-center">
                  <span className="text-white font-bold text-lg">12+</span>
              </div>
              <div>
                <p className="text-sm text-gray-500">Projects</p>
                <p className="text-lg font-bold text-gray-800">Completed</p>
              </div>
            </div>
          </motion.div>

        </motion.div>
        {/* Right: Avatar */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="flex-1 flex justify-center items-center mb-10 lg:mb-0"
        >
          <div className="relative">
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="avatar-ring w-48 h-48 md:w-64 md:h-64 flex items-center justify-center"
            >
              <div className="w-40 h-40 md:w-56 md:h-56 rounded-full bg-gradient-to-br from-gray-800 to-gray-950 flex items-center justify-center shadow-2xl">
                <span className="text-5xl md:text-6xl font-bold text-white">NY</span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;