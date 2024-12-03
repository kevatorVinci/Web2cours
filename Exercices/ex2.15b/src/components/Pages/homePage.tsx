import React from "react";
import "../CSS/homePage.css";
import MovieListHomePage from "../movieItem/moviesList";
import { MoviesContext } from "../../type";
import { useOutletContext } from "react-router-dom";

const HomePage: React.FC = () => {
    const { movies }: MoviesContext = useOutletContext();
    
  return (
    <div className="homepage">
      <main className="main-content">
        <p>
          Découvrez les derniers films à l'affiche et profitez de nos offres
          spéciales.
        </p>

        <MovieListHomePage movies={movies} />   
          </main>
    </div>
  );
};

export default HomePage;
