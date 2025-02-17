import { useParams } from 'react-router-dom';
import propertyData from '../assets/properties(1).json';
import Carousel from './Carousel';
import styles from './PropertyDetails.module.css';
import React, { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

function PropertyDetailsComponent() {
  // Get the property ID from the URL parameters
  const { id } = useParams();

  // Find the property in the property data using the ID
  const property = propertyData.properties.find((prop) => prop.id === id);

  // If the property is not found, display a message
  if (!property) {
    return <div>Property not found.</div>;
  }

  // Collect all property images into an array
  const images = [property.picture, property.pic1, property.pic2, property.pic3, property.pic4];

  // State to manage whether the property is favorited
  const [isFavorited, setIsFavorited] = useState(() => {
    const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
    return favorites.some((fav) => fav.id === property.id);
  });

  // Toggle the favorite status of the property
  const toggleFavorite = (event) => {
    event.stopPropagation();
    const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
    let updatedFavorites;

    if (isFavorited) {
      updatedFavorites = favorites.filter((fav) => fav.id !== property.id);
    } else {
      updatedFavorites = [...favorites, property];
    }

    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
    setIsFavorited(!isFavorited);
  };

  // State to manage the active tab
  const [activeTab, setActiveTab] = useState(0); 

  // Handle tab change
  const handleTabChange = (index) => {
    setActiveTab(index);
  };

  return (
    <div className={styles.detailsContainer}>
      {/* Carousel component to display property images */}
      <Carousel images={images} />
      <div className={styles.detailsContent}>
        <h2>{property.type}</h2>
        <p><strong>Location:</strong> {property.location}</p>
        <p><strong>Bedrooms:</strong> {property.bedrooms}</p>
        <p><strong>Price:</strong> ${property.price.toLocaleString()}</p>
        <p><strong>Description:</strong> {property.description}</p>
      </div>
      {/* Button to add/remove property from favorites */}
      <button
        className={`${styles.addButton} ${isFavorited ? styles.favoritedButton : ''}`}
        onClick={toggleFavorite}
      >
        {isFavorited ? 'Remove from Favorites' : 'Add to Favorites'}
      </button>

      <div className={styles.tabsContainer}>
        {/* Tabs for additional property details */}
        <Tabs selectedIndex={activeTab} onSelect={handleTabChange}>
          <TabList>
            <Tab>Long Description</Tab>
            <Tab>Floor Plan</Tab>
            <Tab>Maps</Tab>
          </TabList>

          <TabPanel>
            <p>{property.longDescription}</p>
          </TabPanel>
          <TabPanel>
            {property.floorPlan ? (
              <img
                src={property.floorPlan}
                alt="Floor Plan"
                style={{ width: '100%', maxHeight: '500px', objectFit: 'contain' }}
              />
            ) : (
              <p>Floor plan is not available for this property.</p>
            )}
          </TabPanel>
          <TabPanel>
            {activeTab === 2 && property.mapUrl ? (
              <iframe
                src={property.mapUrl}
                width="100%"
                height="450"
                style={{ border: '0' }}
                allowFullScreen={true}
                loading="lazy"
              ></iframe>
            ) : (
              <p>Map is not available for this property.</p>
            )}
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
}

export default PropertyDetailsComponent;