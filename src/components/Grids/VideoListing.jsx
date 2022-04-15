import VideoCard from "../Cards/VideoCard";
import { useVideo } from "../../context/video-context";

const VideoListing = () => {
  const { videos } = useVideo();
  console.log(videos);
  return (
    <>
      {videos.map((vid) => (
        <VideoCard video={vid} />
      ))}
    </>
  );
};

export default VideoListing;
