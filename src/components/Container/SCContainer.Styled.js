import styled, { css } from "styled-components";

export const SCContainer = styled.div`
  max-width: 1370px;
  margin: 0 auto;
  padding: 0 15px;

  ${({ bg }) =>
    css`
      background-color: ${bg};
    `};

  ${({ topRadius }) =>
    css`
      border-top-left-radius: ${topRadius + "px"};
      border-top-right-radius: ${topRadius + "px"};
    `};

  ${({ bottomRadius }) =>
    css`
      border-bottom-left-radius: ${bottomRadius + "px"};
      border-bottom-right-radius: ${bottomRadius + "px"};
    `};

  ${({ paddingVertical }) =>
    css`
      padding-top: 20px;
      padding-bottom: 20px;
    `};
`;
