import { Row } from "antd";
import React from "react";

// import { Container } from './styles';

function NoVacationsRegistered({ showAddVacation = () => {} }) {
  return (
    <Row
      onClick={showAddVacation}
      style={{
        display: "flex",
        alignItems: "center",
        height: "200px",
        cursor: "pointer",
      }}
    >
      <div
        style={{
          marginRight: "4px",
        }}
      >
        You haven't registered any vacation destinations yet.
      </div>
      <div>Click here to register now.</div>
    </Row>
  );
}

export default NoVacationsRegistered;
