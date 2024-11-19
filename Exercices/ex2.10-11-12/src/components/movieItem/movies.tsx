import { Movie } from "../../type";
import "../CSS/movieCss.css";
interface MovieListProps {
  movies: Movie[];
}

const MovieListItem = ({ movies }: MovieListProps) => {
  return (
    <div>
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>
            <h2>{movie.title}</h2>
            <p>{movie.director}</p>
            <p>{movie.duration}</p>
            <p>{movie.imageUrl}</p>
            <p>{movie.description}</p>
            <p>{movie.budget}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieListItem;
