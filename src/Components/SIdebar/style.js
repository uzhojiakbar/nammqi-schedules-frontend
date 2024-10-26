import { NavLink } from "react-router-dom";
import styled from "styled-components";

const SidebarWrapper = styled.div`
  width: 300px;
  height: 100vh;

  /* background-color: #f4f4f4; */
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 20px;

  position: sticky;
  left: 0;

  @media (max-width: 768px) {
    width: 200px;
    padding: 10px;
  }

  @media (max-width: 425px) {
    width: 120px;
    padding: 20px 10px;
    padding-bottom: 0;
  }
`;

const Logo = styled.img`
  width: 120px;
  margin: 0 auto;
  margin-bottom: 20px;

  @media (max-width: 425px) {
    width: 60px;
  }
`;

const Nav = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 20px;

  > .logoWrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
  }

  > .buttons {
    display: flex;
    flex-direction: column;
    gap: 5px;
  }
`;

const NavItem = styled(NavLink)`
  display: flex;
  align-items: center;
  gap: 10px;

  transition: all 0.3s;

  padding: 15px;
  border-radius: 10px;
  font-size: 16px;

  color: black;
  text-decoration: none;

  color: #868e96;

  &.active {
    background-color: rgba(74, 99, 190, 0.1);
    color: #7286cc;
  }

  &:hover {
    color: #7286cc;
  }

  @media (max-width: 768px) {
    font-size: 14px;
  }
  @media (max-width: 425px) {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 18px;

    > .text {
      display: none;
    }
  }
`;

const LogOut = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  transition: all 0.3s;

  padding: 15px;
  border-radius: 10px;
  font-size: 16px;

  color: black;
  text-decoration: none;

  color: red;

  cursor: pointer;

  &:hover {
    background-color: red;
    color: white;
  }

  @media (max-width: 768px) {
    font-size: 14px;
  }

  @media (max-width: 425px) {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 18px;

    > .text {
      display: none;
    }
  }
`;

export { LogOut, SidebarWrapper, Logo, Nav, NavItem };
