import { State, Getters, Mutations, MutationsInterface } from './types';

export const state = (): State => ({
  list: []
})

export const getters: Getters = {
  cartLength: state => state.list.length
}

export const mutations: MutationsInterface = {
  ADD_PRODUCT(state: any, productAdded: any) {
    let itemExists = state.list.indexOf(productAdded) != -1;

    if (itemExists) {
      const indexProduct = state.list.findIndex((item: any) => {
        return item.id == productAdded.id
      })

      if (indexProduct >= 0) {
        if (state.list[indexProduct].quantity) {
          state.list[indexProduct].quantity++
        }
      }

      return
    }
    productAdded.quantity = 1
    return state.list.push(productAdded)
  },
  DECREMENT_PRODUCT(state: any, productId) {
    const indexProduct = state.list.findIndex((item: any) => {
      return item.id == productId
    })
    console.log(indexProduct)
    return state.list[indexProduct].quantity -= 1
  },
  INCREMENT_PRODUCT(state: any, productId) {
    const indexProduct = state.list.findIndex((item: any) => {
      return item.id == productId
    })
    return state.list[indexProduct].quantity += 1
  },
  REMOVE_PRODUCT(state, productId) {
    const indexProduct = state.list.findIndex((item: any) => {
      return item.id == productId
    })
    return state.list.splice(indexProduct, 1)
  },
  CLEAN_CART(state) {
    return state.list = []
  },
}

export const actions = {
  addProduct({ commit }: any, item: object) {
    commit('ADD_PRODUCT', item)
  },
  decrementProduct({ commit }: any, id: object) {
    commit('DECREMENT_PRODUCT', id)
  },
  incrementProduct({ commit }: any, id: object) {
    commit('INCREMENT_PRODUCT', id)
  },
  removeProduct({ commit }: any, id: object) {
    commit('REMOVE_PRODUCT', id)
  },
  cleanCart({ commit }: any) {
    commit('CLEAN_CART')
  }
}