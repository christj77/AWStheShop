import React, { useState, useEffect } from 'react';

const CategoriesBar = ({ handleCategoryClick }) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    // Fetch categories from API
    fetch('https://api.escuelajs.co/api/v1/categories')
      .then((response) => response.json())
      .then((data) => setCategories(data))
      .catch((error) => console.error('Error fetching categories:', error));
  }, []);

  return (
    <div className="categories-bar">
      <div className="horizontal-bar">
        {categories.slice(0 , 7).map((category) => (
          <a
            key={category.id}
            href={`#category/${category.id}`}
            className="category-link"
            onClick={() => handleCategoryClick(category.id)}
          >
            {category.name}
          </a>
        ))}
      </div>
    </div>
  );
};


export default CategoriesBar;


 








// import React from 'react';

// const Sidebar = () => {
//   // Sample list of categories
//   const categories = ['Music', 'Vehicles', 'Cattle', 'Laptops', 'Mobile'];

//   return (
//     <div className="sidebar">
//       <h3>Categories</h3>
//       <ul className="category-list">
//         {categories.map((category, index) => (
//           <li key={index}>
//             <a href={`#${category.toLowerCase().replace(' ', '-')}`}>{category}</a>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Sidebar;
