import axios from "axios";
import { useEffect, useState } from "react";

const AddVideoForm = ({
  playlistId,
  updatePlaylist,
  isHidden,
  setIsHidden,
}) => {
  const [videos, setVideos] = useState([]);
  const [videoName, setVideoName] = useState([]);
  const getSuggestions = async () => {
    await axios.get("/api/videos").then((res) => setVideos(res.data.videos));
  };
  const getVideoByName = (name) => {
    const index = videos.findIndex((vid) => vid.title === name);
    return index === -1 ? {} : videos[index];
  };
  useEffect(() => {
    getSuggestions();
  }, []);
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        const newVideo = getVideoByName(videoName);
        if (newVideo !== {}) updatePlaylist(playlistId, newVideo);
      }}
      className='form'
      style={isHidden ? { display: "none" } : { display: "flex" }}>
      <div className='input'>
        <label className='input-label' htmlFor='newPlaylistVideo'>
          Add Videos
        </label>
        <input
          className='input-data'
          type='text'
          id='newPlaylistVideo'
          name='newPlaylistVideo'
          list='suggestions'
          value={videoName}
          onChange={(e) => setVideoName(e.target.value)}
          required></input>
        <datalist id='suggestions'>
          {videos.map((vid) => (
            <option key={vid._id} value={vid.title} />
          ))}
        </datalist>
        <div className='form-options'>
          <button
            type='submit'
            className='btn add-video'
            onClick={() => {
              setIsHidden(true);
            }}>
            <i className='fa-solid fa-plus'></i> Add to Playlist
          </button>
        </div>
      </div>
    </form>
  );
};

export default AddVideoForm;
