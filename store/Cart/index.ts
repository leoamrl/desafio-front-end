import { State, Getters, Mutations, MutationsInterface } from './types';

export const state = (): State => ({
  cart: []
})

export const getters: Getters = {
  cartLength: state => state.cart.length
}

export const mutations: MutationsInterface = {
  [Mutations.ADD_PRODUCT](state, cartUpdated) {
    state.cart.push(cartUpdated)
  },
  [Mutations.QTY_PRODUCT](state, productId) {

  },
  [Mutations.REMOVE_PRODUCT](state, productId) {

  },
  [Mutations.CLEAN_CART](state) {
    state.cart = []
  },
}