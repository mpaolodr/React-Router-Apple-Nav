import React, { useState } from "react";
import { Route, Link } from "react-router-dom";

import "./App.scss";
import logo from "./logo.svg";

//data
import mainLinks from "./data.js";

//components
import SubLink from "./components/SubLink";
import NavBar from "./components/NavBar";
import Logo from "./components/Logo";

function App() {
  const [main] = useState(mainLinks);

  return (
    <div className="App">
      <header>
        <Logo logo={logo} />
        <NavBar main={main} />
      </header>
      <Route exact path={"/:id"}>
        <SubLink main={main} />
      </Route>
    </div>
  );
}

export default App;

//Code to be refactored

{
  /* <Route path="/Mac/">
        <MacComponent />
      </Route>
      <Route path="/iPad/">
        <IpadComponent />
      </Route>
      <Route path="/iPhone/">
        <IphoneComponent />
      </Route>
      <Route path="/Watch/">
        <WatchComponent />
      </Route>
      <Route path="/TV/">
        <TVComponent />
      </Route>
      <Route path="/Music/">
        <MusicComponent />
      </Route>
      <Route path="/Support/">
        <SupportComponent />
      </Route> */
}
