import React from "react";
import { FaBuilding, FaChalkboard, FaCalendarAlt } from "react-icons/fa";
import { Logo, LogOut, Nav, NavItem, SidebarWrapper } from "./style";
import { LogoutOutlined } from "@ant-design/icons";
import { useLogOut } from "../../Hooks/useRegister";

const Sidebar = () => {
  //   const LogOutBtn = ();

  const LogOutButton = useLogOut();

  return (
    <SidebarWrapper>
      <Nav>
        <div className="logoWrapper">
          <Logo
            src="https://lms-chi-tawny.vercel.app/logo/att_logo.png"
            alt="Logo"
          />
        </div>
        <div className="buttons">
          <NavItem to={"/binolar"}>
            <FaBuilding />
            <div className="text">Bino</div>
          </NavItem>
          <NavItem to={"/auditoriyalar"}>
            <FaChalkboard />
            <div className="text">Auditoriyalar</div>
          </NavItem>
          <NavItem to={"/darsJadvali"}>
            <FaCalendarAlt />
            <div className="text">Dars jadvali</div>
          </NavItem>
        </div>
      </Nav>

      <Nav>
        <LogOut onClick={LogOutButton}>
          <LogoutOutlined />

          <div className="text">Chiqish</div>
        </LogOut>
      </Nav>
    </SidebarWrapper>
  );
};

export default Sidebar;
