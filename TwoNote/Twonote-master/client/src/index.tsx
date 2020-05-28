import "babel-polyfill";

import { normalize, setupPage } from "csstips";

import App from "./components/app";
import ErrorBoundary from "./components/error-boundary";
import React from "react";
import { cssRaw } from "typestyle";
import { fontName } from "./styles/font";
import { render } from "react-dom";

normalize();
setupPage("#root");
cssRaw(
  `@import url('https://fonts.googleapis.com/css2?family=${fontName}:ital,wght@0,400;0,700;1,400;1,700&display=swap');`
);

render(
  <ErrorBoundary>
    <App />
  </ErrorBoundary>,
  document.getElementById("root") as HTMLDivElement
);
