import "../styles/playlist.css";
import { usePlaylist } from "../context/playlist-context";
import { PlaylistForm } from "../components/Grids";

const PlaylistManage = () => {
  const { playlist } = usePlaylist();
  console.log(playlist);
  return <PlaylistForm />;
  // return <PlaylistGrid playlist={playlist} />;
};

export default PlaylistManage;
