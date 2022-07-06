import styled from "styled-components";

export const PageWrapperStyled = styled.div``;

export const TitleWrapperStyled = styled.div`
  text-align: center;
  margin-bottom: 45px;
`;

export const BookWrapperStyled = styled.div`
  display: flex;
  justify-content: center;
`;

export const BookTitleStyled = styled.h2``;

export const ImageStyled = styled.img`
  max-width: 300px;
`;

export const InfoWrapper = styled.div`
  width: 400px;
  margin-left: 50px;
`;

export const InfoWrapperItem = styled.div`
  display: flex;
  position: relative;
  justify-content: space-between;
  padding-bottom: 3px;
  margin-bottom: 13px;

  &::after {
    content: "";
    display: block;
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    border-bottom: 1px dashed black;
  }
`;
