import { NavLink, Link } from "react-router-dom";

import {
  LogoWrapper,
  NavMenu,
  NavItemStyled,
  NavBlock,
} from "./Navigation.Styled";

export default function Navigation({ logo, links }) {
  return (
    <NavBlock>
      <Link to="/">
        <LogoWrapper>
          <img alt={logo?.title} src={logo?.url} />
        </LogoWrapper>
      </Link>

      <NavMenu>
        {links?.map((link) => {
          //   console.log(link);
          return (
            <NavItemStyled key={link.page_reference.uid}>
              <NavLink to={link}>{link.label}</NavLink>
            </NavItemStyled>
          );
        })}
      </NavMenu>
    </NavBlock>
  );
}
