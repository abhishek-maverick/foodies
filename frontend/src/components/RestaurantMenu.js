import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../constants";
import useRestaurant from "../utils/useRestaurant";
import ShimmerMenu from "./ShimmerMenu";
import { addItem } from "../utils/cartSlice";
import { useDispatch } from "react-redux";
// import { addItem } from "../utils/cartSlice";

const RestaurantMenu = () => {
  // how to read a dynamic URL params

  const params = useParams();
  const { id } = params;
  const restaurant = useRestaurant(id);

  const dispatch = useDispatch();

  const addAddItem = (item) => {
    dispatch(addItem(item));
  };

  return !restaurant ? (
    <ShimmerMenu />
  ) : (
    <div className="flex">
      <div>
        <h1>Restaurant - {id}</h1>
        <h2>{restaurant?.name}</h2>
        <img
          src={IMG_CDN_URL + restaurant.cloudinaryImageId}
          style={{ width: "500px", height: "400px" }}
        ></img>
        <h3>{restaurant?.area}</h3>
        <h3>{restaurant?.city}</h3>
        <h3>{restaurant?.avgRating} stars</h3>
        <h3>{restaurant?.costForTwoMsg}</h3>
      </div>
      <div className="p-5">
        <h1>Menu</h1>
        <ul tyle={{ disply: "flex" }}>
          {Object.values(restaurant?.menu?.items).map((item) => (
            <>
              <li key={item.id}>
                {item.name}{" "}
                <button
                  className="p-2 m-5 bg-green-100"
                  onClick={() => addAddItem(item)}
                >
                  Add Item
                </button>
              </li>
            </>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RestaurantMenu;
