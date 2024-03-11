import { Col, Row } from "antd";
import React, { Fragment } from "react";

// import { Container } from './styles';

function Title() {
  return (
    <Row>
      <Col
        style={{
          display: "flex",
          justifyContent: "center",
        }}
        span={24}
      >
        <h1
          style={{
            fontFamily: "Arial, sans-serif",
            fontSize: "3rem",
            color: "#FFF",
            textTransform: "uppercase",
            letterSpacing: "2px",
            textAlign: "center",
            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)",
            margin: "20px 0 0 0",
            display: "flex",
            alignItems: "center",
          }}
        >
          Vacation Plan 2024
        </h1>
      </Col>
      <Col
        style={{
          display: "flex",
          justifyContent: "center",
        }}
        span={24}
      >
        <h2
          style={{
            fontFamily: "Arial, sans-serif",
            fontSize: "1rem",
            color: "#FFF",
            textTransform: "uppercase",
            letterSpacing: "2px",
            textAlign: "center",
            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)",
            display: "flex",
            alignItems: "center",
          }}
        >
          A demo project created by André L. Scarpim Winnikes
        </h2>
      </Col>
    </Row>
  );
}

export default Title;
