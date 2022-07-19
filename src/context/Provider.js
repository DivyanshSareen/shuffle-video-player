import { CategoryProvider } from "./category-context";
import { VideoProvider } from "./video-context";
import { PlaylistProvider } from "./playlist-context";
import { AuthProvider } from "./auth-context";
import { UserProvider } from "./user-context";
import { HistoryProvider } from "./history-context";

const Provider = ({ children }) => {
  return (
    <AuthProvider>
      <UserProvider>
        <CategoryProvider>
          <VideoProvider>
            <HistoryProvider>
              <PlaylistProvider>{children}</PlaylistProvider>
            </HistoryProvider>
          </VideoProvider>
        </CategoryProvider>
      </UserProvider>
    </AuthProvider>
  );
};

export default Provider;
