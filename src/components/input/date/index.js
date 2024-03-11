import React from "react";
import { Col, DatePicker, Form } from "antd";
import "moment/locale/pt-br";

function InputDate({
  form,
  name = null,
  label = null,
  placeholder = label,
  required = false,
  onChange,
  disabled = false,
  className = "",
  xxl = 6,
  xl = 6,
  lg = 12,
  md = 24,
  sm = 24,
  xs = 24,
  layout = "horizontal",
}) {
  return (
    <Col
      className="input-home"
      xxl={xxl}
      xl={xl}
      lg={lg}
      md={md}
      sm={sm}
      xs={xs}
    >
      <Form
        onKeyPress={(e) => {
          if (e.code === "Enter" || e.code === "NumpadEnter") {
            e.preventDefault();
          }
        }}
        form={form}
        layout={layout}
      >
        <Form.Item
          rules={[
            {
              required,
              message: label ? `${label} is required` : "",
            },
          ]}
          required={required}
          name={name}
          label={label}
        >
          <DatePicker
            format={"MM/DD/YYYY"}
            disabled={disabled}
            onChange={onChange}
            style={{
              width: "100%",
              borderRadius: "4px",
              backgroundColor: "#F4F5F8",
            }}
            className={`form-item ${className}`}
            placeholder={placeholder}
          />
        </Form.Item>
      </Form>
    </Col>
  );
}

export default InputDate;
