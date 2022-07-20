import "../styles/video.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useUser } from "../context/user-context";
import { useHistory } from "../context/history-context";
import { useWatchLater } from "../context/watchlater-context";
import RequiresAuth from "../RequiresAuth";
import Loading from "../components/Loading/Loading";

const VideoPage = () => {
  const [video, setVideo] = useState({ _id: null, image: "loading.gif" });
  let params = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const { likeVideo, dislikeVideo, likedVideos } = useUser();
  const { addVideoToHistory } = useHistory();
  const { watchlater, addToWatchlater, removeFromWatchlater } = useWatchLater();
  const [isInWatchlater, setIsInWatchlater] = useState(false);
  const [isLikedVideo, setIsLikedVideo] = useState(false);
  const getVideo = async (id) => {
    try {
      await axios
        .get(`/api/video/${id}`)
        .then((resp) => setVideo(resp.data.video));
      setIsLoading(false);
    } catch (e) {
      console.log(e);
    }
  };
  const checkIfLiked = () => {
    if (likedVideos.findIndex((vid) => vid._id === video._id) !== -1) {
      setIsLikedVideo(true);
    } else setIsLikedVideo(false);
  };
  const checkIfInWatchLater = () => {
    if (watchlater.findIndex((vid) => vid._id === video._id) !== -1) {
      return setIsInWatchlater(true);
    } else return setIsInWatchlater(false);
  };
  useEffect(() => {
    getVideo(params.videoId);
  }, [params.videoId]);
  useEffect(() => {
    if (isLoading === false) {
      checkIfLiked();
      checkIfInWatchLater();
      addVideoToHistory(video);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoading]);
  useEffect(() => {
    checkIfLiked();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [likedVideos]);
  useEffect(() => {
    checkIfInWatchLater();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [watchlater]);
  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <div className='video'>
          <div className='video-frame'>
            <iframe
              width='100%'
              height='100%'
              src={video?.link}
              title='YouTube video player'
              frameBorder='0'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
              allowFullScreen></iframe>
          </div>
          <div className='video-info'>
            <div className='video-head'>
              <div className='video-title h4'>{video?.title}</div>
              <div className='video-subtitle sub-title2'>{video?.creator}</div>
            </div>
            <div className='video-actions'>
              <RequiresAuth>
                <i
                  className='action-icon fa-regular fa-clock fa-lg'
                  style={{ opacity: `${isInWatchlater ? "100%" : "50%"}` }}
                  onClick={() => {
                    isInWatchlater
                      ? removeFromWatchlater(video)
                      : addToWatchlater(video);
                  }}></i>
              </RequiresAuth>
              <RequiresAuth>
                <i
                  onClick={() => {
                    isLikedVideo ? dislikeVideo(video) : likeVideo(video);
                  }}
                  className='action-icon fa-solid fa-thumbs-up fa-lg'
                  style={{ opacity: `${isLikedVideo ? "100%" : "50%"}` }}></i>
              </RequiresAuth>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default VideoPage;
