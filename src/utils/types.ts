export interface AppTypeInitialState {
  isLoading: boolean;
  userInfo: undefined | { email: string };
  toasts: string[];
  currentPokemonTab: string;
}

export interface PokemonInitialStateType {
  allPokemon: undefined | genericPokemonType[];
  randomPokemons: generatedPokemonType[] | undefined;
  compareQueue: generatedPokemonType[];
  userPokemons: userPokemonsType[];
  currentPokemon: undefined | currentPokemonType;
}
