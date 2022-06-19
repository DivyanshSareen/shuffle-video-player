import axios from "axios";
import { useContext, createContext } from "react";
import { useAuth } from "./auth-context";

const userContext = createContext();

const UserProvider = ({ children }) => {
  const { authState } = useAuth();

  const likeVideo = (video) => {
    axios.post(
      "/api/user/likes",
      { video: video },
      {
        headers: { authorization: authState.authToken },
      }
    );
  };

  const dislikeVideo = (video) => {
    axios.delete(`/api/user/likes/${video._id}`, {
      headers: { authorization: authState.authToken },
    });
  };

  return (
    <userContext.Provider value={{ likeVideo, dislikeVideo }}>
      {children}
    </userContext.Provider>
  );
};

const useUser = () => useContext(userContext);

export { UserProvider, useUser };
