import React, { useState } from 'react';
import PropertyGrid from '../components/PropertyGrid';
import styles from './Favourites.module.css';

function FavoritesPage() {
  // Initialize the favorites state with data from localStorage
  const [favorites, setFavorites] = useState(() => {
    return JSON.parse(localStorage.getItem('favorites') || '[]');
  });

  // Handle the drop event to remove a property from favorites
  const handleDrop = (event) => {
    const propertyId = event.dataTransfer.getData('propertyId');

    if (propertyId) {
      // Filter out the dropped property from the favorites list
      const updatedFavorites = favorites.filter(
        (property) => property.id !== propertyId
      );
      // Update the state and localStorage with the new favorites list
      setFavorites(updatedFavorites);
      localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
    }
  };

  // Prevent the default behavior for the drag over event
  const handleDragOver = (event) => {
    event.preventDefault();
  };

  return (
    <div className={styles.favoritesPage}>
      <h1>Your Favorites</h1>
      <div
        className={styles.dropZone}
        onDragOver={handleDragOver}
        onDrop={handleDrop}
      >
        Drag cards here to remove from favorites
      </div>
      {/* Render the PropertyGrid component with the current favorites */}
      <PropertyGrid properties={favorites} sliceValue={favorites.length} />
    </div>
  );
}

export default FavoritesPage;