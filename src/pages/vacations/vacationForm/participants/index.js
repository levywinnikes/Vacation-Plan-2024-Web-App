import { Col, Form, Row } from "antd";
import React, { Fragment } from "react";
import Button from "../../../../components/button";
import InputText from "../../../../components/input/text";

// import { Container } from './styles';

function Participants({ participantsList = [], setParticipantsList }) {
  const [form] = Form.useForm();

  function addParticipant() {
    const { participant } = form.getFieldsValue();

    participantsList.push(participant);
    setParticipantsList([...participantsList]);

    form.resetFields();
  }

  function removeParticipant(name) {
    const updatedList = participantsList.filter(
      (participant) => participant !== name
    );
    setParticipantsList(updatedList);
  }

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

      <Row style={{ width: "100%", padding: "8px" }}>
        {participantsList.map((participant) => {
          return (
            <Fragment>
              <Col span={20}> {participant}</Col>
              <Col span={4}>
                <Button
                  onClick={() => removeParticipant(participant)}
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
    </Row>
  );
}

export default Participants;
