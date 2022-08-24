import { useState } from 'react'
import './App.css'
import { pheromosa_incursion } from './assets/constants'
import { PokemonList } from './containers/pokemonList'

function App() {

  return (
    <div className="App">
      <PokemonList pokemon={pheromosa_incursion} />
    </div>
  )
}

export default App
