import { Col, Form, Input, Row } from "antd";
import React, { useEffect } from "react";
import { Fragment } from "react";
import { useState } from "react";

function InputText({
  id = null,
  ref = null,
  field,
  noForm = false,
  fieldKey = null,
  autoFocus = false,
  defaultValue,
  onClick = (e) => {},
  information = null,
  style,
  onPressEnter = () => {},
  initialValue = "",
  form,
  onChange = (e) => {
    e.preventDefault();
  },
  name = null,
  label = null,
  placeholder = label,
  required = false,
  type = "text",
  disabled = false,
  className = "",
  xxl = 6,
  xl = 6,
  lg = 12,
  md = 24,
  sm = 24,
  xs = 24,
  height = null,
  layout = "horizontal",
  maxLength = null,
  focusShortcut = null, // prop para o atalho de focus
}) {
  function keyPressed(event) {
    if (event.keyCode === 13 || event.which === 13) {
      onPressEnter();
    }
  }

  // Estado para manter o controle das teclas pressionadas
  const [pressedKeys, setPressedKeys] = useState({});

  // Função para lidar com o atalho de foco
  function handleFocusShortcut(event) {
    if (focusShortcut) {
      if (event.ctrlKey && event.code === focusShortcut) {
        const inputElement = document.getElementById(name);

        inputElement && inputElement.focus();
      }
    }
  }

  // Atualizar o estado quando a tecla for solta
  function handleKeyUp(event) {
    setPressedKeys((prevState) => ({
      ...prevState,
      [event?.key?.toLowerCase()]: false,
    }));
  }

  useEffect(() => {
    window.addEventListener("keydown", handleFocusShortcut);
    window.addEventListener("keyup", handleKeyUp);
    return () => {
      window.removeEventListener("keydown", handleFocusShortcut);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, [focusShortcut]);

  function Information() {
    return (
      <Row
        style={{
          alignItems: "center",
          marginTop: "-8px",
          marginLeft: "5px",
        }}
      >
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8.00065 14.6673C4.31865 14.6673 1.33398 11.6827 1.33398 8.00065C1.33398 4.31865 4.31865 1.33398 8.00065 1.33398C11.6827 1.33398 14.6673 4.31865 14.6673 8.00065C14.6673 11.6827 11.6827 14.6673 8.00065 14.6673ZM8.00065 13.334C9.41514 13.334 10.7717 12.7721 11.7719 11.7719C12.7721 10.7717 13.334 9.41514 13.334 8.00065C13.334 6.58616 12.7721 5.22961 11.7719 4.22941C10.7717 3.22922 9.41514 2.66732 8.00065 2.66732C6.58616 2.66732 5.22961 3.22922 4.22941 4.22941C3.22922 5.22961 2.66732 6.58616 2.66732 8.00065C2.66732 9.41514 3.22922 10.7717 4.22941 11.7719C5.22961 12.7721 6.58616 13.334 8.00065 13.334ZM7.33398 4.66732H8.66732V6.00065H7.33398V4.66732ZM7.33398 7.33398H8.66732V11.334H7.33398V7.33398Z"
            fill="#838998"
          />
        </svg>
        <div
          style={{
            marginLeft: "8px",
            fontFamily: "Inter",
            fontSize: "11px",
            color: "#838998",
          }}
        >
          {information}
        </div>
      </Row>
    );
  }

  return (
    <Col
      onClick={onClick}
      style={style}
      className={`input-home`}
      xxl={xxl}
      xl={xl}
      lg={lg}
      md={md}
      sm={sm}
      xs={xs}
    >
      {noForm === false ? (
        <Form
          defaultValue={defaultValue}
          onKeyPress={(e) => {
            if (e.code === "Enter" || e.code === "NumpadEnter") {
              e.preventDefault();
            }
          }}
          form={form}
          layout={layout}
        >
          <Form.Item
            {...field}
            fieldKey={fieldKey}
            initialValue={initialValue}
            onChange={onChange}
            required={required}
            name={name}
            label={label}
            rules={[
              {
                required,
                message: label ? `${label} is required` : "",
              },
            ]}
          >
            <Input
              id={id}
              ref={ref}
              autoFocus={autoFocus}
              style={{
                height: height ? height : null,
              }}
              onKeyPress={keyPressed}
              maxLength={maxLength}
              className={className}
              disabled={disabled}
              type={type}
              placeholder={placeholder}
            />
          </Form.Item>

          {information !== null && <Information />}
        </Form>
      ) : (
        <Fragment>
          <Form.Item
            {...field}
            fieldKey={fieldKey}
            initialValue={initialValue}
            onChange={onChange}
            required={required}
            name={name}
            label={label}
            rules={[
              {
                required,
                message: label ? `${label} is required` : "",
              },
            ]}
          >
            <Input
              id={id}
              ref={ref}
              autoFocus={autoFocus}
              style={{
                height: height ? height : null,
              }}
              onKeyPress={keyPressed}
              maxLength={maxLength}
              className={className}
              disabled={disabled}
              type={type}
              placeholder={placeholder}
            />
          </Form.Item>

          {information !== null && <Information />}
        </Fragment>
      )}
    </Col>
  );
}

export default InputText;
