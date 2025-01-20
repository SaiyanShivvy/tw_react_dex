import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./App.css";
import "./styles/tailwind.css";
import "./styles/index.css";
import App from "./App";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);