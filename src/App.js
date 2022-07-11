import React from "react";
import "./App.css";
import { Route, Routes, Navigate } from "react-router-dom";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Layout from "./components/Layout/Layout";
import HomePage from "./pages/HomePage/HomePage";
import Page404 from "./pages/Page404";
import SingleBookPage from "./pages/SingleBookPage/SingleBookPage";

function App() {
  // return <Router />;
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/galery/:id" element={<SingleBookPage />} />
        <Route path="payment" element={<SingleBookPage />} />
        <Route path="about" element={<SingleBookPage />} />
        <Route path="delivery" element={<SingleBookPage />} />
        <Route path="blog" element={<SingleBookPage />} />
        <Route path="*" element={<Page404 />} />
      </Route>
    </Routes>
  );
}

export default App;
