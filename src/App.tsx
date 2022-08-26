import './App.css'
import { allPokemon, allUnown } from './assets/constants';
import { Home } from './containers/Home'
import { IUnown, Pokemon } from './models/interfaces';


function App() {
  if(localStorage.getItem("pokemon")===null){
    localStorage.setItem("pokemon", JSON.stringify(allPokemon));
  };

  if(localStorage.getItem("unown")===null){
    localStorage.setItem("unown", JSON.stringify(allUnown));
  };

  const pokemonSave:Pokemon[] = JSON.parse(localStorage.getItem("pokemon") || '');
  const unownSave:IUnown[] = JSON.parse(localStorage.getItem("unown") || '');

  return (
    <div className="App no-scroll">
      <Home pokemonSave={pokemonSave} unownSave={unownSave} />
    </div>
  )
}

export default App
