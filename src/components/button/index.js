import React from "react";
import { Fragment } from "react";
import { StyledButton } from "./style";
import Spinner from "./spinner";
import { ThemeProvider } from "styled-components";

function Button(props) {
  const {
    type = "primary",
    loading = false,
    size = "medium",
    disabled = false,
    children,
    plain = false,
  } = props;
  const theme = {
    primaryColor: "#3498db",
  };

  return (
    <ThemeProvider theme={theme}>
      <StyledButton
        type={type}
        size={size}
        disabled={disabled}
        plain={plain}
        loading={loading}
        {...props}
      >
        <Fragment>
          <Fragment>
            {loading === true && (
              <Fragment>
                <Spinner size={size} type={type} color="#FFF" />
                <div style={{ marginRight: "10px" }}></div>
              </Fragment>
            )}
            <p style={{ display: "contents" }}>{children}</p>
          </Fragment>
        </Fragment>
      </StyledButton>
    </ThemeProvider>
  );
}

export default Button;
