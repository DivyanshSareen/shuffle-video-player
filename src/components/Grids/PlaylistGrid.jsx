import { PlaylistCard } from "./index";

const PlaylistGrid = (playlist) => {
  return (
    <div className='playlist-grid'>
      {playlist?.map((list) => (
        <PlaylistCard key={list._id} playlist={list} />
      ))}
    </div>
  );
};

export default PlaylistGrid;
