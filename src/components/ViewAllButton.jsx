import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './ViewAllButton.module.css';

function ViewAllButton() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/view-all-properties');
  };

  return (
    <div className={styles.viewAll}>
      <button className={styles.viewAllButton} onClick={handleClick}>
        View All Properties
      </button>
    </div>
  );
}

export default ViewAllButton;