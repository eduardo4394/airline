import React from "react";
import styled from "@emotion/styled";
import Plane from "../assets/plane-img.png";
import { Link } from "react-router-dom";

const NavBarContainer = styled.div`
  min-width: 90%;
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #dddddd;
  margin: 0.25rem auto;
  padding-inline: 1.5rem;
  border-radius: 0.5rem;
  box-shadow: 28px 28px 56px #a1a1a1, -28px -28px 56px #ffffff;
`;

const Logo = styled(Link)`
  display: flex;
  gap: 0.5rem;
  text-decoration: none;
  padding: 0.75rem 2rem;
  border-radius: 0.5rem;
  font-family: "Viaoda Libre", cursive;
  outline: none;
  border: none;
  color: #000000;
  font-weight: bolder;
  cursor: pointer;
  align-items: center;
  font-size: 1.5rem;
`;

const LoginButton = styled.button`
  padding: 0.5rem 0.75rem;
  font-size: 1rem;
  font-weight: 400;
  background-color: #228cdb;
  color: white;
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
`;

const ImgLogo = styled.img`
  width: 1.75rem;
  filter: opacity(0.4) drop-shadow(0 0 0 white);
`;

export default function NavBar() {
  return (
    <NavBarContainer>
      <Logo to={"/"}>
        <ImgLogo src={Plane} alt="" />
        Airline
      </Logo>
      <LoginButton>Iniciar sesión</LoginButton>
    </NavBarContainer>
  );
}
