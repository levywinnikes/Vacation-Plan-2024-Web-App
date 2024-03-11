import { Row } from "antd";
import React from "react";

// import { Container } from './styles';

function NoVacationsRegistered({ showAddVacation = () => {} }) {
  return (
    <Row
      style={{
        display: "flex",
        alignItems: "center",
        transform: "translate(0, -50%)",
      }}
    >
      <div
        style={{
          marginRight: "4px",
        }}
      >
        You haven't registered any vacation destinations yet.
      </div>
      <div
        onClick={showAddVacation}
        style={{
          cursor: "pointer",
        }}
      >
        Click here to register now.
      </div>
    </Row>
  );
}

export default NoVacationsRegistered;
