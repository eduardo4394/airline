import styled from "@emotion/styled";
import React from "react";
import { useState, useEffect } from "react";
import Form from "../components/form/Form";
import { Link } from "react-router-dom";
import { QUERIES } from "../constants";
import { ErrorMessage } from "../components/form/formComponents";

const PageContainer = styled.div`
  display: flex;
  gap: 2.5rem;
  max-width: 90%;
  justify-content: space-evenly;
  flex-wrap: wrap;
  margin: 1.5rem auto;
  @media ${QUERIES.tabletAndSmaller} {
    justify-content: flex-start;
    gap: 2.25rem;
  }
  @media ${QUERIES.phoneAndSmaller} {
    justify-content: center;
    gap: 2rem;
  }
`;

const PassengerList = styled.ul`
  margin-top: 1.25rem;
  text-decoration: none;
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid #228cdb;
`;

const BigText = styled.p`
  font-size: 1.5rem;
  @media ${QUERIES.tabletAndSmaller} {
    font-size: 1.25rem;
  }
`;

const NextPageContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 200px;
  gap: 1rem;
  @media ${QUERIES.tabletAndSmaller} {
    width: 290px;
  }
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

const StyledList = styled.li`
  background-color: #228cdb;
  display: flex;
  gap: 0.75rem;
  border-radius: 0.25rem;
  color: white;
  width: fit-content;
  align-items: center;
  align-content: center;
  padding: 0.25rem 0.5rem;
  cursor: context-menu;
`;

export const Delete = styled.span`
  cursor: pointer;
`;

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export default function Home() {
  const [passengers, setPassengers] = useState([]);
  const [active, setActive] = useState(false);

  //Save passsengers data in sessionStorage
  useEffect(() => {
    const data = window.sessionStorage.getItem("PASSENGERS_REGISTERED");
    if (data !== null) setPassengers(JSON.parse(data));
  }, []);

  //Validate number of passengers to pass to next page
  useEffect(() => {
    if (passengers.length <= 0) {
      setActive(true);
    } else if (passengers.length > 4) {
      setActive(true);
    } else {
      setActive(false);
    }
  }, [passengers]);

  const DeletePassenger = (passengers, passsenger) => {
    const newList = passengers.filter(
      (pass) => pass.docNum !== passsenger.docNum
    );
    setPassengers(newList);
    window.sessionStorage.setItem(
      "PASSENGERS_REGISTERED",
      JSON.stringify(newList)
    );
  };

  //Bring data from passenger created in form and save data in sessionStorage
  const getData = (data) => {
    const newValues = [...passengers, data];
    setPassengers(newValues);
    window.sessionStorage.setItem(
      "PASSENGERS_REGISTERED",
      JSON.stringify(newValues)
    );
  };

  return (
    <PageContainer>
      <FormContainer>
        <h2 style={{ marginBottom: "1.5rem" }}>Registro de pasajeros</h2>
        <Form onSubmit={getData} />
      </FormContainer>
      <div>
        <div>
          <h2>Pasajeros registrados</h2>
          <p>Puedes eliminar un pasajero apretando la ❌</p>
        </div>
        <PassengerList>
          {passengers.length > 0 ? (
            passengers.map((passenger) => {
              return (
                <StyledList key={passenger.docNum}>
                  {`${capitalize(passenger.name)} ${capitalize(
                    passenger.lastName
                  )} ✔️`}
                  <Delete
                    onClick={() => DeletePassenger(passengers, passenger)}
                  >
                    ❌
                  </Delete>
                </StyledList>
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
          to={"/confirm"}
          style={{
            pointerEvents:
              passengers.length > 4 || passengers.length < 1 ? "none" : "",
          }}
        >
          SIGUIENTE
        </NextPageButton>
        {active ? (
          <ErrorMessage>
            Se necesita registrar 1 pasajero minimo y maximo 4
          </ErrorMessage>
        ) : (
          ""
        )}
      </NextPageContainer>
    </PageContainer>
  );
}
