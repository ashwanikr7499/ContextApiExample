import React, { useContext } from "react";
import { MovieContext } from "./MovieContext";

const Nav = ({ name, price }) => {
  const [movies, setMovies] = useContext(MovieContext);
  return (
    <div>
      <h2>Dev Ed</h2>
          <h2>List of movies {movies.length}</h2>
    </div>
  );
};
export default Nav;
