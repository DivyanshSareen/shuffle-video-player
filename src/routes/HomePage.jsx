import CategoryGrid from "../components/Grids/CategoryGrid";

const HomePage = () => {
  return (
    <>
      <div className='category'>
        <h1 className='h3 category-title'>Watch music videos</h1>
        <div className='category-grid'>
          <CategoryGrid />
        </div>
      </div>
    </>
  );
};

export default HomePage;
