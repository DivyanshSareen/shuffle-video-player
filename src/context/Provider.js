import { CategoryProvider } from "./category-context";

const Provider = ({ children }) => {
  return <CategoryProvider>{children}</CategoryProvider>;
};

export default Provider;
