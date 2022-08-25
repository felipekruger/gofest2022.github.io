import './App.css'
import { allPokemon } from './assets/constants';
import { Home } from './containers/Home'
import { Pokemon } from './models/interfaces';


function App() {
  if(localStorage.getItem("pokemon")===null){
    localStorage.setItem("pokemon", JSON.stringify(allPokemon));
  };

  const pokemonSave:Pokemon[] = JSON.parse(localStorage.getItem("pokemon") || '');

  return (
    <div className="App no-scroll">
      <Home pokemonSave={pokemonSave} />
    </div>
  )
}

export default App
