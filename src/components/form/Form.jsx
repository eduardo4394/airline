import React from "react";
import { useState } from "react";
import {
  FormRegister,
  FormContainer,
  InputContainer,
  StyledInput,
  StyledSelect,
  SaveButton,
  validate,
  BoxInput,
  ErrorMessage,
  ButtonContainer,
} from "./formComponents";

export default function Form(props) {
  let initialValues = {};
  !props.data
    ? (initialValues = {
        name: "",
        lastName: "",
        nationality: "",
        docType: "dni",
        docNum: "",
      })
    : (initialValues = {
        name: props.data.name,
        lastName: props.data.lastName,
        nationality: props.data.nationality,
        docType: props.data.docType,
        docNum: props.data.docNum,
      });

  const [form, setForm] = useState({
    values: initialValues,
    errors: {},
    touched: {},
  });

  const { values, errors, touched } = form;
  const isValid = Object.keys(validate(values)).length === 0;

  const handleChange = (e) => {
    const values = { ...form.values, [e.target.name]: e.target.value };
    const errors = validate(values);
    setForm({ ...form, values, errors });
  };

  function handleBlur(e) {
    const errors = validate(values);
    setForm((prev) => ({
      ...prev,
      errors,
      touched: { ...prev.touched, [e.target.name]: true },
    }));
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    props.onSubmit(values);
    setForm(() => ({
      values: {
        name: "",
        lastName: "",
        nationality: "",
        docType: "dni",
        docNum: "",
      },
      errors: {},
      touched: {},
    }));
  };

  const editPassenger = (e) => {
    e.preventDefault();
    props.onSubmit(props.data, values);
  };

  return (
    <FormContainer>
      <FormRegister onSubmit={!props.data ? handleSubmit : editPassenger}>
        <BoxInput>
          <InputContainer>
            <label htmlFor="name">Nombre:</label>
            <StyledInput
              onChange={handleChange}
              name="name"
              value={values.name}
              placeholder="Ingresa tu nombre"
              type="text"
              onBlur={handleBlur}
            />
          </InputContainer>
          {errors.name && touched.name && (
            <ErrorMessage>{errors.name}</ErrorMessage>
          )}
        </BoxInput>
        <BoxInput>
          <InputContainer>
            <label htmlFor="name">Apellido:</label>
            <StyledInput
              onChange={handleChange}
              value={values.lastName}
              name="lastName"
              placeholder="Ingresa tus apellidos"
              type="text"
              onBlur={handleBlur}
            />
          </InputContainer>
          {errors.lastName && touched.lastName && (
            <ErrorMessage>{errors.lastName}</ErrorMessage>
          )}
        </BoxInput>
        <BoxInput>
          <InputContainer>
            <label htmlFor="name">Nacionalidad:</label>
            <StyledInput
              onChange={handleChange}
              value={values.nationality}
              name="nationality"
              placeholder="Pais de origen"
              type="text"
              onBlur={handleBlur}
            />
          </InputContainer>
          {errors.nationality && touched.nationality && (
            <ErrorMessage>{errors.nationality}</ErrorMessage>
          )}
        </BoxInput>
        <InputContainer>
          <label htmlFor="doc-type">Tipo de documento</label>
          <StyledSelect
            onChange={handleChange}
            value={values.docType}
            name="docType"
            id="doc-type"
          >
            <option value="dni">DNI</option>
            <option value="ce">CE</option>
            <option value="passport">Pasaporte</option>
          </StyledSelect>
        </InputContainer>
        <BoxInput>
          <InputContainer>
            <label htmlFor="doc-num">Numero de documento:</label>
            <StyledInput
              placeholder="Nro de documento"
              type="text"
              id="doc-num"
              name="docNum"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.docNum}
            />
          </InputContainer>
          {errors.docNum && touched.docNum && (
            <ErrorMessage>{errors.docNum}</ErrorMessage>
          )}
        </BoxInput>
        <ButtonContainer>
          <SaveButton disabled={!isValid} type="submit">
            GUARDAR
          </SaveButton>
        </ButtonContainer>
      </FormRegister>
    </FormContainer>
  );
}
