export const filterData = (searchTxt, restaurants) => {
  if (searchTxt === "") return restaurants;
  return restaurants.filter((restro) =>
    restro?.name.toLowerCase()?.includes(searchTxt.toLowerCase())
  );
};
