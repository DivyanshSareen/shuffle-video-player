import { useState } from "react";
import { Link } from "react-router-dom";
import { useWatchLater } from "../../context/watchlater-context";

const VideoCard = ({ video, isInWatchlater }) => {
  const { addToWatchlater, removeFromWatchlater } = useWatchLater();
  const [mouseOnCard, setMouseOnCard] = useState(false);
  return (
    <div
      className='card'
      onMouseEnter={() => setMouseOnCard(true)}
      onMouseLeave={() => setMouseOnCard(false)}>
      <Link to={`/video/${video._id}`} className='card-img resp-img'>
        <img
          src={require(`../../assets/${video.image}`)}
          alt='thumbnail'
          style={{
            opacity: mouseOnCard === true ? "50%" : "100%",
          }}></img>
        {mouseOnCard && <i className='fa-solid fa-play hover-icon'></i>}
      </Link>
      <div className='card-content'>
        <div className='card-head'>
          <div className='card-title h4'>{video.title}</div>
          <div className='card-subtitle sub-title2'>{video.creator}</div>
        </div>
        <div className='card-actions'>
          <i
            className='action-icon fa-solid fa-clock fa-lg'
            style={{ opacity: isInWatchlater ? "100%" : "50%" }}
            onClick={() => {
              isInWatchlater
                ? removeFromWatchlater(video)
                : addToWatchlater(video);
            }}></i>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
