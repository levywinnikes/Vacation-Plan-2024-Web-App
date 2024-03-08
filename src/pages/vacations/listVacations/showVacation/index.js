import React from "react";

// import { Container } from './styles';

function ShowVacation({ vacationObject }) {
  return (
    <div
      style={{
        width: "100%",
      }}
    >
      <img style={{ width: "100%" }} src={vacationObject?.thumbnail}></img>
      <h1
        style={{
          position: "absolute",
          top: 0,
          left: 12,
        }}
      >
        {vacationObject?.title}
      </h1>
      <div
        style={{
          position: "absolute",
          bottom: 24,
          left: 12,
        }}
      >
        {vacationObject?.description}
      </div>
    </div>
  );
}

export default ShowVacation;
