import styled, { css } from "styled-components";

export const PageHeader = styled.header`
  ${({ bg }) =>
    css`
      background-color: ${bg};
    `};

  /* @media screen and (max-width: 740px) {
    padding: 20px 0;
    justify-content: space-between;
    align-items: center;
  } */
`;
