import React from "react";
import { Route, Routes } from "react-router-dom";

import { routes } from "../Utils/routes";

const Router = () => {
  return (
    <Routes>
      {routes.map((v) => {
        return <Route key={v.id} path={v.route} element={v.element} />;
      })}
    </Routes>
  );
};

export default Router;
