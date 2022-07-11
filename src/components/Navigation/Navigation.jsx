import { NavLink, Link } from "react-router-dom";

import {
  SCLogoWrapper,
  SCNavMenu,
  SCNavItemStyled,
  SCNavBlock,
} from "./Navigation.Styled";

export default function Navigation({ logo, links }) {
  return (
    <SCNavBlock>
      <Link to="/">
        <SCLogoWrapper>
          <img alt={logo?.title} src={logo?.url} />
        </SCLogoWrapper>
      </Link>

      <SCNavMenu>
        {links?.map((link) => {
          return (
            <SCNavItemStyled key={link.page_reference.uid} color={"#f2f2f2"}>
              <NavLink to={link}>{link.label}</NavLink>
            </SCNavItemStyled>
          );
        })}
      </SCNavMenu>
    </SCNavBlock>
  );
}
