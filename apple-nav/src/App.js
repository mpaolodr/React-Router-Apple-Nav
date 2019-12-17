import React from "react";
import { Route } from "react-router-dom";

import "./App.scss";

//components
import Header from "./components/Header.js";
import MacComponent from "./components/Mac.js";
import IpadComponent from "./components/Ipad.js";
import IphoneComponent from "./components/Iphone.js";
import WatchComponent from "./components/Watch.js";
import TVComponent from "./components/Tv.js";
import MusicComponent from "./components/Music.js";
import SupportComponent from "./components/Support.js";

function App() {
  return (
    <div className="App">
      <Header />

      <Route path="/Mac/">
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
      </Route>
    </div>
  );
}

export default App;
