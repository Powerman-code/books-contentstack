import styled from "styled-components";

export const PageHeader = styled.header`
  display: flex;
  padding: 30px 0 67px;

  @media screen and (max-width: 740px) {
    padding: 20px 0;
    justify-content: space-between;
    align-items: center;
  }
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
