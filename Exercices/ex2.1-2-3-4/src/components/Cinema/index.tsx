interface Movie {
  title:string;
  director:string;
}


interface CinemaProps {
  name:string;
  movies:Movie[];
}

const Cinema = (props: CinemaProps) => (
  <div>
    <h2>{props.name}</h2>
    <p>
      {props.movies.map((movie, index) => (
        <p key={index}>
          title - {movie.title} - Réalisateur: {movie.director}
        </p>
      ))}
    </p>
  </div>
);

export default Cinema;


  