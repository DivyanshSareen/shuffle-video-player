import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../../context/auth-context";
import { useUser } from "../../context/user-context";
import axios from "axios";

const VideoCard = ({ video }) => {
  const [mouseOnCard, setMouseOnCard] = useState(false);
  const navigate = useNavigate();
  const [likedVideos, setLikedVideos] = useState([]);
  const { authState } = useAuth();
  useEffect(() => {
    axios
      .get("/api/user/likes", {
        headers: { authorization: authState.authToken },
      })
      .then((resp) => setLikedVideos(resp.data.likes));
  }, []);
  const { likeVideo, dislikeVideo } = useUser();
  const isLikedVideo = likedVideos.some(
    (likedVideo) => likedVideo._id === video._id
  );

  return (
    <Link
      to={`/video/${video._id}`}
      className='card'
      onMouseEnter={() => setMouseOnCard(true)}
      onMouseLeave={() => setMouseOnCard(false)}>
      <div className='card-img resp-img'>
        <img
          src={require(`../../assets/${video.image}`)}
          alt='thumbnail'
          style={{
            opacity: mouseOnCard === true ? "50%" : "100%",
          }}></img>
        {mouseOnCard && <i className='fa-solid fa-play hover-icon'></i>}
      </div>
      <div className='card-content'>
        <div className='card-head'>
          <div className='card-title h4'>{video.title}</div>
          <div className='card-subtitle sub-title2'>{video.creator}</div>
        </div>
        <div className='card-actions'>
          <i
            onClick={() => !authState.isLoggedIn && navigate("/login")}
            className='action-icon fa-regular fa-clock fa-lg'></i>
          <i
            onClick={() =>
              authState.isLoggedIn
                ? isLikedVideo
                  ? dislikeVideo(video)
                  : likeVideo(video)
                : navigate("/login")
            }
            className='action-icon fa-solid fa-thumbs-up fa-lg'></i>
        </div>
      </div>
    </Link>
  );
};

export default VideoCard;
