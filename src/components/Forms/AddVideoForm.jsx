const AddVideoForm = () => {
  return (
    <form>
      <div className='input'>
        <label className='input-label' htmlFor='newPlaylistVideo'>
          Add Videos
        </label>
        <input
          className='input-data'
          type='text'
          id='newPlaylistVideo'
          name='newPlaylistVideo'
          required></input>
        <div className='form-options'>
          <button className='btn add-video'>
            <i className='fa-solid fa-plus'></i> Add to Playlist
          </button>
        </div>
      </div>
    </form>
  );
};

export default AddVideoForm;
