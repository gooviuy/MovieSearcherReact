import "./App.css";
import Home from "./componets/Home";
import Search from "./componets/Search";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Movie from "./componets/Movie";

function App() {
  const [movie, setMovie] = useState(null);
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route
            exact
            path="/search"
            element={<Search setMovie={setMovie} />}
          />
        </Routes>
      </Router>
      {
        <div>
          {movie && movie.Response === "True" && <Movie movie={movie} />}
        </div>
      }
    </>
  );
}

export default App;
