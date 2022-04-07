import React, { createContext, useContext } from "react";
import { useNavigate } from "react-router-dom";
import useLocalStorage from "../hooks/useLocalStorage";

const movieContext = createContext();

const MovieProvider = ({ children }) => {
  const navigate = useNavigate();
  const handleNavigate = (path, movieID) => {
    navigate(`/${path}${movieID ? "/" + movieID : ""}`);
  };
  const handleNavigateTV = (path, movieID, Episode) => {
    navigate(`/${path}/${movieID}/${Episode}`);
  };

  const Frame_Movie_Path = "https://www.2embed.ru/embed/tmdb/movie?id=";
  const Frame_Tivi_Path = "https://www.2embed.ru/embed/tmdb/tv?id=";
  const value = {
    handleNavigate,
    handleNavigateTV,
    useLocalStorage,
    Frame_Movie_Path,
    Frame_Tivi_Path,
  };
  return (
    <movieContext.Provider value={value}>{children}</movieContext.Provider>
  );
};

const useMovies = () => {
  const context = useContext(movieContext);
  if (typeof context === "undefined") {
    throw new Error("You count must be used within a Movies Provider");
  }
  return context;
};

export { useMovies, MovieProvider };
