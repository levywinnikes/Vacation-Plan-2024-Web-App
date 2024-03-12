import { Col, Modal, Row } from "antd";
import React, { useEffect, useRef, useState } from "react";
import Button from "../../components/button";
import ListVacations from "./listVacations";
import "./styles.css";
import VacationForm from "./vacationForm";

import Title from "./vacationForm/title";
import { useDispatch, useSelector } from "react-redux";
import dayjs from "dayjs";
import SocialMedia from "./socialMedia";
import Background from "./background";
import ReactToPrint from "react-to-print";
import { PrinterOutlined } from "@ant-design/icons";
import ReportPrint from "./print";

// import { Container } from './styles';

function Vacations() {
  const componentRef = useRef();

  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [addVacationModalVisible, setAddVacationModalVisible] = useState(false);
  const [selectedVacation, setSelectedVacation] = useState(null);
  const vacations = useSelector((state) => state.vacations);

  const dispatch = useDispatch();

  function saveOnRedux() {
    dispatch({
      type: "SET_VACATIONS",
      vacations: [...data],
    });
  }

  useEffect(() => {
    saveOnRedux();
  }, [data]);

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
    const formattedVacations = vacations.map((vacation) => {
      return {
        ...vacation,
        date: dayjs(vacation.date),
      };
    });

    setData(formattedVacations);
  }

  useEffect(() => {
    getRegisteredVacations();
  }, []);

  return (
    <Row className="vacation-page">
      <Background />

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
        }}
        span={24}
      >
        <ListVacations
          showAddVacation={showAddVacation}
          toggleModalVacationVisible={toggleModalVacationVisible}
          showEditVacation={showEditVacation}
          listVacations={data}
          loading={loading}
          setLoading={setLoading}
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

      <SocialMedia />

      {/* Print button */}
      {data?.length > 0 && (
        <ReactToPrint
          pageStyle={""}
          trigger={() => (
            <Button
              style={{
                position: "fixed",
                borderRadius: "8px",
                top: 12,
                right: 12,
                fontWeight: "bold",
                height: "60px",
              }}
              type="primary"
            >
              <PrinterOutlined
                style={{
                  fontSize: "32px",
                  marginRight: "6px",
                }}
              />
            </Button>
          )}
          content={() => componentRef.current}
        />
      )}

      <div style={{ display: "none" }}>
        <PrintComponent ref={componentRef} data={data} />
      </div>

      {/*End Print button */}
    </Row>
  );
}

export default Vacations;

class PrintComponent extends React.Component {
  render() {
    const { data } = this.props;

    return (
      <div
        ref={(el) => (this.componentRef = el)}
        id="divToPrint"
        style={{
          margin: "0",
          padding: "0",
        }}
      >
        <ReportPrint data={data} />
      </div>
    );
  }
}
