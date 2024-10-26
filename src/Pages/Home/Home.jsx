import React from "react";
import Sidebar from "../../Components/SIdebar/Sidebar";
import { Container, ContentWrapper } from "./styled";
import BuildingsTable from "../../Components/Table/Table";

const Home = () => {
  return (
    <Container>
      <Sidebar />
      <ContentWrapper>
        <BuildingsTable />
      </ContentWrapper>
    </Container>
  );
};

export default Home;
