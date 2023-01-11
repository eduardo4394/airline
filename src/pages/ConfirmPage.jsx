import styled from "@emotion/styled";
import React from "react";
import { useState } from "react";
import Form from "../components/form/Form";
import { ErrorMessage } from "../components/form/formComponents";
import { Delete } from "./Home";

const Container = styled.div`
  max-width: 100%;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  justify-content: space-between;
  gap: 0.75rem;
`;

const PassengersNav = styled.div`
  margin-top: 1rem;
  margin-bottom: 1rem;
  display: flex;
  gap: 0.125rem;
  width: fit-content;
  padding: 0.25rem;
  border-radius: 0.25rem;
  flex-wrap: wrap;
`;

const PassengerTab = styled.div`
  display: flex;
  background-color: #00b295;
  color: white;
  width: fit-content;
  padding: 0.5rem 0.75rem;
  border-radius: 0.25rem;
  align-items: center;
  font-weight: bold;
  :hover {
    background-color: #2a324b;
    color: white;
    cursor: pointer;
  }
`;

const ConfirmButton = styled.button`
  font-size: 1.25rem;
  font-weight: bold;
  background-color: #53628f;
  color: white;
  width: fit-content;
  padding: 0.5rem;
  border-radius: 0.25rem;
  border: none;
  margin-bottom: 2rem;
  cursor: pointer;
`;

const BodyContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 4rem;
`;

const Box = styled.div`
  display: flex;
  gap: 1rem;
  flex-direction: column;
  justify-content: center;
`;

function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export default function ConfirmPage() {
  const passengers = JSON.parse(sessionStorage.PASSENGERS_REGISTERED);
  const [passenger, setPassenger] = useState(passengers[0]);
  const [passsengersList, setPassengersList] = useState(passengers);

  function handlePassengerSelect(data) {
    setPassenger(data);
  }

  const handleSubmit = (passenger, data) => {
    const filteredPassengers = passengers.filter((pass) => {
      return pass.docNum !== passenger.docNum;
    });
    const newPassengers = [...filteredPassengers, data];
    window.sessionStorage.setItem(
      "PASSENGERS_REGISTERED",
      JSON.stringify(newPassengers)
    );
    setPassenger(data);
  };

  const submitData = () => {
    console.log(passengers);
  };

  const deletePassenger = (passengers, passsenger) => {
    const newList = passengers.filter(
      (pass) => pass.docNum !== passsenger.docNum
    );
    setPassengersList(newList);
    window.sessionStorage.setItem(
      "PASSENGERS_REGISTERED",
      JSON.stringify(newList)
    );
  };

  return (
    <Container>
      <h1>Pagina de Confirmacion</h1>
      <p>
        Puedes editar la informacion de los pasajeros o borrarla e ingresar una
        nueva
      </p>
      <PassengersNav>
        {passengers.map((passenger) => {
          return (
            <PassengerTab
              onClick={() => handlePassengerSelect(passenger)}
              key={passenger.docNum}
            >
              <p>
                {`${capitalize(passenger.name)} ${capitalize(
                  passenger.lastName
                )}`}{" "}
                <Delete onClick={() => deletePassenger(passengers, passenger)}>
                  ❌
                </Delete>{" "}
              </p>
            </PassengerTab>
          );
        })}
      </PassengersNav>
      <BodyContainer>
        <Form data={passenger} onSubmit={handleSubmit} />
        <Box>
          <p style={{ fontSize: "1.25rem" }}>
            Presiona este boton para finalizar
          </p>
          <ConfirmButton onClick={submitData}>Confirmar ✅</ConfirmButton>
          {passengers.length > 4 ? (
            <ErrorMessage>No puedes registrar mas de 4 pasajeros</ErrorMessage>
          ) : (
            ""
          )}
        </Box>
      </BodyContainer>
    </Container>
  );
}
