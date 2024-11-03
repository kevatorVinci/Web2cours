import { Movie } from "../../type";
import MovieItem from "../Movie";

interface CinemaProps {
  name:string;
  movies:Movie[];
}

const Cinema = ({name,movies}: CinemaProps) => (
  <div>
    <h2>{name}</h2>
    <p>
      {movies.map((movie, index) => (
        <p key={index}>
          <MovieItem  movie={movie}/>
        </p>
      ))}
    </p>
  </div>
);

export default Cinema;


  