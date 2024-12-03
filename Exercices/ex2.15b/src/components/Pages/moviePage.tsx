import MovieListItem from "../movieItem/moviesCard";
import { MoviesContext } from "../../type";
import { useOutletContext } from "react-router-dom";

const MoviePage = () => {
  const { movies }: MoviesContext = useOutletContext();
  return (
    <div>
      <MovieListItem movies={movies} />
    </div>
  );
};

export default MoviePage;
