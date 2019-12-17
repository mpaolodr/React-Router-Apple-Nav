import React from "react";
import { Link } from "react-router-dom";
import data from "../data";

const MusicComponent = () => {
  const [, , , , , { Music }] = data;

  return (
    <div className="subLink">
      {Music.map(link => {
        return <Link>{link}</Link>;
      })}
    </div>
  );
};

export default MusicComponent;
