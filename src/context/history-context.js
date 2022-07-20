import { useContext, createContext, useState, useEffect } from "react";
import axios from "axios";
import { useAuth } from "./auth-context";

const historyContext = createContext();

const HistoryProvider = ({ children }) => {
  const { authState } = useAuth();
  const [history, setHistory] = useState([]);
  const getHistory = async () => {
    await axios
      .get("/api/user/history", {
        headers: { authorization: authState.authToken },
      })
      .then((res) => setHistory(res.data.history));
  };

  const addVideoToHistory = async (video) => {
    await axios
      .post(
        "/api/user/history",
        { video: video },
        {
          headers: { authorization: authState.authToken },
        }
      )
      .catch((e) => console.log(e))
      .then((res) => {
        setHistory(res.data.history);
      });
  };

  const removeVideoFromHistory = async (video) => {
    await axios
      .delete(`/api/user/history/${video._id}`, {
        headers: { authorization: authState.authToken },
      })
      .catch((e) => console.log(e))
      .then((res) => setHistory(res.data.history));
  };

  const clearHistory = async () => {
    await axios
      .delete("/api/user/history/all", {
        headers: { authorization: authState.authToken },
      })
      .then((res) => setHistory(res.data.history));
  };

  useEffect(() => {
    getHistory();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <historyContext.Provider
      value={{
        history,
        addVideoToHistory,
        removeVideoFromHistory,
        clearHistory,
      }}>
      {children}
    </historyContext.Provider>
  );
};

const useHistory = () => useContext(historyContext);

export { HistoryProvider, useHistory };
