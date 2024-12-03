import { ReactNode } from "react";

import "./VoirFilm.css";

interface VoirAnimeProps {
  title: string;
  image: string;
  children: ReactNode;
}

const VoirFilm = (props: VoirAnimeProps) => {
  return (
    <div className="voirFilmContainer">
      <img src={props.image} alt={props.title} />
      <h1 className="voirFilmTitle">{props.title}</h1>
      <div>{props.children}</div>
    </div>
  );
};

export default VoirFilm;
