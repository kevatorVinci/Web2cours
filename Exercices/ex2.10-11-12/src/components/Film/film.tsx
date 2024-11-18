import { Film } from "../../type";
import "./FilmCss.css";

interface FilmProps {
  films: Film[];
}

const FilmReturn = ({ films }: FilmProps) => {
  return (
    <div className="film-container">
      {films.map((film) => (
        <div className="film-card" key={film.id}>
          <img className="film-poster" src={film.image} alt={film.title} />

          <div className="film-info">
            <h2 className="film-title">{film.title}</h2>
            <p className="film-director">Directed by: {film.director}</p>
            <p className="film-description">{film.description}</p>
            <p className="film-description">{film.budget}</p>
          
          </div>
        </div>
      ))}
    </div>
  );
};

export default FilmReturn;
