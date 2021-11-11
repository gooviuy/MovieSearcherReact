import React from "react";
import { NavLink } from "react-router-dom";

function Search() {
  return (
    <div>
      <ul>
        <NavLink exact activeClassName="active" to="/">
          Home
        </NavLink>
      </ul>
      <div>Lets Search for a Movie</div>
    </div>
  );
}

export default Search;
