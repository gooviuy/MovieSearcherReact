import React from "react";
import { NavLink } from "react-router-dom";

function Home() {
  return (
    <div>
      <ul>
        <NavLink exact activeClassName="active" to="/search">
          Search a Movie
        </NavLink>
      </ul>
    </div>
  );
}

export default Home;
