import { useState } from "react";
import { Link } from "react-router-dom";

const CategoryCard = ({ category }) => {
  const [mouseOnCard, setMouseOnCard] = useState(false);
  return (
    <Link to='/listing'>
      <div
        className='card'
        onMouseEnter={() => setMouseOnCard(true)}
        onMouseLeave={() => setMouseOnCard(false)}>
        <div className='card-img resp-img'>
          <img
            src={require("../../assets/" + category.image)}
            alt='thumbnail'
            style={{
              opacity: mouseOnCard === true ? "50%" : "100%",
            }}></img>
          {mouseOnCard && <i className='fa-solid fa-eye hover-icon'></i>}
        </div>
        <div className='card-head'>
          <div className='card-title h4'>{category.categoryName}</div>
          <div className='card-subtitle sub-title2'>various artists</div>
        </div>
      </div>
    </Link>
  );
};

export default CategoryCard;
