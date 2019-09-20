import React from 'react';

import {Route, Link} from "react-router-dom";
import Login from "./components/Login";
import PrivateRoute from "./components/PrivateRoute";
import BubblePage from "./components/BubblePage"


function App() {
  return (
    <div className="App">
      <Link to ="/login">Login</Link>
      <Link to ="/bubbles">Bubbles</Link>
      <Route path="/login" component={Login}/>
      <PrivateRoute path="/bubbles" component={BubblePage} />
    </div>
  );
}

export default App;

