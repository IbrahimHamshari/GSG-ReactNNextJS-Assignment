import React from 'react';
import './FilterButtons.css';

function FilterButtons({ activeFilter, onFilterChange }) {
  const categories = ['All', 'Electronics', 'Clothing', 'Books'];

  return (
    <section className="filter-section">
      {categories.map((category) => (
        <button
          key={category}
          className={`filter-btn ${activeFilter === category ? 'active' : ''}`}
          onClick={() => onFilterChange(category)}
        >
          {category}
        </button>
      ))}
    </section>
  );
}

export default FilterButtons;
