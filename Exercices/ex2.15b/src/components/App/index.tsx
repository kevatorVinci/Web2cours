import "./App.css";

import Footer from "../Footer/index";
import Header from "../Header/index";

import NavBar from "../Nav";
import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import { Movie, MoviesContext } from "../../type";

function App() {
  const [movies, setMovies] = useState<Movie[]>([]);

  



 
  async function getAllMovies() {
    const response = await fetch("/api/films");

    try {
      if (!response.ok) throw new Error(`fecth error: `);

      const movies = await response.json();
      return movies;

    } catch (err) {
      console.log("getFilm :: erroe ", err);
      throw err;
    }
  }

  const addMovie = async (newMovie: Movie) => {
    try {
      const options = {
        method: "POST",
        body: JSON.stringify(newMovie),
        headers: {
          "Content-Type": "application/json",
        },
      };
  
      const response = await fetch("api/films", options);
  
      if (!response.ok) {
        throw new Error(
          `fetch error: ${response.status} ${response.statusText}`
        );
      }
  
      const createdFilm = await response.json();
      console.log("Film créé :", createdFilm);
  
      
      setMovies((prevMovies) => [...prevMovies, createdFilm]);
    } catch (err) {
      console.error("Erreur lors de l'ajout du film :", err);
  
    
      try {
        const movies = await getAllMovies();
        setMovies(movies);
      } catch (refreshErr) {
        console.error("Erreur lors de la synchronisation :", refreshErr);
      }
    }
  };

  const onDelete = async (id: number) => {
    try {
      const options = {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      };
  
      const response = await fetch(`/api/films/${id}`, options);
  
      if (!response.ok) {
        throw new Error(
          `fetch error: ${response.status} ${response.statusText}`
        );
      }
  
      console.log("Film supprimé avec succès");
  
      // Mettre à jour l'état des films en supprimant le film supprimé
      setMovies((prevMovies) => prevMovies.filter((movie) => movie.id !== id));
    } catch (err) {
      console.error('Failed to delete the movie:', err);
  
      try {
        const movies = await getAllMovies();
        setMovies(movies);
      } catch (refreshErr) {
        console.error("Erreur lors de la synchronisation :", refreshErr);
      }
    }
  };
  
  
  

 const fetchFilms = async () => {
    try {
      const movies = await getAllMovies();
     setMovies(movies);
    } catch (err) {
      console.log("erreoe getFilms");
      throw err;
    }
  };

  useEffect(() => { fetchFilms()}, []);
  


  const moviesContext: MoviesContext = {
    addMovie,
    movies,
    onDelete,
    
    
    
  };

  return (
    <>
      <div>
        <Header />
        <NavBar />
        <Outlet context={moviesContext} />
        <Footer lien="ok" message="footer" />
      </div>
    </>
  );
}

export default App;
