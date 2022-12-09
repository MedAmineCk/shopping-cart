import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo-sm.png";
import { FaShoppingCart } from "react-icons/fa";

const header = (props) => {
  const { count } = props;
  return (
    <header className="bg-slate-600 text-white p-4 flex justify-between items-center">
      <div className="logo bg-slate-600">
        <img src={logo} alt="logo" />
      </div>
      <div className="cart flex items-center">
        <span className="mr-5 font-bold text-xl">Shop</span>
        <Link to="/cart">
          <div id="icon" className="relative">
            <FaShoppingCart className="text-4xl" />
            <div
              id="count"
              className="w-6 h-6 bg-red-500 rounded-3xl flex justify-center items-center font-bold text-lg absolute bottom-[-10px]"
            >
              {count}
            </div>
          </div>
        </Link>
      </div>
    </header>
  );
};

export default header;
