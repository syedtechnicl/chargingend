"use client";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../reduxx/store";
import { Removetocart } from "../reduxx/Slicer";

interface CardItem {
  id: number;
  category: string;
  description: string;
  image: string;
  price: number;
  title: string;
}

const page = () => {
  const dd = useSelector((state: RootState) => state.cart);

  const dispatch = useDispatch();

  const remove = (elem: CardItem) => {
    dispatch(Removetocart(elem.id));
  };

  return (
    <div>
      <div className="product-container">
        {dd.map((elem: CardItem) => (
          <div className="product-card" key={elem.id}>
            <img src={elem.image} alt={elem.title} className="product-image" />
            <h1 className="product-title">{elem.title}</h1>
            <h4 className="product-price">Price: ${elem.price}</h4>
            <p className="product-description">{elem.description}</p>
            <button
              onClick={() => {
                remove(elem);
              }}
              className="add-to-cart-button"
            >
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default page;
