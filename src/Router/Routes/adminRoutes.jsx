import React from "react";
import {Navigate} from "react-router-dom";
import Home from "../../Pages/Home/Home";
import Binolar from "../../Pages/Binolar/Binolar";
import {
    FaBuilding,
    FaCalendarAlt,
    FaChalkboard,
    FaHome,
} from "react-icons/fa";
import Autditoriyalar from "../../Pages/Audiotoriyalar/Autditoriyalar";
import DarsJadvali from "../../Pages/DarsJadvali/DarsJadvali";
import {LoginOutlined, UserSwitchOutlined} from "@ant-design/icons";
import Users from "../../Pages/Users/Users";

export const AdminRoutes = [
    {
        id: 1,
        name: "Bosh sahifa",
        route: "/",
        element: (
            <Navigate to={"/binolar"}/>
        ),
        icon: <FaHome/>,
        NotAuth: true,
        onlyAdmins: false,
        visible: false,
        parent: true,
    },
    {
        id: 2,
        name: "Binolar",
        route: "/binolar",
        element: (
            <Home>
                <Binolar/>
            </Home>
        ),
        icon: <FaBuilding/>,
        NotAuth: true,
        onlyAdmins: false,
        visible: true,
    },
    {
        id: 3,
        name: "Auditoriyalar",
        route: "/auditoriyalar",
        element: (
            <Home>
                <Autditoriyalar/>
            </Home>
        ),
        icon: <FaChalkboard/>,
        NotAuth: true,
        onlyAdmins: false,
        visible: true,
    },
    {
        id: 4,
        name: "Dars jadvali",
        route: "/dars-jadvali",
        element: (
            <Home>
                <DarsJadvali/>
            </Home>
        ),
        icon: <FaCalendarAlt/>,
        NotAuth: true,
        onlyAdmins: false,
        visible: true,
    },
    {
        id: 5,
        name: "Foydaluvchilar",
        route: "/users",
        element: (
            <Home>
                <Users/>
            </Home>
        ),
        icon: <UserSwitchOutlined/>,
        NotAuth: true,
        onlyAdmins: false,
        visible: true,
    },

];

//
// {
//     id: 6,
//         name: "Royxatdan otish",
//     route: "/login",
//     element: (
//     <UserAuth>
//         <Login />
//     </UserAuth>
// ),
//     icon: <LoginOutlined />,
//     NotAuth: false,
//     onlyAdmins: false,
//     visible: false,
// },