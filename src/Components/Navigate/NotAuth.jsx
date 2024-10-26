import { Navigate } from "react-router-dom";
import { getCookie } from "../../Hooks/cookieHook";

const NotAuth = ({ children }) => {
  const login = getCookie("login");
  const token = getCookie("access");
  if ((!login && !login?.length) || (!token && !token?.length)) {
    return <Navigate to={`/login`} />;
  }
  return children;
};

export default NotAuth;
