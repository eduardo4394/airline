import React from "react";
import { useLocation } from "react-router-dom";

export default function ConfirmPage() {
  const data = useLocation();
  const passengers = data.state;
  console.log(passengers);

  return (
    <div style={{ minHeight: "80vh" }}>
      <h1>Confirm page</h1>
      <ul>
        {passengers.map((passenger) => {
          return (
            <div key={passenger.docNum}>
              <p>{`${passenger.name} ${passenger.lastName}`}</p>
            </div>
          );
        })}
      </ul>
    </div>
  );
}
