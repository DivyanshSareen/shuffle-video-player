import { useState } from "react";

const VideoCard = ({ video }) => {
  const [mouseOnCard, setMouseOnCard] = useState(false);
  console.log(video);
  return (
    <div
      className='card'
      onMouseEnter={() => setMouseOnCard(true)}
      onMouseLeave={() => setMouseOnCard(false)}>
      <div className='card-img resp-img'>
        <img
          src={require("../../assets/categories/english.webp")}
          alt='thumbnail'
          style={{
            opacity: mouseOnCard === true ? "50%" : "100%",
          }}></img>
        {mouseOnCard && <i className='fa-solid fa-eye hover-icon'></i>}
      </div>
      <div className='card-content'>
        <div className='card-head'>
          <div className='card-title h4'>{}</div>
          <div className='card-subtitle sub-title2'>various artists</div>
        </div>
        <div className='watch-later'>
          <i class='fa-regular fa-clock fa-lg'></i>
          <i class='fa-solid fa-thumbs-up fa-lg'></i>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
