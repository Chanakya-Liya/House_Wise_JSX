import React from 'react';
import PropertyCard from './PropertyCard';
import styles from './PropertyGrid.module.css';
import propertyData from '../assets/properties(1).json';

function PropertyGrid({ properties, sliceValue }) {
  // Determine the properties to display, either from props or from the default property data
  const displayedProperties = properties
    ? properties.slice(0, sliceValue ?? properties.length)
    : propertyData.properties.slice(0, sliceValue ?? propertyData.properties.length);

  return (
    // Render the grid of property cards
    <div className={styles.grid}>
      {displayedProperties.map((property) => (
        <PropertyCard key={property.id} property={property} />
      ))}
    </div>
  );
}

export default PropertyGrid;