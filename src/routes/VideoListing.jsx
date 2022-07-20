import VideoCard from "../components/Cards/VideoCard";
import { useVideo } from "../context/video-context";
import { useWatchLater } from "../context/watchlater-context";
import "../styles/listing.css";

const VideoListing = () => {
  const { watchlater } = useWatchLater();
  const { videoState } = useVideo();
  const checkIfInWatchLater = (video) => {
    if (watchlater.findIndex((vid) => vid._id === video._id) !== -1) {
      return true;
    } else return false;
  };
  return (
    <div className='videos'>
      <div className='h3 list-title'>Watch Videos</div>
      <div className='listing-grid'>
        {videoState.videos.map((vid) => (
          <VideoCard
            key={vid._id}
            video={vid}
            isInWatchlater={checkIfInWatchLater(vid)}
          />
        ))}
      </div>
    </div>
  );
};

export default VideoListing;
