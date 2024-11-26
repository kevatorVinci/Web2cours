import { Movie } from "../../type";
import "../CSS/movieItemCss.css";
import { Link } from "react-router-dom";

interface MovieListProps {
  movies: Movie[];
}

const MovieListHomePage = ({ movies }: MovieListProps) => {
  return (
    <div>
      <ul className="movie-list">
        {movies.map((movie) => (
          <li key={movie.id}>
            <Link to={`/movie/${movie.id}`}>{movie.title}</Link>
            
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieListHomePage;
