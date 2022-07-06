import styled, { css } from "styled-components";

export const NavBlock = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const LogoWrapper = styled.div`
  display: flex;
  align-items: center;

  img {
    width: 100px;
    height: 100px;
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
    font-size: 18px;
    ${({ color }) => css`
      color: ${color};
    `}

    &:hover,
    &:focus {
      color: blue;
    }
    &:active {
      color: red;
    }
  }
`;
