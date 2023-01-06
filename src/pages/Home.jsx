import styled from "@emotion/styled";
import React from "react";
import { useState, useEffect } from "react";
import Form from "../components/Form";
import NavBar from "../components/NavBar";

const PageContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

const PassengerList = styled.ul`
  margin-top: 2rem;
  text-decoration: none;
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding: 0;
`;

export default function Home() {
  const [passengers, setPassengers] = useState([]);
  const getData = (data) => {
    setPassengers([...passengers, data]);
  };
  return (
    <div>
      <NavBar />
      <PageContainer>
        <div>
          <div>
            <h2>Pasajeros</h2>
          </div>
          <PassengerList>
            {passengers.length > 0 ? (
              passengers.map((passenger) => {
                return (
                  <li key={passenger.docNum}>
                    {`${passenger.name} ${passenger.lastName}`}
                  </li>
                );
              })
            ) : (
              <p style={{ color: "gray" }}>No hay pasajeros registrados aun</p>
            )}
          </PassengerList>
        </div>
        <div>
          <h2>Registro de pasajeros</h2>
          <Form onSubmit={getData} passengers={passengers.length} />
        </div>
      </PageContainer>
    </div>
  );
}
