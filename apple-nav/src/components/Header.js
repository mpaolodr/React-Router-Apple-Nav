import React from "react";
import { Link, Route, Switch } from "react-router-dom";

//logo
import logo from "../logo.svg";

//Components
import Logo from "./Logo.js";
import NavBar from "./NavBar.js";
import SubLink from "./SubLink.js";

//mainLinks
import data from "../data.js";

const Header = () => {
  return (
    <header>
      <Link to="/">
        <Logo logo={logo} />
      </Link>
      <NavBar data={data} />
    </header>
  );
};

export default Header;
