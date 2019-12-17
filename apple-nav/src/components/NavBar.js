import React from "react";
import { Link } from "react-router-dom";

//component
import SubLink from "./SubLink.js";

//material icons
import SearchIcon from "@material-ui/icons/Search";
import LocalMallIcon from "@material-ui/icons/LocalMall";

const NavBar = ({ data }) => {
  const mainLink = data.map(obj => Object.keys(obj));

  return (
    <nav>
      {mainLink.map(link => {
        return <Link to={`/${link}/`}>{link}</Link>;
      })}
    </nav>
  );
};

export default NavBar;
