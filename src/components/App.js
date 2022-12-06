import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Login from "./Login";
import Navbar from "./Navbar";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  function handleLogin() {
    setIsLoggedIn(true);
  }

  function handleLogout() {
    setIsLoggedIn(false);
  }

  return (
    <div>
      <Navbar onLogout={handleLogout} isLoggedIn={isLoggedIn} />
      <Switch>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/login">
          <Login onLogin={handleLogin} />
        </Route>
        <Route exact path="/">
          <Home isLoggedIn={isLoggedIn} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
