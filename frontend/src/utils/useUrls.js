import { useState, useEffect } from "react";
const useUrls = (resId) => {
  const [url, setUrl] = useState(null);

  //Get data from API
  useEffect(() => {
    getUrlInfo();
  }, []);

  async function getUrlInfo() {
    const data = await fetch(
      `https://2c75-36-255-87-7.in.ngrok.io/api/v1/restaurant/${resId}`
    );
    const json = await data.json();
    setUrl(json?.data);
  }
  return url;
};

export default useUrls;
