import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
const CategoryContext = createContext();

const CategoryProvider = ({ children }) => {
  const [categories, setCategories] = useState([]);

  const getCategories = async () => {
    let response = [];
    try {
      response = await axios.get("/api/categories");
    } catch (error) {
      console.log(error);
    } finally {
      setCategories(response.data.categories);
    }
  };

  useEffect(() => {
    getCategories();
  }, []);

  return (
    <CategoryContext.Provider
      value={{
        categories,
      }}>
      {children}
    </CategoryContext.Provider>
  );
};

const useCategory = () => {
  return useContext(CategoryContext);
};

export { CategoryProvider, useCategory };
