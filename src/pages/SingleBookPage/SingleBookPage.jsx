import { useLocation, useParams } from "react-router-dom";
import { useQuery, gql } from "@apollo/client";
import { useEffect } from "react";
import {
  BookWrapperStyled,
  ImageWrapper,
  BookTitleStyled,
  InfoWrapper,
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

const SingleBookPage = ({
  // book: {
  //   images,
  //   authorData,
  //   genre,
  //   illustrations,
  //   number_of_pages,
  //   publishing_house,
  //   publishing_year,
  //   title,
  //   rating,
  //   suggested_year,
  //   uid,
  // },
  book,
}) => {
  // const { pathname } = useLocation();
  const { id } = useParams();
  //for 1 book
  const { loading, error, data } = useQuery(BOOK, {
    variables: { id },
  });

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
    uid,
  } = data.book;
  // console.log("PATH", pathname);
  console.log(data);
  return (
    <>
      {data && (
        <BookWrapperStyled>
          <div>
            <BookTitleStyled>{title}</BookTitleStyled>
          </div>
          <ImageWrapper>
            <img src={images[0].url} alt={images[0].title} />
          </ImageWrapper>
          <InfoWrapper>
            <div
              style={{
                display: "flex",
                width: "400px",
                justifyContent: "space-between",
              }}
            >
              <p>Author</p>
              <p>{authorData.title}</p>
            </div>
            <div
              style={{
                display: "flex",
                width: "400px",
                justifyContent: "space-between",
              }}
            >
              <p>Genre</p>
              <p>
                {genre.map(({ title }) => {
                  return title;
                })}
              </p>
            </div>
            <div
              style={{
                display: "flex",
                width: "400px",
                justifyContent: "space-between",
              }}
            >
              <p>Illustrations</p>
              <p>{illustrations}</p>
            </div>
            <div
              style={{
                display: "flex",
                width: "400px",
                justifyContent: "space-between",
              }}
            >
              <p>Number of pages</p>
              <p>{number_of_pages}</p>
            </div>
            {/* <div style={{ display: "flex",
            width: "400px,"
          justifyContent:  "space-between"}}>
              <p>Publishing house</p>
              <p>{publishing_house}</p>
            </div> */}
            <div
              style={{
                display: "flex",
                width: "400px",
                justifyContent: "space-between",
              }}
            >
              <p>publishing_year</p>
              <p>{publishing_year}</p>
            </div>
            {/* <div style={{ display: "flex",
            width: "400px,"
          justifyContent:  "space-between"}}>
              <p>Rating</p>
              <p>{rating}</p>
            </div> */}
            <div
              style={{
                display: "flex",
                width: "400px",
                justifyContent: "space-between",
              }}
            >
              <p>For age of</p>
              <p>{suggested_year}</p>
            </div>
          </InfoWrapper>
        </BookWrapperStyled>
      )}
    </>
  );
};

export default SingleBookPage;
