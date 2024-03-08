import styled, { css } from "styled-components";

function darkenColor(color, percent) {
  // Remove o símbolo '#' da cor
  color = color?.slice(1);

  // Converte a cor hexadecimal em valores RGB
  const r = parseInt(color?.substr(0, 2), 16);
  const g = parseInt(color?.substr(2, 2), 16);
  const b = parseInt(color?.substr(4, 2), 16);

  // Calcula os novos valores RGB aplicando o escurecimento
  const darkenedR = Math.round(r * (1 - percent / 100));
  const darkenedG = Math.round(g * (1 - percent / 100));
  const darkenedB = Math.round(b * (1 - percent / 100));

  // Converte os valores RGB de volta para a cor hexadecimal
  const darkenedColor = `#${darkenedR.toString(16).padStart(2, "0")}${darkenedG
    .toString(16)
    .padStart(2, "0")}${darkenedB.toString(16).padStart(2, "0")}`;

  return darkenedColor;
}

export const StyledButton = styled.button`
  border-radius: 0.8rem;
  border-color: #ffbb00;
  display: flex;
  align-items: center;
  font-size: 1.6rem;
  justify-content: center;
  transition: 0.3s;
  border: none;
  font-family: Poppins;

  &:hover {
    cursor: pointer;
  }

  ${(props) =>
    props.type === "primary" &&
    (props.plain === false || props.loading === true) &&
    css`
      background: ${(props) => {
        return props.theme.primaryColor;
      }};
      transition: 0.3s;
      color: #fff;
      width: max-content;

      :focus {
        box-shadow: 0 0 0 2px hsl(0, 0%, 100%), 0 0 0 4px #164c64;
      }

      &:hover {
        transition: 0.3s;

        background: ${(props) => darkenColor(props.theme.primaryColor, 30)};
      }

      &:active {
        background: #2a95c3;
        transition: 0.3s;
      }
    `};

  ${(props) =>
    props.type === "primary" &&
    props.plain === true &&
    props.loading === false &&
    css`
      width: max-content;
      height: auto;
      padding: 2px;
      border: none;
      background: transparent;
      color: #2a95c3;
      transition: 0.3s;

      :focus {
        box-shadow: 0 0 0 2px #164c64;
      }

      &:active {
        background: #237da3;
        color: #fff;
        transition: 0.3s;
      }
    `};

  ${(props) =>
    props.type === "primary" &&
    props.disabled === true &&
    css`
      width: max-content;
      background: #eeeeee;
      color: #bdbdbd;
      cursor: not-allowed;
      transition: 0.3s;

      &:hover {
        background: #eeeeee;
        color: #bdbdbd;
        cursor: not-allowed;
        transition: 0.3s;
      }
    `}

  ${(props) =>
    props.type === "primary" &&
    props.plain === true &&
    props.disabled === true &&
    css`
      width: max-content;
      height: auto;
      background: #eeeeee;
      color: #bdbdbd;
      cursor: not-allowed;
      transition: 0.3s;

      &:hover {
        background: #eeeeee;
        color: #bdbdbd;
        cursor: not-allowed;
        transition: 0.3s;
      }
    `}


  ${(props) =>
    props.type === "secondary" &&
    (props.plain === false || props.loading === true) &&
    css`
      background: #219754;
      transition: 0.3s;
      color: #fff;
      width: max-content;

      :focus {
        box-shadow: 0 0 0 2px hsl(0, 0%, 100%), 0 0 0 4px #0f4225;
      }

      &:hover {
        background: #49aa73;
        transition: 0.3s;
      }
      &:active {
        background: #219754;
        transition: 0.3s;
      }
    `};

  ${(props) =>
    props.type === "secondary" &&
    props.plain === true &&
    props.loading === false &&
    css`
      width: auto;
      height: auto;
      padding: 2px;
      border: none;
      background: transparent;
      color: #219754;
      transition: 0.3s;

      &:hover {
        text-decoration: underline #219754;
        transition: 0.3s;
      }

      :focus {
        box-shadow: 0 0 0 2px #0f4225;
      }

      &:active {
        background: #208421;
        color: #fff;
        transition: 0.3s;
      }
    `};

  ${(props) =>
    props.type === "secondary" &&
    props.disabled === true &&
    css`
      width: max-content;
      background: #eeeeee;
      color: #bdbdbd;
      cursor: not-allowed;
      transition: 0.3s;

      &:hover {
        background: #eeeeee;
        color: #bdbdbd;
        cursor: not-allowed;
        transition: 0.3s;
      }
    `}

  ${(props) =>
    props.type === "secondary" &&
    props.plain === true &&
    props.disabled === true &&
    css`
      background: #eeeeee;
      color: #bdbdbd;
      cursor: not-allowed;
      transition: 0.3s;

      &:hover {
        background: #eeeeee;
        color: #bdbdbd;
        cursor: not-allowed;
        transition: 0.3s;
      }
    `}

  ${(props) =>
    props.type === "tertiary" &&
    (props.plain === false || props.loading === true) &&
    css`
      background: #e01115;
      transition: 0.3s;
      color: #fff;
      width: max-content;

      :focus {
        box-shadow: 0 0 0 2px hsl(0, 0%, 100%), 0 0 0 4px #630809;
      }

      &:hover {
        background: #e63c3f;
        transition: 0.3s;
      }
      &:active {
        background: #c10f12;
        transition: 0.3s;
      }
    `};

  ${(props) =>
    props.type === "tertiary" &&
    props.plain === true &&
    props.loading === false &&
    css`
      width: auto;
      height: auto;
      padding: 2px;
      border: none;
      background: transparent;
      color: #e01115;
      transition: 0.3s;

      :focus {
        box-shadow: 0 0 0 2px #630809;
      }

      &:active {
        background: #c10f12;
        color: #fff;
        transition: 0.3s;
      }
    `};

  ${(props) =>
    props.type === "tertiary" &&
    props.disabled === true &&
    css`
      width: max-content;
      background: #eeeeee;
      color: #bdbdbd;
      cursor: not-allowed;
      transition: 0.3s;

      &:hover {
        background: #eeeeee;
        color: #bdbdbd;
        cursor: not-allowed;
        transition: 0.3s;
      }
    `}

  ${(props) =>
    props.type === "tertiary" &&
    props.plain === true &&
    props.disabled === true &&
    css`
      background: #eeeeee;
      color: #bdbdbd;
      cursor: not-allowed;
      transition: 0.3s;

      &:hover {
        background: #eeeeee;
        color: #bdbdbd;
        cursor: not-allowed;
        transition: 0.3s;
      }
    `}



     ${(props) =>
    props.type === "basic" &&
    (props.plain === false || props.loading === true) &&
    css`
      width: max-content;
      background: #fff;
      color: #164c64;
      transition: 0.3s;
      border: 2px solid #e0e0e0;

      :focus {
        box-shadow: 0 0 0 2px hsl(0, 0%, 100%), 0 0 0 4px #64c1ea;
      }

      &:hover {
        background: #fafafa;
        transition: 0.3s;
      }
      &:active {
        background: #f5f5f5;
        transition: 0.3s;
      }
    `};

  ${(props) =>
    props.type === "basic" &&
    props.plain === true &&
    props.loading === false &&
    css`
      width: auto;
      height: auto;
      padding: 2px;
      border: none;
      background: transparent;
      color: #164c64;

      transition: 0.3s;

      :focus {
        box-shadow: 0 0 0 2px #64c1ea;
      }

      &:active {
        background: #f5f5f5;

        color: #164c64;

        transition: 0.3s;
      }
    `};

  ${(props) =>
    props.type === "basic" &&
    props.disabled === true &&
    css`
      width: max-content;
      background: transparent;

      color: #c9cedb;
      cursor: not-allowed;
      transition: 0.3s;

      &:hover {
        cursor: not-allowed;
        transition: 0.3s;
      }
    `}

  ${(props) =>
    props.type === "basic" &&
    props.plain === true &&
    props.disabled === true &&
    css`
      background: #eeeeee;
      color: #c9cedb;

      cursor: not-allowed;
      transition: 0.3s;

      &:hover {
        background: #eeeeee;
        color: #c9cedb;

        cursor: not-allowed;
        transition: 0.3s;
      }
    `}


  ${(props) =>
    props.size === "tiny" &&
    css`
      height: 24;
      padding-left: 12px;
      padding-right: 12px;
    `}

  ${(props) =>
    props.size === "small" &&
    css`
      height: 32px;
      padding-left: 12px;
      padding-right: 12px;
    `}

  ${(props) =>
    props.size === "medium" &&
    css`
      height: 40px;
      padding-left: 16px;
      padding-right: 16px;
    `}

  ${(props) =>
    props.size === "large" &&
    css`
      height: 48px;
      padding-left: 20px;
      padding-right: 20px;
    `}
`;
