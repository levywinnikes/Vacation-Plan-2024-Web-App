import { Col, Row } from "antd";
import React from "react";
import LogoBuzzvel from "./logo.png";

function HeaderReport({ style }) {
  function Logo() {
    return (
      <div
        style={{
          backgroundColor: "black",
          width: "100%",
          height: "200px",
          display: "flex",
          alignItems: "center", // Centering the content vertically
        }}
      >
        <img
          style={{
            backgroundColor: "black",
            marginRight: "10px", // Adding margin to separate logo and text
          }}
          width={"200px"}
          height={"200px"}
          alt="Buzzvel logo"
          src={LogoBuzzvel}
        />
        <Row>
          <h1>Vacation Plan 2024</h1>
          <Col style={{ margin: "-20px 0 0 6px" }} span={24}>
            <div style={{ fontSize: "20px" }}>Buzzvel demo project</div>
          </Col>
        </Row>
      </div>
    );
  }

  return (
    <div
      style={{
        ...style,
        background: "#f2f2f2", // Adding light gray background
        padding: "10px", // Adding padding for spacing
        boxShadow: "0 2px 4px rgba(0,0,0,0.1)", // Adding shadow
        borderRadius: "5px", // Adding border radius for a softer look
      }}
    >
      <Logo />
    </div>
  );
}

export default HeaderReport;
