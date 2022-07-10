import styled from "styled-components";

export const SCPageWrapper = styled.div``;

export const SCTitleWrapper = styled.div`
  text-align: center;
  margin-bottom: 45px;
`;

export const SCBookWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const SCBookTitle = styled.h2``;

export const SCImage = styled.img`
  max-width: 300px;
`;

export const SCInfoWrapper = styled.div`
  width: 400px;
  margin-left: 50px;
`;

export const SCInfoWrapperItem = styled.div`
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

export const SCDescriptionWrapper = styled.div`
  margin: 30px auto;
  max-width: 750px;
`;
