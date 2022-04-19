import { createContext, useContext, useReducer } from "react";
import authReducer from "../reducer/auth-reducer";

const authContext = createContext();

const AuthProvider = ({ children }) => {
  const [authState, authDispatch] = useReducer(authReducer, {
    isLoggedIn: false,
    loginForm: { email: "", password: "", remember_me: false },
  });
  return (
    <authContext.Provider value={{ authState, authDispatch }}>
      {children}
    </authContext.Provider>
  );
};

const useAuth = () => useContext(authContext);

export { useAuth, AuthProvider };
