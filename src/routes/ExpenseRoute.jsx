import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "../pages/LandingPage";

const ExpenseRoute = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/auth/*" element={<AuthRoutes />} />
          <Route path="/app/*" element={<AppRoutes />} />
          <Route path="*" element={<h1>page not found</h1>} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

const AuthRoutes = () => {
  return (
    <Routes>
      <Route path="login" element={<h1>login</h1>} />;
      <Route path="register" element={<h1>register</h1>} />;
      <Route path="*" element={<h1>page not found</h1>} />;
    </Routes>
  );
};

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="dashboard" element={<h1>dashboard</h1>} />;
      <Route path="category" element={<h1>category</h1>} />;
      <Route path="setting" element={<h1>setting</h1>} />;
      <Route path="add" element={<h1>add</h1>} />;
      <Route path="*" element={<h1>page not found</h1>} />;
    </Routes>
  );
};

export default ExpenseRoute;
