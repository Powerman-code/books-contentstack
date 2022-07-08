import { useLocation, useParams } from "react-router-dom";
import { useQuery, gql } from "@apollo/client";
import { useEffect } from "react";
import {
  PageWrapperStyled,
  BookWrapperStyled,
  TitleWrapperStyled,
  ImageStyled,
  BookTitleStyled,
  InfoWrapper,
  InfoWrapperItem,
} from "./SingleBookPage.Styled";

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
    }
  }
`;

const SingleBookPage = () => {
  const { id } = useParams();
  const { loading, error, data } = useQuery(BOOK, {
    variables: { id },
  });
  const noInfo = "No information";

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
  console.log(data);
  return (
    <>
      {data && (
        <PageWrapperStyled>
          <TitleWrapperStyled>
            <BookTitleStyled>{title}</BookTitleStyled>
          </TitleWrapperStyled>

          <BookWrapperStyled>
            <div>
              <ImageStyled src={images[0].url} alt={images[0].title} />
            </div>
            <InfoWrapper>
              <InfoWrapperItem>
                <p>Author</p>
                <p>{authorData.title}</p>
              </InfoWrapperItem>
              <InfoWrapperItem>
                <p>Genre</p>
                <p>
                  {genre.map(({ title }) => {
                    return title;
                  })}
                </p>
              </InfoWrapperItem>
              <InfoWrapperItem>
                <p>Illustrations</p>
                <p>{illustrations}</p>
              </InfoWrapperItem>
              <InfoWrapperItem>
                <p>Number of pages</p>
                <p>{number_of_pages}</p>
              </InfoWrapperItem>

              <InfoWrapperItem>
                <p>Publishing year</p>
                <p>{publishing_year}</p>
              </InfoWrapperItem>

              <InfoWrapperItem>
                <p>For age of</p>
                <p>{suggested_year}</p>
              </InfoWrapperItem>

              <InfoWrapperItem>
                <p>{description?.text}</p>
              </InfoWrapperItem>
            </InfoWrapper>
          </BookWrapperStyled>
        </PageWrapperStyled>
      )}
    </>
  );
};

export default SingleBookPage;
