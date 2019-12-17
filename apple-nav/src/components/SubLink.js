import React from "react";
import { Link, Switch, Route } from "react-router-dom";

const SubLink = ({ main }) => {
  const [Mac, iPad, iPhone, Watch, TV, Music, Support] = main;

  return (
    <div className="subLink">
      <Switch>
        <Route path={`/${Mac.name}/`}>
          {Mac.value.map(link => {
            return <Link>{link}</Link>;
          })}
        </Route>
        <Route path={`/${iPad.name}/`}>
          {iPad.value.map(link => {
            return <Link>{link}</Link>;
          })}
        </Route>
        <Route path={`/${iPhone.name}/`}>
          {iPhone.value.map(link => {
            return <Link>{link}</Link>;
          })}
        </Route>
        <Route path={`/${Watch.name}/`}>
          {Watch.value.map(link => {
            return <Link>{link}</Link>;
          })}
        </Route>
        <Route path={`/${TV.name}/`}>
          {TV.value.map(link => {
            return <Link>{link}</Link>;
          })}
        </Route>
        <Route path={`/${Music.name}/`}>
          {Music.value.map(link => {
            return <Link>{link}</Link>;
          })}
        </Route>
        <Route path={`/${Support.name}/`}>
          <Link>Maybe Some form</Link>
        </Route>
      </Switch>
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
