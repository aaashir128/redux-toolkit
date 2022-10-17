import { ShoppingBasket } from "@mui/icons-material";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Products from "../components/Products";

// const productData = [
//   {
//     id: 121,
//     name: "Shirt",
//     image:
//       "https://media.istockphoto.com/photos/mens-shirt-picture-id488160041?k=20&m=488160041&s=612x612&w=0&h=OH_-skyES8-aeTvDQHdVDZ6GKLsqp6adFJC8u6O6_UY=",
//     price: 125,
//     details: "Great stuff",
//   },
//   {
//     id: 125,
//     name: "T-Shirt",
//     image:
//       "https://img.freepik.com/free-psd/isolated-white-t-shirt-front-view_125540-1194.jpg?w=2000",
//     price: 70,
//     details: "Great stuff multi colors",
//   },
//   {
//     id: 132,
//     name: "Jeans Pant",
//     image:
//       "https://assets.vogue.com/photos/6230a9e30c75bb354d918725/1:1/w_2667,h_2667,c_limit/slide_4.jpg",
//     price: 250,
//     details: "Great stuff",
//   },
//   {
//     id: 144,
//     name: "Cotton Pant",
//     image:
//       "https://www.kayazar.com/images/product_gallery/1642592944_kayazar-men-chinos-cotton-pant-Evergreen.webp",
//     price: 320,
//     details: "Great stuff",
//   },
//   {
//     id: 184,
//     name: "Formal Shoes",
//     image:
//       "https://1ststep.pk/uploads/1ststep/jBZz2MtlruSmpkhw6ZBB6W2pUEZSuudaIvMpNCQ0.webp",
//     price: 455,
//     details: "Super comfartable stuff",
//   },
// ];

function Home() {
  const [productData, setProductData] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      const res = await fetch("https://fakestoreapi.com/products");
      const data = await res.json();
      setProductData(data);
      console.log(data);
    };
    fetchAPI();
  }, []);

  return (
    <div>
      <div className="flex justify-evenly items-center">
        <h3 className="text-3xl text-red-500">Products</h3>
        <Link to="basket">
          <ShoppingBasket />
        </Link>
      </div>
      <div className="flex m-8 flex-wrap">
        {productData.map((product, i) => (
          <Products key={product.id} data={product} index={i} />
        ))}
      </div>
    </div>
  );
}

export default Home;
