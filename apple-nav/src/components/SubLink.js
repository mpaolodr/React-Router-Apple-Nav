import React from "react";
import { Link, useParams, useRouteMatch } from "react-router-dom";

const SubLink = ({ main }) => {
  const { id } = useParams();
  const { url, path } = useRouteMatch();

  const appleItem = main.find(item => item.name === `${id}`);

  return (
    <div className="subLink">
      {appleItem.value.map(link => {
        return <Link>{link}</Link>;
      })}
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
