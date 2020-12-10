import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { render } from "react-dom";

import App from "src/components/App";

const rootReactElement = (
  <Router>
    <App />
  </Router>
);

const target = document.getElementById("root");

render(rootReactElement, target);
