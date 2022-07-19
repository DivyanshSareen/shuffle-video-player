import { useState } from "react";
import { Link } from "react-router-dom";

const VideoCard = ({ video }) => {
  const [mouseOnCard, setMouseOnCard] = useState(false);

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
      </div>
    </Link>
  );
};

export default VideoCard;
