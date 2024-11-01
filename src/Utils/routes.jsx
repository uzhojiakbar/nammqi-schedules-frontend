import React from "react";
import { Navigate } from "react-router-dom";
import NotAuth from "../Components/Navigate/NotAuth";
import Home from "../Pages/Home/Home";
import Binolar from "../Pages/Binolar/Binolar";
import {
  FaBuilding,
  FaCalendarAlt,
  FaChalkboard,
  FaHome,
} from "react-icons/fa";
import Autditoriyalar from "../Pages/Audiotoriyalar/Autditoriyalar";
import DarsJadvali from "../Pages/DarsJadvali/DarsJadvali";
import { LoginOutlined, UserSwitchOutlined } from "@ant-design/icons";
import Users from "../Pages/Users/Users";
import UserAuth from "../Components/Navigate/UserAuth";
import Login from "../Pages/Login/Login";
import OnlyAdmins from "../Components/Navigate/OnlyAdmins";

export const routes = [
  {
    id: 1,
    name: "Bosh sahifa",
    route: "/",
    element: (
      <NotAuth>
        <Navigate to={"/binolar"} />
      </NotAuth>
    ),
    icon: <FaHome />,
    NotAuth: true,
    onlyAdmins: false,
    visible: true,
    parent: true,
  },
  {
    id: 2,
    name: "Binolar",
    route: "/binolar",
    element: (
      <NotAuth>
        <Home>
          <Binolar />
        </Home>
      </NotAuth>
    ),
    icon: <FaBuilding />,
    NotAuth: true,
    onlyAdmins: false,
    visible: true,
  },
  {
    id: 3,
    name: "Auditoriyalar",
    route: "/auditoriyalar",
    element: (
      <NotAuth>
        <Home>
          <Autditoriyalar />
        </Home>
      </NotAuth>
    ),
    icon: <FaChalkboard />,
    NotAuth: true,
    onlyAdmins: false,
    visible: true,
  },
  {
    id: 4,
    name: "Dars jadvali",
    route: "/dars-jadvali",
    element: (
      <NotAuth>
        <Home>
          <DarsJadvali />
        </Home>
      </NotAuth>
    ),
    icon: <FaCalendarAlt />,
    NotAuth: true,
    onlyAdmins: false,
    visible: true,
  },
  {
    id: 5,
    name: "Foydaluvchilar",
    route: "/users",
    element: (
      <NotAuth>
        <OnlyAdmins>
          <Home>
            <Users />
          </Home>
        </OnlyAdmins>
      </NotAuth>
    ),
    icon: <UserSwitchOutlined />,
    NotAuth: true,
    onlyAdmins: false,
    visible: true,
  },
  {
    id: 6,
    name: "Royxatdan otish",
    route: "/login",
    element: (
      <UserAuth>
        <Login />
      </UserAuth>
    ),
    icon: <LoginOutlined />,
    NotAuth: false,
    onlyAdmins: false,
    visible: false,
  },
];
