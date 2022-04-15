import CategoryCard from "../../components/Cards/CategoryCard";

const HomePage = () => {
  return (
    <div className='category'>
      <div>
        <h1 className='h3 category-title'>Watch music videos</h1>
        <div className='category-grid'>
          <CategoryCard />
          <CategoryCard />
          <CategoryCard />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
