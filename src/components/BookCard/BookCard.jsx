import { Link } from "react-router-dom";
import {
  CardStyled,
  ImageWrapperStyled,
  CardInfoStyled,
  CardItemStyled,
  CardTitleStyled,
  CardTextStyled,
} from "./BookCard.Styled";
import Stars from "../Stars/Stars";
const BookCard = ({
  book: { images, authorData, title, rating, uid },
  book,
}) => {
  console.log(book);
  return (
    <CardStyled>
      <ImageWrapperStyled>
        <Link
          to={{
            pathname: `/galery/${uid}`,
          }}
        >
          <img alt={images[0].title} src={images[0].url} />
        </Link>
      </ImageWrapperStyled>
      <CardInfoStyled>
        <Stars value={rating} />
        <Link
          to={{
            pathname: `/galery/${uid}`,
          }}
        >
          <CardTitleStyled>{title}</CardTitleStyled>
        </Link>
        <CardTextStyled>{authorData?.title}</CardTextStyled>
      </CardInfoStyled>
    </CardStyled>
  );
};

export default BookCard;
