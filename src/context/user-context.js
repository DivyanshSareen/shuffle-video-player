import axios from "axios";
import { useState, useContext, createContext, useEffect } from "react";
import { useAuth } from "./auth-context";

const userContext = createContext();

const UserProvider = ({ children }) => {
  const { authState } = useAuth();
  const [likedVideos, setLikedVideos] = useState([]);

  const getLikedVideos = async () => {
    return axios
      .get("/api/user/likes", {
        headers: { authorization: authState.authToken },
      })
      .then((resp) => setLikedVideos(resp.data.likes));
  };

  const likeVideo = async (video) => {
    await axios
      .post(
        "/api/user/likes",
        { video: video },
        {
          headers: { authorization: authState.authToken },
        }
      )
      .then((res) => {
        console.log("set liked vids to", res.data.likes);
        setLikedVideos(res.data.likes);
      });
  };

  const dislikeVideo = (video) => {
    return axios
      .delete(`/api/user/likes/${video._id}`, {
        headers: { authorization: authState.authToken },
      })
      .catch((e) => console.log(e))
      .then((res) => {
        console.log("set disliked vids to", res.data.likes);
        setLikedVideos(res.data.likes);
      });
  };

  useEffect(() => {
    getLikedVideos();
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
