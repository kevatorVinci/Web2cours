import  { useEffect, useState } from 'react';
import RamDog from '../ComponentsRamdomDog/ramdomDog';
import './App.css';

function App() {
  const [key, setKey] = useState(0);
  const [isMouseOver, setIsMouseOver] = useState(false);


 

  useEffect(() => {
    if (!isMouseOver) {
      const timer = setInterval(() => { setKey(prevKey => prevKey + 1); }, 5000);
      return () => clearInterval(timer);
    }
  }, [isMouseOver]);

const handleMouseEnter = () => {
  setIsMouseOver(true);
};

const handleMouseLeave = () => {
  setIsMouseOver(false);
};

  return (
    <>
     
     <RamDog key={`${key}-1`} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} />
      <RamDog key={`${key}-2`} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} />
      <RamDog key={`${key}-3`} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} />
    </>
  );
}

export default App;