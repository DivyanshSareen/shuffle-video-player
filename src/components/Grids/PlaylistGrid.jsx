import { PlaylistCard } from "./index";
import PlaylistForm from "../Forms/PlaylistForm";
import { usePlaylist } from "../../context/playlist-context";

const PlaylistGrid = () => {
  const {
    playlist,
    addPlaylist,
    deletePlaylist,
    updatePlaylist,
    removeVideoFromPlaylist,
  } = usePlaylist();
  return (
    <div className='playlist-grid'>
      <PlaylistForm addPlaylist={addPlaylist} />
      {playlist !== undefined &&
        playlist?.map((list) => (
          <PlaylistCard
            key={list._id}
            playlist={list}
            deletePlaylist={deletePlaylist}
            updatePlaylist={updatePlaylist}
            removeVideoFromPlaylist={removeVideoFromPlaylist}
          />
        ))}
    </div>
  );
};

export default PlaylistGrid;
