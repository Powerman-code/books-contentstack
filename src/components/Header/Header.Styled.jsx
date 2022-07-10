import styled, { css } from "styled-components";

export const PageHeader = styled.header`
  ${({ bg }) =>
    css`
      background-color: ${bg};
    `};
`;
