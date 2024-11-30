import Sidebar from '../sidebar/Sidebar'
import './navbar.scss'
import {motion} from "framer-motion"
import React from 'react';

const textVariants = {
  initial: {
    x: 500,
    y: -100,
    opacity: 0,
  },
  animate: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const Navbar = () => {
  return (
    <div className='navbar'>
              <Sidebar/>
      <div className='wrapper'>
        <motion.span 
        initial={{opacity:0, scale:0.5}} 
        animate={{opacity:1, scale:1}} 
        transition={{duration:0.5}}
        ></motion.span>
        <motion.div className='social'
          variants={textVariants}
          initial="initial"
          animate="animate">
            <a href="https://github.com/CrisFunes"><img src="/github.png" alt="" /></a>
            <a href="mailto:funesdemian@gmail.com"><img src="/gmail.png" alt="" /></a>
            <a href="https://www.linkedin.com/in/cristian-funes-in/"><img src="/linkedin.png" alt="" /></a>
        </motion.div>
      </div>
    </div>
  )
}

export default Navbar