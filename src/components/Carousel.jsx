import React, { useState } from 'react';
import styles from './Carousel.module.css';

// Carousel component to display a series of images with navigation controls
function Carousel({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to handle the previous button click
  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  // Function to handle the next button click
  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className={styles.carousel}>
      {/* Previous button */}
      <button className={styles.prevButton} onClick={handlePrev}>
        &#8249;
      </button>
      {/* Display the current image */}
      <img
        src={images[currentIndex]}
        alt={`Property image ${currentIndex + 1}`}
        className={styles.carouselImage}
      />
      {/* Next button */}
      <button className={styles.nextButton} onClick={handleNext}>
        &#8250;
      </button>
      {/* Indicators for each image */}
      <div className={styles.indicators}>
        {images.map((image, index) => (
          <span
            key={image}
            className={`${styles.indicator} ${index === currentIndex ? styles.active : ''}`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
}

export default Carousel;