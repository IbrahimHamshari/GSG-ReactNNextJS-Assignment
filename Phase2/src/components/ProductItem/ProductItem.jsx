import React from 'react';
import './ProductItem.css';

function ProductItem({ product }) {
  return (
    <div className="product-item">
      <h2>{product.name}</h2>
      <p>Category: {product.category}</p>
      <span>${product.price.toFixed(2)}</span>
    </div>
  );
}

export default ProductItem;
