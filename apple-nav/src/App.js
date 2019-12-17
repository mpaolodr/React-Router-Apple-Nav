import React from "react";
import { Route, Switch } from "react-router-dom";

import "./App.scss";

//components
import Header from "./components/Header.js";
import SubLink from "./components/SubLink.js";
import MacComponent from "./components/Mac.js";
import IpadComponent from "./components/Ipad.js";

function App() {
  return (
    <div className="App">
      <Header />

      {/* <Route path="/:id/">
        <SubLink />
      </Route> */}
      <Route path="/Mac/">
        <MacComponent />
      </Route>
      <Route path="/iPad/">
        <IpadComponent />
      </Route>
    </div>
  );
}

export default App;

{
  /* <header>
        <figure>
          <img src={logo} alt="" />
        </figure>
        <nav>
          <a href="">Mac</a>
          <a href="">iPad</a>
          <a href="">iPhone</a>
          <a href="">Watch</a>
          <a href="">TV</a>
          <a href="">Music</a>
          <a href="">Support</a>
          <a href="">
            <SearchIcon />
          </a>
          <a href="">
            <LocalMallIcon />
          </a>
        </nav>
      </header> */
}
