import { CategoryProvider } from "./category-context";
import { VideoProvider } from "./video-context";
import { PlaylistProvider } from "./playlist-context";
import { AuthProvider } from "./auth-context";
import { UserProvider } from "./user-context";
import { HistoryProvider } from "./history-context";
import { WatchLaterProvider } from "./watchlater-context";

const Provider = ({ children }) => {
  return (
    <AuthProvider>
      <UserProvider>
        <CategoryProvider>
          <VideoProvider>
            <HistoryProvider>
              <PlaylistProvider>
                <WatchLaterProvider>{children}</WatchLaterProvider>
              </PlaylistProvider>
            </HistoryProvider>
          </VideoProvider>
        </CategoryProvider>
      </UserProvider>
    </AuthProvider>
  );
};

export default Provider;
