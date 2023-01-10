import styled from "@emotion/styled";
import React from "react";

const StyledFooter = styled.footer`
  display: flex;
  color: #9ea0a1;
  min-height: 3rem;
  bottom: 0;
  border-top: 1px solid gray;
  justify-content: center;
  align-items: center;
`;

export default function Footer() {
  return (
    <StyledFooter>
      <p>© 2023 Airlines Perú S.A.</p>
    </StyledFooter>
  );
}
