import React from "react";

export default function ConfirmPage() {
  const passengers = JSON.parse(sessionStorage.PASSENGERS_REGISTERED);

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
