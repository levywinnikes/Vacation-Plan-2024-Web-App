import React from "react";
import moment from "moment";

import { CalendarOutlined, UserOutlined } from "@ant-design/icons";

// import { Container } from './styles';

function ShowVacation({ vacationObject }) {
  const formattedDate = moment(vacationObject?.date).format("MM/DD/YYYY");

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

          width: "90%",
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
        }}
      >
        {vacationObject?.title}
      </h1>
      <h4
        style={{
          position: "absolute",
          top: 36,
          left: 13,
          textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",

          width: "90%",
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
        }}
      >
        {vacationObject?.location}
      </h4>

      <div
        style={{
          position: "absolute",
          bottom: 40,
          left: 12,
          fontWeight: "bold",
          textShadow: "2px 2px 4px rgba(0, 0, 0, 1)",
        }}
      >
        <CalendarOutlined />
      </div>

      <div
        style={{
          position: "absolute",
          bottom: 40,
          left: 30,
          fontWeight: "bold",
          textShadow: "2px 2px 4px rgba(0, 0, 0, 1)",
        }}
      >
        {formattedDate}
      </div>

      <div
        style={{
          position: "absolute",
          bottom: 40,
          right: 24,
          fontWeight: "bold",
          textShadow: "2px 2px 4px rgba(0, 0, 0, 1)",
        }}
      >
        <UserOutlined />
      </div>

      <div
        style={{
          position: "absolute",
          bottom: 40,
          right: 12,
          fontWeight: "bold",
          textShadow: "2px 2px 4px rgba(0, 0, 0, 1)",
        }}
      >
        {vacationObject?.participants?.length
          ? vacationObject?.participants?.length
          : "0"}
      </div>

      <div
        style={{
          position: "absolute",
          bottom: 20,
          left: 12,
          fontWeight: "bold",
          textShadow: "2px 2px 4px rgba(0, 0, 0, 1)",
          width: "90%",
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
        }}
      >
        {vacationObject?.description}
      </div>
    </div>
  );
}

export default ShowVacation;
