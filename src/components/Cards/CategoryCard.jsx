import { useState } from "react";

const CategoryCard = () => {
  const [mouseOnCard, setMouseOnCard] = useState(false);
  return (
    <div
      class='card'
      onMouseEnter={() => setMouseOnCard(true)}
      onMouseLeave={() => setMouseOnCard(false)}>
      <div class='card-img resp-img'>
        <img
          src={require("../../assets/categories/english.webp")}
          alt='thumbnail'
          style={{
            opacity: mouseOnCard === true ? "50%" : "100%",
          }}></img>
        {mouseOnCard && <i class='fa-solid fa-eye hover-icon'></i>}
      </div>
      <div class='card-head'>
        <div class='card-title h4'>English</div>
        <div class='card-subtitle sub-title2'></div>
      </div>
    </div>
  );
};

export default CategoryCard;
