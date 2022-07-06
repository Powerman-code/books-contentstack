import { useEffect, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { SCContainer } from "../Container/SCContainer.Styled";
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
    <PageHeader>
      <SCContainer bg={"#415380"} topRadius={10}>
        <Navigation links={links} logo={logo} />
      </SCContainer>
    </PageHeader>
  );
}
