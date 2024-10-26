import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Login from "../Pages/Login/Login";
import NotAuth from "../Components/Navigate/NotAuth";
import UserAuth from "../Components/Navigate/UserAuth";
import Home from "../Pages/Home/Home";
import Binolar from "../Pages/Binolar/Binolar";
import Autditoriyalar from "../Pages/Audiotoriyalar/Autditoriyalar";
import DarsJadvali from "../Pages/DarsJadvali/DarsJadvali";

const Router = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <NotAuth>
            <Navigate to={"/binolar"} />
          </NotAuth>
        }
      />
      <Route
        path="/binolar"
        element={
          <NotAuth>
            <Home>
              <Binolar />
            </Home>
          </NotAuth>
        }
      />
      <Route
        path="/auditoriyalar"
        element={
          <NotAuth>
            <Home>
              <Autditoriyalar />
            </Home>
          </NotAuth>
        }
      />
      <Route
        path="/darsJadvali"
        element={
          <NotAuth>
            <Home>
              <DarsJadvali />
            </Home>
          </NotAuth>
        }
      />
      <Route
        path="/login"
        element={
          <UserAuth>
            <Login />
          </UserAuth>
        }
      />
    </Routes>
  );
};

export default Router;
