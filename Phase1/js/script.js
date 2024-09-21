const products = [
  { name: 'Laptop', category: 'Electronics', price: 999.99 },
  { name: 'Headphones', category: 'Electronics', price: 199.99 },
  { name: 'T-Shirt', category: 'Clothing', price: 19.99 },
  { name: 'Jeans', category: 'Clothing', price: 39.99 },
  { name: 'JavaScript Book', category: 'Books', price: 29.99 },
  { name: 'Novel', category: 'Books', price: 14.99 }
];

function displayProducts(filteredProducts) {
  const productDisplay = document.querySelector('.product-list');
  productDisplay.innerHTML = ''; 

  filteredProducts.forEach(product => {
    const productElement = document.createElement('div');
    productElement.classList.add('product-item');

    productElement.innerHTML = `
          <h2>${product.name}</h2>
          <p>Category: ${product.category}</p>
          <span>$${product.price.toFixed(2)}</span>
      `;

    productDisplay.appendChild(productElement);
  });
}

function filterProducts(category) {
  if (category === 'All') {
    displayProducts(products);
  } else {
    const filtered = products.filter(product => product.category === category);
    displayProducts(filtered);
  }
}

window.onload = () => {
  displayProducts(products);
};
