import styled from "@emotion/styled";
import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export default function Root() {
  return (
    <>
      <Container>
        <NavBar />
        <Outlet />
        <Footer />
      </Container>
    </>
  );
}
