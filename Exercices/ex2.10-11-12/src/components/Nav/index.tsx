import { useNavigate } from "react-router-dom";
import './Nav.css'

const NavBar = () => {
  const navigate = useNavigate();

  return (
    <nav>
      <button onClick={() => navigate("/")}>Home</button>
      <button onClick={() => navigate("/cinema")}> Cinema</button>
      <button onClick={() => navigate("/movie-list")}>ListeFilm</button>
    </nav>
  );
};

export default NavBar;
