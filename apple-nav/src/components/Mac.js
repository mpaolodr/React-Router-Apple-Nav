import React from "react";
import { Link } from "react-router-dom";
import data from "../data";

const MacComponent = () => {
  const [{ Mac }] = data;

  return (
    <div className="subLink">
      {Mac.map(link => {
        return <Link>{link}</Link>;
      })}
    </div>
  );
};

export default MacComponent;
