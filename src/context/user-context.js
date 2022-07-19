import axios from "axios";
import { useState, useContext, createContext, useEffect } from "react";
import { useAuth } from "./auth-context";

const userContext = createContext();

const UserProvider = ({ children }) => {
  const { authState } = useAuth();
  const [likedVideos, setLikedVideos] = useState([]);

  const getLikedVideos = () => {
    return axios
      .get("/api/user/likes", {
        headers: { authorization: authState.authToken },
      })
      .then((resp) => setLikedVideos(resp.data.likes));
  };

  const likeVideo = (video) => {
    axios
      .post(
        "/api/user/likes",
        { video: video },
        {
          headers: { authorization: authState.authToken },
        }
      )
      .then((res) => {
        setLikedVideos(res.data.likes);
        getLikedVideos();
      });
  };

  const dislikeVideo = (video) => {
    return axios.delete(
      `/api/user/likes/${video._id}`,
      {},
      {
        headers: { authorization: authState.authToken },
      }
    );
  };

  useEffect(() => {
    getLikedVideos();
  }, []);

  return (
    <userContext.Provider
      value={{ likeVideo, dislikeVideo, likedVideos, getLikedVideos }}>
      {children}
    </userContext.Provider>
  );
};

const useUser = () => useContext(userContext);

export { UserProvider, useUser };
