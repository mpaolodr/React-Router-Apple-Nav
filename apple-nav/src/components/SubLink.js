import React from "react";
import { Link } from "react-router-dom";
import { useParams, Route } from "react-router-dom";

import data from "../data.js";

const mainLinks = data.map(obj => {
  return Object.keys(obj);
});
const subLinks = data.map(obj => {
  return Object.entries(obj);
});

const [
  { Mac },
  { iPad },
  { iPhone },
  { Watch },
  { TV },
  { Music },
  { Support }
] = data;

const SubLink = props => {
  const { id } = useParams();

  return (
    <div>
      <h2>{id}</h2>

      {iPhone.map(link => {
        return <Link to={`/iPhone/`}>{link}</Link>;
      })}
      {Watch.map(link => {
        return <Link to={`/Watch/`}>{link}</Link>;
      })}
      {TV.map(link => {
        return <Link to={`/TV/`}>{link}</Link>;
      })}
      {Music.map(link => {
        return <Link to={`/Music/`}>{link}</Link>;
      })}
      <Link>Support</Link>
    </div>
  );
};

export default SubLink;

// {
//   subLinks.forEach(sub => {
//     sub.map(link => {
//       return <Link to={`/${id}/`}>{link}</Link>;
//     });
//   });
// }
