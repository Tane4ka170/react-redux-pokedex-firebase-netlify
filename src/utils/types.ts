export interface AppTypeInitialState {
  isLoading: boolean;
  userInfo: undefined | { email: string };
  toasts: string[];
  currentPokemonTab: string;
}
