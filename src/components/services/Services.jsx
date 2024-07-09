import { useRef } from 'react';
import './services.scss';
import { useInView, motion } from 'framer-motion';

const variant = {
  initial: {
    y: 100,
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

const Services = () => {
  const ref = useRef();
  const isInView = useInView(ref, { margin: '-100px' });

  return (
    <div className="about">
      <motion.div
        className="services"
        variants={variant}
        initial="initial"
        ref={ref}
        animate={isInView && 'animate'}
      >
        <motion.div className="textContainer" variants={variant}>
          <p>
          Dedicated to fueling your success
            <br /> and development
          </p>
          <hr />
        </motion.div>

        <motion.div className="contentContainer" variants={variant}>
          <div className="leftColumn">
            <motion.div className="titleContainer" variants={variant}>
              <div className="title">
                <img src="/coffee.webp" alt="" />
                <h1>
                  <motion.b whileHover={{ color: '#FFA500' }}>About</motion.b> Me
                </h1>
              </div>
              <div className="title">
                <h1>
                  <motion.b whileHover={{ color: '#FFA500' }}>My</motion.b> Vision
                </h1>
                <a href="#Projects">
                  <button>WHAT I DO?</button>
                </a>
              </div>
            </motion.div>
            <motion.div
              className="imageContainer"
              variants={variant}
              initial="initial"
              animate="animate"
            >
              <img src="/me.webp" alt="" />
            </motion.div>
          </div>
          <motion.div className="listContainer" variants={variant}>
            <motion.div 
              className="box" 
              initial={{ backgroundColor: 'rgba(255, 255, 255, 0.05)', color: '#e0e0e0' }}
              whileHover={{ 
                backgroundColor: 'rgba(255, 165, 0, 0.15)', 
                color: '#ffffff',
                transition: { duration: 0.3 }
              }}
            >
              <h2>Academic</h2>
              <p>"I am a software developer with over 2 years of experience
               at Vistaguay Tech, leading complex and multidisciplinary 
               projects in backend and frontend development with Laravel 
               and React, data processing with Python, and scalable 
               applications in AWS. I have effective communication and 
               project delivery skills, as well as certifications in AWS and 
               Laravel. I stay up-to-date on the latest trends in software 
               development."
               </p>
            </motion.div>
            <motion.div 
              className="box" 
              initial={{ backgroundColor: 'rgba(255, 255, 255, 0.05)', color: '#e0e0e0' }}
              whileHover={{ 
                backgroundColor: 'rgba(255, 165, 0, 0.15)', 
                color: '#ffffff',
                transition: { duration: 0.3 }
              }}
            >
              <h2>Professional</h2>
              <p>"I am a software developer with over 2 years of experience
               at Vistaguay Tech, leading complex and multidisciplinary 
               projects in backend and frontend development with Laravel 
               and React, data processing with Python, and scalable 
               applications in AWS. I have effective communication and 
               project delivery skills, as well as certifications in AWS and 
               Laravel. I stay up-to-date on the latest trends in software 
               development."
               </p>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Services;