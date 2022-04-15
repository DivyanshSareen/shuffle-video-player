import VideoCard from "../Cards/VideoCard";
import { useVideo } from "../../context/video-context";

const VideoListing = () => {
  const { videos } = useVideo();
  console.log(videos);
  return (
    <div className='listing-grid'>
      {videos.map((vid) => (
        <VideoCard video={vid} />
      ))}
    </div>
  );
};

export default VideoListing;
