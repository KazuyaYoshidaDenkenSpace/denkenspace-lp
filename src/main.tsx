import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css"; // Tailwind 読み込み
import App from "./App";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
