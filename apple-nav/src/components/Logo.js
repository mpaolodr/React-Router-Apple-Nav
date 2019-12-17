import React from "react";

const Logo = ({ logo }) => {
  return (
    <figure>
      <img src={logo} alt={`Apple Logo`} />
    </figure>
  );
};

export default Logo;
