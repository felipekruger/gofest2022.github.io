export interface Pokemon {
    name: string;
    caught: boolean;
    number: number;
    img?: string;
}

export interface IPokemonList {
    pokemonSet: Pokemon[];
    toggleCatch: (pokemonNumber: number) => void;
}

export interface IHome {
    pokemonSave: Pokemon[];
}