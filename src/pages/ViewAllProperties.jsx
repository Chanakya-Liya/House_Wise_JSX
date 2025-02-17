import React, { useState } from 'react';
import FilterForm from '../components/FilterForm';
import PropertyGrid from '../components/PropertyGrid';
import propertyData from '../assets/properties(1).json';

function PropertyPage() {
  const [filters, setFilters] = useState({
    type: '',
    bedrooms: '',
    location: '',
    maxPrice: '',
    date: '',
  });

  const parseDate = (added) => {
    const months = {
      January: 1, February: 2, March: 3, April: 4,
      May: 5, June: 6, July: 7, August: 8,
      September: 9, October: 10, November: 11, December: 12,
    };
    const month = months[added.month];
    return `${added.year}-${String(month).padStart(2, '0')}-${String(added.day).padStart(2, '0')}`;
  };

  // Filtered properties based on the filter state
  const filteredProperties = propertyData.properties.filter((property) => {
    const matchesType = filters.type ? property.type === filters.type : true;
    const matchesBedrooms = filters.bedrooms
      ? property.bedrooms === parseInt(filters.bedrooms)
      : true;
    const matchesLocation = filters.location
      ? property.location.toLowerCase().includes(filters.location.toLowerCase())
      : true;
    const matchesMaxPrice = filters.maxPrice
      ? property.price <= parseInt(filters.maxPrice)
      : true;
    const matchesDate = filters.date
      ? parseDate(property.added) >= filters.date
      : true;
    return matchesType && matchesBedrooms && matchesLocation && matchesMaxPrice && matchesDate;
  });

  // Update filter state
  const handleFilterChange = (name, value) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value,
    }));
  };

  return (
    <div>
      <FilterForm onFilterChange={handleFilterChange} />
      <PropertyGrid properties={filteredProperties} sliceValue={filteredProperties.length} />
    </div>
  );
}

export default PropertyPage;