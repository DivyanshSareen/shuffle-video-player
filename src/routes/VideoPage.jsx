import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useAuth } from "../context/auth-context";

const VideoPage = () => {
  const { authState } = useAuth();
  const navigate = useNavigate();
  const [video, setVideo] = useState({});
  let params = useParams();
  console.log(params.videoId);
  useEffect(() => {
    axios
      .get(`/api/video/${params.videoId}`)
      .then((resp) => setVideo(resp.data.video));
  }, []);

  return (
    <>
      <div>
        <div>{video.title}</div>
        <div></div>
      </div>
    </>
  );
};

export default VideoPage;
