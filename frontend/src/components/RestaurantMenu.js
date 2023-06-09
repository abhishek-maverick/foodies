import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../constants";
import useRestaurant from "../utils/useRestaurant";
import useUrls from "../utils/useUrls";
import ShimmerMenu from "./ShimmerMenu";
import { addItem } from "../utils/cartSlice";
import { useDispatch } from "react-redux";
// import { addItem } from "../utils/cartSlice";

const RestaurantMenu = () => {
  // how to read a dynamic URL params

  const params = useParams();
  const { id } = params;
  const restaurant = useRestaurant(id);
  const url = useUrls(id);

  const dispatch = useDispatch();

  const addAddItem = (item) => {
    dispatch(addItem(item));
  };
  return !restaurant ? (
    <ShimmerMenu />
  ) : (
    <div className="flex">
      <div>
        <h1>Restaurant - {url?.name}</h1>
        <h2>{restaurant?.name}</h2>
        <img
          src={IMG_CDN_URL + url?.url}
          style={{ width: "500px", height: "400px" }}
        ></img>
        <h3>{restaurant?.area}</h3>
        <h3>{restaurant?.city}</h3>
        <h3>{url?.ratings} stars</h3>
        <h3>{restaurant?.costForTwoMsg}</h3>
      </div>
      <div className="p-5">
        <h1>Menu</h1>
        <ul className="flex flex-wrap">
          {restaurant.map((item) => (
            <>
              <li key={item.restaurantId}>
                <div className="w-56 h-28 p-2 m-2 shadow-lg bg-slate-200">
                  {item.name} - Rs:- {item.price}
                  <button
                    className="p-2 m-5 bg-green-100"
                    onClick={() => addAddItem(item)}
                  >
                    Add Item
                  </button>
                </div>
              </li>
            </>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RestaurantMenu;
