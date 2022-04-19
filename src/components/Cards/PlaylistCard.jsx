import PlaylistItem from "./PlaylistItem";

const PlaylistCard = ({ playlist }) => {
  return (
    <div className='playlist-card'>
      <div className='playlist-head'>
        <div className='playlist-title h6'>{playlist.playlistName}</div>
        <div className='playlist-options'>
          <i className='fa-solid fa-trash-can'></i>
        </div>
      </div>
      {playlist.playlistVideos.map((video) => (
        <PlaylistItem key={video._id} video={video} />
      ))}
    </div>
  );
};

export default PlaylistCard;
