import styled, { css } from "styled-components";

export const SCNavBlock = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const SCLogoWrapper = styled.div`
  display: flex;
  align-items: center;

  img {
    width: 100px;
    height: 100px;
  }

  /* @media screen and (max-width: 740px) {

  } */
`;

export const SCNavMenu = styled.ul`
  display: flex;
  align-items: center;
`;

export const SCNavItemStyled = styled.li`
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
