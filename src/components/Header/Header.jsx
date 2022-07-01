import { useEffect, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Container from "../Container/Container";
import contentstack from "contentstack";
import { useQuery, gql } from "@apollo/client";
import { PageHeader, LogoWrapper, NavMenu } from "./Header.Styled";

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
  const links = data?.homepage.Header.navigation_menu.navigation_menu_items;
  // const links = navigation_menu?.navigation_menu_items;
  console.log(data);
  // console.log(links);
  return (
    <Container>
      <PageHeader>
        <LogoWrapper>
          <img alt={logo?.title} src={logo?.url} />
        </LogoWrapper>
        <NavMenu>
          {links?.map((link) => {
            console.log(link);
            return (
              <li key={link.page_reference.uid}>
                <NavLink to={link}>{link.label}</NavLink>
              </li>
            );
          })}
        </NavMenu>
      </PageHeader>
    </Container>
  );
}
