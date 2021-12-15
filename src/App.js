import "./App.css";
import { Player } from "./components/Player/Player";
import { Weather } from "./components/Weather/Weather";
import { SliderButtons } from "./components/SliderButtons/SliderButtons";
import { Clock } from "./components/Clock/Clock";
import { Greeting } from "./components/Greeting/Greeting";
import { Quote } from "./components/Quote/Quote";
import axios from "axios";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    //document.body.style = `background: url("https://buyoncdn.ru/preset/112100256/pages_original/63/ef/45/63ef45a14a8c2f04ec3c98a2b5b3acc40afd58d9.jpg") center/cover, rgba(0, 0, 0, 0.5);`
    setBg();
  }, []);

  const setBg = () => {
    axios
      .get(
        "https://api.unsplash.com/photos/random?orientation=landscape&query=nature&client_id=aJCc9fzFH_gUnZ4nrG--nVY_D88ajHeqJyMAgd9rxb0"
      )
      .then((response) => {
        const img = new Image();
        img.src = `${response.data.urls.regular}`;
        img.onload = () => {
          document.body.style = `background: url(${img.src}) center/cover, rgba(0, 0, 0, 0.5);`;
        };
      });
  };

  return (
    <div className="App">
      <header className="header">
        <Player />
        <Weather />
      </header>
      <main className="main">
        <SliderButtons setBg={setBg} />
        <Clock />
        <Greeting />
      </main>
      <footer className="footer">
        <Quote />
      </footer>
    </div>
  );
}

export default App;
