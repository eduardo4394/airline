import React from "react";
import { useState } from "react";
import styled from "@emotion/styled";

const FormRegister = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
  text-align: center;
  border: 1px solid blue;
  max-width: 75%;
  padding: 2rem 1.75rem;
  border-radius: 0.5rem;
  background-color: #2a324b;
  color: white;
`;

const FormContainer = styled.div`
  max-width: 100%;
  display: flex;
  justify-content: center;
`;

const InputContainer = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
`;

const StyledInput = styled.input`
  padding: 0.75rem 1rem;
  border-radius: 0.325rem;
  outline: none;
  border: none;
  color: #2a324b;
`;

const StyledSelect = styled.select`
  padding: 0.5rem 1rem;
  border-radius: 0.325rem;
  border: none;
  outline: none;
`;

const SaveButton = styled.button`
  padding: 0.75rem 1rem;
  border-radius: 0.25rem;
  color: white;
  font-weight: 600;
  border: none;
  background-color: #9a7aa0;
  cursor: pointer;
`;

export default function Form(props) {
  const [passenger, setPassenger] = useState({
    name: "",
    lastName: "",
    nationality: "",
    docType: "dni",
    docNum: "",
  });

  const handleChange = (e) => {
    setPassenger({ ...passenger, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.onSubmit(passenger);
    setPassenger({
      name: "",
      lastName: "",
      nationality: "",
      docType: "dni",
      docNum: "",
    });
  };
  return (
    <FormContainer>
      <FormRegister onSubmit={handleSubmit}>
        <InputContainer>
          <label htmlFor="name">Nombre:</label>
          <StyledInput
            onChange={handleChange}
            name="name"
            value={passenger.name}
            placeholder="Ingresa tu nombre"
            type="text"
          />
        </InputContainer>
        <InputContainer>
          <label htmlFor="name">Apellido:</label>
          <StyledInput
            onChange={handleChange}
            value={passenger.lastName}
            name="lastName"
            placeholder="Ingresa tus apellidos"
            type="text"
          />
        </InputContainer>
        <InputContainer>
          <label htmlFor="name">Nacionalidad:</label>
          <StyledInput
            onChange={handleChange}
            value={passenger.nationality}
            name="nationality"
            placeholder="Ingrese su nacionalidad"
            type="text"
          />
        </InputContainer>
        <InputContainer>
          <label htmlFor="doc-type">Tipo de documento</label>
          <StyledSelect
            onChange={handleChange}
            value={passenger.docType}
            name="docType"
            id="doc-type"
          >
            <option value="dni">DNI</option>
            <option value="ce">CE</option>
          </StyledSelect>
        </InputContainer>
        <InputContainer>
          <label htmlFor="doc-num">Numero de documento:</label>
          <StyledInput
            placeholder="Numero de cocumento"
            type="number"
            id="doc-num"
            name="docNum"
            onChange={handleChange}
            value={passenger.docNum}
          />
        </InputContainer>
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <SaveButton type="submit">Guardar</SaveButton>
        </div>
      </FormRegister>
    </FormContainer>
  );
}
