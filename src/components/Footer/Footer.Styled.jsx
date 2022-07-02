import styled from "styled-components";

export const PageFooter = styled.footer`
  display: flex;
  padding: 30px 0 67px;

  @media screen and (max-width: 740px) {
    padding: 20px 0;
    justify-content: space-between;
    align-items: center;
  }
`;
