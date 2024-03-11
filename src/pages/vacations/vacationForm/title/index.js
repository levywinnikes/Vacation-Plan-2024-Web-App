import React, { Fragment } from "react";

// import { Container } from './styles';

function Title() {
  return (
    <Fragment>
      <h1
        style={{
          fontFamily: "Arial, sans-serif",
          fontSize: "3rem",
          color: "#FFF",
          textTransform: "uppercase",
          letterSpacing: "2px",
          textAlign: "center",
          textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)",
          margin: "20px 0",
          display: "flex",
          alignItems: "center",
        }}
      >
        Vacation Plan 2024
      </h1>
    </Fragment>
  );
}

export default Title;
