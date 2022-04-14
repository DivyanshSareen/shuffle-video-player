const HomePage = () => {
  return (
    <div className='category'>
      <div>
        <h1 className='h3 category-title'>Dive Into</h1>
        <div className='category-grid'>
          <div class='card'>
            <div class='card-img resp-img'>
              <img
                src={
                  "https://i.ytimg.com/vi/psuRGfAaju4/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDzFUyoLfjkdxNvJTsFGBp3lBz5pg"
                }
                alt='thumbnail'></img>
            </div>
            <div class='card-head'>
              <div class='card-title h4'>English</div>
              <div class='card-subtitle sub-title2'></div>
            </div>
          </div>

          <div class='card'>
            <div class='card-img resp-img'>
              <img
                src={
                  "https://i.ytimg.com/vi/CTaW2NKu3Z8/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLANvSFNnVrow570Sq3nJOc10q5-Aw"
                }
                alt='thumbnail'></img>
            </div>
            <div class='card-head'>
              <div class='card-title h4'>Japanese</div>
            </div>
          </div>

          <div class='card'>
            <div class='card-img resp-img'>
              <img
                src={
                  "https://i.ytimg.com/vi/fyBzPE6w6-k/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDqAzA5Vk6AsPBbnDxwVwrHrULDsw"
                }
                alt='thumbnail'></img>
            </div>
            <div class='card-head'>
              <div class='card-title h4'>Punjabi</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
