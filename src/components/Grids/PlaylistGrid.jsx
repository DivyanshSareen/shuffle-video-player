import { PlaylistForm, PlaylistCard } from "./index";
import { usePlaylist } from "../../context/playlist-context";

const PlaylistGrid = () => {
  const { playlistState, playlistDispatch } = usePlaylist();
  return (
    <div className='playlist-grid'>
      {playlistState.addPlaylist ? (
        <PlaylistForm />
      ) : (
        <div
          className='btn new-playlist'
          onClick={() => {
            playlistDispatch({
              type: "TOGGLE",
              payload: "addPlaylist",
            });
          }}>
          <i className='fa-solid fa-plus'></i>Add new Playlist
        </div>
      )}
      {playlistState.playlists.map((playlist) => (
        <PlaylistCard
          key={playlistState?.playlists?.indexOf(playlist)}
          playlist={playlist}
        />
      ))}
    </div>
  );
};

export default PlaylistGrid;
