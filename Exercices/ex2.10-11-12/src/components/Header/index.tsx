import Genre from "./CategorieFilm";
import VoirFilm from "./VoirFilm";
import NavBar from "../Nav";
import {Outlet} from "react-router-dom";


function Header(){
const title="VoirFIlm"
const genre1 = [
    "Action ",
    "Comédie " ,
    "Drame",
]
    return (
        <header>
            <VoirFilm title={title}  image="https://media.istockphoto.com/id/1429764305/fr/vectoriel/bande-de-film-vierge-isol%C3%A9e-sur-le-fond-blanc.jpg?s=1024x1024&w=is&k=20&c=is5Y6cun0NC8PxJd51p4YnUoLUpyb758Bdigh4Bqn48=">
                <Genre genre={genre1}> </Genre>
                <NavBar />
                <Outlet/>
            </VoirFilm>
        </header>
    );
}
export default Header;









