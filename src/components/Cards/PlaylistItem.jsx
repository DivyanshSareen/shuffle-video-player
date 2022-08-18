import { Link } from "react-router-dom";

const PlaylistItem = ({ playlistId, video, removeVideoFromPlaylist }) => {
  return (
    <div className='card playlist-item'>
      <div className='card-content'>
        <Link to={`/video/${video._id}`}>
          <div className='card-head'>
            <div className='card-title h4'>{video.title}</div>
            <div className='card-subtitle sub-title2'>{video.creator}</div>
          </div>
        </Link>{" "}
        <Link to={`/video/${video._id}`} className='space'></Link>
        <div
          className='card-actions'
          onClick={() => removeVideoFromPlaylist(playlistId, video)}>
          <i className='fa-solid fa-xmark'></i>
        </div>
      </div>
    </div>
  );
};

export default PlaylistItem;
