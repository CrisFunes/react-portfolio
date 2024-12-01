import { useRef } from 'react';
import './services.scss';
import { useInView, motion } from 'framer-motion';
import React from 'react';
const BASE_URL = "https://crisfunes.github.io/react-portfolio";

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
                <img src={`${BASE_URL}assets/coffee.webp`} alt="" />
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
              <img src={`${BASE_URL}/assets/me.webp`} alt="" />
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
              <p>As a Full-Stack Developer at Vistaguay for over 2 years (2021-2023), 
                I've led complex projects in backend and frontend development using Laravel and React. 
                My experience includes developing georeferenced agricultural reports with Leaflet, 
                automating GeoPDF report creation for precision agriculture, and managing AWS services like EC2 and EBS. 
                I've honed my skills in Python, PHP, MySQL, and Linux server administration, consistently delivering high-quality 
                solutions while staying current with industry trends.
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