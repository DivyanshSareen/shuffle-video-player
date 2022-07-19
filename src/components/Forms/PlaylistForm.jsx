const PlaylistForm = () => {
  return (
    <form>
      <div className='input'>
        <label className='input-label' htmlFor='newPlaylistName'>
          Playlist Name
        </label>
        <input
          className='input-data'
          type='text'
          id='playlistName'
          name='playlistName'
          required></input>
      </div>
      <div className='form-options'>
        <button className='btn save-playlist'>
          <i className='fa-solid fa-floppy-disk'></i> Save Playlist
        </button>
      </div>
    </form>
  );
};

export default PlaylistForm;
