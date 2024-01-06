import Navbar from "@/component/Navbar";
import ProductList from "@/component/ProductList";
import React, { useEffect, useState } from "react";
import Categories from "../component/Categories";
import CategoriesBar from "@/component/Sidebar";
import Footer from "@/component/Footer";
import { data } from "autoprefixer";

export default function Home({}) {
  return (
    <div className="container">
      <div className="bg-white-500 p-2">
      <Navbar />
      <h3 className="category-center"> </h3>
        <div className="flex-container">
            
        <ProductList/>
       
        </div>
        <Footer />
      </div>
    </div>
  );
}

//     <div className="p-5">
// <div className="bg-blue-500 p-3 text-white  ">
//           <Navbar/>

//  </div>

//       <div>
//         {/*this div is for category */}
//         <h2 className="text-2xl">Mobiles</h2>
//         {/*this div is for actual phone  */}
//         <div className="bg-brown-100 py-4">
//           <div className="bg-white-100 w-64">
//             <div className="bg-green-200 p-5">
//               <img src="/products/samsung.jpg" alt="" />
//             </div>
//             <div className="mt-2">
//               <h3 className="font-bold text-lg">Samsung Note 10</h3>
//             </div>
//             <p className="text-sm mt-2 leading-1">
//               Run multiple applications and seamlessly flip between
//               presentations, streaming videos and more with the powerful
//               HyperFast processor
//             </p>
//             <div className="flex mt-2">
//               <div className="text-2xl font-bold grow">$500.00</div>
//               <button className="bg-red-400 text-white py-1 px-3">
//                 Add to Cart
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div></div>
//     </div>
//------------------------------------------------------------------------------------------------------------
//fetch products from mongodb and display in localhost:3000/api/products
// const [productsInfo, setProductsInfo] = useState([]);

// useEffect(() => {
//   fetch('https://api.escuelajs.co/api/v1/products')
//     .then((res) => {
//       if (!res.ok) {
//         throw new Error('Network response was not ok');
//       }
//       return res.json();
//     })
//     .then((json) => setProductsInfo(json))
//     .catch((error) => {
//       // Handle errors here
//       console.error("Error fetching data:", error);
//     });
// }, []);

// console.log(productsInfo);
// //--------------------------------------------------------------------------------------------------------------
// //fetch categories from mongodb and display in localhost:3000/api/products
// const [categoriesInfo, setCategoriesInfo] = useState([]);
// const categories = useState([]);
// useEffect(() => {
//   fetch('/api/categories')
//     .then((res) => {
//       if (!res.ok) {
//         throw new Error('Network response was not ok');
//       }
//       return res.json();
//     })
//     .then((json) => setCategoriesInfo(json))
//     .catch((error) => {
//       // Handle errors here
//       console.error("Error fetching data:", error);
//     });
// }, []);

// console.log(categoriesInfo);
// //---------------------------------------------------------------------------------------------------------
// //fetch users from mongodb and display in localhost:3000/api/products
// const [usersInfo, setUsersInfo] = useState([]);

// useEffect(() => {
// fetch('/api/users')
//   .then((res) => {
//     if (!res.ok) {
//       throw new Error('Network response was not ok');
//     }
//     return res.json();
//   })
//   .then((json) => setUsersInfo(json))
//   .catch((error) => {
//     // Handle errors here
//     console.error("Error fetching data:", error);
//   });
// }, []);
// //----------------------------------------------------------------------------------------------------
// // function Index() {
// //   const [products, setProducts] = useState([]);

// //   useEffect(() => {
// //     async function fetchProducts() {
// //       try {
// //         const response = await fetch('https://api.escuelajs.co/api/v1/products');
// //         if (!response.ok) {
// //           throw new Error('Failed to fetch data');
// //         }
// //         const data = await response.json();
// //         setProducts(data);
// //       } catch (error) {
// //         console.error('Error fetching products:', error);
// //       }
// //     }

// //     fetchProducts();
// //   }, []);
