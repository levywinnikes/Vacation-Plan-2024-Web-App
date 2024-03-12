import { Col, Row } from "antd";
import React from "react";
import { Fragment } from "react";
import moment from "moment";
import HeaderReport from "../../../components/printComponents/headerReport";
import SubTitle from "../../../components/printComponents/subTitle";
import dayjs from "dayjs";

function ReportPrint({ data }) {
  function HeaderTable() {
    if (!data[0]) {
      return <Fragment />;
    }

    let keys = Object.keys(data[0]).filter((key) => key !== "thumbnail");

    // Move "participants" to the end
    keys = keys.filter((key) => key !== "participants");
    keys.push("participants");

    return (
      <Row
        gutter={6}
        style={{
          fontWeight: "bold",
          textTransform: "uppercase",
        }}
      >
        {keys.map((key) => {
          return (
            <Col
              style={{
                flex: 1,
                overflow: "hidden",
              }}
            >
              {key}
            </Col>
          );
        })}
      </Row>
    );
  }

  function BodyTable() {
    if (!data[0]) {
      return <Fragment />;
    }

    let keys = Object.keys(data[0]);

    // Move "participants" to the end
    keys = keys.filter((key) => key !== "participants");
    keys.push("participants");

    return (
      <Fragment>
        {data.map((dt) => (
          <Row gutter={6}>
            {keys.map((key) => {
              let value = dt[key];
              let color = "inherit";

              // Exclude thumbnail property
              if (key === "thumbnail") {
                return null;
              }

              // Transform participants array into comma-separated string
              if (key === "participants" && Array.isArray(value)) {
                value = value.join(", ");
              }

              // Check if value is a dayjs object
              if (dayjs.isDayjs(value)) {
                value = dayjs(value).format("MM/DD/YYYY");
              } else if (moment(value, moment.ISO_8601, true).isValid()) {
                value = moment(value).format("MM/DD/YYYY");
              }

              if (value === true) {
                value = "True";
              }

              if (value === false || value === "Inativo") {
                value = "False";
              }

              return (
                <Col
                  style={{
                    color,
                    borderTop: "1px #D8D8D8 solid",
                    flex: 1,
                    overflow: "hidden",
                  }}
                >
                  {value}
                </Col>
              );
            })}
          </Row>
        ))}
      </Fragment>
    );
  }

  return (
    <div>
      <HeaderReport />
      <SubTitle>Vacation List</SubTitle>

      <HeaderTable />
      <BodyTable />
    </div>
  );
}

export default ReportPrint;
