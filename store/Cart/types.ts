import { MutationTree } from 'vuex'

export interface State {
  cart: Array<object>
}

export interface Getters {
  cartLength: (state: State) => number
}

export enum Mutations {
  ADD_PRODUCT = 'ADD_PRODUCT',
  QTY_PRODUCT = 'QTY_PRODUCT',
  REMOVE_PRODUCT = 'REMOVE_PRODUCT',
  CLEAN_CART = 'CLEAN_CART'
}

export type RootState = ReturnType<() => State>
export interface MutationsInterface extends MutationTree<RootState> {
  [Mutations.ADD_PRODUCT](s: State, p: Array<object>): void;
  [Mutations.QTY_PRODUCT](s: State, p: number): void;
  [Mutations.REMOVE_PRODUCT](s: State, p: number): void;
  [Mutations.CLEAN_CART](s: State): void;
}