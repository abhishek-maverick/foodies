import { useEffect, useState } from "react";

const useOnline = () => {
  const [isOnline, setIsOnline] = useState(true);

  useEffect(() => {
    const handleOnline = () => {
      setIsOnline(true);
    };
    const handleOffline = () => {
      setIsOnline(false);
    };
    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);
    // const startInterval = setInterval(() => {
    //   console.log("managing online / offline effects");
    // }, 1000);

    // to clean up the mess
    // componentWillUnmount()
    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
      // clearInterval(startInterval);
    };
  }, []);

  return isOnline; // => return true or false
};
export default useOnline;
