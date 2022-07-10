import { useNavigate, useParams } from "react-router-dom";
import { useQuery, gql } from "@apollo/client";
import { useEffect } from "react";
import {
  SCPageWrapper,
  SCBookWrapper,
  SCTitleWrapper,
  SCImage,
  SCBookTitle,
  SCInfoWrapper,
  SCInfoWrapperItem,
  SCDescriptionWrapper,
} from "./SingleBookPage.Styled";
import SCButton from "../../components/Button/Button.Styled";

export const BOOK = gql`
  query getSingleBook($id: ID!) {
    book(id: $id) {
      uid
      title
      rating
      illustrations
      authorData {
        uid
        title
        date_of_birth
        date_of_death
      }
      genre {
        title
      }
      images {
        uid
        title
        content_type
        url
      }
      locale
      number_of_pages
      publishing_house {
        title
        descriptionText
        logo {
          title
          content_type
          url
        }
      }
      publishing_year
      suggested_year
      description {
        text
      }
    }
  }
`;

const SingleBookPage = () => {
  const { id } = useParams();
  const { loading, error, data } = useQuery(BOOK, {
    variables: { id },
  });

  const navigate = useNavigate();
  const goBack = () => navigate(-1);

  if (loading) return <div>Loading...</div>;

  const {
    images,
    authorData,
    genre,
    illustrations,
    number_of_pages,
    publishing_house,
    publishing_year,
    title,
    rating,
    suggested_year,
    description,
    uid,
  } = data.book;
  console.log("DATA-SP", data);
  return (
    <>
      {data && (
        <SCPageWrapper>
          <SCButton primary onClick={goBack}>
            Go Back
          </SCButton>
          <SCTitleWrapper>
            <SCBookTitle>{title}</SCBookTitle>
          </SCTitleWrapper>

          <SCBookWrapper>
            <div>
              <SCImage src={images[0].url} alt={images[0].title} />
            </div>
            <SCInfoWrapper>
              <SCInfoWrapperItem>
                <p>Author</p>
                <p>{authorData.title}</p>
              </SCInfoWrapperItem>
              <SCInfoWrapperItem>
                <p>Genre</p>
                <p>
                  {genre.map(({ title }) => {
                    return title;
                  })}
                </p>
              </SCInfoWrapperItem>
              <SCInfoWrapperItem>
                <p>Illustrations</p>
                <p>{illustrations}</p>
              </SCInfoWrapperItem>
              <SCInfoWrapperItem>
                <p>Number of pages</p>
                <p>{number_of_pages}</p>
              </SCInfoWrapperItem>

              <SCInfoWrapperItem>
                <p>Publishing year</p>
                <p>{publishing_year}</p>
              </SCInfoWrapperItem>

              <SCInfoWrapperItem>
                <p>For age of</p>
                <p>{suggested_year}</p>
              </SCInfoWrapperItem>

              <SCInfoWrapperItem>
                <p>Publishing House</p>
                <p>{publishing_house?.title}</p>
              </SCInfoWrapperItem>
            </SCInfoWrapper>
          </SCBookWrapper>
          <SCDescriptionWrapper>
            <p>{description?.text}</p>
          </SCDescriptionWrapper>
        </SCPageWrapper>
      )}
    </>
  );
};

export default SingleBookPage;
