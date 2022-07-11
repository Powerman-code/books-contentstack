import BookCard from "../BookCard/BookCard";
import {
  SCGaleryWrapper,
  SCGaleryTitle,
  SCCardList,
  SCTitleWrapper,
} from "./Gallery.Styled";

const Gallery = ({ books }) => {
  return (
    <SCGaleryWrapper>
      <SCTitleWrapper>
        <SCGaleryTitle>Book Galery</SCGaleryTitle>
      </SCTitleWrapper>
      <SCCardList>
        {books.map((book) => {
          return <BookCard book={book} key={book.uid} />;
        })}
      </SCCardList>
    </SCGaleryWrapper>
  );
};

export default Gallery;
