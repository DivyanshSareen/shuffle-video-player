import VideoCard from "../components/Cards/VideoCard";
import { useVideo } from "../context/video-context";
import "../styles/listing.css";

const VideoListing = () => {
  const { videoState } = useVideo();
  return (
    <div className='videos'>
      <div className='h3 list-title'>Watch Videos</div>
      <div className='listing-grid'>
        {videoState.videos.map((vid) => (
          <VideoCard key={vid._id} video={vid} />
        ))}
      </div>
    </div>
  );
};

export default VideoListing;
