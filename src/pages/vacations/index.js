import { Modal, Row } from "antd";
import React, { Fragment, useEffect, useState } from "react";
import Button from "../../components/button";
import ListVacations from "./listVacations";
import "./styles.css";
import VacationForm from "./vacationForm";

// import { Container } from './styles';

function Vacations() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [addVacationModalVisible, setAddVacationModalVisible] = useState(false);
  const [selectedVacation, setSelectedVacation] = useState(null);

  function toggleModalVacationVisible() {
    setAddVacationModalVisible(!addVacationModalVisible);
  }

  function showAddVacation() {
    setSelectedVacation(null);
    setAddVacationModalVisible(true);
  }

  function showEditVacation(fields) {
    if (!fields) {
      return;
    }
    setSelectedVacation(fields);
    setAddVacationModalVisible(true);
  }

  function removeVacation(index) {
    const newData = [...data];
    newData.splice(index, 1);
    setData(newData);
    setAddVacationModalVisible(false);
  }

  function editVacation(updatedVacation, index) {
    console.log("edit");

    const newData = [...data];
    newData[index] = updatedVacation;
    setData(newData);
    setAddVacationModalVisible(false);
  }

  function addVacation(vacationObject) {
    setData([...data, vacationObject]);

    console.log(vacationObject, "OBJ");

    setAddVacationModalVisible(false);
  }

  useEffect(() => {
    console.log(data, "dt");
  }, [data]);

  function getRegisteredVacations() {
    setData([
      {
        title: "Malé",
        description: "Islamic Centre mosque & fish market",
        location: "Maldives",
        thumbnail:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5xlOKlzXOWXb2mPzWkRDU9neqHCrpI5FwwFMrZryhTPMI5rFTMw1lkNxKR8HrEUSDlIpheElaz5KkYij-1Az4Jw-yuk2VDgE4Mvu0Ng",
      },
      {
        title: "Malé",
        description: "Islamic Centre mosque & fish market",
        location: "Maldives",
        thumbnail:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5xlOKlzXOWXb2mPzWkRDU9neqHCrpI5FwwFMrZryhTPMI5rFTMw1lkNxKR8HrEUSDlIpheElaz5KkYij-1Az4Jw-yuk2VDgE4Mvu0Ng",
      },
      {
        title: "Malé",
        description: "Islamic Centre mosque & fish market",
        location: "Maldives",
        thumbnail:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5xlOKlzXOWXb2mPzWkRDU9neqHCrpI5FwwFMrZryhTPMI5rFTMw1lkNxKR8HrEUSDlIpheElaz5KkYij-1Az4Jw-yuk2VDgE4Mvu0Ng",
      },
      {
        title: "Malé",
        description: "Islamic Centre mosque & fish market",
        location: "Maldives",
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
      <Modal
        footer={null}
        onCancel={toggleModalVacationVisible}
        open={addVacationModalVisible}
        maskClosable={false}
      >
        <VacationForm
          addVacation={addVacation}
          removeVacation={removeVacation}
          editVacation={editVacation}
          toggleModalVacationVisible={toggleModalVacationVisible}
          selectedVacation={selectedVacation}
        />
      </Modal>

      <Button
        onClick={showAddVacation}
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
      <ListVacations
        showEditVacation={showEditVacation}
        listVacations={data}
        loading={loading}
      />
    </div>
  );
}

export default Vacations;
