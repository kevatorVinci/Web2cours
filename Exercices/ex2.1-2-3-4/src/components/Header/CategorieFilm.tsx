import "./CategorieFilm.css"
interface GenreProps{
    genre:string;
    children:React.ReactNode;
}

const Genre=(props:GenreProps) => {
    <header className="genreHeader">{props.genre}</header>
}

export default Genre;