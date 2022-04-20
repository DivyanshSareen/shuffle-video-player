import { Navigate } from "react-router-dom";
import { useAuth } from "./context/auth-context";

const RequiresAuth = ({ children }) => {
  const { isLoggedIn } = useAuth();
  console.log(isLoggedIn);
  return isLoggedIn ? children : <Navigate to='/login' replace />;
};

export default RequiresAuth;
