import React from "react";
import { Link } from "react-router-dom";
import data from "../data";

const WatchComponent = () => {
  const [, , , { Watch }] = data;

  return (
    <div className="subLink">
      {Watch.map(link => {
        return <Link>{link}</Link>;
      })}
    </div>
  );
};

export default WatchComponent;
