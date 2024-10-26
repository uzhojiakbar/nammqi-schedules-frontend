import React from "react";
import Sidebar from "../../Components/SIdebar/Sidebar";
import { Container, ContentWrapper } from "./styled";
import BuildingsTable from "../../Components/Table/Table";
import { Navigate } from "react-router-dom";

const Home = ({ children }) => {
  if (children) {
    return (
      <Container>
        <Sidebar />
        <ContentWrapper>{children}</ContentWrapper>
      </Container>
    );
  } else {
    return <Navigate to={"/binolar"} />;
  }
};

export default Home;
