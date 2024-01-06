import React, { useState, useEffect } from 'react';
import CategoriesBar from './Sidebar';
import Cart from '@/pages/cart';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState();
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch('https://api.escuelajs.co/api/v1/products')
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error('Error fetching products:', error));
  }, []);

  useEffect(() => {
    fetch('https://api.escuelajs.co/api/v1/categories')
      .then((response) => response.json())
      .then((data) => setCategories(data))
      .catch((error) => console.error('Error fetching categories:', error));
  }, []);

  const handleCategoryClick = (categoryId) => {
    // Handle category click action and filter products by category
    setSelectedCategory(categoryId);
  };

  const handleAddToCart = (product) => {
    const cartItem = {
      id: product.id,
      name: product.title,
      price: product.price,
      image:product.images,
      quantity: 1, // You can set the initial quantity as needed
    };
  
    setCart([...cart, cartItem]);
    console.log(cartItem);
  };

  // Filter products based on the selected category
  const filteredProducts = selectedCategory
    ? products.filter((product) => product.category === selectedCategory)
    : products;

  return (
    <div className="flex">
      <CategoriesBar categories={categories} handleCategoryClick={handleCategoryClick} />
      <div className="flex-products">
        {/* Display products */}
        {products.map((product) => (
          <div key={product.id} className="bg-yellow-200 py-4 w-64">
             {product.title}
            {/* Replace 'product.image' with the actual image URL */}
            <div className="mt-2">
              <img src={product.images} alt={product.name} />
            </div>
            <p className="text-sm mt-2 leading-1">{product.description}</p>
            <div className="flex mt-2">
              <div className="text-2xl">Price: {product.price}</div>

          </div>
          <button className="bg-red-400 text-white py-1 px-3" onClick={() => handleAddToCart(product)}>
                Add to Cart
              </button>
          </div>
        ))}
      </div>

{/* <div className='cartTab'>
          <h1>Shop Cart </h1>
        <div className='listcart'>
          <div className='item'>
              <div className='image'>
                <img src='../products/2pac.jpg' alt=''/>  
                </div>
                  <div className='name'>
                    Name
                  </div>
                  <div className='price'>
                    $70
                  </div>
<div className='quanitity'>
          <span className='minus'></span>
          <span>1</span>
          <span className='plus'></span>

</div>
         </div>
        </div>

<div className='but'>
  <button className='close'>Close</button>
  <button className='checkout'>Checkout</button>
</div>

          </div> */}
    </div>
  );
};

export default ProductList;

