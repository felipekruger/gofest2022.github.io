export interface PokemonItem {
    name: string;
    caught: boolean;
}

export interface IPokemonList {
    pokemon: PokemonItem[];
}