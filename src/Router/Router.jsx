import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../Pages/Login/Login";
import NotAuth from "../Components/Navigate/NotAuth";

const Router = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <NotAuth>
            <h1>Home page</h1>
          </NotAuth>
        }
      />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};

export default Router;
