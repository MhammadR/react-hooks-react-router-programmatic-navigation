import React from "react";
import { NavLink, useHistory } from "react-router-dom";

const linkStyles = {
  width: "100px",
  padding: "12px",
  margin: "0 6px 6px",
  background: "blue",
  textDecoration: "none",
  color: "white",
};

function Navbar({ onLogout, isLoggedIn }) {
  const history = useHistory();

  function handleClick() {
    onLogout();
    history.push("/login");
  }

  return (
    <div>
      <NavLink
        to="/"
        /* set exact so it knows to only set activeStyle when route is deeply equal to link */
        exact
        /* add styling to Navlink */
        style={linkStyles}
        /* add prop for activeStyle */
        activeStyle={{
          background: "darkblue",
        }}
      >
        Home
      </NavLink>
      <NavLink
        to="/about"
        exact
        style={linkStyles}
        activeStyle={{
          background: "darkblue",
        }}
      >
        About
      </NavLink>
      {!isLoggedIn ? (
        <NavLink
          to="/login"
          exact
          style={linkStyles}
          activeStyle={{
            background: "darkblue",
          }}
        >
          Login
        </NavLink>
      ) : null}

      {isLoggedIn ? <button onClick={handleClick}>Logout</button> : null}
    </div>
  );
}

export default Navbar;
