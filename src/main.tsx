import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";
import { RecoilRoot } from "recoil";
import AxiosInterceptor from "./_api/AxiosInterceptor";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Router>
      <RecoilRoot>
        <AxiosInterceptor>
        <App />
        </AxiosInterceptor>
      </RecoilRoot>
    </Router>
  </React.StrictMode>
);
