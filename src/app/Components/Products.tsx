"use client";
import React, { useEffect, useState } from "react";
import "../styles/card.css";
import { useDispatch } from "react-redux";
import { AddtoCart } from "../reduxx/Slicer";
interface CardItem {
  id: number;
  category: string;
  description: string;
  image: string;
  price: number;
  title: string;
}

const Products = () => {
  const [product, setproduct] = useState<CardItem[]>([]);
  const dispatch = useDispatch();

  const AddtoCarts = (elem: CardItem) => {
    dispatch(AddtoCart(elem));
  };

  useEffect(() => {
    const fetching = async () => {
      try {
        const data = await fetch("https://fakestoreapi.com/products");
        const data2 = await data.json();
        setproduct(data2);
      } catch (err: string | any) {
        console.log(err.message);
      }
    };
    fetching();
  }, []);

  return (
    <div className="product-container">
      {product.map((elem: CardItem) => (
        <div className="product-card" key={elem.id}>
          <img src={elem.image} alt={elem.title} className="product-image" />
          <h1 className="product-title">{elem.title}</h1>
          <h4 className="product-price">Price: ${elem.price}</h4>
          <p className="product-description">{elem.description}</p>
          <button
            onClick={() => {
              AddtoCarts(elem);
            }}
            className="add-to-cart-button"
          >
            Add To Cart
          </button>
        </div>
      ))}
    </div>
  );
};

export default Products;
