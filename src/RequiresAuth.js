import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "./context/auth-context";

const RequiresAuth = ({ children }) => {
  const { authState } = useAuth();
  const { isLoggedIn } = authState;

  console.log(authState.authToken);
  const location = useLocation();

  return isLoggedIn ? (
    children
  ) : (
    <Navigate to='/login' state={{ from: location }} replace />
  );
};

export default RequiresAuth;
