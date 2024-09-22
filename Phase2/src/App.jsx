import React, { useState } from 'react';
import ProductList from './components/ProductList/ProductList';
import './App.css';

const products = [
  { name: 'Laptop', category: 'Electronics', price: 999.99 },
  { name: 'Headphones', category: 'Electronics', price: 199.99 },
  { name: 'T-Shirt', category: 'Clothing', price: 19.99 },
  { name: 'Jeans', category: 'Clothing', price: 39.99 },
  { name: 'JavaScript Book', category: 'Books', price: 29.99 },
  { name: 'Novel', category: 'Books', price: 14.99 }
];

function App() {
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredProducts = activeFilter === 'All'
    ? products
    : products.filter(product => product.category === activeFilter);

  const handleFilterChange = (category) => {
    setActiveFilter(category);
  };

  return (
    <div className="app-container">
      <header>
        <h1>Product List</h1>
      </header>

      <ProductList products={filteredProducts} handleFilterChange={handleFilterChange} activeFilter={activeFilter}/>
    </div>
  );
}

export default App;
