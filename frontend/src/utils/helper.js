export const filterData = (searchTxt, restaurants) => {
  if (searchTxt === "") return restaurants;
  return restaurants.filter((restro) =>
    restro?.data?.name.toLowerCase()?.includes(searchTxt.toLowerCase())
  );
};
