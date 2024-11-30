import  { useState } from 'react';
import RamDog from '../ComponentsRamdomDog/ramdomDog';
import './App.css';

function App() {
  const [key, setKey] = useState(0);

  const refreshDogs = () => {
    setKey(prevKey => prevKey + 1);
  };

  return (
    <>
      <button onClick={refreshDogs}>Refresh Dog Photos</button>
      <RamDog key={`${key}-1`} />
      <RamDog key={`${key}-2`} />
      <RamDog key={`${key}-3`} />
    </>
  );
}

export default App;