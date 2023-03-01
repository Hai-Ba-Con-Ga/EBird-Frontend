import { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import { RecoilRoot } from "recoil";
import AxiosInterceptor from "./api/AxiosInterceptor";
import App from "./App";
import FullLoading from "./components/common/loading/FullLoading";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  // <React.StrictMode>
  <RecoilRoot>
    <Router>
      <Suspense fallback={<FullLoading />}>
        <AxiosInterceptor>
          <App />
        </AxiosInterceptor>
      </Suspense>
    </Router>
  </RecoilRoot>
  // </React.StrictMode>
);
