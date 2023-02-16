import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import "react-toastify/scss/main.scss";
import { useRecoilState } from "recoil";
import "./App.css";
import React from "react";
import AuthApi from "./components/auth/auth.api";
import authAtom from "./components/auth/AuthAtom";
import useLoading from "./components/useLoading";
import AuthPage from "./page/auth/AuthPage";
import Homepage from "./page/app/Homepage";
import LandingPage from "./page/app/LandingPage";
import LoginForm from "./components/auth/LoginForm";
import RegisterForm from "./components/auth/RegisterForm";
import ForgotForm from "./components/auth/ForgotForm";
import ProtectedRoute from "./components/layout/ProtectedRoute";
import AppLayout from "./components/layout/AppLayout";
import useModal from "./components/common/modal/useModal";
import CommonModal from "./components/common/modal/CommonModal";
import Lobby from "./page/app/Lobby";
import MatchPage from "./page/app/MatchPage";

import GroupPage from "./page/app/GroupPage";

function App() {
  // const { auth } = useAuth(true);
  const { isLoading, loadingType, Loader } = useLoading();
  const { isModalShown, modalType, ModalComponent } = useModal();
  const [auth, setAuth] = useRecoilState(authAtom);
  const { closeLoading } = useLoading();
  useEffect(() => {
    AuthApi.getMe()
      .then((response) =>
        setAuth({
          userInfomation: response.data,
          firstLoading: false,
          isAuthenticated: true,
        })
      )
      .catch((err) => {
        setAuth({
          userInfomation: null,
          firstLoading: false,
          isAuthenticated: false,
        });
      })
      .finally(() => closeLoading());
  }, []);
  return (
    <div className="App" style={{ position: "relative" }}>
      {/* {!auth.firstLoading && ( */}
      <Routes>
        <Route path="/">
          <Route path="" element={<LandingPage />}></Route>
          <Route
            path="login"
            element={
              <AuthPage banner="https://i.pinimg.com/originals/3d/07/ef/3d07ef4db7ce8de5d07d6afe031c908a.jpg">
                <LoginForm />
              </AuthPage>
            }
          ></Route>
          <Route
            path="signup"
            element={
              <AuthPage banner="https://webneel.com/daily/sites/default/files/images/daily/07-2015/1-bird-painting-by-monica-lee.jpg">
                <RegisterForm />
              </AuthPage>
            }
          ></Route>
          <Route
            path="forgot"
            element={
              <AuthPage banner="https://images.unsplash.com/photo-1579273166629-ef19c29b11fb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmlyZCUyMGFydHxlbnwwfHwwfHw%3D&w=1000&q=80">
                <ForgotForm />
              </AuthPage>
            }
          ></Route>
        </Route>
        <Route
          path="/app"
          element={<ProtectedRoute isAuthenticated={auth.isAuthenticated} />}
        >
          <Route
            path=""
            element={
              <AppLayout>
                <Homepage />
              </AppLayout>
            }
          ></Route>
          <Route
            path="profile"
            element={
              <AppLayout>
                <h1>Profile</h1>
              </AppLayout>
            }
          ></Route>
          <Route
            path="group"
            element={
              <AppLayout>
                <GroupPage></GroupPage>
              </AppLayout>
            }
          ></Route>
          <Route
            path="ranking"
            element={
              <AppLayout>
                <h1>Ranking</h1>
              </AppLayout>
            }
          ></Route>
          <Route
            path="lobby"
            element={
              <AppLayout>
                <Lobby />
              </AppLayout>
            }
          ></Route>
          <Route
            path="match"
            element={
              <AppLayout>
                <MatchPage />
              </AppLayout>
            }
          />
        </Route>
        <Route path="/admin"></Route>
        <Route path="/*" element="Not found"></Route>
        {/* TODO : Not found component */}
      </Routes>
      {/* )} */}
      {isLoading && Loader}
      {isModalShown && modalType == "common" && <CommonModal />}
    </div>
  );
}

export default App;
