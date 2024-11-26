import { useState,useEffect } from 'react'

import './App.css'
import Joke from '../../types';

function App() {
 const [joke, setJoke] = useState<Joke | null>(null);

 useEffect(() => {
  fetch("https://v2.jokeapi.dev/joke/Any?type=single")
    .then((response) => {
      if (!response.ok)
        throw new Error(
          `fetch error : ${response.status} : ${response.statusText}`
        );
      return response.json();
    })
    .then((data) => setJoke({ category: data.category,text: data.joke })) 
    .catch((err) => {
      console.error("HomePage::error: ", err);
    });
}, []);


  return (
    <>
   
   <>
      <div className="App">
        <header className="App-header">
          <p>{joke ? joke.category : 'Loading...'}</p>
          <p>{joke ? joke.text : 'Loading...'}</p>
        </header>
      </div>
    </>

    </>
  )
}

export default App
