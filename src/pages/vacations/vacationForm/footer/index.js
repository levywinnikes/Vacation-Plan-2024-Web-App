import { Row } from "antd";
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
    if (selectedVacation?.index === 0 || selectedVacation.index) {
      editVacation(form.getFieldsValue(), selectedVacation.index);
    } else {
      addVacation(form.getFieldsValue());
    }
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
