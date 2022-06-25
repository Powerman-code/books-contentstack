// import Gallery from "../../components/gallery/gallery";
// import s from "./HomePage.module.scss"
import contentstack from "contentstack";
import { useQuery, gql } from "@apollo/client";

const Stack = contentstack.Stack({
  api_key: process.env.REACT_APP_APIKEY,
  delivery_token: process.env.REACT_APP_DELIVERY_TOKEN,
  environment: process.env.REACT_APP_ENVIRONMENT,
  // region: process.env.REACT_APP_REGION,
});

// =====================================================================================

// const Query = Stack.ContentType("author").Entry("blt9796e112d8927f37");
// Query.fetch().then(
//   function success(entry) {
//     console.log(entry.get("title")); // Retrieve field value by providing a field's UID
//     console.log(entry.toJSON()); // Convert the entry result object to JSON
//   },
//   function error(err) {
//     // err object
//   }
// );

// const Query = Stack.ContentType("author").Entry("entry_uid");

// Query.fetch().then(
//   function success(entry) {
//     console.log(entry.get("title")); // Retrieve field value by providing a field's uid
//     console.log(entry.toJSON()); // Convert the entry result object to JSON
//   },
//   function error(err) {
//     // err object
//   }
// );

// =======================================================================
const Query = Stack.ContentType("book_details").Query();

Query.where("title")
  .includeSchema()
  .includeCount()
  .toJSON()
  .find()
  .then(
    function success(result) {
      console.log(result);
      console.log("AUTHOR", result[0][0].author[0].uid);
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
      author
    }
  }
`;

const HomePage = () => {
  const { loading, error, data } = useQuery(BOOKS);
  console.log(data);
  console.log(error);
  return <div>HOME PAGE</div>;
};

export default HomePage;
