import BookCard from "../BookCard/BookCard";
import {
  GaleryWrapperStyled,
  GaleryTitleStyled,
  CardListStyled,
} from "./Gallery.Styled";

const Gallery = ({ books }) => {
  return (
    <GaleryWrapperStyled>
      <GaleryTitleStyled>Galery</GaleryTitleStyled>
      <CardListStyled>
        {books.map((book) => {
          return <BookCard book={book} key={book.uid} />;
        })}
      </CardListStyled>
    </GaleryWrapperStyled>
  );
};

export default Gallery;
