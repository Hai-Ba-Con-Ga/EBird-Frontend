import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";
import { RecoilRoot } from "recoil";
import AxiosInterceptor from "./api/AxiosInterceptor";
import { ToastContainer } from "react-toastify";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  // <React.StrictMode>
      <RecoilRoot>
    <Router>
        <AxiosInterceptor>
        <App />
        <ToastContainer />
        </AxiosInterceptor>
    </Router>
      </RecoilRoot>

  // </React.StrictMode>
);
