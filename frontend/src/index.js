import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

//context
import { CurrentMembersProvider } from "./components/CurrentMembersContext";
import { SignedInUserContextProvider } from "./components/SignedInUserContext";

ReactDOM.render(
  <React.StrictMode>
    <CurrentMembersProvider>
      <SignedInUserContextProvider>
        <App />
      </SignedInUserContextProvider>
    </CurrentMembersProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
