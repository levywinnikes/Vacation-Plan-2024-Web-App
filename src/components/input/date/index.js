import React from "react";
import { Col, DatePicker, Form, ConfigProvider } from "antd";
import ptBR from "antd/es/locale/pt_BR";
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
  function isObjectEmpty(obj) {
    return Object.keys(obj).length === 0;
  }

  //Validação para não ocorrer risco de ocorrer erro de data.clone
  if (isObjectEmpty(form.getFieldsValue())) {
    return null;
  }

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
      <ConfigProvider locale={ptBR}>
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
                message: label ? `${label} é obrigatório` : "",
              },
            ]}
            required={required}
            name={name}
            label={label}
          >
            <DatePicker
              disabled={disabled}
              onChange={onChange}
              style={{
                width: "100%",
                borderRadius: "4px",
                backgroundColor: "#F4F5F8",
              }}
              className={`form-item ${className}`}
              placeholder={placeholder}
              format="DD/MM/YYYY"
            />
          </Form.Item>
        </Form>
      </ConfigProvider>
    </Col>
  );
}

export default InputDate;
