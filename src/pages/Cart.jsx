import React, { useState, useEffect } from "react";
import CartItem from "../components/CartItem";

const Cart = () => {
  const [cart, setCart] = useState(() => {
    let storedCart = JSON.parse(localStorage.getItem("storedCart"));
    return storedCart || [];
  });

  const [total, setTotal] = useState("0$");

  function handleCounterBtn(id, counter, type) {
    type == "up" ? counter++ : counter--;
    if (counter <= 0) {
      let newCart = cart.filter((item) => item.id != id);
      setCart(() => newCart);
    } else {
      let newCart = cart.map((item) =>
        item.id == id ? { ...item, count: counter } : item
      );
      setCart(() => newCart);
    }
  }

  useEffect(() => {
    localStorage.setItem("storedCart", JSON.stringify(cart));
    let total = cart.reduce((sum, { price, count }) => sum + price * count, 0);
    setTotal(total);
  }, [cart]);

  return (
    <>
      <h1 className="text-center font-bold mb-9 mt-9">Your Cart Items</h1>
      <div className="flex flex-col items-center">
        {cart.map((item, index) => (
          <CartItem
            item={item}
            handleCounterBtn={handleCounterBtn}
            key={index}
          />
        ))}
      </div>
      <div className="text-center text-lg">
        Total : <span className="font-bold">{total}$</span>
      </div>
    </>
  );
};

export default Cart;
