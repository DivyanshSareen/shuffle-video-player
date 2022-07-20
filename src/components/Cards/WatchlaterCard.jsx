import { useState } from "react";
import { Link } from "react-router-dom";

const HistoryCard = ({ video, removeFromWatchlater }) => {
  const [mouseOnCard, setMouseOnCard] = useState(false);
  return (
    <div className='card'>
      <Link
        to={`/video/${video._id}`}
        onMouseEnter={() => setMouseOnCard(true)}
        onMouseLeave={() => setMouseOnCard(false)}
        className='card-img resp-img'>
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
            className='action-icon fa-solid fa-trash fa-lg'
            onClick={() => {
              removeFromWatchlater(video);
            }}></i>
        </div>
      </div>
    </div>
  );
};

export default HistoryCard;
