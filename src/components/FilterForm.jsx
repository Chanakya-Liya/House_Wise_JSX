import React from 'react';
import styles from './FilterForm.module.css';

function FilterForm({ onFilterChange }) {
  // Handle input changes and call the onFilterChange prop with the input name and value
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    onFilterChange(name, value);
  };

  return (
    <div className={`${styles.filterForm} ${styles.slideIn}`}>
      <h2>Filter Properties</h2>
      <form>
        {/* Filter by property type */}
        <label>
          Type:
          <select name="type">
            <option value="">All</option>
            <option value="House">House</option>
            <option value="Flat">Flat</option>
          </select>
        </label>
        {/* Filter by number of bedrooms */}
        <label>
          Bedrooms:
          <input
            type="number"
            name="bedrooms"
            min="1"
            max="10"
          />
        </label>
        {/* Filter by location */}
        <label>
          Location:
          <input
            type="text"
            name="location"
          />
        </label>
        {/* Filter by date added */}
        <label>
          Added After:
          <input
            type="date"  
            name="date"
          />
        </label>
        {/* Filter by maximum price */}
        <label>
          Max Price:
          <input
            type="number"
            name="maxPrice"
          />
        </label>
        {/* Apply button to trigger filtering */}
        <button
          className={styles.applyButton}
          type="button"
          onClick={() => {
            // Get all form elements and trigger handleInputChange for each
            const formElements = document.querySelector('form').elements;
            Array.from(formElements).forEach(element => {
              if (element instanceof HTMLInputElement || element instanceof HTMLSelectElement) {
                handleInputChange({ target: element });
              }
            });
          }}
        >
          Apply
        </button>
      </form>
    </div>
  );
}

export default FilterForm;