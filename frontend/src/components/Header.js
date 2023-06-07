import { useState, useContext } from "react";
import Logo from "../assets/img/foodVilla.jpg";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";
import { useSelector } from "react-redux";

export const Title = () => (
  <a href="/">
    <img className="h-28 p-2" alt="logo" src={Logo} />
  </a>
);

const Header = () => {
  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className="flex justify-between bg-pink-100 shadow-lg">
      <Title />
      <h1 className="text-7xl mt-2 justify-center">Foodies</h1>
      <div className="nav-items">
        <ul className="flex py-10">
          <li className="px-2">
            <Link to="/">Home</Link>
          </li>
          {/* <li className="px-2">
            <Link to="/about">About</Link>
          </li> */}
          <li className="px-2">
            <Link to="/contact">Contact</Link>
          </li>
          {cartItems.length ? (
            <li className="px-2">
              <Link to="/cart">Cart - {cartItems.length} items</Link>
            </li>
          ) : (
            <li className="px-2">
              <Link to="/cart">Cart</Link>
            </li>
          )}
          <li className="px-2">
            <Link to="/instamart">Instamart</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Header;
