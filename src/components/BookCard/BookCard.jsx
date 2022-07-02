import {
  CardStyled,
  ImageWrapperStyled,
  CardInfoStyled,
  CardItemStyled,
  CardTitleStyled,
  CardTextStyled,
} from "./BookCard.Styled";
const BookCard = ({ book }) => {
  console.log(book);
  return (
    <CardStyled>
      <ImageWrapperStyled>
        <img alt={book?.images[0].title} src={book?.images[0].url} />
      </ImageWrapperStyled>
      <CardInfoStyled>
        <CardTitleStyled>{book?.title}</CardTitleStyled>
        <CardTextStyled>{book?.authorData?.title}</CardTextStyled>
      </CardInfoStyled>
    </CardStyled>
  );
};

export default BookCard;
