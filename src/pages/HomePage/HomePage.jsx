// import Gallery from "../../components/gallery/gallery";
// import s from "./HomePage.module.scss"
import contentstack from "contentstack";
import { useQuery, gql } from "@apollo/client";
import Gallery from "../../components/Gallery/Gallery";

const Stack = contentstack.Stack({
  api_key: process.env.REACT_APP_APIKEY,
  delivery_token: process.env.REACT_APP_DELIVERY_TOKEN,
  environment: process.env.REACT_APP_ENVIRONMENT,
  // region: process.env.REACT_APP_REGION,
});

// =====================================================================================

const Query = Stack.ContentType("book_details").Query();

Query.where("title")
  .includeSchema()
  .includeCount()
  .toJSON()
  .find()
  .then(
    function success(result) {
      // console.log(result);
      // result is array where -
      // result[0] =&gt; entry objects
      // result[result.length-1] =&gt; entry objects count included only when .includeCount() is queried.
      // result[1] =&gt; schema of the content type is included when .includeSchema() is queried.
    },
    function error(err) {
      // err object
    }
  );

// export const BOOK_DETAILS = gql`
//   query MyQuery {
//     all_book_details {
//       items {
//         title
//         rating
//         publishing_year
//         suggested_year
//         number_of_pages
//         illustrations
//       }
//     }
//   }
// `;

export const BOOKS = gql`
  query MyQuery {
    allBooks {
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

// export const BOOK = gql`
//   query getBook($id: ID!) {
//     book(id: $id) {
//       uid
//       title
//       rating
//       illustrations
//       authorData {
//         title
//       }
//     }
//   }
// `;

const HomePage = () => {
  // const id = "blt1572880acdb5bf6b";
  //for all books
  const { loading, error, data } = useQuery(BOOKS);
  //for 1 book
  // const { loading, error, data } = useQuery(BOOK, {
  //   variables: { id },
  // });
  console.log(data);
  console.log(error);
  return <>{data && <Gallery books={data?.allBooks} />}</>;
};

export default HomePage;
