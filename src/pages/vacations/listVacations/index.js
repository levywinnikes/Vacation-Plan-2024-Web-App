import { Col, Row } from "antd";
import React, { Fragment } from "react";
import NoVacationsRegistered from "./noVacationRegistered";
import ShowVacation from "./showVacation";

// import { Container } from './styles';

function ListVacations({
  listVacations = [],
  loading = false,
  showAddVacation = () => {},
}) {
  return (
    <Fragment>
      {listVacations?.length === 0 ? (
        <NoVacationsRegistered />
      ) : (
        <Row gutter={[8, 8]} style={{ width: "100%" }}>
          {listVacations.map((vacation, index) => {
            return (
              <Col xxl={4} xl={6} lg={6} md={6} sm={8} xs={12}>
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
