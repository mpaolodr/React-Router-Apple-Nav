import React from "react";
import { Link } from "react-router-dom";

//material icons
import SearchIcon from "@material-ui/icons/Search";
import LocalMallIcon from "@material-ui/icons/LocalMall";

const NavBar = ({ data }) => {
  const mainLink = data.map(obj => Object.keys(obj));

  return (
    <nav>
      {mainLink.map(link => {
        return (
          <Link key={link} to={`/${link}/`}>
            {link}
          </Link>
        );
      })}
      <SearchIcon />
      <LocalMallIcon />
    </nav>
  );
};

export default NavBar;
