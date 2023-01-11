import styled from "@emotion/styled";

export const FormRegister = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
  text-align: center;
  max-width: 100%;
  padding: 1.25rem 1.75rem;
  border-radius: 0.5rem;
  background-color: #2a324b;
  color: white;
`;

export const FormContainer = styled.div`
  max-width: 100%;
  display: flex;
  justify-content: center;
`;

export const BoxInput = styled.div`
  display: flex;
  gap: 0.25rem;
  align-items: flex-start;
  flex-direction: column;
  width: fit-content;
`;

export const ErrorMessage = styled.p`
  color: red;
  font-size: 0.75rem;
`;

export const InputContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
`;

export const StyledInput = styled.input`
  padding: 0.75rem 0.75rem;
  border-radius: 0.325rem;
  max-width: 10rem;
  outline: none;
  border: none;
  color: #2a324b;
`;

export const StyledSelect = styled.select`
  padding: 0.5rem 1rem;
  border-radius: 0.325rem;
  border: none;
  outline: none;
`;

export const SaveButton = styled.button`
  padding: 0.75rem 1rem;
  border-radius: 0.25rem;
  color: white;
  font-weight: 600;
  border: none;
  background-color: #00b295;
  cursor: pointer;
  letter-spacing: 0.125rem;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export function validate(values) {
  const errors = {};

  if (values.name === "") {
    errors.name = "Campo requerido";
  } else if (!/^[a-zñáéíóúüA-Z '.]+$/.test(values.name)) {
    errors.name = "Solo letras";
  }

  if (values.lastName === "") {
    errors.lastName = "Campo requerido";
  } else if (!/^[a-zñáéíóúüA-Z '.]+$/.test(values.lastName)) {
    errors.lastName = "Solo letras";
  }

  if (values.nationality === "") {
    errors.nationality = "Campo requerido";
  } else if (!/^[a-zA-Z]+$/.test(values.nationality)) {
    errors.nationality = "Solo letras";
  }

  if (values.docNum === "") {
    errors.docNum = "Campo requerido";
  } else if (values.docType === "dni" && !/^[0-9]*$/.test(values.docNum)) {
    errors.docNum = "Solo numeros para DNI";
  } else if (values.docType === "dni" && values.docNum.length > 8) {
    errors.docNum = "Debe tener máximo 8 numeros";
  } else if (values.docType === "ce" && values.docNum.length > 9) {
    errors.docNum = "Debe tener máximo 9 caracteres";
  } else if (values.docType === "ce" && !/[A-Za-z0-9]/.test(values.docNum)) {
    errors.docNum = "Solo letras y numeros";
  } else if (values.docType === "passport" && !/^[0-9]*$/.test(values.docNum)) {
    errors.docNum = "Solo numeros para pasaporte";
  } else if (values.docType === "passport" && values.docNum.length > 9) {
    errors.docNum = "Debe tener máximo 9 numeros";
  }
  return errors;
}
