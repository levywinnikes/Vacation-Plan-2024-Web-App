import React from "react";
import ReactDOM from "react-dom";
import Routes from "./routes";
const rootElement = document.getElementById("root");

const renderApp = (Component) => {
  ReactDOM.render(<Component />, rootElement);
};

renderApp(Routes);
