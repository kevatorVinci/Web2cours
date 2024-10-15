interface HeaderProps{
    title: string;
}

const Header = (props:HeaderProps) => {
  return  <h2>{props.title}</h2>;  
}

export default Header;