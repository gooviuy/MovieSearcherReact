import "./App.css";
import Home from "./componets/Home";
import Search from "./componets/Search";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";

function App() {
  const [movie, setMovie] = useState(null);
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search movie={setMovie} />} />
      </Routes>
    </Router>
  );
}

export default App;
