import { MutationTree } from 'vuex'

export interface State {
  list: Array<object>
}

export interface Getters {
  cartLength: (state: State) => number
}

export enum Mutations {
  addProduct = 'ADD_PRODUCT',
  decrementProduct = 'DECREMENT_PRODUCT',
  incrementProduct = 'INCREMENT_PRODUCT',
  removeProduct = 'REMOVE_PRODUCT',
  cleanCart = 'CLEAN_CART'
}

export type RootState = ReturnType<() => State>
export interface MutationsInterface extends MutationTree<RootState> {
  ADD_PRODUCT(s: State, p: Array<object>): void;
  DECREMENT_PRODUCT(s: State, p: number): void;
  INCREMENT_PRODUCT(s: State, p: number): void;
  REMOVE_PRODUCT(s: State, p: number): void;
  CLEAN_CART(s: State): void;
}