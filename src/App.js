import React from "react";
import "./App.css";
// import Router from "./components/Router/Router";
import { Route, Routes, Navigate } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import HomePage from "./pages/HomePage/HomePage";
import Page404 from "./pages/Page404";
import OneBookPage from "./pages/SingleBookPage/SingleBookPage";

function App() {
  // return <Router />;
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="payment" element={<OneBookPage />} />
        <Route path="about" element={<OneBookPage />} />
        <Route path="delivery" element={<OneBookPage />} />
        <Route path="blog" element={<OneBookPage />} />
        <Route path="*" element={<Page404 />} />
      </Route>
    </Routes>
  );
}

export default App;
