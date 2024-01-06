import React, { useEffect, useState } from "react";
import Navbar from "../component/Navbar";
import ProductList from "@/component/ProductList";

const Cart = ({ cart }) => {
  // Ensure cart is defined before accessing its length

  const cartItems = cart || [];
  //const cartItems = [{id:1 , name:"Generic Concrete Car" , images:"https://i.imgur.com/QkIa5tT.jpeg", price:9866  , quantity :1}];

  return (
    <div>
      <Navbar />

      <div className="cartTab2">
        <h1>Shopping Cart</h1>
        <div className="listcart2">
          <div className="item2">
            <div className="name">Name</div>
            <div className="image">
              <img src="./products/2pac.jpg" alt="" width={70} />
            </div>
            <div className="price">$70</div>
            <div className="quantity">
              <span className="minus"></span>
              <span>1</span>
              <span className="plus"></span>
            </div>
          </div>
        </div>
        <div className="but">
          <button className="close">Close</button>
          <button className="checkout">Checkout</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;

//   <div className='cartTab'>
//           <h1>Shop Cart </h1>
//         <div className='listcart'>
//           <div className='item'>
//               <div className='image'>
//                 <img src='./products/2pac.jpg' alt=''/>
//                 </div>
//                   <div className='name'>
//                     Name
//                   </div>
//                   <div className='price'>
//                     $70
//                   </div>
// <div className='quanitity'>
//           <span className='minus'></span>
//           <span>1</span>
//           <span className='plus'></span>

// </div>
//          </div>
//         </div>

// <div className='but'>
//   <button className='close'>Close</button>
//   <button className='checkout'>Checkout</button>
// </div>

//           </div>

// /*
// {/* Display cart items, total price, etc. */}
// {cartItems.length > 0 ? (
//   <div>

//     {cartItems.map((item) => (
//       <div key={item.id}>
//         <p>Name: {item.name}</p>
//         <p>Price: {item.price}</p>
//         <p><img src={item.images}/> </p>
//         <p>Quantity: {item.quantity}</p>
//         {/* Add more details of cart items as needed */}
//       </div>
//     ))}
//   </div>
// */
