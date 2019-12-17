import React from "react";
import { Link } from "react-router-dom";

const Logo = ({ logo }) => {
  return (
    <Link className="logo" to="/">
      <img src={logo} alt={`Apple Logo`} />
    </Link>
  );
};

export default Logo;
