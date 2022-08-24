export interface Pokemon {
    name: string;
    caught: boolean;
    number: number;
}

export interface IPokemonList {
    pokemonSet: Pokemon[];
    toggleCatch: (pokemonNumber: number) => void;
}