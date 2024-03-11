import React from "react";

// import { Container } from './styles';

function ShowVacation({ vacationObject }) {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        borderRadius: "8px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
      }}
    >
      {vacationObject?.thumbnail && (
        <img
          style={{
            width: "100%",
            height: "100%",
            borderRadius: "8px",
            opacity: 0.6,
          }}
          src={vacationObject?.thumbnail}
        ></img>
      )}
      <h1
        style={{
          position: "absolute",
          top: 0,
          left: 12,
          textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
        }}
      >
        {vacationObject?.title}
      </h1>
      <div
        style={{
          position: "absolute",
          bottom: 24,
          left: 12,
          fontWeight: "bold",
          textShadow: "2px 2px 4px rgba(0, 0, 0, 1)",
        }}
      >
        {vacationObject?.description}
      </div>
    </div>
  );
}

export default ShowVacation;
