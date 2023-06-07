import { useState, useContext } from "react";
import Logo from "../assets/img/foodVilla.jpg";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";
import { useSelector } from "react-redux";

const loggedInUser = (LoginCheck) => {
  //API to be called and if returns Success => Authenticated else not Authenticated
  return LoginCheck ? true : false;
};

// SPA => Single Page Application ???
// Client Side Routing => routing manipuation in front-end, no need to reload the page
// Server Side Routing => fetch all the details from the server

export const Title = () => (
  <a href="/">
    <img className="h-28 p-2" alt="logo" src={Logo} />
  </a>
);
const styleObj = {
  backgroundColor: "#02B290",
  border: "3px solid blue",
};

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const isOnline = useOnline();
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
      <h2>{isOnline ? "✅" : "🔴"}</h2>
      {loggedInUser(isLoggedIn) ? (
        <button
          style={{ width: "5%" }}
          onClick={() => setIsLoggedIn(!isLoggedIn)}
        >
          Logout
        </button>
      ) : (
        <button
          style={{ width: "5%" }}
          onClick={() => setIsLoggedIn(!isLoggedIn)}
        >
          Login
        </button>
      )}
      {/* <button>Login</button>
      <button>Logout</button> */}
    </div>
  );
};
export default Header;
