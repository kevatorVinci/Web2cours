import { useEffect, useState } from "react";
import './ramdomDog.css';



const RamDog = () => {
  const [dog, setDog] = useState<string | undefined>(undefined);

  useEffect(() => {
    fetch('https://dog.ceo/api/breeds/image/random')
      .then((response) => response.json())
      .then((data) => {
        setDog(data.message);
      });
  }, []);

  if (!dog) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <img src={dog} alt="dog" />
    </div>
  );
};

export default RamDog;