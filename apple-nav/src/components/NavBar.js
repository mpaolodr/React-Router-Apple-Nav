import React from "react";
import { NavLink } from "react-router-dom";

//material icons
import SearchIcon from "@material-ui/icons/Search";
import LocalMallIcon from "@material-ui/icons/LocalMall";

const NavBar = ({ main }) => {
  return (
    <nav>
      {main.map(obj => {
        return (
          <NavLink key={obj.name.toLowerCase()} to={`/${obj.name}/`}>
            {obj.name}
          </NavLink>
        );
      })}
      <SearchIcon />
      <LocalMallIcon />
    </nav>
  );
};

export default NavBar;
