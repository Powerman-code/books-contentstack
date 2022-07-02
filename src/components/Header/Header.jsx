import { useEffect, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Container from "../Container/Container";
import contentstack from "contentstack";
import { useQuery, gql } from "@apollo/client";
import { PageHeader } from "./Header.Styled";
import Navigation from "../Navigation/Navigation";

export const HEADER = gql`
  query MyQuery {
    homepage {
      Header {
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

export default function Header() {
  const { loading, error, data } = useQuery(HEADER);
  const logo = data?.homepage?.Header?.logo;
  const links = data?.homepage?.Header.navigation_menu.navigation_menu_items;
  // console.log(data);
  return (
    <Container>
      <PageHeader>
        <Navigation links={links} logo={logo} />
      </PageHeader>
    </Container>
  );
}
