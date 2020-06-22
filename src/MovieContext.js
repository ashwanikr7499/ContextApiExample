import React, { useState, createContext } from "react";
export const MovieContext = createContext();
export const MovieProvider = (props) => {
  const [movies, setMovies] = useState([
    {
      name: "Harry Potter",
      price: "$10",
      id: 1,
    },
    {
      name: "GOT",
      price: "$10",
      id: 2,
    },
    {
      name: "Inception",
      price: "$10",
      id: 3,
    },
  ]);
  return (
    <MovieContext.Provider value={[movies, setMovies]}>
      //every thing inside this can access data
      {props.children}
    </MovieContext.Provider>
  );
};
