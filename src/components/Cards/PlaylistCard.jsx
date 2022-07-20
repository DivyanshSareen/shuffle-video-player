import PlaylistItem from "./PlaylistItem";
import AddVideoFrom from "../Forms/AddVideoForm";
import { useState } from "react";

const PlaylistCard = ({
  playlist,
  deletePlaylist,
  updatePlaylist,
  removeVideoFromPlaylist,
}) => {
  const [isHidden, setIsHidden] = useState(true);
  return (
    <>
      <div className='playlist-card'>
        <div className='playlist-head'>
          <div className='playlist-title h6'>{playlist.playlist.title}</div>
          <div className='playlist-options'>
            <div
              className='add-video-option'
              onClick={() => {
                setIsHidden(false);
              }}>
              <i className='fa-solid fa-plus'></i>
            </div>
            <div
              className='delete-video-option'
              onClick={() => {
                deletePlaylist(playlist);
              }}>
              <i className='fa-solid fa-trash-can'></i>
            </div>
          </div>
        </div>
        {playlist?.videos?.map((video) => (
          <PlaylistItem
            key={video._id}
            video={video}
            playlistId={playlist._id}
            removeVideoFromPlaylist={removeVideoFromPlaylist}
          />
        ))}
      </div>
      <AddVideoFrom
        playlistId={playlist._id}
        updatePlaylist={updatePlaylist}
        isHidden={isHidden}
        setIsHidden={setIsHidden}
      />
    </>
  );
};

export default PlaylistCard;
