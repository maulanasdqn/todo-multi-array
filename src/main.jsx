import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "uno.css";

const root = document.getElementById("root");

createRoot(root).render(
  <StrictMode>
    <App />
  </StrictMode>
);
