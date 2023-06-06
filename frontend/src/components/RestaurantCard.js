import { IMG_CDN_URL } from "../constants";
const RestaurantCard = ({
  cloudinaryImageId,
  name,
  cuisines,
  lastMileTravelString,
}) => {
  // const { cloudinaryImageId, name, cuisines, lastMileTravelString } =
  //   restaurant.data;
  return (
    <div className="card w-72 p-6 m-[6px] shadow-lg shadow-pink-500  h-72 bg-pink-100">
      {console.log()}
      <img src={IMG_CDN_URL + cloudinaryImageId} />
      <h2 className="font-bold text-lg"> {name}</h2>
      <h3>{cuisines.join(", ")}</h3>
      <h4>{lastMileTravelString}</h4>
    </div>
  );
};
export default RestaurantCard;
