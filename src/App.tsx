import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import LoginPage from "@/pages/loginPage";
import SignupPage from "@/pages/signupPage";
import MainPage from "@/pages/mainPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/auth/*" element={<AuthRouter />} />
    </Routes>
  );
}

function AuthRouter() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/auth/login" replace />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />
    </Routes>
  );
}

export default App;
