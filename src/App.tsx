import React, { useEffect, useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import AppLayout from "./_component/layout/AppLayout";
import ProtectedRoute from "./_component/layout/ProtectedRoute";
import useAuth from "./_hook/useAuth";
import LandingPage from "./_pages/LandingPage";
import LoginPage from "./_pages/auth/LoginPage";
import AuthPage from "./_pages/auth/AuthPage";
import LoginForm from "./_component/form/LoginForm";
import RegisterForm from "./_component/form/RegisterForm";
import ForgotForm from "./_component/form/ForgotForm";
import { useRecoilState } from "recoil";
import authAtom from "./_atom/AuthAtom";
import Homepage from "./_pages/Homepage";
import FullLoading from "./_component/common/loading/FullLoading";
import useLoading from "./_hook/useLoading";
function App() {
  const {auth} = useAuth();
  const {isLoading,loadingType,Loader}= useLoading();
  
  return (
    <div className="App">
      {!auth.firstLoading && (
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
            element={<ProtectedRoute user={auth.userInfomation} />}
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
          </Route>
          <Route path="/admin"></Route>
          <Route path="/*" element="Not found"></Route>
          {/* TODO : Not found component */}
        </Routes>
      )}
      {isLoading && Loader}
    </div>
  );
}

export default App;
