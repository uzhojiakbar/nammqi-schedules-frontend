import { Navigate } from "react-router-dom";
import { getCookie } from "../../Hooks/cookieHook";

const NotAuth = ({ children, toHome = 0 }) => {
  const token = getCookie("access_token");

  if (!token) {
    return <Navigate to={`/login`} />;
  }

  return children;
};

export default NotAuth;
