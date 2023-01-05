import React from "react";
import styled from "@emotion/styled";

const NavBarContainer = styled.div`
  min-width: 90%;
  height: 7rem;
  display: flex;
  align-items: center;
  padding-inline: 3rem;
  border-radius: 0.5rem;
  background: #e0e0e0;
  box-shadow: 28px 28px 56px #a1a1a1, -28px -28px 56px #ffffff;
`;

const Logo = styled.button`
  padding: 0.75rem 3rem;
  border-radius: 0.5rem;
  outline: none;
  border: none;
  color: #000000;
  font-weight: bolder;
  cursor: pointer;
  background-color: #dfbc99;
  font-size: 2.5rem;
  color: #200662;
`;

export default function NavBar() {
  return (
    <NavBarContainer>
      <Logo>Airline</Logo>
    </NavBarContainer>
  );
}
