import { useState, useEffect } from "react";
import { FETCH_MENU_URL } from "../constants";
const useRestaurant = (resId) => {
  const [restaurant, setRestaurant] = useState(null);

  //Get data from API
  useEffect(() => {
    getRestaurantInfo();
  }, []);

  async function getRestaurantInfo() {
    const data = await fetch(
      "https://2c75-36-255-87-7.in.ngrok.io/api/v1/item/"
    );
    const json = await data.json();
    console.log(json);
    setRestaurant(json?.data);
  }
  return restaurant;
};

export default useRestaurant;
