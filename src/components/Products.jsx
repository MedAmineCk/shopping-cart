import React from "react";
import Item from "./Item";

const Products = ({ data, addToCart, cart }) => {
  return (
    <div className="flex justify-center text-center gap-4 p-4 flex-wrap">
      {data.map((item, index) => (
        <Item key={index} item={item} cart={cart} addToCart={addToCart} />
      ))}
    </div>
  );
};

export default Products;
