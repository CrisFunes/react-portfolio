import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Home, User, Briefcase, Mail } from 'lucide-react';
import './sidebar.scss';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => setIsOpen(!isOpen);

  const sidebarVariants = {
    open: { height: '320px' },
    closed: { height: '60px' }
  };

  const iconVariants = {
    open: { rotate: 180 },
    closed: { rotate: 0 }
  };

  const linkItems = [
    { icon: <Home size={24} />, href: '#Homepage'},
    { icon: <User size={24} />, href: '#About'},
    { icon: <Briefcase size={24} />, href: '#Projects'},
    { icon: <Mail size={24} />, href: '#Contact'}
  ];

  return (
    <motion.div 
      className="sidebar"
      initial="closed"
      animate={isOpen ? 'open' : 'closed'}
      variants={sidebarVariants}
    >
      <motion.button
        className="toggle-btn"
        onClick={toggleSidebar}
        variants={iconVariants}
      >
        {isOpen ? '✕' : '☰'}
      </motion.button>
      <nav>
        {linkItems.map((item, index) => (
          <motion.a
            key={index}
            href={item.href}
            className="nav-item"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            {item.icon}
            {isOpen && <span>{item.label}</span>}
          </motion.a>
        ))}
      </nav>
    </motion.div>
  );
};

export default Sidebar;