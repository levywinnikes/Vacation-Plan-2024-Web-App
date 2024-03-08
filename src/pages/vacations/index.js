import { Row } from "antd";
import React, { Fragment, useEffect, useState } from "react";
import Button from "../../components/button";
import ListVacations from "./listVacations";
import "./styles.css";

// import { Container } from './styles';

function Vacations() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  function getRegisteredVacations() {
    setData([
      {
        title: "Malé",
        description: "Islamic Centre mosque & fish market",
        thumbnail:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5xlOKlzXOWXb2mPzWkRDU9neqHCrpI5FwwFMrZryhTPMI5rFTMw1lkNxKR8HrEUSDlIpheElaz5KkYij-1Az4Jw-yuk2VDgE4Mvu0Ng",
      },
      {
        title: "Malé",
        description: "Islamic Centre mosque & fish market",
        thumbnail:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5xlOKlzXOWXb2mPzWkRDU9neqHCrpI5FwwFMrZryhTPMI5rFTMw1lkNxKR8HrEUSDlIpheElaz5KkYij-1Az4Jw-yuk2VDgE4Mvu0Ng",
      },
      {
        title: "Malé",
        description: "Islamic Centre mosque & fish market",
        thumbnail:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5xlOKlzXOWXb2mPzWkRDU9neqHCrpI5FwwFMrZryhTPMI5rFTMw1lkNxKR8HrEUSDlIpheElaz5KkYij-1Az4Jw-yuk2VDgE4Mvu0Ng",
      },
      {
        title: "Malé",
        description: "Islamic Centre mosque & fish market",
        thumbnail:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5xlOKlzXOWXb2mPzWkRDU9neqHCrpI5FwwFMrZryhTPMI5rFTMw1lkNxKR8HrEUSDlIpheElaz5KkYij-1Az4Jw-yuk2VDgE4Mvu0Ng",
      },
    ]);
    setLoading(false);
  }

  useEffect(() => {
    getRegisteredVacations();
  }, []);

  return (
    <div className="vacation-page">
      <Button
        style={{
          position: "absolute",
          bottom: 20,
          right: 20,
          fontWeight: "bold",
          fontSize: 50,
          height: 60,
          width: 60,
        }}
      >
        +
      </Button>
      <ListVacations listVacations={data} loading={loading} />
    </div>
  );
}

export default Vacations;
