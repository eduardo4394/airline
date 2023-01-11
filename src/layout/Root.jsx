import styled from "@emotion/styled";
import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 90%;
  justify-content: space-between;
  gap: 1.5rem;
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;
`;

export default function Root() {
  return (
    <>
      <NavBar />
      <Container>
        <Outlet />
      </Container>
      <Footer />
    </>
  );
}
