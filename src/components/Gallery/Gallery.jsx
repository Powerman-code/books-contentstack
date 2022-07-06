import BookCard from "../BookCard/BookCard";
import {
  GaleryWrapperStyled,
  GaleryTitleStyled,
  CardListStyled,
  TitleWrapperStyled,
} from "./Gallery.Styled";

const Gallery = ({ books }) => {
  return (
    <GaleryWrapperStyled>
      <TitleWrapperStyled>
        <GaleryTitleStyled>Galery</GaleryTitleStyled>
      </TitleWrapperStyled>
      <CardListStyled>
        {books.map((book) => {
          return <BookCard book={book} key={book.uid} />;
        })}
      </CardListStyled>
    </GaleryWrapperStyled>
  );
};

export default Gallery;
