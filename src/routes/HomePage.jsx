import CategoryGrid from "../components/Grids/CategoryGrid";

const HomePage = () => {
  return (
    <>
      <h1 className='h3 category-title'>Watch music videos</h1>
      <div className='category'>
        <div>
          <div className='category-grid'>
            <CategoryGrid />
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
