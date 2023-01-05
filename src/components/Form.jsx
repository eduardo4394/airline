import React from "react";

export default function Form() {
  return (
    <div>
      <form action="">
        <div>
          <label htmlFor="name">Nombre:</label>
          <input type="text" />
        </div>
        <div>
          <label htmlFor="name">Apellido:</label>
          <input type="text" />
        </div>
        <div>
          <label htmlFor="name">Nacionalidad:</label>
          <input type="text" />
        </div>
        <div>
          <label htmlFor="type-doc">Tipo de documento</label>
          <select name="type-doc" id="type-doc">
            <option value="dni">DNI</option>
            <option value="ce">CE</option>
          </select>
        </div>
        <div>
          <label htmlFor="doc-num">Numero de documento:</label>
          <input type="number" id="doc-num" />
        </div>
      </form>
    </div>
  );
}
