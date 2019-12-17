import React from "react";
import { Link } from "react-router-dom";
import data from "../data";

const TVComponent = () => {
  const [, , , , { TV }] = data;

  return (
    <div className="subLink">
      {TV.map(link => {
        return <Link>{link}</Link>;
      })}
    </div>
  );
};

export default TVComponent;
