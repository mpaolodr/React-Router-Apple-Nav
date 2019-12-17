import React from "react";
import { Link, Switch, Route, useParams } from "react-router-dom";

import LaptopIcon from "@material-ui/icons/Laptop";

const SubLink = ({ main }) => {
  const { id } = useParams();

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
