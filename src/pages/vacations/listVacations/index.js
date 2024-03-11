import { Col, Row } from "antd";
import React, { Fragment } from "react";
import NoVacationsRegistered from "./noVacationRegistered";
import ShowVacation from "./showVacation";

// import { Container } from './styles';

function ListVacations({
  listVacations = [],
  loading = false,
  showEditVacation = () => {},
}) {
  return (
    <Fragment>
      {listVacations?.length === 0 ? (
        <NoVacationsRegistered />
      ) : (
        <Row
          gutter={[8, 0]}
          style={{
            width: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
          }}
        >
          {listVacations.map((vacation, index) => {
            return (
              <Col
                style={{
                  cursor: "pointer",
                  padding: "12px",
                  height: "230px",
                  width: "100%",
                }}
                onClick={() => showEditVacation({ ...vacation, index })}
                xxl={4}
                xl={6}
                lg={6}
                md={8}
                sm={12}
                xs={24}
              >
                <ShowVacation key={index} vacationObject={vacation} />
              </Col>
            );
          })}
        </Row>
      )}
    </Fragment>
  );
}

export default ListVacations;
