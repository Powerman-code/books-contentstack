import styled, { css } from "styled-components";

export const PageFooter = styled.footer`
  ${({ bg }) =>
    css`
      background-color: ${bg};
    `};

  /* @media screen and (max-width: 740px) {
  } */
`;
