import React, { useState } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";

function Search({ setMovie }) {
  const [nombrePelicula, setNombrePelicula] = useState("");

  const onChangeHandler = (e) => {
    setNombrePelicula(e.target.value);
    console.log(nombrePelicula);
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    const result = await axios.get(
      `https://private.omdbapi.com/?plot=full&apikey=bef9c583&t=${nombrePelicula}`
    );

    setMovie(result.data);
  };

  return (
    <div>
      <ul>
        <NavLink exact activeClassName="active" to="/">
          Home
        </NavLink>
      </ul>
      <div id="search" className="box">
        <h2>Pelicula</h2>
        <form onSubmit={submitHandler}>
          <input value={nombrePelicula} onChange={onChangeHandler} />
          <button className="btn btn-success" types="submit">
            Buscar Pelicula
          </button>
        </form>
      </div>
    </div>
  );
}

export default Search;
