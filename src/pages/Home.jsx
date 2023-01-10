import styled from "@emotion/styled";
import React from "react";
import { useState } from "react";
import Form from "../components/form/Form";
import { Link } from "react-router-dom";
import { QUERIES } from "../constants";

const PageContainer = styled.div`
  display: flex;
  gap: 1.25rem;
  max-width: 90%;
  justify-content: space-evenly;
  flex-wrap: wrap;
  margin: 1.5rem auto;
  @media ${QUERIES.tabletAndSmaller} {
    justify-content: flex-start;
    gap: 2.25rem;
  }
`;

const PassengerList = styled.ul`
  margin-top: 0.75rem;
  text-decoration: none;
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding: 0;
`;

const BigText = styled.p`
  font-size: 1.5rem;
`;

const NextPageContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 200px;
  gap: 1rem;
`;

const NextPageButton = styled(Link)`
  padding: 0.5rem 0.75rem;
  background-color: #00b295;
  width: fit-content;
  border-radius: 0.25rem;
  font-weight: 600;
  font-family: "Roboto", sans-serif;
  letter-spacing: 0.125rem;
  text-decoration: none;
  color: white;
`;

function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export default function Home() {
  const [passengers, setPassengers] = useState([]);
  let savedPassengers = [];

  //Bring data from passenger created in form
  const getData = async (data) => {
    setPassengers([...passengers, data]);
    sessionStorage.setItem("passengers", JSON.stringify(passengers));
    savedPassengers = await JSON.parse(sessionStorage.passengers);
    console.log(savedPassengers);
    console.log(passengers);
  };
  // passengers.length > 0
  //   ? (savedPassengers = JSON.parse(sessionStorage.passengers))
  //   : "";

  return (
    <div>
      <PageContainer>
        <div style={{ maxWidth: "90%" }}>
          <h2 style={{ marginBottom: "1.5rem" }}>Registro de pasajeros</h2>
          <Form onSubmit={getData} />
        </div>
        <div>
          <div>
            <h2>Pasajeros registrados</h2>
          </div>
          <PassengerList>
            {passengers.length > 0 ? (
              passengers.map((passenger) => {
                return (
                  <li key={passenger.docNum}>
                    {`${capitalize(passenger.name)} ${capitalize(
                      passenger.lastName
                    )}`}
                  </li>
                );
              })
            ) : (
              <p style={{ color: "gray" }}>No hay pasajeros registrados aún</p>
            )}
          </PassengerList>
        </div>
        <NextPageContainer>
          <BigText>Si estas listo para continuar click en siguiente ⬇️</BigText>
          <NextPageButton
            style={{
              pointerEvents:
                passengers.length < 1 && passengers.length > 4 ? "none" : "",
            }}
            to={"/confirm"}
            state={savedPassengers}
          >
            SIGUIENTE
          </NextPageButton>
        </NextPageContainer>
      </PageContainer>
    </div>
  );
}
