import VideoCard from "../components/Cards/VideoCard";
import EmptyList from "../components/EmptyList/EmptyList";
import { useUser } from "../context/user-context";
import { useWatchLater } from "../context/watchlater-context";

const LikesPage = () => {
  const { likedVideos } = useUser();
  const { watchlater } = useWatchLater();
  const checkIfInWatchLater = (video) => {
    if (watchlater.findIndex((vid) => vid._id === video._id) !== -1) {
      return true;
    } else return false;
  };

  return (
    <>
      <div className='videos'>
        {likedVideos.length === 0 ? (
          <EmptyList type={"liked"} />
        ) : (
          <>
            <div className='h3 list-title'>Liked Videos</div>
            <div className='listing-grid'>
              {likedVideos.map((vid) => (
                <VideoCard
                  key={vid._id}
                  video={vid}
                  isInWatchlater={checkIfInWatchLater(vid)}
                />
              ))}
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default LikesPage;
