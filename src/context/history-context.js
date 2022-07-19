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

  useEffect(() => {
    getHistory();
  }, []);

  return (
    <historyContext.Provider value={{ history }}>
      {children}
    </historyContext.Provider>
  );
};

const useHistory = () => useContext(historyContext);

export { HistoryProvider, useHistory };
