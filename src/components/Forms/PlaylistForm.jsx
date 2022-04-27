import { usePlaylist } from "../../context/playlist-context";
import PlaylistFormCard from "../Cards/PlaylistFormCard";

const PlaylistForm = () => {
  const { playlistState, playlistDispatch } = usePlaylist();
  return (
    <form>
      <div className='input'>
        <label className='input-label' htmlFor='newPlaylistName'>
          Playlist Name
        </label>
        <input
          className='input-data'
          type='text'
          id='newPlaylistName'
          name='newPlaylistName'
          value={playlistState.newPlaylistName}
          onChange={(e) => {
            playlistDispatch({
              type: "UPDATE_FIELD",
              field: e.target.name,
              payload: e.target.value,
            });
          }}
          required></input>
      </div>
      {playlistState.newPlaylistVideos.map((video) => (
        <PlaylistFormCard video={video} />
      ))}
      <div className='input'>
        <label className='input-label' htmlFor='newPlaylistVideo'>
          Add Videos
        </label>

        <input
          className='input-data'
          type='text'
          id='newPlaylistVideo'
          name='newPlaylistVideo'
          value={playlistState.newPlaylistVideo}
          onChange={(e) => {
            playlistDispatch({
              type: "UPDATE_PLAYLIST",
              field: "newPlaylistName",
              payload: e.target.value,
            });
          }}
          required></input>
        <div className='form-options'>
          <button className='btn add-video'>
            <i className='fa-solid fa-plus'></i> Add to Playlist
          </button>
          <button className='btn save-playlist'>
            <i className='fa-solid fa-floppy-disk'></i> Save Playlist
          </button>
        </div>
      </div>
    </form>
  );
};

export default PlaylistForm;
