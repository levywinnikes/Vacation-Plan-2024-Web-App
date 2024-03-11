import { Form, Row } from "antd";
import React, { Fragment, useEffect, useState } from "react";
import InputText from "../../../components/input/text";
import InputTextArea from "../../../components/input/textArea";
import InputDate from "../../../components/input/date";
import InvisibleFields from "../../../components/input/invisibleFields";

import Participants from "./participants";
import VacationModalFooter from "./footer";

// import { Container } from './styles';

function VacationForm({
  selectedVacation,
  addVacation,
  editVacation,
  removeVacation,
  toggleModalVacationVisible,
}) {
  const [form] = Form.useForm();
  const [participants, setParticipants] = useState([]);

  useEffect(() => {
    resetForm();

    if (selectedVacation) {
      form.setFieldsValue(selectedVacation);
      setParticipants(selectedVacation?.participants);
    }
  }, [selectedVacation]);

  function resetForm() {
    form.resetFields();
    setParticipants([]);
  }

  useEffect(() => {
    let updateParticipantsForm = form.getFieldsValue();
    updateParticipantsForm.participants = participants;
    form.setFieldsValue(updateParticipantsForm);
  }, [participants]);

  function changeDate(e) {
    let newDate = form.getFieldsValue();
    newDate.date = e;
    form.setFieldValue(newDate);
  }

  return (
    <Fragment>
      <Row>
        <InvisibleFields form={form} names={["participants"]} />

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
          onChange={changeDate}
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

        <InputText
          layout="vertical"
          name={"thumbnail"}
          form={form}
          label={"Thumbnail link image (Insert a valid URL image)"}
          xxl={24}
          lg={24}
          md={24}
          sm={24}
          xl={24}
          xs={24}
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
        />
        <Participants
          participantsList={participants}
          setParticipantsList={setParticipants}
        />
        <VacationModalFooter
          form={form}
          toggleModalVacationVisible={toggleModalVacationVisible}
          addVacation={addVacation}
          removeVacation={removeVacation}
          selectedVacation={selectedVacation}
          editVacation={editVacation}
        />
      </Row>
    </Fragment>
  );
}

export default VacationForm;
