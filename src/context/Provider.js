import { CategoryProvider } from "./category-context";
import { VideoProvider } from "./video-context";
import { PlaylistProvider } from "./playlist-context";
import { AuthProvider } from "./auth-context";

const Provider = ({ children }) => {
  return (
    <CategoryProvider>
      <VideoProvider>
        <AuthProvider>
          <PlaylistProvider>{children}</PlaylistProvider>
        </AuthProvider>
      </VideoProvider>
    </CategoryProvider>
  );
};

export default Provider;
