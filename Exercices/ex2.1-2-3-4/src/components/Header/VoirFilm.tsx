
import { ReactElement } from "react";
import Genre from "./CategorieFilm";
import "./VoirFilm.css";

interface VoirAnimeProps {
    title: string;
    image:string;
    children: ReactElement<typeof Genre>;
}

const VoirFilm = (props: VoirAnimeProps) => {
    return (
        <div className="voirFilmContainer">
            <img src={props.image} alt={props.title} />
            <h1 className="voirFilmTitle">{props.title}</h1>
            <div>{props.children}</div>
        </div>
    );
}

export default VoirFilm;