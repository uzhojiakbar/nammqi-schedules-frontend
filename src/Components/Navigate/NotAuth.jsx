import { Navigate } from "react-router-dom";

const NotAuth = ({ children }) => {
  //   const login = getCookie("login");
  const login = localStorage.getItem("login");

  if (!login && !login?.length) {
    return <Navigate to={`/login`} />;
  }
  return children;
};

export default NotAuth;
