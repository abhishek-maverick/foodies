// import React from "react";
// import { ShimmerPostList } from "react-shimmer-effects";
// const Shimmer = () => {
//   return (
//     <ShimmerPostList postStyle="STYLE_FIVE" col={4} row={2} gap={30} />
//   );
// };

const Shimmer = () => {
  return (
    <div className="restaurant-list">
      {Array(10)
        .fill("")
        .map((e, index) => (
          <div className="shimmer-card" key={index}></div>
        ))}
    </div>
  );
};

export default Shimmer;
