import styled from "@emotion/styled";
import React from "react";
import { Link } from "react-router-dom";

const Container = styled.div`
  max-width: 90%;
  min-height: 75vh;
  display: flex;
  align-items: center;
  margin-left: 100px;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  padding: 0.75rem;
  background-color: #57a773;
  border-radius: 0.5rem;
  color: white;
`;

export default function SuccesPage() {
  return (
    <Container>
      <h1>Informacion registrada con exito!!😎</h1>
      <StyledLink to="/">Volver al inicio</StyledLink>
    </Container>
  );
}
