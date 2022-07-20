const PlaylistItem = ({ playlistId, video, removeVideoFromPlaylist }) => {
  return (
    <div className='card playlist-item'>
      <div className='card-content'>
        <div className='card-head'>
          <div className='card-title h4'>{video.title}</div>
          <div className='card-subtitle sub-title2'>{video.creator}</div>
        </div>
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
