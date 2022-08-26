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
    unownSave: IUnown[];
}

export interface IUnown {
    letter: string;
    caught: boolean;
}

export interface IUnownList{
    unownSet: IUnown[];
    toggleCatchUnown: (letter: string) => void;
}