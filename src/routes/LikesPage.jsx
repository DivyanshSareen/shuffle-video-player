import VideoCard from "../components/Cards/VideoCard";
import { useUser } from "../context/user-context";

const LikesPage = () => {
  const { likedVideos } = useUser();

  return (
    <>
      <div className='videos'>
        <div className='h3 list-title'>Liked Videos</div>
        <div className='listing-grid'>
          {likedVideos.map((vid) => (
            <VideoCard key={vid._id} video={vid} />
          ))}
        </div>
      </div>
    </>
  );
};

export default LikesPage;
