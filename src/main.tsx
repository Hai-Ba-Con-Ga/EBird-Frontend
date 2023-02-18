import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";
import { RecoilRoot } from "recoil";
import AxiosInterceptor from "./api/AxiosInterceptor";
import { ToastContainer } from "react-toastify";
import FullLoading from "./components/common/loading/FullLoading";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  // <React.StrictMode>
  <RecoilRoot>
    <Router>
      <Suspense fallback={<FullLoading />}>
        <AxiosInterceptor>
          <App />
          <ToastContainer autoClose={1500} pauseOnHover={false} />
        </AxiosInterceptor>
      </Suspense>
    </Router>
  </RecoilRoot>
  // </React.StrictMode>
);
