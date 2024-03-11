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
        <Row gutter={[8, 8]} style={{ width: "100%", height: "250px" }}>
          {listVacations.map((vacation, index) => {
            return (
              <Col
                style={{
                  cursor: "pointer",

                  height: "220px",
                  width: "100%",
                }}
                onClick={() => showEditVacation({ ...vacation, index })}
                xxl={4}
                xl={6}
                lg={6}
                md={6}
                sm={8}
                xs={12}
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
