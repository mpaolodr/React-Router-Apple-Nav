import React from "react";
import { Link } from "react-router-dom";
import data from "../data";

const IphoneComponent = () => {
  const [, , { iPhone }] = data;

  return (
    <div className="subLink">
      {iPhone.map(link => {
        return <Link>{link}</Link>;
      })}
    </div>
  );
};

export default IphoneComponent;
