import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  color?: string;
}

import { motion } from 'framer-motion';

const Badge: React.FC<BadgeProps> = ({ children, color = 'bg-gray-100 text-blue-700' }) => (
  <motion.span
    whileHover={{ scale: 1.1, backgroundColor: '#e5e7eb', color: '#2563eb' }}
    transition={{ type: 'spring', stiffness: 300, damping: 18 }}
    className={`inline-block px-2.5 py-1 rounded-full text-xs font-semibold border border-gray-200 shadow-sm ${color}`}
    style={{ boxShadow: '0 2px 8px 0 rgba(100,116,139,0.08)' }}
  >
    {children}
  </motion.span>
);

export default Badge;
