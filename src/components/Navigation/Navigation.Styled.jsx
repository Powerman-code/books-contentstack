import styled from "styled-components";

export const NavBlock = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const LogoWrapper = styled.div`
  display: flex;
  align-items: center;

  img {
    margin-right: 15px;
  }

  span {
    font-size: ${(props) => props.theme.sloganFontSize + "px"};
    font-weight: 900;
    color: ${(props) => props.theme.sloganFontColor};
    text-transform: uppercase;

    &:hover {
      color: ${(props) => props.theme.sloganFontColorHover};
    }
  }

  @media screen and (max-width: 740px) {
    width: 100%;
    margin-bottom: 20px;
    order: 1;
    justify-content: flex-start;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
`;

export const NavItemStyled = styled.li`
  a {
    display: inline-block;
    text-decoration: none;
    padding: 12px;
    font-weight: 500;
    color: #2a363b;
    font-size: 18px;

    &:hover,
    &:focus {
      color: blue;
    }
    &:active {
      color: red;
    }
  }
`;
