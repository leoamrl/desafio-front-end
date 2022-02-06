import { State, Getters, Mutations, MutationsInterface } from './types';

export const state = (): State => ({
  list: []
})

export const getters: Getters = {
  cartLength: state => state.list.length
}

export const mutations: MutationsInterface = {
  ADD_PRODUCT(state, cartUpdated: any) {
    const itemExists = state.list.find((item: any) => {
      item.id === cartUpdated.id
    })
    if (itemExists) {
      return
    }
    cartUpdated.quantity = 1
    return state.list.push(cartUpdated)
  },
  QTY_PRODUCT(state: any, productId) {
    const indexProduct = state.list.findIndex((item: any) => {
      return item.id == productId
    })
    // console.log(state.list[indexProduct].quantity)
    return state.list[indexProduct].quantity += 1
  },
  REMOVE_PRODUCT(state, productId) {
  },
  CLEAN_CART(state) {
    return state.list = []
  },
}

export const actions = {
  addProduct({ commit }: any, item: object) {
    commit('ADD_PRODUCT', item)
  },
  qtyProduct({ commit }: any, id: object) {
    commit('QTY_PRODUCT', id)
  },
  removeProduct({ commit }: any, id: object) {
    commit('REMOVE_PRODUCT', id)
  },
  cleanCart({ commit }: any) {
    commit('CLEAN_CART')
  }
}