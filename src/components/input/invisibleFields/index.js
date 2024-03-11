import { Form } from "antd";
import React from "react";
import { Fragment } from "react";

// import { Container } from './styles';

function InvisibleFields({ names = [], form, initialValues = {} }) {
  return (
    <Fragment>
      {names.map((name) => (
        <Form initialValues={initialValues} form={form}>
          <Form.Item name={name} style={{ display: "none" }}>
            <input></input>
          </Form.Item>
        </Form>
      ))}
    </Fragment>
  );
}

export default InvisibleFields;
