import Genre from "./CategorieFilm";
import VoirFilm from "./VoirFilm";


function Header(){
const title="VoirFIlm"
const genre1 = [
    {genre: "Action" },
    {genre: "Comédie"},
    {genre: "Drame"},
]

    return (
        <header>
            import Genre from "./CategorieFilm";
import VoirFilm from "./VoirFilm";

function Header() {
    const title = "VoirFilm";
    const genre1 = [
        { genre: "Action" },
        { genre: "Comédie" },
        { genre: "Drame" },
    ];

    return (
        <header>
            <VoirFilm title={title}>
                <Genre genre={genre1} />
            </VoirFilm>
        </header>
    );
}

export default Header;


        </header>
    );
}











