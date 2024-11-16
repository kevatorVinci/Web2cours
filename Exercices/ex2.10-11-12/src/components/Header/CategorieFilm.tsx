import "./CategorieFilm.css"
interface GenreProps{
    genre:string[];
    children:React.ReactNode;
}

const Genre=(props:GenreProps) => {
    return <header className="genre-list">{props.genre}   </header>
    
}

export default Genre;