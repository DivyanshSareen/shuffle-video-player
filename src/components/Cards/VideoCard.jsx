import { useState } from "react";

const VideoCard = ({ video }) => {
  const [mouseOnCard, setMouseOnCard] = useState(false);
  return (
    <div
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
        {mouseOnCard && <i class='fa-solid fa-play hover-icon'></i>}
      </div>
      <div className='card-content'>
        <div className='card-head'>
          <div className='card-title h4'>{video.title}</div>
          <div className='card-subtitle sub-title2'>{video.creator}</div>
        </div>
        <div className='card-actions'>
          <i class='action-icon fa-regular fa-clock fa-lg'></i>
          <i class='action-icon fa-solid fa-thumbs-up fa-lg'></i>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
