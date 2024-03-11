import { message, Row } from "antd";
import React, { Fragment } from "react";
import Button from "../../../../components/button";

// import { Container } from './styles';

function VacationModalFooter({
  editVacation,
  form,
  addVacation,
  removeVacation,
  selectedVacation,
  toggleModalVacationVisible,
}) {
  function actionSave() {
    form
      .validateFields()
      .then(() => {
        if (selectedVacation?.index || selectedVacation?.index === 0) {
          editVacation(form.getFieldsValue(), selectedVacation.index);
        } else {
          addVacation(form.getFieldsValue());
        }
      })
      .catch(() => {
        message.error("Check all required fields");
      });
  }

  return (
    <Fragment>
      <Row
        style={{
          width: "100%",
          justifyContent: "space-between",
        }}
      >
        <div>
          {selectedVacation && (
            <Button
              onClick={() => removeVacation(selectedVacation.index)}
              type="tertiary"
            >
              Remove
            </Button>
          )}
        </div>
        <div
          style={{
            display: "flex",
          }}
        >
          <Button onClick={toggleModalVacationVisible}>Cancel</Button>

          <Button
            onClick={actionSave}
            type="secondary"
            style={{
              marginLeft: "8px",
            }}
          >
            Save
          </Button>
        </div>
      </Row>
    </Fragment>
  );
}

export default VacationModalFooter;
