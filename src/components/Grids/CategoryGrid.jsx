import CategoryCard from "../Cards/CategoryCard";
import { useCategory } from "../../context/category-context";

const CategoryGrid = () => {
  const { categories, mouseOnCard, setMouseOnCard } = useCategory();

  return (
    <>
      {categories.map((cat) => (
        <CategoryCard
          key={cat._id}
          category={cat}
          mouseOnCard={mouseOnCard}
          setMouseOnCard={setMouseOnCard}
        />
      ))}
    </>
  );
};

export default CategoryGrid;
