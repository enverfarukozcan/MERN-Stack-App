import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import FormScreen from './FormScreen'
import 'bootstrap/dist/css/bootstrap.min.css';

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <FormScreen />
  </StrictMode>
);