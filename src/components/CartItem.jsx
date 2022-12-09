import React, { useState } from "react";
import placeHolder from "../assets/products/placeholder.jpg";
import data from "../data/products";

const CartItem = ({ item, handleCounterBtn }) => {
  const { id, img, title, price, count } = item;
  return (
    <div className="border flex w-[400px] mb-5">
      <div className="thumbnail border w-1/2">
        <img src={img} />
      </div>
      <div className="info p-10">
        <h1 className="font-bold">{title}</h1>
        <p>price : {price}</p>
        <div className="count flex gap-4">
          <button
            className="border-2 bg-teal-700 text-white font-bold text-xl rounded-3xl p-1"
            onClick={() => {
              handleCounterBtn(id, count, "up");
            }}
          >
            +
          </button>
          <input
            type="number"
            value={count}
            onChange={(e) => setcount(e.target.value)}
            className="w-10 text-center font-bold text-lg"
          />
          <button
            className="border-2 bg-teal-700 text-white font-bold text-xl rounded-3xl p-1"
            onClick={() => {
              handleCounterBtn(id, count, "down");
            }}
          >
            -
          </button>
        </div>
      </div>
    </div>
  );
};
CartItem.defaultProps = {
  id: 0,
  img: placeHolder,
  title: "product 0",
  price: "99$",
  count: 1,
};
export default CartItem;
