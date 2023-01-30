import React, { useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import AppLayout from "./_component/layout/AppLayout";
import ProtectedRoute from "./_component/layout/ProtectedRoute";
import useAuth from "./_hook/useAuth";
import LandingPage from "./_pages/LandingPage";
import LoginPage from "./_pages/auth/LoginPage";

function App() {
  const { user } = useAuth();
  return (
    <div className="App">
      <Routes>
        <Route path="/">
          <Route path="" element={<LandingPage />}></Route>
          <Route path="login" element={<LoginPage />}></Route>
          <Route path="/signup" element=""></Route>
          <Route path="/forgot" element=""></Route>
        </Route>
        <Route path="/app" element={<ProtectedRoute user={user} />}>
          <Route
            path=""
            element={
              <AppLayout>
                <h1>Dashboard</h1>
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
    </div>
  );
}

export default App;
