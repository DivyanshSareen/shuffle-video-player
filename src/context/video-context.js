import { useContext, createContext, useEffect, useReducer } from "react";
import axios from "axios";
import videoReducer from "../reducer/video-reducer";

const VideoContext = createContext();

const VideoProvider = ({ children }) => {
  const [videoState, videoDispatch] = useReducer(videoReducer, { videos: [] });
  const getVideos = async () => {
    let response = [];
    try {
      response = await axios.get("/api/videos");
    } catch (e) {
      console.log(e);
    } finally {
      videoDispatch({ type: "LIST_VIDEOS", payload: response.data.videos });
    }
  };
  const getVideosByCategory = async (category) => {
    let response = [];
    try {
      response = await axios.get("/api/videos");
    } catch (e) {
      console.log(e);
    } finally {
      videoDispatch({
        type: "LIST_VIDEOS",
        payload: response.data.videos.filter(
          (vid) => vid.category === category
        ),
      });
    }
  };

  useEffect(() => {
    getVideos();
  }, []);
  return (
    <VideoContext.Provider
      value={{ videoState, videoDispatch, getVideosByCategory, getVideos }}>
      {children}
    </VideoContext.Provider>
  );
};

const useVideo = () => {
  return useContext(VideoContext);
};

export { VideoProvider, useVideo };
