import { Col, Form, Row } from "antd";
import React, { Fragment, useState } from "react";
import InputText from "../../../components/input/text";
import InputTextArea from "../../../components/input/textArea";
import InputDate from "../../../components/input/date";
import Button from "../../../components/button";
import Participants from "./participants";

// import { Container } from './styles';

function VacationForm() {
  const [form] = Form.useForm();
  const [participants, setParticipants] = useState([]);

  return (
    <Fragment>
      <Row>
        <InputText
          layout="vertical"
          name={"title"}
          form={form}
          label={"Title"}
          xxl={24}
          lg={24}
          md={24}
          sm={24}
          xl={24}
          xs={24}
          required
        />

        <InputText
          layout="vertical"
          name={"location"}
          form={form}
          label={"Location"}
          xxl={24}
          lg={24}
          md={24}
          sm={24}
          xl={24}
          xs={24}
          required
        />

        <InputDate
          layout="vertical"
          name={"date"}
          form={form}
          label={"Date"}
          xxl={24}
          lg={24}
          md={24}
          sm={24}
          xl={24}
          xs={24}
          required
        />

        <InputTextArea
          layout="vertical"
          name={"description"}
          form={form}
          label={"Description"}
          xxl={24}
          lg={24}
          md={24}
          sm={24}
          xl={24}
          xs={24}
          required
        />
        <Participants
          participantsList={participants}
          setParticipantsList={setParticipants}
        />
      </Row>
    </Fragment>
  );
}

export default VacationForm;
