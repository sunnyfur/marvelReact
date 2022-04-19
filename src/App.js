import "./utilites/hero";

import "./App.css";

import GenerateJSON from "./utilites/hero";
import CardHero from "./components/CardHero/cardViewer";

const arrHero = GenerateJSON();

function App() {
  return (
    <main className="wrapper">
      <h1 className="h1">Герои Marvel</h1>
      <div className="gallery">
        {arrHero.map((heroElem) => {
          return <CardHero hero={heroElem}></CardHero>;
        })}
      </div>
    </main>
  );
}

export default App;
