import { useEffect, useState } from "react";
import './ramdomDog.css';



interface RamDogProps {

  onMouseEnter: () => void;

  onMouseLeave: () => void;

}



const RamDog: React.FC<RamDogProps> = ({ onMouseEnter, onMouseLeave }) => {
  const [dog, setDog] = useState<string | undefined>(undefined);

  
  useEffect(() => {
    const fetchDog = async () => {
      try {
        const response = await fetch("https://dog.ceo/api/breeds/image/random");
        
        if (!response.ok)
          throw new Error(`fetch error : ${response.status} :  ${response.statusText}`);
  
        const dogs = await response.json();
        setDog(dogs.message);
  
      } catch (err) {
        console.error("Dog erreur:", err);
      }
    };

fetchDog();
  },[]);

  if (!dog) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <img src={dog} alt="dog"  onMouseEnter={onMouseEnter}  onMouseLeave={onMouseLeave}/>
    </div>
  );
};

export default RamDog;