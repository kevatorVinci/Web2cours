import { useMatch, useOutletContext } from "react-router-dom";
import { MoviesContext } from "../../type";
import "../CSS/moviePageId.css";

const MoviePageId = () => {
  const { movies }: MoviesContext = useOutletContext();

  const match = useMatch("/movie/:id");
  const movieId = Number(match?.params.id);

  if (isNaN(movieId)) {
    return <div>Loading... error</div>;
  }
  const movie = movies.find((movie) => movie.id === movieId);

  if (!movie) {
    return <div>Movie not found</div>;
  }
  return (
    <div className="movie-container">
      <img src={movie.imageUrl} alt={movie.title} className="movie-image" />
      <h1 className="movie-title">{movie.title}</h1>
      <p className="movie-description">{movie.description}</p>
      <p className="movie-director">Director: {movie.director}</p>
      <p className="movie-duration">Duration: {movie.duration} minutes</p>
      <p className="movie-budget">Budget: ${movie.budget}</p>
    </div>
  );
};

export default MoviePageId;