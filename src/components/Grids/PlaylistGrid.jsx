import PlaylistCard from "../Cards/PlaylistCard";
import { usePlaylist } from "../../context/playlist-context";

const PlaylistGrid = () => {
  const { playlistState } = usePlaylist();
  return (
    <div className='playlist-grid'>
      <div className='btn new-playlist'>
        <i className='fa-solid fa-plus'></i>Add new Playlist
      </div>
      {playlistState.playlists.map((playlist) => (
        <PlaylistCard
          key={playlistState.playlists.indexOf(playlist)}
          playlist={playlist}
        />
      ))}
    </div>
  );
};

export default PlaylistGrid;
