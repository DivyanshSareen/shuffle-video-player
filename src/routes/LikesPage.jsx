import VideoCard from "../components/Cards/VideoCard";
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
      </div>
    </>
  );
};

export default LikesPage;
