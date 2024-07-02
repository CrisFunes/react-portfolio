import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './carousel.scss';

const images = [
  'https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
  'https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
  'https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
  // Agrega tantas imágenes como necesites
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Cambia la imagen cada 3 segundos

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="carousel">
      <div className="carousel-images">
        {images.map((image, index) => (
          <motion.img
            key={index}
            src={image}
            alt={`carousel-${index}`}
            className={`carousel-image ${currentIndex === index ? 'active' : ''}`}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: currentIndex === index ? 1 : 0, scale: currentIndex === index ? 1 : 0.8 }}
            transition={{ duration: 0.5 }}
          />
        ))}
      </div>
      <div className="dots">
        {images.map((_, index) => (
          <span
            key={index}
            className={`dot ${currentIndex === index ? 'active' : ''}`}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
