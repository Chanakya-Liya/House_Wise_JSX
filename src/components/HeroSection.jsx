import React from 'react';
import styles from './HeroSection.module.css';
import { useNavigate } from 'react-router-dom';

function HeroSection() {
  const navigate = useNavigate();

  // Function to navigate to the view all properties page
  const handleViewAllProperties = () => {
    navigate('/view-all-properties');
  };

  return (
    <div className={styles.hero}>
      {/* Main title */}
      <h1 className={styles.title}>Find Your Dream Home</h1>
      {/* Subtitle */}
      <p className={styles.snarkyRemark}>Where You Find Your Dream Home For An Affordable Price</p>
      <div className={styles.searchSection}>
        {/* Button to navigate to the view all properties page */}
        <button className={styles.searchButton} onClick={handleViewAllProperties}>Find Your Perfect Home</button>
      </div>
    </div>
  );
}

export default HeroSection;