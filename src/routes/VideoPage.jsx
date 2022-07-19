import "../styles/video.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useUser } from "../context/user-context";
import RequiresAuth from "../RequiresAuth";
import Loading from "../components/Loading/Loading";

const VideoPage = () => {
  const [video, setVideo] = useState({ _id: null, image: "loading.gif" });
  let params = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const { likeVideo, dislikeVideo, likedVideos } = useUser();
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
  useEffect(() => {
    getVideo(params.videoId);
  }, [params.videoId]);
  useEffect(() => {
    if (isLoading === false) {
      checkIfLiked();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoading]);
  useEffect(() => {
    checkIfLiked();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [likedVideos]);
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
                <i className='action-icon fa-regular fa-clock fa-lg'></i>
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
