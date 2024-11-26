import { Movie } from "../../type";
import "../CSS/movieItemCss.css";

interface MovieListProps {
  movies: Movie[];
}

const MovieListItem = ({ movies }: MovieListProps) => {
  return (
    <div>
      <ul className="movie-list">
        {movies.map((movie) => (
          <li key={movie.id}>
            <img src={movie.imageUrl} alt={movie.title} />
            <h2>{movie.title}</h2>
            <p>{movie.director}</p>
            <p>{movie.duration}</p>
            <p>{movie.description}</p>
            <p>{movie.budget}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieListItem;
