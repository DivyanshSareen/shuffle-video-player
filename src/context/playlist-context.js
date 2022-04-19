import { createContext, useContext, useReducer } from "react";
import playlistReducer from "../reducer/playlist-reducer";
import playlists from "./playlists";

const PlaylistContext = createContext();

const PlaylistProvider = ({ children }) => {
  const [playlistState, playlistDispatch] = useReducer(playlistReducer, {
    playlists,
    addPlaylist: false,
    newPlaylistName: "New Playlist",
    newPlaylistVideos: [
      {
        _id: 123,
        title: "Bones (Official Lyric Video)",
        category: "English",
        creator: "Imagine Dragons",
        image: "videos/bones.webp",
        likes: 200,
        description: `Imagine Dragons - Bones
https://ImagineDragons.lnk.to/Bones

Directed & Edited by Justin Moon
Production Company °1824

Music video by Imagine Dragons performing Bones (Lyric Video). © 2022 KIDinaKORNER/Interscope Records
`,
      },
    ],
  });
  return (
    <PlaylistContext.Provider value={{ playlistState, playlistDispatch }}>
      {children}
    </PlaylistContext.Provider>
  );
};

const usePlaylist = () => useContext(PlaylistContext);

export { PlaylistProvider, usePlaylist };
