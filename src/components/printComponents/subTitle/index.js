import { Col, Row } from "antd";

function SubTitle({ children }) {
  return (
    <Row
      style={{
        fontWeight: "500",
        marginTop: "8px",
        marginBottom: "8px",
        backgroundColor: "#EDEDED",
        fontSize: "14px",
        border: "1px #000 solid",
        WebkitPrintColorAdjust: "exact",
        width: "100%",
      }}
    >
      <Col
        style={{
          padding: "3px",
          color: "#000",
        }}
        span={24}
      >
        {children}
      </Col>
    </Row>
  );
}

export default SubTitle;
