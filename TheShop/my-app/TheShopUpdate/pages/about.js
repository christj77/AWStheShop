import React from 'react';
 import Navbar from '../component/Navbar'
import Footer from '@/component/Footer';
const AboutPage = () => {
  const shopDetails = {
    name: 'E-commerce Website Designed by Software Developer(s)',
    description: 'This is a demo version of what a ecommerce fuunctional website entails ',
    location: 'Canada ',
     
    // Add any other details about your shop
  };

  return (
    <div className="about-container"> {/* Apply the CSS class to the container */}
    <Navbar/>
      <h1>{shopDetails.name}</h1>
      <div className='image'>
        <img
          src="../products/about.png" // Placeholder image URL
          alt="Shop"
        />
      </div>
    <Footer/>
    </div>
  );
};

export default AboutPage;
