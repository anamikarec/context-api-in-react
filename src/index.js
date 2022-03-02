import { StrictMode } from "react";
import ReactDOM from "react-dom";

import App from "./App";
import { AppContextProvider } from "./Context/AppContextProvider";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <AppContextProvider>
    <StrictMode>
      <App />
    </StrictMode>
  </AppContextProvider>,
  rootElement
);
