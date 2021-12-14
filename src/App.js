import "./App.css";
import { Player } from "./components/Player/Player";
import { Weather } from "./components/Weather/Weather";
import { SliderButtons } from './components/SliderButtons/SliderButtons';
import { Clock } from "./components/Clock/Clock";
import { Greeting } from "./components/Greeting/Greeting";
import { Quote } from "./components/Quote/Quote";

function App() {
  return (
    <div className="App">
      <header className="header">
        <Player />
        <Weather />
      </header>
      <main className="main">
        <SliderButtons />
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
