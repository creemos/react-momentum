import "./App.css";
import { Player } from "./components/Player/Player";
import { Weather } from "./components/Weather/Weather";
import { SliderButtons } from "./components/SliderButtons/SliderButtons";
import { Clock } from "./components/Clock/Clock";
import { Greeting } from "./components/Greeting/Greeting";
import { Quote } from "./components/Quote/Quote";
import axios from "axios";
import { useEffect } from "react";
import { Todo } from "./components/Todo/Todo";
import { useSelector } from 'react-redux';

function App() {
  useEffect(() => {
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

  let isAuth = useSelector((state) => state.auth.isAuth)

  return (
    <div className="App">
      <header className="header">
        <Player />
        { isAuth ? <Todo /> : null }        
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
