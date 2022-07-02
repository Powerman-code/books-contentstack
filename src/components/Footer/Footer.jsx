import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Container from "../Container/Container";
import { useQuery, gql } from "@apollo/client";
import { PageFooter } from "./Footer.Styled";
import Navigation from "../Navigation/Navigation";

export const FOOTER = gql`
  query MyQuery {
    homepage {
      Footer {
        logo {
          title
          url
        }
        navigation_menu {
          title
          navigation_menu_items {
            label
            page_reference {
              uid
              title
            }
          }
        }
      }
    }
  }
`;

export default function Footer() {
  const { loading, error, data } = useQuery(FOOTER);
  const logo = data?.homepage?.Footer?.logo;
  const links = data?.homepage?.Footer.navigation_menu.navigation_menu_items;
  console.log(data);
  return (
    <Container>
      <PageFooter>
        <Navigation links={links} logo={logo} />
      </PageFooter>
    </Container>
  );
}
