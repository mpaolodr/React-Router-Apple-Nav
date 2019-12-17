import React from "react";
import { Link } from "react-router-dom";
import data from "../data";

const IpadComponent = () => {
  const [, { iPad }] = data;

  return (
    <div className="subLink">
      {iPad.map(link => {
        return <Link>{link}</Link>;
      })}
    </div>
  );
};

export default IpadComponent;
