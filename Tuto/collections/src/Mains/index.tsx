import sound from "./assets/sounds/Infecticide-11-Pizza-Spinoza.mp3";
import "./Main.css"


const Main = () => {
    return (
      <main>
        <p>My HomePage</p>
        <p>
          Because we love JS, you can also click on the header to stop / start the
          music ; )
        </p>
        <audio id="audioPlayer" controls autoPlay>
          <source src={sound} type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
      </main>
    );
  };

  export default Main;