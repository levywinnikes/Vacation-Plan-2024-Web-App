import { Col, Form, message, Modal, Row } from "antd";
import React, { Fragment, useState } from "react";
import Button from "../../../../components/button";
import InputText from "../../../../components/input/text";
import { UserOutlined } from "@ant-design/icons";

// import { Container } from './styles';

function Participants({ participantsList = [], setParticipantsList }) {
  const [form] = Form.useForm();
  const [removeParticipantName, setRemoveParticipantName] = useState(null);
  function addParticipant() {
    const { participant } = form.getFieldsValue();

    if (!participant) {
      message.warning("Participant field cannot be empty");
      return;
    }

    if (participantsList.includes(participant)) {
      message.warning("The participant is already in the list");
      return;
    }

    participantsList.push(participant);
    setParticipantsList([...participantsList]);

    form.resetFields();
  }

  const handleRemove = () => {
    const updatedList = participantsList.filter(
      (participant) => participant !== removeParticipantName
    );
    setParticipantsList(updatedList);
    setRemoveParticipantName(null);
  };

  const showModal = (name) => {
    setRemoveParticipantName(name);
  };

  return (
    <Row
      style={{
        width: "100%",
      }}
    >
      <InputText
        layout="vertical"
        name={"participant"}
        form={form}
        label={"Participant"}
        xxl={20}
        lg={20}
        md={20}
        sm={20}
        xl={20}
        xs={20}
      />
      <Col
        style={{
          margin: "auto",
          display: "flex",
          justifyContent: "end",
        }}
        span={4}
      >
        <Button onClick={addParticipant}>+</Button>
      </Col>

      <Row style={{ width: "100%", padding: "8px", marginBottom: "20px" }}>
        {participantsList.map((participant) => {
          return (
            <Fragment>
              <Col
                span={18}
                style={{
                  marginBottom: "8px",
                  color: "#FFF",
                  fontWeight: "bold",
                }}
              >
                <UserOutlined style={{ marginRight: "6px" }} />

                {participant}
              </Col>
              <Col
                span={6}
                style={{
                  display: "flex",
                  justifyContent: "flex-end",
                  marginBottom: "8px",
                }}
              >
                <Button
                  onClick={() => showModal(participant)}
                  type="tertiary"
                  style={{
                    fontWeight: "bold",
                    margin: "2px",
                    fontSize: "12px",
                    height: "20px",
                    width: "65px",
                  }}
                >
                  Remove
                </Button>
              </Col>
            </Fragment>
          );
        })}
      </Row>

      <Modal
        closable={false}
        title="Confirm Removal"
        visible={!!removeParticipantName}
        onOk={handleRemove}
        onCancel={() => setRemoveParticipantName(null)}
      >
        <p
          style={{
            color: "#FFF",
          }}
        >
          Are you sure you want to remove this participant?
        </p>
      </Modal>
    </Row>
  );
}

export default Participants;
