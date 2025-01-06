import { useRef } from 'react';
import './services.scss';
import { useInView, motion } from 'framer-motion';
import React from 'react';

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
                <img src="https://crisfunes.github.io/react-portfolio/assets/coffee.webp" alt="" />
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
              <img src="https://crisfunes.github.io/react-portfolio/assets/me.webp" alt="" />
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
              <p>Computer Science foundation from Universidad Tecnológica Nacional (Argentina), 
                with formal education in Java programming. Self-taught in key technologies including Python, 
                React, and AWS, demonstrating a commitment to continuous learning and adaptability in the 
                rapidly evolving field of software development.
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
              <p>Software Developer with over 3 years of experience in full-stack development,
                specializing in backend and frontend solutions. Currently working as a
                freelancer, delivering high-quality web applications using Node.js
                and React.js. At Vistaguay Tech, led complex, multidisciplinary projects,
                including georeferenced agricultural platforms and scalable solutions
                leveraging AWS services. Proficient in creating robust and efficient
                systems, with a strong foundation in Laravel, React, and Python. 
                Known for adaptability, effective teamwork, and delivering impactful results.
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
              <h2>Technical Skills</h2>
              <p>Python, PHP, MySQL, React, Laravel, AWS (EC2, EBS), Bash, Git, Leaflet, GeoPDF
               </p>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Services;