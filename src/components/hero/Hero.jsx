import "./hero.scss";
import { motion } from "framer-motion";
import Carousel from './carousel/Carousel.jsx';

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};

const imageVariants = {
  initial: {
    x: 500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const sliderVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-220%",
    transition: {
      repeat: Infinity,
      repeatType: "mirror",
      duration: 20,
    },
  },
};

const Hero = () => {
  return (
    <div className="hero">
      <div className="wrapper">
        <motion.div
          className="textContainer"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h2 variants={textVariants}>Cristian Funes</motion.h2>
          <motion.h1 variants={textVariants}>Full-Stack Developer</motion.h1>
          <motion.div variants={textVariants} className="buttons">
          <a href="#Projects">
          <motion.button variants={textVariants}>See My Projects</motion.button>
          </a>
          <a href="#Contact">
          <motion.button style={{ background: "white", color: "black", fontWeight: "500" }} variants={textVariants}>Contact Me</motion.button>
          </a>
          </motion.div>
          <motion.img variants={textVariants} animate="scrollButton" src="./scroll.png" alt="" />
        </motion.div>
      </div>
      <motion.div
        className="slidingTextContainer"
        variants={sliderVariants}
        initial="initial"
        animate="animate"
      >
        Python JavaScript MySQL AWS
      </motion.div>
      <motion.div
          variants={imageVariants}
          initial="initial"
          animate="animate" 
          className="imageContainer">
        <Carousel />
      </motion.div>
    </div>
  );
};




export default Hero;
