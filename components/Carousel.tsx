"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { useSwipeable } from 'react-swipeable';

const images = [
  '/fotos/1.png',
  '/fotos/2.png',
  '/fotos/3.png',
  '/fotos/4.png',
  '/fotos/5.png',
];

const Carousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 6000); 
    return () => clearInterval(interval);
  }, []);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const handlers = useSwipeable({
    onSwipedLeft: handleNext,
    onSwipedRight: handlePrev,
    trackMouse: true,
  });

  return (
    <div className="relative w-full h-screen overflow-hidden" {...handlers}>
      <AnimatePresence>
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="absolute inset-0"
        >
          <Image 
            src={images[currentIndex]} 
            alt={`Carousel image ${currentIndex + 1}`} 
            layout="fill" 
            objectFit="cover" 
            className="w-full h-full"
          />
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default Carousel;
