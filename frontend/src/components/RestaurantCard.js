import { IMG_CDN_URL } from "../constants";
const RestaurantCard = ({ url, name, ratings }) => {
  return (
    <div className="card w-72 p-6 m-[6px] shadow-lg shadow-pink-500  h-72 bg-pink-100">
      {console.log()}
      <img src={IMG_CDN_URL + url} />
      <h2 className="font-bold text-lg"> {name}</h2>
      <h4>Ratings - {ratings}⭐</h4>
    </div>
  );
};
export default RestaurantCard;
