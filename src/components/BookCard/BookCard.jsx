import { Link } from "react-router-dom";
import {
  SCCard,
  SCImageWrapper,
  SCCardInfo,
  SCCardTitle,
  SCCardText,
} from "./BookCard.Styled";
import Stars from "../Stars/Stars";
const BookCard = ({
  book: { images, authorData, title, rating, uid },
  book,
}) => {
  console.log(book);
  return (
    <SCCard>
      <SCImageWrapper>
        <Link
          to={{
            pathname: `/galery/${uid}`,
          }}
        >
          <img alt={images[0].title} src={images[0].url} />
        </Link>
      </SCImageWrapper>
      <SCCardInfo>
        <Stars value={rating} />
        <Link
          to={{
            pathname: `/galery/${uid}`,
          }}
        >
          <SCCardTitle>{title}</SCCardTitle>
        </Link>
        <SCCardText>{authorData?.title}</SCCardText>
      </SCCardInfo>
    </SCCard>
  );
};

export default BookCard;
