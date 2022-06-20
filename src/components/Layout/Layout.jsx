import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Container from "../Container/Container";

const Layout = () => {
  return (
    <>
      <Header />

      <Container>
        <main>
          <Outlet />
        </main>
      </Container>

      <Footer />
    </>
  );
};

export default Layout;
