import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Container from "../Container/Container";
// import { Link, useLocation } from 'react-router-dom';
// import { matchPath } from 'react-router';

// import Navigation from "../Navigation";
// import LeftMenu from "../Navigation/NavMenu/NavMenu";
// import Social from "../Navigation/Social/Social";

export default function Footer() {
  return (
    <Container>
      <footer>
        {/* <Navigation>
          <LeftMenu />
          <Social />
        </Navigation> */}
        <p>link 1</p>
        <p>link 2</p>
        <p>link 3</p>
      </footer>
    </Container>
  );
}
