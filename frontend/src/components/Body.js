import { restaurantList, RESTAURANT_API } from "../constants";
import RestaurantCard from "./RestaurantCard";
import { useContext, useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { filterData } from "../utils/helper";
import useOnline from "../utils/useOnline";
import UserContext from "../utils/userContext";

const Body = () => {
  //searchTxt is a local variable
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchTxt, setSearchTxt] = useState(""); //to create state variables

  useEffect(() => {
    // fetchLocation();
    getData();
    // getRestaurants();
  }, []);

  async function getData() {
    // const data = await axios.get("localhost:3002/api/v1/restaurant/");
    const data = await fetch(
      "https://c6a9-36-255-87-5.in.ngrok.io/api/v1/restaurant"
    );
    const json = await data.json();
    console.log(json);
    setAllRestaurants(json?.data);
    setFilteredRestaurants(json?.data);
  }

  async function fetchLocation() {
    await navigator.geolocation.getCurrentPosition((position) => {
      setLat(position.coords.latitude);
      setLong(position.coords.longitude);
    });
  }
  async function getRestaurants() {
    const lat = 12.9698196;
    const long = 77.7499721;
    const data = await fetch(
      `https://www.swiggy.com/dapi/restaurants/list/v5?lat=${lat}&lng=${long}&page_type=DESKTOP_WEB_LISTING`
    );
    const json = await data?.json();
    setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    console.log(allRestaurants);
    setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
  }

  //Conditional rendering
  // if restaurant is empty => shimmer Ui
  // if restaurant has data => actual Data UI

  const online = useOnline();

  if (!online) {
    return <h1>🔴 Offline, Please check your internet connection</h1>;
  }

  const { user } = useContext(UserContext);

  return allRestaurants?.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="search-container p-5 bg-pink-100 my-5">
        <input
          type="text"
          className="search-input focus:bg-sky-100 p-2 m-2"
          placeholder="Search"
          value={searchTxt}
          onChange={(e) => setSearchTxt(e.target.value)}
        />
        <button
          className="search-btn p-2 m-2 bg-purple-800 hover:bg-green-800 text-white rounded-md"
          onClick={() => {
            //need to filter the data
            //update the state - restaurants variable
            const updatedData = filterData(searchTxt, allRestaurants);
            console.log(updatedData);
            setFilteredRestaurants(updatedData);
          }}
        >
          Search
        </button>
      </div>
      <div className="restaurant-list flex flex-wrap ml-3">
        {filteredRestaurants?.length === 0 ? (
          <h1>No restaurant matches your search...:(</h1>
        ) : (
          filteredRestaurants.map((each) => (
            <Link
              to={"restaurant/" + each.restaurantId}
              key={each.restaurantId}
            >
              <RestaurantCard {...each} />
            </Link>
          ))
        )}
      </div>
    </>
  );
};

export default Body;
