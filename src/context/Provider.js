import { CategoryProvider } from "./category-context";
import { VideoProvider } from "./video-context";
import { PlaylistProvider } from "./playlist-context";
import { AuthProvider } from "./auth-context";

const Provider = ({ children }) => {
  return (
    <AuthProvider>
      <CategoryProvider>
        <VideoProvider>
          <PlaylistProvider>{children}</PlaylistProvider>
        </VideoProvider>
      </CategoryProvider>
    </AuthProvider>
  );
};

export default Provider;
