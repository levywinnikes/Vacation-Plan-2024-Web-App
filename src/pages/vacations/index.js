import { Col, Modal, Row } from "antd";
import React, { Fragment, useEffect, useState } from "react";
import Button from "../../components/button";
import ListVacations from "./listVacations";
import "./styles.css";
import VacationForm from "./vacationForm";
import background1 from "../../assets/images/1.jpeg";
import background2 from "../../assets/images/2.jpeg";
import background3 from "../../assets/images/3.jpeg";
import background4 from "../../assets/images/4.jpeg";
import Title from "./vacationForm/title";

// import { Container } from './styles';

function Vacations() {
  const backgrounds = [background1, background2, background3, background4];
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [addVacationModalVisible, setAddVacationModalVisible] = useState(false);
  const [selectedVacation, setSelectedVacation] = useState(null);
  const [currentBackgroundIndex, setCurrentBackgroundIndex] = useState(0);

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
    const newData = [...data];
    newData[index] = updatedVacation;
    setData(newData);
    setAddVacationModalVisible(false);
  }

  function addVacation(vacationObject) {
    setData([...data, vacationObject]);

    setAddVacationModalVisible(false);
  }

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
    ]);
    setLoading(false);
  }

  useEffect(() => {
    getRegisteredVacations();
  }, []);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentBackgroundIndex(
        (prevIndex) => (prevIndex + 1) % backgrounds.length
      );
    }, 20000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <Row className="vacation-page">
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${backgrounds[currentBackgroundIndex]})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      ></div>

      <Col
        style={{
          display: "flex",
          justifyContent: "center",
          height: "200px",
        }}
        span={24}
      >
        <Title />
      </Col>
      <Col
        style={{
          display: "flex",
          justifyContent: "center",
          height: "50vh",
        }}
        span={24}
      >
        <ListVacations
          toggleModalVacationVisible={toggleModalVacationVisible}
          showEditVacation={showEditVacation}
          listVacations={data}
          loading={loading}
        />
      </Col>
      <Modal
        className="custom-modal"
        footer={null}
        onCancel={toggleModalVacationVisible}
        open={addVacationModalVisible}
        maskClosable={false}
        style={{ opacity: 0.9 }}
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
          position: "fixed",
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
    </Row>
  );
}

export default Vacations;
