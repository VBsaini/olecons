import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
//fonts
import "./assets/fonts/Circe/Circe-ExtraBold.otf";
import "./assets/fonts/Circe/Circe-Bold.otf";
import "./assets/fonts/Circe/CRC25.otf";
import "./assets/fonts/Circe/CRC35.otf";
import "./assets/fonts/Circe/CRC55.otf";

import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
