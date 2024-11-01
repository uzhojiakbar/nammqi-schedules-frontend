import { Navigate } from "react-router-dom";
import { getCookie } from "../../Hooks/cookieHook";
import getNotify from "../../Hooks/useNotify";

const OnlyAdmins = ({ children, toHome = 0 }) => {
  const role = getCookie("role");
  const { notify } = getNotify();

  if (role !== "admin") {
    notify("err", "Bu sahifa faqat adminlar uchun");
    return <Navigate to={`/`} />;
  }

  return children;
};

export default OnlyAdmins;
