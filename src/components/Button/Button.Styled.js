import styled, { css } from "styled-components";

const SCButton = styled.button`
  min-height: 44px;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #f2f2f2;
  border-radius: 8px;
  cursor: pointer;

  ${({ primary }) =>
    primary &&
    css`
      background-color: #415380;
      color: #f2f2f2;

      &:hover,
      :focus {
        background-color: #f2f2f2;
        color: #415380;
        border: 1px solid #415380;
      }
    `}
`;

export default SCButton;
