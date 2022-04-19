import { CategoryProvider } from "./category-context";
import { VideoProvider } from "./video-context";
import { PlaylistProvider } from "./playlist-context";

const Provider = ({ children }) => {
  return (
    <CategoryProvider>
      <VideoProvider>
        <PlaylistProvider>{children}</PlaylistProvider>
      </VideoProvider>
    </CategoryProvider>
  );
};

export default Provider;
