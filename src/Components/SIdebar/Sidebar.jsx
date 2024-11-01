import React from "react";
import { Logo, LogOut, Nav, NavItem, SidebarWrapper } from "./style";
import { LogoutOutlined } from "@ant-design/icons";
import { useLogOut } from "../../Hooks/useRegister";
import { useNavigate } from "react-router-dom";
import { routes } from "../../Utils/routes";

const Sidebar = () => {
  //   const LogOutBtn = ();

  const LogOutButton = useLogOut();
  const nav = useNavigate();

  return (
    <SidebarWrapper>
      <Nav>
        <div className="logoWrapper">
          <Logo
            onClick={() => nav("/binolar")}
            src="https://lms-chi-tawny.vercel.app/logo/att_logo.png"
            alt="Logo"
          />
        </div>
        <div className="buttons">
          {routes.map((v, i) => {
            return (
              v.visible && (
                <NavItem
                  parent={v.parent || false}
                  key={v?.id || i}
                  to={v.route}
                >
                  {v.icon}
                  <div className="text">{v.name}</div>
                </NavItem>
              )
            );
          })}
          {/* <NavItem to={"/auditoriyalar"}>
            <FaChalkboard />
            <div className="text">Auditoriyalar</div>
          </NavItem>
          <NavItem to={"/darsJadvali"}>
            <FaCalendarAlt />
            <div className="text">Dars jadvali</div>
          </NavItem>
          <NavItem to={"/users"}>
            <UserSwitchOutlined />
            <div className="text">Foydaluvchilar</div>
          </NavItem> */}
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
