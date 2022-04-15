import { CategoryProvider } from "./category-context";
import { VideoProvider } from "./video-context";
const Provider = ({ children }) => {
  return (
    <CategoryProvider>
      <VideoProvider>{children}</VideoProvider>
    </CategoryProvider>
  );
};

export default Provider;
