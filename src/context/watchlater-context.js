import axios from "axios";
import { useContext, createContext, useState, useEffect } from "react";
import { useAuth } from "./auth-context";

const watchLaterContext = createContext();
const WatchLaterProvider = ({ children }) => {
  const { authState } = useAuth();
  const [watchlater, setWatchlater] = useState([]);

  const getWatchlaterList = async () => {
    await axios
      .get("/api/user/watchlater", {
        headers: { authorization: authState.authToken },
      })
      .catch((e) => console.log(e))
      .then((res) => {
        setWatchlater(res.data.watchlater);
      });
  };

  const addToWatchlater = async (video) => {
    await axios
      .post(
        "/api/user/watchlater",
        { video: video },
        {
          headers: {
            authorization: authState.authToken,
          },
        }
      )
      .catch((e) => console.log(e))
      .then((res) => setWatchlater(res.data.watchlater));
  };

  const removeFromWatchlater = async (video) => {
    await axios
      .delete(`/api/user/watchlater/${video._id}`, {
        headers: { authorization: authState.authToken },
      })
      .catch((e) => console.log(e))
      .then((res) => setWatchlater(res.data.watchlater));
  };

  useEffect(() => {
    if (authState.isLoggedIn) {
      console.log("now");
      getWatchlaterList();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [authState.isLoggedIn]);
  return (
    <watchLaterContext.Provider
      value={{
        watchlater,
        setWatchlater,
        addToWatchlater,
        removeFromWatchlater,
      }}>
      {children}
    </watchLaterContext.Provider>
  );
};

const useWatchLater = () => useContext(watchLaterContext);

export { useWatchLater, WatchLaterProvider };
