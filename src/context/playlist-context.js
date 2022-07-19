import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import { useAuth } from "./auth-context";
const PlaylistContext = createContext();

const PlaylistProvider = ({ children }) => {
  const { authState } = useAuth();
  const [playlist, setPlaylist] = useState([]);

  const getPlaylists = async () => {
    await axios
      .get("/api/user/playlists", {
        headers: { authorization: authState.authToken },
      })
      .catch((e) => console.log(e))
      .then((res) => {
        console.log(res.data.playlists);
        setPlaylist(res.data.playlists);
      });
  };

  const addPlaylist = async (playlist) => {
    await axios
      .post(
        "/api/user/playlists",
        { playlist: { playlist } },
        { headers: { authorization: authState.authToken } }
      )
      .catch((e) => console.log(e))
      .then((res) => {
        console.log(playlist);
        setPlaylist(res.data.playlists);
      });
  };

  const deletePlaylist = async (playlist) => {
    await axios
      .delete("/api/user/playlists/" + playlist._id, {
        headers: { authorization: authState.authToken },
      })
      .catch((e) => console.log(e))
      .then((res) => {
        console.log(res.data.playlists);
        setPlaylist(res.data.playlists);
      });
  };

  const updatePlaylist = async (playlistId, video) => {
    await axios
      .post(
        "/api/user/playlists/" + playlistId,
        { video: video },
        {
          headers: { authorization: authState.authToken },
        }
      )
      .catch((e) => console.log(e))
      .then((res) => {
        const newPlaylist = playlist.map((ele) =>
          ele._id === res.data.playlist._id ? res.data.playlist : ele
        );
        setPlaylist(newPlaylist);
      });
  };

  const removeVideoFromPlaylist = async (playlistId, video) => {
    await axios
      .delete("/api/user/playlists/" + playlistId + "/" + video._id, {
        headers: { authorization: authState.authToken },
      })
      .catch((e) => console.log(e))
      .then((res) => {
        const newPlaylist = playlist.map((ele) =>
          ele._id === res.data.playlist._id ? res.data.playlist : ele
        );
        setPlaylist(newPlaylist);
      });
  };

  useEffect(() => {
    getPlaylists();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <PlaylistContext.Provider
      value={{
        playlist,
        addPlaylist,
        deletePlaylist,
        updatePlaylist,
        removeVideoFromPlaylist,
      }}>
      {children}
    </PlaylistContext.Provider>
  );
};

const usePlaylist = () => useContext(PlaylistContext);

export { PlaylistProvider, usePlaylist };
