import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
}


import { motion } from 'framer-motion';

const Card: React.FC<CardProps> = ({ children, className = '' }) => (
  <motion.div
    whileHover={{ scale: 1.05, boxShadow: '0 16px 48px 0 rgba(31,38,135,0.18)' }}
    transition={{ duration: 0.3 }}
    className={`relative overflow-hidden bg-white/80 backdrop-blur-md border border-gray-200 shadow-lg rounded-xl p-4 md:p-5 hover:scale-[1.02] hover:shadow-xl transition duration-200 ${className}`}
  >
    {children}
  </motion.div>
);

export default Card;
