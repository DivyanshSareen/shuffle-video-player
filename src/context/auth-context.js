import axios from "axios";
import { createContext, useContext, useReducer } from "react";
import authReducer from "../reducer/auth-reducer";

const authContext = createContext();

const AuthProvider = ({ children }) => {
  const handleLogin = async (details) => {
    let response = "";
    try {
      response = await axios.post("/api/auth/login", {
        email: details.email,
        password: details.password,
      });
    } catch (e) {
      console.log(e);
    } finally {
      return response.data.encodedToken;
    }
  };

  const [authState, authDispatch] = useReducer(authReducer, {
    isLoggedIn: false,
    authToken: "",
    handleLogin,
  });
  return (
    <authContext.Provider value={{ authState, authDispatch }}>
      {children}
    </authContext.Provider>
  );
};

const useAuth = () => useContext(authContext);

export { useAuth, AuthProvider };
