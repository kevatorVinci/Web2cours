import { useState } from "react";
import { Movie } from "../../type";

interface MoviesProps{
    movie:Movie;

}
  
const colors = ["white","red", "green", "blue", "yellow", "purple"];
 
  
  const CinemaItem = ({movie}:MoviesProps) => {
    const [descriptionVisible,setShowMessage] = useState(false);
    const [colorIndex, setColorIndex] = useState(0);


    const handleColorChange = () => {
      setColorIndex((prevIndex) => (prevIndex + 1) % colors.length);
    };

    const handleShow = () => {
       
        
      setShowMessage(!descriptionVisible);
    }
   
    const currentColor = colors[colorIndex];
    const nextColor = colors[(colorIndex + 1) % colors.length];
  
    
    return (
        <div style={{background:currentColor }} >
           <h2 onClick={handleShow}>{movie.title}</h2>
           <h3>{movie.director}</h3>
           <p >{descriptionVisible && movie.description}</p>
           <button onClick={handleColorChange} style={{background:nextColor}}>{nextColor}</button>
        </div>
    );
  }    

  export default CinemaItem;
  