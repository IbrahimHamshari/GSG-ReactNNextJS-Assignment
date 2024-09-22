import React from 'react';
import ProductItem from '../ProductItem/ProductItem';
import './ProductList.css';
import FilterButtons from '../FilterButtons/FilterButtons';

function ProductList({ products,handleFilterChange,activeFilter }) {
  return (
    <>
      <FilterButtons activeFilter={activeFilter} onFilterChange={handleFilterChange} />

      <section className="product-display">
        {products.map((product, index) => (
          <ProductItem key={index} product={product} />
        ))}
      </section>
    </>
  );
}

export default ProductList;
