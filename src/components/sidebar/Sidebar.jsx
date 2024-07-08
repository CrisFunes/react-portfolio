import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Home, User, Briefcase, Mail } from 'lucide-react';
import './sidebar.scss';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => setIsOpen(!isOpen);

  const sidebarVariants = {
    open: { height: '320px', transition: { duration: 0.3 } },
    closed: { height: '60px', transition: { duration: 0.3 } }
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

  const containerVariants = {
    open: {
      transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    },
    closed: {
      transition: { staggerChildren: 0.05, staggerDirection: -1 }
    }
  };

  const itemVariants = {
    open: { 
      y: 0, 
      opacity: 1,
      transition: {
        y: { stiffness: 1000, velocity: -100 }
      }
    },
    closed: { 
      y: -50, 
      opacity: 0,
      transition: {
        y: { stiffness: 1000 }
      }
    }
  };

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
      <AnimatePresence>
        {isOpen && (
          <motion.nav
            variants={containerVariants}
            initial="closed"
            animate="open"
            exit="closed"
          >
            {linkItems.map((item, index) => (
              <motion.a
                key={index}
                href={item.href}
                className="nav-item"
                variants={itemVariants}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.icon}
                <span>{item.label}</span>
              </motion.a>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Sidebar;