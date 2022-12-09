import React, { useState, useEffect } from "react";
import placeholderImg from "../assets/products/placeholder.jpg";

const Item = ({ item, addToCart, cart }) => {
  const { id, img, title, price } = item;
  //if item is in the cart get the count
  const [count, setCount] = useState(() => {
    let storedCart = JSON.parse(localStorage.getItem("storedCart"));
    return storedCart?.find((item) => item.id == id).count || 0;
  });

  useEffect(() => {
    let storedCart = JSON.parse(localStorage.getItem("storedCart"));
    let newCount = storedCart?.find((item) => item.id == id).count || 0;
    setCount(newCount);
  }, [cart]);
  return (
    <div className="p-4 w-60 border border-slate-700 rounded-lg overflow-hidden">
      <div id="thumbnail">
        <img src={img} />
      </div>
      <div id="title">{title}</div>
      <div id="price" className="mt-2 mb-2 font-semibold text-lg">
        {price}$
      </div>
      <button
        className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
        onClick={() => addToCart(id)}
      >
        Add to cart ({count})
      </button>
    </div>
  );
};

Item.defaultProps = {
  id: 0,
  title: "Product Title",
  img: placeholderImg,
  price: 0,
};

export default Item;
