import { Movie } from "../../type";
import CinemaItem from "../CinemaItem";
import '../CSS/cinemaPage.css';

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
          <CinemaItem movie={movie} />
        </div>
      ))}
    </div>
  </div>
);

export default Cinema;