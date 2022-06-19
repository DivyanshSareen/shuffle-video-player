import axios from "axios";
import { useEffect, useState } from "react";
import { useAuth } from "../context/auth-context";
import VideoCard from "../components/Cards/VideoCard";

const LikesPage = () => {
  const [likedVideos, setLikedVideos] = useState([]);
  const { authState } = useAuth();
  useEffect(() => {
    axios
      .get("/api/user/likes", {
        headers: { authorization: authState.authToken },
      })
      .then((resp) => setLikedVideos(resp.data.likes));
  }, []);

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
