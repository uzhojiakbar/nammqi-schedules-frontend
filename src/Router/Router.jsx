import React from "react";
import { Route, Routes } from "react-router-dom";

import { routes } from "../Utils/routes";
import {useGetUserInfo} from "../Hooks/useRegister.jsx";
import {AdminRoutes} from "./Routes/adminRoutes.jsx";
import Login from "../Pages/Login/Login.jsx";

const Router = () => {
  const {data: role} = useGetUserInfo();

  if (role?.role === "admin") {
      console.log(role)
    return (
        <Routes>
          {AdminRoutes.map((v) => {
            return <Route key={v.id} path={v.route} element={v.element} />;
          })}
        </Routes>
    );
  }else{
    return (
        <Routes>
          <Route  path={"/"} element={<Login/>} />;
          <Route  path={"/login"} element={<Login/>} />;
        </Routes>
    );
  }

};

export default Router;
