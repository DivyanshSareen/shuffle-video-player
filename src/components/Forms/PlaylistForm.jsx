import { useState } from "react";

const PlaylistForm = ({ addPlaylist }) => {
  const [playlistName, setPlaylistName] = useState("");
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        addPlaylist({ title: playlistName });
      }}>
      <div className='input'>
        <label className='input-label' htmlFor='newPlaylistName'>
          Playlist Name
        </label>
        <input
          className='input-data'
          type='text'
          id='playlistName'
          name='playlistName'
          value={playlistName}
          onChange={(e) => setPlaylistName(e.target.value)}
          required></input>
      </div>
      <div className='form-options'>
        <button className='btn save-playlist' type='submit'>
          <i className='fa-solid fa-floppy-disk'></i> Save Playlist
        </button>
      </div>
    </form>
  );
};

export default PlaylistForm;
