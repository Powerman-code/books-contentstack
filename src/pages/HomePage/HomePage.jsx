// import Gallery from "../../components/gallery/gallery";
// import s from "./HomePage.module.scss"
import contentstack from "contentstack";

// const Stack = Contentstack.Stack(
//   "<stack_api_key>",
//   "<stack_delivery_token>",
//   "<environment_name>"
// );

const Stack = contentstack.Stack({
  api_key: process.env.development.local.REACT_APP_APIKEY,
  delivery_token: process.env.development.local.REACT_APP_DELIVERY_TOKEN,
  environment: process.env.development.local.REACT_APP_ENVIRONMENT,
  region: process.env.development.local.REACT_APP_REGION,
});

const HomePage = () => {
  return <div>HOME PAGE</div>;
};

export default HomePage;
