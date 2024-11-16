import { Movie } from "../../type";
import MovieItem from "../Movie";
import './cinema.css';

interface CinemaProps {
  name: string;
  movies: Movie[];
}

const Cinema = ({ name, movies }: CinemaProps) => (
  <div className="cinema">
    <h2>{name}</h2>
    <div>
      {movies.map((movie, index) => (
        <div key={index} className="movie-item">
          <MovieItem movie={movie} />
        </div>
      ))}
    </div>
  </div>
);

export default Cinema;