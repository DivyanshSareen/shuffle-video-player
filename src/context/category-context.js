import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
const CategoryContext = createContext();

export function CategoryProvider({ children }) {
  const [categories, setCategories] = useState([]);

  async function getCategories() {
    let response = [];
    try {
      response = await axios.get("/api/categories");
    } catch (error) {
      console.log(error);
    } finally {
      setCategories(response.data.categories);
    }
  }

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
}

export function useCategory() {
  return useContext(CategoryContext);
}
