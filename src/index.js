import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { AppProvider } from "./context";

import App from "./components/App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <AppProvider>
    <StrictMode>
      <App />
    </StrictMode>
  </AppProvider>
);
