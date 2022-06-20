import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Container from "../Container/Container";

export default function Header() {
  return (
    <Container>
      <header>
        {/* <Navigation>
          <NavMenu />
          <UserAuthMenu />
        </Navigation> */}
        <p>link 1</p>
        <p>link 2</p>
        <p>link 3</p>
      </header>
    </Container>
  );
}
