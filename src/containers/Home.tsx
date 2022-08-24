
import { useCallback } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import {Tab, Tabs} from 'react-bootstrap';
import { buzzwole_incursion, nihilego_incursion, pheromosa_incursion, xurkitree_incursion } from '../assets/constants';
import { IHome, Pokemon } from '../models/interfaces';
import { PokemonList } from './PokemonList';

export const Home: React.FC<IHome> = ({pokemonSave}) => {
    const [pokemonState, setAllPokemon] = useState<Pokemon[]>(pokemonSave);

    const incursion10 = pokemonState.filter((pokemon) => pheromosa_incursion.includes(pokemon.number));
    const incursion12 = pokemonState.filter((pokemon) => buzzwole_incursion.includes(pokemon.number));
    const incursion14 = pokemonState.filter((pokemon) => xurkitree_incursion.includes(pokemon.number));
    const incursion16 = pokemonState.filter((pokemon) => nihilego_incursion.includes(pokemon.number));

    const toggleCatch = (pokemonNumber: number) => {
        const newState = [];
        for( const i in pokemonState) {
            if(pokemonState[i].number !== pokemonNumber)
                newState.push(pokemonState[i])
        }
        
        const pokemon = pokemonState.filter((pokemon) => pokemon.number === pokemonNumber)[0];
        pokemon.caught = !pokemon.caught;
        newState.push(pokemon)

        setAllPokemon(newState);
    }

    const sortList = useCallback(()=>{
        const newState = [];
        for( const i in pokemonState) {
            newState.push(pokemonState[i]);
        }
        newState.sort((a,b) => {
            if(a.number<b.number) return -1;
            if(a.number>b.number) return 1;
            return 0;
        });
        setAllPokemon(newState);
        localStorage.setItem("pokemon", JSON.stringify(newState));
    },[]);

    useEffect(()=>{
        sortList();
    }, [JSON.stringify(pokemonState)])

    return (
        <Tabs
            defaultActiveKey="profile"
            id="uncontrolled-tab-example"
            className="mb-3"
        >   
            <Tab eventKey="home" title="10" >
            <PokemonList pokemonSet={incursion10} toggleCatch={toggleCatch} />
            </Tab>
            <Tab eventKey="home2" title="12">
            <PokemonList pokemonSet={incursion12} toggleCatch={toggleCatch} />
            </Tab>
            <Tab eventKey="home3" title="14">
            <PokemonList pokemonSet={incursion14} toggleCatch={toggleCatch} />
            </Tab>
            <Tab eventKey="home4" title="16">
            <PokemonList pokemonSet={incursion16} toggleCatch={toggleCatch} />
            </Tab>
        </Tabs>
    );
}
