import React from "react";
// import PropTypes from "prop-types";
import { Route, Routes, Navigate } from "react-router-dom";
// import Header from "../Header";
import Layout from "../Layout/Layout";
import HomePage from "../../pages/HomePage/HomePage";
import Page404 from "../../pages/Page404";

const Router = ({ routes, userAuthenticated, unauthenticatedPath }) => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="*" element={<Page404 />} />
      </Route>
    </Routes>
  );
};

export default Router;
