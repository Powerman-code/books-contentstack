import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { SCContainer } from "../Container/SCContainer.Styled";
import { SCSection } from "../Section/Section.Styled";

const Layout = () => {
  return (
    <>
      <Header />

      <main>
        <SCSection>
          <SCContainer bg={"rgba(255,255,255,0.95)"} paddingVertical>
            <Outlet />
          </SCContainer>
        </SCSection>
      </main>

      <Footer />
    </>
  );
};

export default Layout;
