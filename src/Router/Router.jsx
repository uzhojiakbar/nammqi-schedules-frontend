import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../Pages/Login/Login";
import NotAuth from "../Components/Navigate/NotAuth";
import UserAuth from "../Components/Navigate/UserAuth";
import Home from "../Pages/Home/Home";

const Router = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <NotAuth>
            <Home />
          </NotAuth>
        }
      />
      <Route
        path="/binolar"
        element={
          <NotAuth>
            <Home />
          </NotAuth>
        }
      />
      <Route
        path="/auditoriyalar"
        element={
          <NotAuth>
            <Home />
          </NotAuth>
        }
      />
      <Route
        path="/darsJadvali"
        element={
          <NotAuth>
            <Home />
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
