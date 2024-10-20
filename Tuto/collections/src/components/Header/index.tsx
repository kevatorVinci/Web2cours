import pizzaBackground from "../assets/img/pizza.jpg";
import "./Header.css";


interface HeaderProps {
    title: string;
    version:number;
  }

const Header = (props:HeaderProps): JSX.Element => {
    return (
      <div className="page" style={{ backgroundImage: `url(${pizzaBackground})` }}>
      <header>
        <h1 className="animate__animated animate__bounce">{props.title}</h1>
        <h4>Version: {props.version}</h4>
      </header>
      </div>
    );
  };

  export default  Header;

  