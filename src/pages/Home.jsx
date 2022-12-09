import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Products from "../components/Products";
import data from "../data/products";

function Home() {
  const [cart, setCart] = useState(() => {
    let storedCart = JSON.parse(localStorage.getItem("storedCart"));
    return storedCart || [];
  });

  function addToCart(id) {
    let itemInCart = cart.find((item) => item.id == id);
    if (itemInCart) {
      //check if availble in the cart if yes add +1 to count
      itemInCart = { ...itemInCart, count: itemInCart.count + 1 };
      let newCart = cart.filter((item) => item.id != id);
      setCart(() => [...newCart, itemInCart]);
    } else {
      //get the object by id
      let itemObject = data.find((item) => item.id == id);
      itemObject = { ...itemObject, count: 1 };
      setCart((cart) => [...cart, itemObject]);
    }
  }

  useEffect(() => {
    localStorage.setItem("storedCart", JSON.stringify(cart));
  }, [cart]);

  return (
    <>
      <Header count={cart.length} />
      <Products data={data} cart={cart} addToCart={addToCart} />
    </>
  );
}

export default Home;
